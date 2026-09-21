---
name: kage
description: "Art-direct and build single-page, cinematic editorial WebGL experiences inspired by Meng To's Kage and Seijaku: layered procedural 3D environments, organic screen-blended candle flame gutters and moon swells, film grain, vignette, progressive blur, rolling dual-layer typography, chapter chips, and multi-layout editorial compositions. Use when asked for Kage style, Meng To design skills, cinematic 3D web experiences, editorial Japanese minimalism, dark mode atmospheric websites, or Awwwards-quality web art direction."
---

# Kage: Cinematic Editorial Web Experience Skill

Inspired by Meng To's **Kage** (`https://mengto.github.io/kage/`, `https://github.com/MengTo/kage`) and the `MengTo/skills` library.

**Role**: Cinematic Web Art Director & Technical Creative Developer

Kage treats a website like an editorial art book moving through a live atmospheric 3D world, rather than a conventional SaaS landing page. It pairs procedural WebGL architecture with fine typography, paper hairlines, organic light sources, and layered foreground planes.

---

## 1. The Visual & Environmental Stack

In Kage, the DOM is layered into distinct z-index strata:

| Layer | Z-Index | Purpose | Properties |
|---|---|---|---|
| `#gl` | `0` (fixed) | Continuous WebGL/Three.js camera canvas | Background darkness, procedural fog, rain, embers |
| Section Scrims | `1` (absolute) | Radial gradients protecting legibility | `radial-gradient(110% 62% at 30% 50%, rgba(4,7,10,.88), ...)` |
| Content (`.page`) | `10` (relative) | Headings, copy, cards, chips, stats | Fine typography, tabular numerals |
| Rail / Nav | `45-50` (fixed) | Navigation bar & chapter progress rail | Progressive blur backdrop, fine border rule |
| `#fg-sky` | `52` (fixed) | Bottom-anchored near-plane cutouts | Alpha WebP cutouts rising on chapter activation |
| `#vignette` | `55` (fixed) | Soft lens falloff | `radial-gradient(125% 95% at 50% 42%, transparent 40%, rgba(2,4,6,.55) 100%)` |
| `#grain` | `60` (fixed) | Micro film texture | `opacity: .055; mix-blend-mode: overlay; pointer-events: none` |
| `#cursor` | `80` (fixed) | Fluid pointer dot & ring | Scales on `[data-cursor]` hover targets |

---

## 2. Organic Lighting: The Flame Gutter Technique

A flat still or card becomes a living scene when you screen a light source over it and give it organic micro-motion.

### Two Beating Tracks
Never use a single repeating CSS animation for light—the eye detects loops within 3 seconds. Use **two asynchronous tracks** whose durations do not divide into each other:
1. **The Wrapper Swells** (slow, shallow breathing: `transform: scale(...)`)
2. **The Inner Gradient Pulses or Gutters** (asymmetrical flicker)

### Keyframe Specification
```css
.card-fr { isolation: isolate; }

.glow {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  left: var(--gx);
  top: var(--gy);
  width: calc(var(--gr) * 2);
  aspect-ratio: 1;
  translate: -50% -50%;
  mix-blend-mode: screen;
  animation: glow-swell var(--gt2, 9.7s) cubic-bezier(.65,0,.35,1) infinite alternate;
}

.glow::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(closest-side, var(--gc1), var(--gc2) 40%, transparent 72%);
  animation: glow-pulse var(--gt, 6.1s) cubic-bezier(.65,0,.35,1) infinite;
}

/* A candle flame does not breathe; it gutters irregularly */
@keyframes glow-flame {
  0%  { opacity: .74; }
  6%  { opacity: .97; }
  12% { opacity: .63; }
  19% { opacity: .90; }
  27% { opacity: .55; }
  34% { opacity: .94; }
  42% { opacity: .71; }
  51% { opacity: 1.0; }
  58% { opacity: .60; }
  66% { opacity: .88; }
  74% { opacity: .67; }
  83% { opacity: .96; }
  91% { opacity: .72; }
  100%{ opacity: .74; }
}

@keyframes glow-swell {
  from { transform: scale(.93); }
  to   { transform: scale(1.07); }
}

@keyframes glow-pulse {
  from { opacity: .78; }
  50%  { opacity: 1.0; }
  to   { opacity: .78; }
}
```

---

## 3. Editorial Typography & Micro-Interactions

### Mask-Line Reveals
Headlines reveal from underneath an overflow-hidden mask line:
```css
.mask-line { display: block; overflow: hidden; }
.mask-line > span {
  display: block;
  transform: translate3d(0, 110%, 0);
  transition: transform 1.05s cubic-bezier(.16, 1, .3, 1);
}
.rv-in .mask-line > span { transform: none; }
```

### Rolling Dual-Layer Navigation Links
Nav links show primary text that rolls up to reveal a second alternate label (e.g. Japanese kanji or sub-tag):
```css
.nav-link {
  position: relative;
  display: block;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
}
.nav-link span {
  display: block;
  height: 16px;
  line-height: 16px;
  transition: transform .55s cubic-bezier(.16,1,.3,1), color .3s;
}
.nav-link .alt {
  position: absolute;
  inset: 0;
  transform: translate3d(0, 100%, 0);
  letter-spacing: .3em;
}
.nav-link:hover span { transform: translate3d(0, -100%, 0); }
.nav-link:hover .alt { transform: none; }
```

### Chapter Chips & Lesson Rows
- Numbered index strip (`01`, `02`, `03`...) in tabular digits.
- 1px hairline line rule with animated hover expansion (`transform: scaleX(0)` to `scaleX(1)` with `transform-origin: left`).
- Left indent shift on hover (`padding-left: clamp(8px, 1.2vw, 18px)`).
- Circular hover arrow link (`.ar svg` moving `translate3d(2px, -2px, 0)`).

---

## 4. Layout Grammar (The B-Compositions)

Kage uses distinct editorial compositions across its sections:
1. **Hero Split**: Editorial column left, live camera portal right, chapter index chips beneath.
2. **Story Spread**: Title spans columns, reading column on the right, metrics styled as a ruled horizontal band.
3. **Gardens Mosaic**: 1 tall showcase card beside 2 stacked letterbox cards, each with live coordinate glows.
4. **Chapter Atlas**: Grid of numbered plates with syllabus time tags, expanding red/cyan base rules, and hover tints.
5. **Afterlight Closing**: Minimalist centered or vertical heading with pill CTA button filled with a sliding background sheet.
6. **Manifesto Footer**: High-contrast brand statement, 3-column ruled link list, and precision copyright colophon.

---

## 5. Performance & Reduced Motion Guardrails

- All atmospheric overlays (`#grain`, `#vignette`) must use `pointer-events: none` to never capture scroll or clicks.
- Wrap all keyframe loops in `@media (prefers-reduced-motion: reduce)`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .001ms !important; transition-duration: .001ms !important; }
  .glow, .glow::before { animation: none !important; }
  .mask-line > span { transform: none !important; }
}
```
- Restrict DPR to `Math.min(window.devicePixelRatio, 1.75)` on WebGL passes.
