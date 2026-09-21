"use client";

import { useEffect, useRef } from "react";

export default function CursorRing() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.dataset.interactive === "true")
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    let animId: number;
    const render = () => {
      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      const scale = isHovering ? "scale(1.9)" : "scale(1)";
      const bg = isHovering
        ? "rgba(34, 179, 184, 0.25)"
        : "rgba(34, 179, 184, 0)";
      const borderColor = isHovering ? "#3FE3E8" : "#22B3B8";

      cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) ${scale}`;
      cursor.style.backgroundColor = bg;
      cursor.style.borderColor = borderColor;

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -ml-4 -mt-4 h-8 w-8 rounded-full border border-impulse-cyan transition-transform duration-75 ease-out hidden md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-impulse-cyan hidden md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
