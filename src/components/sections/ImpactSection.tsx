"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
  icon: "mortarboard" | "rocket" | "network" | "trophy";
  accentColor: string;
  cardBorder: string;
  cardBg: string;
  glowColor: string;
  iconStyle: string;
}

const statsData: StatItem[] = [
  {
    id: "solvers",
    target: 1000,
    suffix: "+",
    label: "Case Solvers & Debaters",
    sub: "Trained across engineering & management domains",
    icon: "mortarboard",
    accentColor: "text-[#3FE3E8]",
    cardBorder: "border-[#22B3B8]/30 hover:border-[#3FE3E8]",
    cardBg: "bg-gradient-to-b from-[#033744]/90 to-[#02252E]/95",
    glowColor: "rgba(34,179,184,0.35)",
    iconStyle: "border-[#22B3B8]/40 text-[#22B3B8] bg-[#033744] shadow-[0_0_20px_rgba(34,179,184,0.3)]",
  },
  {
    id: "sprints",
    target: 60,
    suffix: "+",
    label: "Consulting & GD Sprints",
    sub: "Live corporate simulations and problem teardowns",
    icon: "rocket",
    accentColor: "text-[#22B3B8]",
    cardBorder: "border-[#1E9EA9]/30 hover:border-[#22B3B8]",
    cardBg: "bg-gradient-to-b from-[#033744]/90 to-[#02252E]/95",
    glowColor: "rgba(30,158,169,0.35)",
    iconStyle: "border-[#1E9EA9]/40 text-[#1E9EA9] bg-[#033744] shadow-[0_0_20px_rgba(30,158,169,0.3)]",
  },
  {
    id: "reach",
    target: 500,
    suffix: "K+",
    label: "Network Reach & Views",
    sub: "Pan-India collegiate reach & digital impressions",
    icon: "network",
    accentColor: "text-[#3FE3E8]",
    cardBorder: "border-[#08747E]/40 hover:border-[#22B3B8]",
    cardBg: "bg-gradient-to-b from-[#033744]/90 to-[#02252E]/95",
    glowColor: "rgba(8,116,126,0.35)",
    iconStyle: "border-[#08747E]/50 text-[#3FE3E8] bg-[#033744] shadow-[0_0_20px_rgba(8,116,126,0.3)]",
  },
  {
    id: "podiums",
    target: 15,
    suffix: "+",
    label: "National Podium Honors",
    sub: "Victories across premier management tournaments",
    icon: "trophy",
    accentColor: "text-white",
    cardBorder: "border-[#22B3B8]/40 hover:border-white",
    cardBg: "bg-gradient-to-b from-[#033744]/90 to-[#02252E]/95",
    glowColor: "rgba(63,227,232,0.35)",
    iconStyle: "border-white/40 text-white bg-[#033744] shadow-[0_0_20px_rgba(255,255,255,0.2)]",
  },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    solvers: 0,
    sprints: 0,
    reach: 0,
    podiums: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);

            statsData.forEach((item) => {
              const duration = 1800;
              const steps = 45;
              const stepTime = duration / steps;
              const increment = item.target / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= item.target) {
                  setCounts((prev) => ({ ...prev, [item.id]: item.target }));
                  clearInterval(timer);
                } else {
                  setCounts((prev) => ({
                    ...prev,
                    [item.id]: Math.floor(current),
                  }));
                }
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  const renderIcon = (type: StatItem["icon"]) => {
    switch (type) {
      case "mortarboard":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current stroke-[1.8]">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      case "rocket":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current stroke-[1.8]">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.77 22.77 0 0 1-3.95 2z" />
            <path d="M9 12H4s.5-3 2.5-4.5M15 9V4s3 .5 4.5 2.5" />
          </svg>
        );
      case "network":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current stroke-[1.8]">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case "trophy":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-current stroke-[1.8]">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
            <path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z" />
          </svg>
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-24 sm:py-28 px-5 sm:px-8 xl:px-12 bg-[#040c11] border-b border-white/10 overflow-hidden"
    >
      {/* Ambient background mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/bg/hero_bg_dark.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040c11] via-transparent to-[#040c11]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22B3B8]" />
            <span className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-400 uppercase">
              03 // IMPACT &amp; METRICS
            </span>
          </div>
          <h2
            className="font-display font-extrabold text-white tracking-tight leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 5.2vw, 5rem)" }}
          >
            Numbers That Define the Standard
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            Real-time milestones from BVRIT Narsapur’s case arena. 
            Audited numbers reflecting real debate hours, student conversions, and nationwide victories.
          </p>
        </div>

        {/* 4 Counter Cards Grid with Distinct Color Identifiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-2xl border ${item.cardBorder} ${item.cardBg} backdrop-blur-md space-y-5 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden`}
              data-cursor
            >
              {/* Card Header: Colored Icon */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-13 h-13 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.iconStyle}`}
                >
                  <div className="group-hover:animate-bounce transition-transform duration-300">
                    {renderIcon(item.icon)}
                  </div>
                </div>
                <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase border border-white/10 px-2 py-0.5 rounded">
                  VERIFIED
                </span>
              </div>

              {/* Numerical Counter Display */}
              <div className="space-y-1">
                <div
                  className="font-display font-extrabold text-white tracking-tight tabular-nums"
                  style={{
                    fontSize: "clamp(2.8rem, 4vw, 4rem)",
                    textShadow: `0 0 25px ${item.glowColor}`,
                  }}
                >
                  {counts[item.id]}
                  <span className={item.accentColor}>{item.suffix}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-white transition-colors">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
