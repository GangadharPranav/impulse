"use client";

import { useEffect } from "react";

/**
 * HeroAnimeEntrance — fires once on mount using anime.js createTimeline()
 * Orchestrates: eyebrow pill → headline words → body → CTAs → stat strip
 *
 * Uses anime.js v4 Timeline API with per-property ease, stagger, and delay offsets.
 */
export default function HeroAnimeEntrance() {
  useEffect(() => {
    const run = async () => {
      const { animate, createTimeline, stagger } = await import("animejs");

      // Reset — keep elements invisible before timeline fires
      const targets = [
        "[data-hero='eyebrow']",
        "[data-hero='word']",
        "[data-hero='body']",
        "[data-hero='cta']",
        "[data-hero='stat']",
        "[data-hero='emblem']",
      ];
      targets.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          (el as HTMLElement).style.opacity = "0";
          (el as HTMLElement).style.transform = "translateY(32px)";
        });
      });

      const tl = createTimeline({ defaults: { ease: "outExpo", duration: 900 } });

      // 01: Eyebrow pill fades + rises
      tl.add("[data-hero='eyebrow']", {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
        ease: "outCubic",
      });

      // 02: Each headline word rises with stagger
      tl.add("[data-hero='word']", {
        opacity: [0, 1],
        translateY: [48, 0],
        delay: stagger(55, { ease: "outQuad" }),
        duration: 800,
        ease: "outExpo",
      }, "-=400");

      // 03: Body paragraph
      tl.add("[data-hero='body']", {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 700,
        ease: "outCubic",
      }, "-=500");

      // 04: CTA buttons staggered
      tl.add("[data-hero='cta']", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(80),
        duration: 600,
        ease: "outBack(1.2)",
      }, "-=400");

      // 05: Stat strip items
      tl.add("[data-hero='stat']", {
        opacity: [0, 1],
        translateY: [16, 0],
        delay: stagger(60),
        duration: 500,
        ease: "outCubic",
      }, "-=300");

      // 06: Emblem / right column — larger travel distance, slight scale
      tl.add("[data-hero='emblem']", {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.92, 1],
        duration: 1100,
        ease: "outExpo",
      }, "-=900");
    };

    // Small delay to ensure DOM is painted
    const t = setTimeout(run, 120);
    return () => clearTimeout(t);
  }, []);

  return null; // render-less component
}
