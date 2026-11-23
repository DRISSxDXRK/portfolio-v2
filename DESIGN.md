# Portfolio V2 — DESIGN.md

Design system for Driss Ouazzani Chahdi's Portfolio V2
(`DRISSxDXRK/portfolio-v2`). Winner: **Runway** (verified against
https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/runwayml/DESIGN.md).

Supersedes Combination A (`#F4F5F0`, `#121429`, `#505457`). Midnight Sky
`#121429` appears **nowhere** in V2. Stack: plain HTML/CSS/JS, no
frameworks, mobile first. Font: **Inter** only (Runway's `abcNormal`
substitute). No gradients in the interface, no shadows, no pill shapes.

## 1. Colour

| Token | Value | Role |
|---|---|---|
| Runway Black | `#000000` | Hero, work section, footer background |
| Deep Black | `#030303` | Trial band background |
| Dark Surface | `#1a1a1a` | Video card surface on dark |
| Pure White | `#ffffff` | Primary text on dark, contact band background, solid buttons |
| Near White | `#fefefe` | Alternate text on dark |
| Cool Cloud | `#e9ecf2` | Services light band background |
| Border Dark | `#27272a` | 1px borders on dark only |
| Charcoal | `#404040` | Body text on light bands |
| Cool Slate | `#767d88` | Large text / labels on dark ONLY (see §7) |
| Mid Slate | `#7d848e` | Metadata on dark ONLY (see §7) |
| Muted Gray | `#a7a7a7` | Small body text on dark |
| Cool Silver | `#c9ccd1` | Light borders |
| Light Silver | `#d0d4d4` | Light borders (cards on light bands) |
| Footer Gray | `#999999` | Footer text on black |

Rules:

- Dark sections: background `#000000` / `#030303`, text `#ffffff`,
  secondary `#a7a7a7`, borders `#27272a` 1px.
- Light bands: services `#e9ecf2`, contact `#ffffff`. Body on light is
  Charcoal `#404040`; headings on light are `#000000`.
- No gradients anywhere in the interface. No `box-shadow` anywhere
  (zero shadows). Depth comes from borders and colour blocks only.
- No other colours. No Midnight Sky `#121429`, no Combination A.

## 2. Type — Inter, weight 400–600 only, no 700+

| Level | Size / Weight / Line-height / Tracking | Use |
|---|---|---|
| Display / hero | 48px / 400 / 1.00 / −1.2px | Hero headline |
| Section heading | 40px / 400 / 1.00–1.10 / −1px | Section titles |
| Sub-heading | 36px / 400 / 1.00 / −0.9px | Large sub-heads |
| Card title | 24px / 400 / 1.00 | Work card titles, service names |
| Feature title | 20px / 400 / 1.00 | Step titles, list headings |
| Body / button | 16px / 400–600 / 1.30–1.50 / −0.16px | Body copy, buttons |
| Caption / label | 14px / 500–600 / 1.25–1.43 / +0.35px uppercase | Kickers, metadata, form labels |
| Small | 13px / 400 / 1.30 | Hints, footer links |
| Micro / tag | 11px / 450 / 1.30 uppercase | Tags only |

Mobile (<640px): hero 40px, section headings 32px, card titles stay
24px, body stays 16px. Never go below 13px for readable text.

## 3. Spacing — 8px base, 4/8px grid

Scale (px): `4, 6, 8, 12, 16, 20, 24, 28, 32, 48, 64, 78`.
Section vertical padding: 48–78px. Gaps between cards: 16–24px.
Page side padding: 16px mobile, 24px tablet, 32px desktop.
Max container: 1600px, centred. Hero is full-viewport, edge to edge.

## 4. Radii

- Buttons: 4px.
- Small elements (inputs, chips): 6px.
- Cards and images: 8px.
- Featured elements only: 16px.
- No pill shapes (no `border-radius: 999px`).

## 5. Borders

- Dark surfaces: 1px solid `#27272a`.
- Light surfaces: 1px solid `#d0d4d4` (cards) or `#c9ccd1` (inputs).
- Focus: 2px solid outline, `#ffffff` on dark, `#000000` on light,
  offset 2px. Focus must always be visible.

## 6. Components

- **Buttons.** Primary: Pure White background, `#000000` text, 16px/600,
  4px radius, padding 12px 24px. On light bands the primary button is
  `#000000` background, `#ffffff` text. Ghost: transparent, 1px border
  (`#ffffff` on dark, `#000000` on light), same padding. Hover: opacity
  0.85, no movement, no shadow.
- **Nav.** Black bar, wordmark 20px/600 white, links 14px/500 uppercase
  tracking +0.35px in `#a7a7a7`, hover white. Mobile: hamburger toggling
  a stacked menu.
