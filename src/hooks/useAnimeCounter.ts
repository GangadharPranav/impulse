"use client";

import { useEffect, useRef } from "react";

interface AnimeCounterOptions {
  /** The final number to count up to */
  end: number;
  /** Starting value */
  start?: number;
  /** Duration of count-up animation (ms) */
  duration?: number;
  /** Easing */
  ease?: string;
  /** Format the number into a string (e.g. add "+" suffix, "₹" prefix) */
  format?: (value: number) => string;
}

/**
 * useAnimeCounter — Animates a numeric value from `start` to `end` using anime.js
 * when the element scrolls into view.
 *
 * Returns a ref to attach to the DOM element that will display the number.
 */
export function useAnimeCounter<T extends HTMLElement = HTMLSpanElement>(
  options: AnimeCounterOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { end, start = 0, duration = 1800, ease = "outExpo", format } = options;
    let observer: IntersectionObserver | null = null;
    let triggered = false;

    const runCounter = async () => {
      const { animate } = await import("animejs");
      const obj = { value: start };

      animate(obj, {
        value: end,
        duration,
        ease,
        onUpdate: () => {
          const v = Math.round(obj.value);
          el.textContent = format ? format(v) : String(v);
        },
        onComplete: () => {
          // ensure final value is exact
          el.textContent = format ? format(end) : String(end);
        },
      });
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            runCounter();
            observer?.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer?.disconnect();
  }, []);

  return ref;
}
