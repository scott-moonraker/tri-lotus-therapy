# Design

> Seed DESIGN.md for the Tri Lotus homepage rebuild. Captures the intended "calm & grounding" visual system. Re-run `$impeccable document` after the code lands to capture the real tokens.

## Visual Theme

Calm, grounded, and warm. A daylight-soft, light theme that feels like a sunlit therapy room: warm off-white paper, sage and clay accents, deep forest ink. Spacious and unhurried, with soft edges and gentle, low-stimulation motion. Editorial restraint over decoration. The opposite of clinical, corporate, or salesy.

**Theme decision (scene):** A burnt-out adult researching therapists at night on their phone, and a parent doing the same in a bright kitchen at noon. The site must feel reassuring in both, never harsh. → **Light theme**, warm and soft, high legibility, no glare-white.

**Color strategy:** Committed-warm. Tinted warm neutrals carry the surface; sage green is the steady brand signal; clay/terracotta is a single warm accent used sparingly for CTAs and emphasis. Deep forest as ink. Not Restrained (the warmth is the identity), not Drenched.

## Color Palette

All OKLCH. Neutrals tinted toward warm sage/clay; never pure `#000`/`#fff`.

| Role | OKLCH | Notes |
|---|---|---|
| `--bg` Paper | `oklch(0.978 0.010 85)` | Warm oat off-white, primary background |
| `--bg-sunk` | `oklch(0.955 0.014 80)` | Slightly deeper warm panel / alternating sections |
| `--surface` Card | `oklch(0.992 0.006 85)` | Raised surfaces, softly warm |
| `--ink` | `oklch(0.27 0.030 150)` | Deep forest, primary text (not black) |
| `--ink-soft` | `oklch(0.45 0.022 150)` | Secondary text, captions |
| `--sage` | `oklch(0.62 0.055 150)` | Brand green: borders, quiet accents, icons |
| `--sage-deep` | `oklch(0.42 0.060 152)` | Headings accent, hover states |
| `--clay` Accent | `oklch(0.64 0.115 45)` | Terracotta: primary CTA, key emphasis (≤10% of surface) |
| `--clay-deep` | `oklch(0.52 0.110 42)` | CTA hover / pressed |
| `--line` | `oklch(0.90 0.012 90)` | Hairline borders, full borders only (never side-stripes) |

Accents are earthy and muted, never neon. Clay is the only hot color and is rationed.

## Typography

Humanist serif headings + clean humanist sans body. Hierarchy via scale + weight, ratio ≥1.25.

- **Headings:** a warm humanist serif — `Fraunces` (preferred) or `Source Serif 4`. Optical, soft, editorial-warm. Used for hero + section titles.
- **Body / UI:** a clean humanist sans — `Inter` or `Mona Sans`. Comfortable, legible, unfussy.
- **Body size:** 18px base, line-height ~1.65, measure capped 65–72ch.
- **Scale (approx):** hero clamp(2.75rem→4.5rem) · h2 clamp(2rem→2.75rem) · h3 1.5rem · body 1.125rem · small 0.95rem.
- Tone: generous letter-spacing on small caps labels; relaxed leading everywhere. No all-caps shouting beyond small eyebrow labels.

## Layout & Spacing

- Generous vertical rhythm: section padding clamp(4rem→7rem). Vary it for breathing room; avoid uniform padding.
- Content max-width ~1100–1200px; text columns narrower. Not everything in a container.
- Soft radii: 16–24px on larger surfaces, fully rounded pill buttons.
- Asymmetry welcome (offset image/text, editorial blocks). Avoid identical card grids; if therapists are carded, give the grid warmth and variation.

## Elevation & Detail

- Soft, low, warm shadows: `0 1px 2px oklch(0.27 0.03 150 / 0.05), 0 12px 30px -12px oklch(0.27 0.03 150 / 0.12)`. No hard drop shadows.
- Full hairline borders in `--line` only. **No side-stripe accent borders. No gradient text. No decorative glassmorphism.**
- Optional: a single subtle organic motif (a quiet lotus/leaf line mark) used once as identity, not repeated as wallpaper.

## Motion

- Calm and minimal. Fade/translate-in on scroll, 400–600ms, ease-out-quint. No bounce, no parallax noise.
- Hover: gentle color + slight lift, ~150ms.
- Full `prefers-reduced-motion: reduce` support — disable all scroll/entrance motion, keep instant states.

## Components (homepage)

- **Header/nav:** sticky, calm, with a dropdown for Resources and a Services mega-or-grouped menu; prominent but soft "Book a free call" pill (clay). Mobile: full-screen calm drawer.
- **Hero:** warm headline ("feel more at ease"), short human subhead, two CTAs (Book free intro call / Meet the team), real warm imagery or soft illustrated room.
- **Buttons:** primary = clay pill; secondary = sage outline/ghost. Large tap targets.
- **Therapist cards:** photo, name, who they help, link to profile. Warm, varied, not sterile.
- **Service blocks:** grouped specialties (anxiety, couples, trauma, teens, ADHD, etc.) as calm scannable list/grid, each linking out.
- **Footer:** contact, hours, address, socials, land acknowledgment, booking.
