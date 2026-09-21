---
name: impulse-brand
description: Strict design system, brand guidelines, color tokens, typography scales, motion vocabulary, and negative constraints for IMPULSE (Case Study & Group Discussion Club, BVRIT Narsapur).
---

# IMPULSE Brand Guidelines & Design Tokens

Derived directly from the official IMPULSE logo (lightbulb whose filament is a puzzle piece within dark concentric rings).

## 1. Color Palette (Strict CSS Variables)

```css
:root {
  /* Core — sampled from the bulb gradient, crown to base */
  --impulse-cyan:      #22B3B8;   /* bulb crown, primary accent, emissive core */
  --impulse-teal:      #1E9EA9;   /* mid gradient */
  --impulse-deep:      #08747E;   /* lower gradient */
  --impulse-abyss:     #033744;   /* outer ring, bulb base — PRIMARY DARK CANVAS */

  /* Neutrals */
  --impulse-ink:       #0A0A0A;   /* wordmark black */
  --impulse-paper:     #FFFFFF;   /* clean high-contrast text */
  --impulse-fog:       #E8EEF0;   /* secondary body / muted text */

  /* Derived */
  --impulse-glow:      #3FE3E8;   /* cyan pushed brighter — emissive/hover only */
  --impulse-gradient:  linear-gradient(160deg, #22B3B8 0%, #08747E 55%, #033744 100%);
}
```

### Canvas & Color Philosophy
* **The site is dark**: `--impulse-abyss` (`#033744`) is the base canvas.
* **Cyan is the only accent**: `--impulse-cyan` (`#22B3B8`) for active states, keylines, highlights, and emissive materials.
* **The logo is a light source on a dark ring**: The site must feel like an illuminated luminary in deep contrast, never a generic white or gray template.

## 2. Typography Hierarchy

* **Display / Headline**: Tight geometric sans — Archivo, Satoshi, or Neue Haas Grotesk Display.
  * Headline scale: `clamp(2.8rem, 7vw, 7rem)`
  * Weight: `700`
  * Letter-spacing: `-0.03em`
  * Line-height: `0.95`
  * Rationale: The IMPULSE wordmark is tight, bold, and authoritative; headlines must match its decisive weight.
* **Body & UI**: Inter or General Sans.
  * Weights: `400` (body) / `500` (medium/interactive)
  * Line-height: `1.6`
* **Eyebrow / Category Taglines**:
  * Mimic the logo sub-caption (`CASE STUDY & GROUP DISCUSSION`)
  * Transform: `uppercase`
  * Size: `11px - 12px`
  * Letter-spacing: `0.28em`
  * Color: `--impulse-cyan` (`#22B3B8`)

## 3. Motion Vocabulary

* **Easings**:
  * Entrances: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)
  * Section & State Transitions: `cubic-bezier(0.83, 0, 0.17, 1)`
* **Durations**:
  * Micro-interactions: `400ms`
  * Section reveals: `800ms`
  * Hero transitions: `1200ms`
* **Reveal Pattern**:
  * Text masks up from an `overflow: hidden` clipped container line-by-line / word-by-word with `40ms` stagger.
  * **Never** use generic `fade-in-from-below-20px`.
* **Cursor**:
  * Subtle cyan outline ring (`--impulse-cyan`) with smooth lerp tracking that expands and inverts over interactive elements.

## 4. Logo Clear-Space & Representation

* The central visual metaphor: **A case is a puzzle. You break it apart. You reassemble it into a decision.**
* The lightbulb filament is a solitary puzzle piece.
* Maintain minimum clear space equal to 50% of the bulb width around the badge.
* Never warp, skew, recolor with alien hues, or detach the puzzle filament from its semantic identity.

## 5. Negative Constraints ("Never Do This" List)

1. **NO purple, NO orange, NO generic gradient text on gradient backgrounds.**
2. **NO glassmorphism cards with 12 stacked blurs.**
3. **NO auto-playing sound. NO scroll-hijacking that breaks the browser's native scrollbar.**
4. **NO stock photos of handshakes, lightbulbs, or people pointing at whiteboards.**
5. **NO 3D objects that just spin aimlessly forever with no narrative tie to the content.**