- **Video cards.** Dark Surface `#1a1a1a`, 8px radius, poster image
  8px radius top, title 24px white, metadata 14px uppercase `#a7a7a7`.
  Hover: border `#404040`, image opacity 0.9. No lift, no shadow.
- **Service cards.** White background on Cool Cloud band, 1px
  `#d0d4d4` border, 8px radius, padding 32px, title 24px black, body
  16px Charcoal, price line 20px black ("Custom").
- **Forms.** Labels 14px/600 uppercase +0.35px. Inputs: white
  background, 1px `#c9ccd1`, 6px radius, 16px text, padding 12px 16px.
  On dark, inputs are `#1a1a1a` with `#27272a` border and white text.
  Error text 14px, `#ff6b6b` is NOT in the palette — errors use
  `#ffffff` on dark / `#000000` on light with `aria-invalid` and a
  plain-text message; never colour alone.
- **Video modal.** Full overlay `#000000` at 90% opacity, dialog
  `#1a1a1a`, 8px radius, 16:9 or 9:16 video sized to viewport,
  close button top right, Escape closes, focus returns to the card.
- **Footer.** Black, Footer Gray `#999999` 13px text, links white on
  hover, minimal.

## 7. Contrast — measured and fixed (review, 2026-11-23)

Measured with WCAG relative-luminance ratios (AA normal text needs
4.5:1, large text 3:1):

| Pair | Ratio | Verdict |
|---|---|---|
| `#ffffff` on `#000000` | 21.00 | Pass |
| `#a7a7a7` on `#000000` | 8.73 | Pass |
| `#999999` on `#000000` | 7.37 | Pass |
| `#7d848e` on `#000000` | 5.56 | Pass, but restricted (below) |
| `#767d88` on `#000000` | 5.06 | Pass, but restricted (below) |
| `#404040` on `#e9ecf2` | 8.76 | Pass |
| `#404040` on `#ffffff` | 10.37 | Pass |
| `#767d88` on `#ffffff` | 4.15 | **FAIL for body — never use** |
| `#767d88` on `#e9ecf2` | 3.51 | **FAIL for body — never use** |

Fixes applied (changes from the raw Runway token list):

1. **Cool Slate `#767d88`** (5.06 on black) technically passes 4.5:1,
   but the margin is thin, so it is used ONLY for large text (20px+)
   and uppercase labels/kickers on dark, never for small body copy.
   Small body copy on dark uses Muted Gray `#a7a7a7` (8.73).
2. **Mid Slate `#7d848e`** (5.56 on black) likewise restricted to
   metadata/labels on dark only, never body copy.
3. **Cool Slate is banned on light backgrounds.** It fails on both
   `#ffffff` (4.15) and `#e9ecf2` (3.51). Body and secondary text on
   light bands is always Charcoal `#404040`.
4. Footer Gray `#999999` on black (7.37) is fine for 13px footer text.

## 8. Responsive

- **<640px:** single column, stacked. Hero headline 40px, reduced
  hero copy, nav collapses to hamburger. Work grid 1 column.
- **640–768px:** 2-column work grid.
- **768–1024px:** standard layout, 3-column work grid, services stack
  to 1 column below 768px, 2 columns above.
- **1024–1280px:** full layout, 4-column work grid.
- **1280–1600px:** max cinema width, container capped at 1600px.

## 9. Motion

- The video itself is the only motion. No background animations, no
  animated gradients, no Spline, no scroll-jacking.
- Entrance/hover transitions: max 0.2s ease, opacity/border only.
  No 1s linear fades. No element moves on hover.
- `prefers-reduced-motion: reduce` disables all transitions and the
  hero video does not autoplay (paused on first frame).

## 10. Accessibility

- Skip link to `#main` as the first focusable element.
- Visible focus outline everywhere (§5).
- Video modal: `role="dialog"`, `aria-modal="true"`, labelled, Escape
  closes, focus returns to the invoking card.
- Logical tab order: nav → hero CTAs → work cards → services → trial
  → testimonial → contact form → footer.
- Alt text on every poster (`"<title> — <client>"`).
- Every form field has a visible `<label>`.
- Status messages use `role="status"` / `aria-live="polite"`.

## 11. Review checklist (applied before build)

- [x] All spacing values are on the 4/8px scale (4, 6, 8, 12, 16, 20,
      24, 28, 32, 48, 64, 78).
- [x] All type levels match §2; no weight above 600.
- [x] Every text/background pair passes 4.5:1 (§7); the two failing
      Cool Slate-on-light pairs are banned, not used.
- [x] No gradients, no shadows, no pill radii, no Midnight Sky.
- [x] Radii only 4/6/8/16px as specified in §4.
