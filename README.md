# Tri Lotus Psychotherapy

A rebuild of the [trilotustherapy.com](https://www.trilotustherapy.com/) homepage
in **Astro** — a faithful refresh that keeps every image, all copy verbatim, the
full navigation menu, and the brand identity, while elevating the craft:
the original brand palette (deep teal `#0a6b6b` · clay `#b07b5b` · sage `#adbcb7`
· warm sand `#d4c6b7` · ink `#1a1a1a`), Fraunces + Inter, a stronger type
hierarchy and section rhythm, the original top announcement banner, hover-active
service and therapist cards, scroll reveals, a sticky header with a mobile
drawer, a working contact form (mailto), and optimized responsive imagery.

This is a single-page showcase: the full nav with every dropdown is preserved,
but links resolve to on-page section anchors (no separate pages are built).

## Commands

```bash
npm install     # install dependencies
npm run dev     # local dev server at http://localhost:4321
npm run build   # production build to ./dist
npm run preview # preview the production build
```

## Structure

```
src/
  layouts/Layout.astro        # <head>, fonts, scroll-reveal observer
  components/Header.astro      # announcement banner, nav + dropdowns, mobile drawer
  components/Footer.astro      # logo, socials, pride flag, land acknowledgment, CTA
  components/Icon.astro        # inline line-icon set
  components/Logo.astro        # tri-petal lotus SVG mark
  pages/index.astro            # the homepage (all sections + styles)
  data/site.js                 # all content: nav, copy, services, team, FAQ, hours
  lib/asset.js                 # base-aware public asset path helper
  styles/global.css            # design tokens + base styles
public/images/                 # original images pulled from the live site (optimized)
```

Design context for the rebuild lives in `PRODUCT.md` and `DESIGN.md`.

## Deploy (Moonraker sites)

Served at `sites.moonraker.ai/trilotustherapy.com/` from the `client-sites` R2
bucket via the `moonraker-r2-worker`. Build with the slug as the base path so
asset URLs resolve under the subpath, then ship `dist/` to R2 under the
`trilotustherapy.com/` key prefix:

```bash
npm run build -- --base=/trilotustherapy.com
# then ship ./dist to R2 (client-sites) under trilotustherapy.com/ via the
# agent /ingest pipeline or `wrangler r2 object put` on the account that owns
# the bucket.
```

## Notes

- Images are pulled from the original site and optimized (photos → JPEG, ~30 MB → ~4 MB).
- The contact form composes a `mailto:` to hello@trilotustherapy.com (no backend).
- Booking CTAs link to JaneApp; phone/email use `tel:` / `mailto:`.
