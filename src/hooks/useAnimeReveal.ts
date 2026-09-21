"use client";

import { useEffect, useRef } from "react";

type EaseString =
  | "linear"
  | "inQuad" | "outQuad" | "inOutQuad"
  | "inCubic" | "outCubic" | "inOutCubic"
  | "inQuart" | "outQuart" | "inOutQuart"
  | "inExpo" | "outExpo" | "inOutExpo"
  | "inElastic" | "outElastic"
  | "spring(1,80,10,0)"
  | (string & {});

interface AnimeRevealOptions {
  /** CSS selector or array of elements to animate */
  selector: string;
  /** Delay before the animation starts (ms) */
  delay?: number;
  /** Stagger amount between each element (ms) */
  stagger?: number;
  /** Duration of each element's animation (ms) */
  duration?: number;
  /** Easing function name */
  ease?: EaseString;
  /** IntersectionObserver threshold 0–1 */
  threshold?: number;
  /** translateY start offset (px) — positive = below, negative = above */
  translateY?: number;
  /** Whether to animate opacity too */
  opacity?: boolean;
}

/**
 * useAnimeReveal — Scroll-triggered entrance animation using anime.js v4.
 * Uses IntersectionObserver to trigger once the container scrolls into view.
 *
 * Usage:
 *   const containerRef = useAnimeReveal({ selector: ".reveal-item", stagger: 80 });
 *   return <section ref={containerRef}> ... <div className="reveal-item">...</div> ... </section>
 */
export function useAnimeReveal<T extends HTMLElement = HTMLDivElement>(
  options: AnimeRevealOptions
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animeInstance: { pause: () => void } | null = null;
    let observer: IntersectionObserver | null = null;

    const initAnimation = async () => {
      const { animate, stagger: staggerFn } = await import("animejs");

      const {
        selector,
        delay = 0,
        stagger: staggerMs = 60,
        duration = 800,
        ease = "outExpo",
        translateY = 40,
        opacity = true,
      } = options;

      const targets = container.querySelectorAll(selector);
      if (!targets.length) return;

      // Set initial hidden state
      targets.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translateY(${translateY}px)`;
        if (opacity) htmlEl.style.opacity = "0";
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animeInstance = animate(targets, {
                translateY: [translateY, 0],
                ...(opacity ? { opacity: [0, 1] } : {}),
                delay: staggerFn(staggerMs, { start: delay }),
                duration,
                ease,
              });
              observer?.disconnect();
            }
          });
        },
        { threshold: options.threshold ?? 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      observer.observe(container);
    };

    initAnimation();

    return () => {
      observer?.disconnect();
      animeInstance?.pause();
    };
  }, []);

  return containerRef;
}
