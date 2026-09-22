"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const Y_SPIN_KEYFRAMES = `
@keyframes rotateY-continuous {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
}
`;

export default function FloatingImpulseEmblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse-tracking 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-14 to +14 deg) for smooth 3D parallax
    const rX = ((y - centerY) / centerY) * -14;
    const rY = ((x - centerX) / centerX) * 14;

    setRotX(rX);
    setRotY(rY);

    // Dynamic specular glare position
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  return (
    <>
      <style>{Y_SPIN_KEYFRAMES}</style>
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square mx-auto flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: 1200 }}
    >
      {/* ── Outer Concentric Rotating Orbit Rings (Strict Logo Palette) ── */}
      {/* Ring 1: Outer cyan fine-line orbit rotating very slowly */}
      <div className="absolute inset-0 rounded-full border border-[#22B3B8]/25 animate-[spin_55s_linear_infinite] pointer-events-none" />

      {/* Ring 2: Counter-rotating orbital track with dashes & glow */}
      <div
        className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-[#1E9EA9]/35 animate-[spin_40s_linear_infinite_reverse] pointer-events-none"
        style={{
          boxShadow: "0 0 35px rgba(34, 179, 184, 0.15)",
        }}
      />

      {/* Ring 3: Concentric satellite sparks in pure logo cyan & teal */}
      <div className="absolute inset-8 sm:inset-10 rounded-full animate-[spin_28s_linear_infinite] pointer-events-none">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#3FE3E8] shadow-[0_0_12px_#3FE3E8,0_0_24px_#22B3B8]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]" />
        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1E9EA9] shadow-[0_0_10px_#1E9EA9]" />
        <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#22B3B8] shadow-[0_0_12px_#22B3B8]" />
      </div>

      {/* Clean Neutral Ambient Shadow */}
      <div
        className="absolute inset-6 rounded-full bg-black/50 blur-2xl pointer-events-none transition-all duration-500"
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* ── 3D Floating Bobbing & Tilt Container ── */}
      <div
        className="relative w-[78%] aspect-square rounded-full transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) ${
            isHovered ? "scale(1.05)" : "scale(1)"
          }`,
        }}
      >
        {/* Continuous Floating Bobbing Keyframe Wrapper */}
        <div
          className="w-full h-full rounded-full relative animate-emblem-float"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Depth Shadow Layer (Cast shadow into background) */}
          <div
            className="absolute inset-3 rounded-full bg-black/65 blur-2xl transition-all duration-300 pointer-events-none"
            style={{
              transform: `translate3d(${-rotY * 1.5}px, ${-rotX * 1.5 + 20}px, -35px)`,
            }}
          />

          {/* 3D Rim Outer Ring in Brand Abyss & Cyan */}
          <div
            className="absolute -inset-2.5 rounded-full border-2 border-[#22B3B8]/70 bg-gradient-to-tr from-[#033744] via-[#044353] to-[#08747E] shadow-[0_0_35px_rgba(34,179,184,0.45)] pointer-events-none"
            style={{ transform: "translateZ(12px)" }}
          />

          {/* Core Circular Shield with Very Slow Rotating Logo */}
          <div
            className="w-full h-full rounded-full border-4 border-white bg-white p-2.5 shadow-2xl relative flex items-center justify-center"
            style={{
              transform: "translateZ(32px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(34,179,184,0.4)",
              perspective: 600,
            }}
          >
            {/* The Actual Official IMPULSE Logo Image - Rotating along Y-axis (coin-flip) */}
            <div
              className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden"
              style={{
                animation: "rotateY-continuous 14s linear infinite",
              }}
            >
              <Image
                src="/logo.png"
                alt="IMPULSE Official 3D Rotating Logo"
                fill
                priority
                sizes="(max-width: 768px) 280px, 360px"
                className="object-contain w-full h-full select-none pointer-events-none p-1"
              />
            </div>

            {/* Specular Glare / Light Reflection that follows cursor */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.45 : 0.18,
                background: `radial-gradient(circle 160px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)`,
                mixBlendMode: "overlay",
              }}
            />
          </div>

          {/* Pop-Out Holographic HUD Badge on translateZ */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#033744]/95 border border-[#22B3B8]/60 backdrop-blur-md shadow-[0_0_20px_rgba(34,179,184,0.5)] flex items-center gap-2 pointer-events-none whitespace-nowrap"
            style={{ transform: "translateZ(55px)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#3FE3E8] animate-ping" />
            <span className="font-mono text-[9.5px] font-bold tracking-[0.22em] text-white uppercase">
              IMPULSE &bull; 3D CORE
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
