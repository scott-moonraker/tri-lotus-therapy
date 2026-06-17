#!/usr/bin/env bash
# Deploy this bespoke site to Moonraker sites (sites.moonraker.ai/<slug>/).
#
# Mirrors what moonraker-site-template's build-site.yml GitHub Action does:
#   1. astro build with base=/<slug>  (assets resolve under the subfolder)
#   2. PUT every dist/ file to the worker's /ingest endpoint (bearer auth)
#   3. PUT a _manifest.json sentinel
#   4. POST /admin/pointer to flip the KV routing pointer to this version
#   5. verify the live URL returns 200
#
# Usage:
#   R2_INGEST_SECRET=xxxxx npm run deploy
#   R2_INGEST_SECRET=xxxxx SLUG=trilotustherapy.com TARGET=preview bash scripts/deploy.sh
#
# The secret is the moonraker-r2-worker R2_INGEST_SECRET (same value the
# GitHub Action uses). It is read from the environment and never written to disk.
set -euo pipefail

SLUG="${SLUG:-trilotustherapy.com}"
TARGET="${TARGET:-preview}"          # preview -> served on sites.moonraker.ai/<slug>/
INGEST_URL="${R2_INGEST_URL:-https://sites.moonraker.ai}"
VERSION="${VERSION:-$(date +%s)}"    # monotonic; pointer always flips forward
: "${R2_INGEST_SECRET:?Set R2_INGEST_SECRET (the moonraker-r2-worker ingest bearer secret)}"

case "$TARGET" in preview|prod) ;; *) echo "bad TARGET: $TARGET (preview|prod)" >&2; exit 1 ;; esac
PREFIX="sites/${SLUG}/${TARGET}/v${VERSION}"

echo "== building (base=/${SLUG}) =="
rm -rf dist
npx astro build --base="/${SLUG}"

mime_for() {
  case "${1##*.}" in
    html) echo "text/html; charset=utf-8" ;;  css) echo "text/css; charset=utf-8" ;;
    js|mjs) echo "application/javascript; charset=utf-8" ;;
    json|map) echo "application/json; charset=utf-8" ;;  svg) echo "image/svg+xml" ;;
    xml) echo "application/xml; charset=utf-8" ;;  txt) echo "text/plain; charset=utf-8" ;;
    woff) echo "font/woff" ;;  woff2) echo "font/woff2" ;;
    png) echo "image/png" ;;  jpg|jpeg) echo "image/jpeg" ;;  webp) echo "image/webp" ;;
    avif) echo "image/avif" ;;  gif) echo "image/gif" ;;  ico) echo "image/x-icon" ;;
    pdf) echo "application/pdf" ;;
    *) file -b --mime-type "$1" 2>/dev/null || echo "application/octet-stream" ;;
  esac
}

echo "== uploading dist/ -> ${INGEST_URL}/ingest/${PREFIX}/ =="
COUNT=0
while IFS= read -r -d '' file; do
  rel="${file#dist/}"
  code=$(curl -sS --max-time 120 -o /dev/null -w '%{http_code}' \
    -X PUT "${INGEST_URL}/ingest/${PREFIX}/${rel}" \
    -H "Authorization: Bearer ${R2_INGEST_SECRET}" \
    -H "Content-Type: $(mime_for "$file")" \
    --data-binary @"$file")
  [ "$code" = "200" ] || { echo "FAIL ${rel} -> HTTP ${code}" >&2; exit 1; }
  COUNT=$((COUNT + 1))
done < <(find dist -type f -print0)
echo "   uploaded ${COUNT} files"

echo "== writing manifest =="
printf '{"slug":"%s","target":"%s","version":%s,"built_at":"%s"}' \
  "$SLUG" "$TARGET" "$VERSION" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  | curl -fsS --max-time 30 -X PUT "${INGEST_URL}/ingest/${PREFIX}/_manifest.json" \
      -H "Authorization: Bearer ${R2_INGEST_SECRET}" \
      -H "Content-Type: application/json" --data-binary @- >/dev/null

echo "== flipping KV pointer =="
printf '{"slug":"%s","target":"%s","version":%s}' "$SLUG" "$TARGET" "$VERSION" \
  | curl -fsS --max-time 30 -X POST "${INGEST_URL}/admin/pointer" \
      -H "Authorization: Bearer ${R2_INGEST_SECRET}" \
      -H "Content-Type: application/json" -d @-
echo

LIVE="https://sites.moonraker.ai/${SLUG}/"
echo "== verifying ${LIVE} =="
sleep 2
code=$(curl -s -o /dev/null -w '%{http_code}' -L "$LIVE")
echo "   HTTP ${code}"
[ "$code" = "200" ] && echo "✅ live: ${LIVE}" || echo "⚠️  not 200 yet — give it a moment, then recheck ${LIVE}"
