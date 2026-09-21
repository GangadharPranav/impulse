"use client";

import { useEffect } from "react";

/**
 * AnimeScrollOrchestrator
 * 
 * A single render-less component that wires anime.js v4 scroll-triggered
 * animations to every section on the page. Uses the built-in onScroll API
 * (no GSAP dependency needed for these).
 *
 * Animations applied:
 * - [data-anime="reveal"]         → fade + translateY entrance
 * - [data-anime="reveal-left"]    → fade + translateX from left
 * - [data-anime="reveal-right"]   → fade + translateX from right
 * - [data-anime="stagger-grid"]   → children stagger in a grid pattern from center
 * - [data-anime="line-draw"]      → SVG path draw-on effect
 * - [data-anime="scale-in"]       → scale(0.85→1) + fade
 * - [data-anime="counter"]        → numeric count-up (reads data-target attr)
 */
export default function AnimeScrollOrchestrator() {
  useEffect(() => {
    const run = async () => {
      const { animate, stagger, onScroll, createDrawable } = await import("animejs");

      // ── 1. Generic fade + rise reveal ──────────────────────────────────────
      document.querySelectorAll('[data-anime="reveal"]').forEach((el) => {
        animate(el, {
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 900,
          ease: "outExpo",
          autoplay: onScroll({ target: el as HTMLElement, enter: "bottom-=80 top" }),
        });
      });

      // ── 2. Reveal from left ─────────────────────────────────────────────────
      document.querySelectorAll('[data-anime="reveal-left"]').forEach((el) => {
        animate(el, {
          opacity: [0, 1],
          translateX: [-60, 0],
          duration: 900,
          ease: "outExpo",
          autoplay: onScroll({ target: el as HTMLElement, enter: "bottom-=80 top" }),
        });
      });

      // ── 3. Reveal from right ────────────────────────────────────────────────
      document.querySelectorAll('[data-anime="reveal-right"]').forEach((el) => {
        animate(el, {
          opacity: [0, 1],
          translateX: [60, 0],
          duration: 900,
          ease: "outExpo",
          autoplay: onScroll({ target: el as HTMLElement, enter: "bottom-=80 top" }),
        });
      });

      // ── 4. Scale-in ─────────────────────────────────────────────────────────
      document.querySelectorAll('[data-anime="scale-in"]').forEach((el) => {
        animate(el, {
          opacity: [0, 1],
          scale: [0.88, 1],
          duration: 900,
          ease: "outBack(1.15)",
          autoplay: onScroll({ target: el as HTMLElement, enter: "bottom-=60 top" }),
        });
      });

      // ── 5. Stagger grid (animates immediate children) ───────────────────────
      document.querySelectorAll('[data-anime="stagger-grid"]').forEach((container) => {
        const children = Array.from(container.children);
        if (!children.length) return;

        // Pre-hide children
        children.forEach((c) => {
          (c as HTMLElement).style.opacity = "0";
          (c as HTMLElement).style.transform = "translateY(40px)";
        });

        animate(children, {
          opacity: [0, 1],
          translateY: [40, 0],
          delay: stagger(70, { ease: "outQuad" }),
          duration: 800,
          ease: "outExpo",
          autoplay: onScroll({ target: container as HTMLElement, enter: "bottom-=80 top" }),
        });
      });

      // ── 6. Animated counters ─────────────────────────────────────────────────
      document.querySelectorAll('[data-anime="counter"]').forEach((el) => {
        const target = parseFloat((el as HTMLElement).dataset.target ?? "0");
        const suffix = (el as HTMLElement).dataset.suffix ?? "";
        const prefix = (el as HTMLElement).dataset.prefix ?? "";
        const decimals = Number((el as HTMLElement).dataset.decimals ?? "0");
        let triggered = false;

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !triggered) {
              triggered = true;
              const obj = { value: 0 };
              animate(obj, {
                value: target,
                duration: 2000,
                ease: "outExpo",
                onUpdate: () => {
                  const v = decimals > 0 ? obj.value.toFixed(decimals) : Math.round(obj.value);
                  el.textContent = `${prefix}${v}${suffix}`;
                },
                onComplete: () => {
                  const v = decimals > 0 ? target.toFixed(decimals) : target;
                  el.textContent = `${prefix}${v}${suffix}`;
                },
              });
              observer.disconnect();
            }
          });
        }, { threshold: 0.4 });

        observer.observe(el);
      });

      // ── 7. Section headings: word-by-word stagger ───────────────────────────
      document.querySelectorAll('[data-anime="section-heading"]').forEach((el) => {
        const text = el.textContent ?? "";
        const words = text.trim().split(/\s+/);
        el.innerHTML = words
          .map((w) => `<span class="inline-block" style="opacity:0;transform:translateY(30px)">${w}</span>`)
          .join(" ");

        const spans = el.querySelectorAll("span");
        animate(spans, {
          opacity: [0, 1],
          translateY: [30, 0],
          delay: stagger(45),
          duration: 700,
          ease: "outExpo",
          autoplay: onScroll({ target: el as HTMLElement, enter: "bottom-=80 top" }),
        });
      });

      // ── 8. Cyan emissive line/border draw effect on cards ───────────────────
      document.querySelectorAll('[data-anime="border-glow"]').forEach((el) => {
        animate(el, {
          boxShadow: [
            "0 0 0px rgba(34,179,184,0)",
            "0 0 28px rgba(34,179,184,0.45)",
          ],
          duration: 1200,
          ease: "outExpo",
          autoplay: onScroll({ target: el as HTMLElement, enter: "bottom-=60 top" }),
        });
      });

      // ── 9. Navbar links stagger on page load ────────────────────────────────
      const navLinks = document.querySelectorAll("[data-nav-link]");
      if (navLinks.length) {
        animate(navLinks, {
          opacity: [0, 1],
          translateY: [-12, 0],
          delay: stagger(60, { start: 400 }),
          duration: 600,
          ease: "outCubic",
        });
      }

      // ── 10. Marquee/ticker ribbon — subtle pulse on load ───────────────────
      const ribbon = document.querySelector("[data-anime='ribbon']");
      if (ribbon) {
        animate(ribbon, {
          opacity: [0, 1],
          translateY: [-8, 0],
          duration: 700,
          ease: "outCubic",
          delay: 600,
        });
      }
    };

    const t = setTimeout(run, 200);
    return () => clearTimeout(t);
  }, []);

  return null;
}
