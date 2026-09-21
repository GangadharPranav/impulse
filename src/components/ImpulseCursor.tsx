"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ImpulseCursor — Subtle cyan outline ring with smooth lerp tracking
 * that expands and glows over interactive elements (buttons, links, cards),
 * per the IMPULSE brand motion specification.
 */
export default function ImpulseCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering over clickable / interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[data-cursor]") ||
        target?.closest("[role='button']")
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const loop = () => {
      // Lerp ring towards mouse position
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRingRef.current) {
        const scale = isHovering ? 1.9 : 1.0;
        const opacity = isHovering ? 0.95 : 0.55;
        const borderWidth = isHovering ? "2px" : "1.5px";
        const borderColor = isHovering ? "#3FE3E8" : "#22B3B8";

        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        cursorRingRef.current.style.opacity = `${opacity}`;
        cursorRingRef.current.style.borderColor = borderColor;
        cursorRingRef.current.style.borderWidth = borderWidth;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny Cyan Center Dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#3FE3E8] pointer-events-none z-50 transition-opacity duration-200 shadow-[0_0_8px_#3FE3E8]"
      />
      {/* Outer Lerping Halo Ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-[#22B3B8]/60 pointer-events-none z-50 transition-transform duration-100 ease-out shadow-[0_0_14px_rgba(34,179,184,0.3)]"
      />
    </>
  );
}
