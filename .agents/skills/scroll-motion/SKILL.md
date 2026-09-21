---
name: scroll-motion
description: Production GSAP ScrollTrigger and Lenis smooth scroll choreography patterns, text masking, scrubbed 3D timelines, and parallax controls for high-end web experiences.
---

# Scroll Motion Architecture (GSAP ScrollTrigger + Lenis)

This skill governs all motion design, scroll orchestration, and timeline choreography for IMPULSE.

## Core Rules
1. **Never hijack native scroll**: Native scrollbar behavior must remain intact and accessible. Do not override keyboard arrow scrolling or page keys.
2. **Lenis Integration**: Use `@studio-freight/lenis` or `lenis` for normalized, jitter-free inertial scrolling.
   ```javascript
   import Lenis from 'lenis';
   import gsap from 'gsap';
   import ScrollTrigger from 'gsap/ScrollTrigger';

   gsap.registerPlugin(ScrollTrigger);

   const lenis = new Lenis({
     duration: 1.2,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
     smoothWheel: true,
   });

   lenis.on('scroll', ScrollTrigger.update);
   gsap.ticker.add((time) => lenis.raf(time * 1000));
   gsap.ticker.lagSmoothing(0);
   ```

## 3 Named Motion Patterns

### 1. Clipped Text Mask Reveal (`reveal-mask`)
* Text words or lines are wrapped in `<span class="inline-block overflow-hidden"><span class="reveal-inner inline-block">`.
* Animation: `gsap.fromTo(element, { yPercent: 110, rotateZ: 2 }, { yPercent: 0, rotateZ: 0, duration: 0.8, ease: "power4.out", stagger: 0.04 })`.
* Never use `opacity 0 -> 1 with translateY(20px)`.

### 2. Scrubbed 3D Narrative Timeline (`scrub-narrative`)
* One continuous master GSAP timeline pinned across section scroll steps:
  * Hero (0%–15%): Intact bulb with internal cyan puzzle piece filament.
  * Section 02 About (15%–40%): Bulb dissolves into translucent wireframe outline; puzzle piece fractures into 6 discrete shards.
  * Section 03 What We Do (40%–70%): Shards drift apart into distinct orbit positions corresponding to strategic analysis verticals.
  * Section 08 CTA (70%–100%): Shards accelerate inward, magnetic snap back into one solid piece with a momentary cyan emissive bloom flare.
* `scrub: 1` ensures smooth, momentum-damped interpolation without lagging behind the user's thumb/wheel.

### 3. Asymmetric Split Scrub & Parallax (`asymmetric-scrub`)
* Left and right split panels scrub at opposing or offset rates (`y: -80px` vs `y: -180px`) inspired by E-Cell and editorial layouts.
* Section titles pin briefly (`pinSpacing: true` or sticky CSS) while numbered insight cards glide past.
