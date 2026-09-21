"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface PraxisCard {
  id: string;
  tag: string;
  title: string;
  line: string;
  format: string;
  artifactTitle: string;
  artifactDesc: string;
  bgImage: string;
}

const praxisEvents: PraxisCard[] = [
  {
    id: "ceo-challenge",
    tag: "EVENT 01 // LEADERSHIP CRISIS",
    title: "CEO Challenge",
    line: "Solve real corporate crises under hostile board pressure.",
    format: "Simulated Boardroom Emergency · 45-Min War Room · Cross-Examination",
    artifactTitle: "Boardroom War Room",
    artifactDesc: "Executives clash under hostile cross-examination fire",
    bgImage: "/bg/boardroom_crisis.jpg",
  },
  {
    id: "verbal-nexus",
    tag: "EVENT 02 // INTELLECTUAL COMBAT",
    title: "Verbal Nexus",
    line: "Hybrid GD + parliamentary debate + satire showdown.",
    format: "Unannounced Rule Pivots · Rapid Rebuttal Rounds · Multi-Speaker Arena",
    artifactTitle: "Colliding Waveform Ribbons",
    artifactDesc: "Two reactive sinusoidal ribbons crossing in real-time",
    bgImage: "/bg/debate_arena.jpg",
  },
  {
    id: "worst-company",
    tag: "EVENT 03 // REVERSE STRATEGY",
    title: "Choosing My Worst Company",
    line: "Reverse strategy thinking — defending catastrophic corporate failures.",
    format: "Contrarian Thesis Defense · Forensic Accounting Audit · The Devil's Advocate",
    artifactTitle: "PRAXIS Summit Stage",
    artifactDesc: "The flagship arena where champions are forged",
    bgImage: "/bg/praxis_summit.jpg",
  },
];

export default function PraxisSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section
      id="praxis"
      className="relative py-28 px-6 sm:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-impulse-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-0.5 bg-impulse-cyan" />
              <span className="eyebrow-tag">03 // FLAGSHIP SUMMIT</span>
            </div>
            <h2 className="display-headline text-3xl sm:text-5xl font-bold text-white tracking-tight">
              PRAXIS &apos;26 Flagship Arena
            </h2>
            <p className="text-impulse-fog text-base sm:text-lg leading-relaxed">
              Our annual collegiate symposium. Three specialized arenas designed to
              push analytical intuition and rapid rhetoric beyond theoretical limits.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-impulse-cyan/40 bg-impulse-surface flex items-center justify-center text-impulse-cyan hover:bg-impulse-cyan hover:text-impulse-ink transition-all active:scale-95 shadow-md"
              aria-label="Previous Praxis Card"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-impulse-cyan/40 bg-impulse-surface flex items-center justify-center text-impulse-cyan hover:bg-impulse-cyan hover:text-impulse-ink transition-all active:scale-95 shadow-md"
              aria-label="Next Praxis Card"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Card Showcase */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {praxisEvents.map((evt, idx) => (
            <div
              key={evt.id}
              className="min-w-[320px] sm:min-w-[400px] md:min-w-[440px] rounded-3xl border border-impulse-cyan/30 bg-impulse-surface/50 backdrop-blur-md p-8 flex flex-col justify-between space-y-8 snap-start hover:border-impulse-cyan hover:shadow-[0_0_40px_rgba(34,179,184,0.25)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Tag & Index */}
              <div className="flex items-center justify-between border-b border-impulse-cyan/20 pb-4">
                <span className="eyebrow-tag text-[10px] sm:text-xs text-impulse-cyan">
                  {evt.tag}
                </span>
                <span className="font-mono text-xs text-impulse-fog/50 font-bold">
                  0{idx + 1} / 03
                </span>
              </div>

              {/* AI Image Showcase */}
              <div className="w-full aspect-[4/3] rounded-2xl border border-impulse-cyan/30 bg-impulse-abyss relative overflow-hidden group-hover:border-impulse-cyan/80 transition-all duration-500 shadow-inner">
                {/* AI Generated Image — full bleed */}
                <Image
                  src={evt.bgImage}
                  alt={evt.artifactTitle}
                  fill
                  sizes="440px"
                  className="object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-impulse-abyss via-impulse-abyss/30 to-transparent" />

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-mono text-xs font-bold text-white tracking-wider uppercase drop-shadow-md">
                    {evt.artifactTitle}
                  </h4>
                  <p className="font-mono text-[10px] text-impulse-fog/80 leading-tight mt-0.5">
                    {evt.artifactDesc}
                  </p>
                </div>

                <span className="absolute top-2.5 right-3 font-mono text-[8px] text-impulse-cyan tracking-widest bg-impulse-abyss/80 px-2 py-0.5 rounded border border-impulse-cyan/30">
                  ARENA_VISUAL
                </span>
              </div>

              {/* Event Content & Format */}
              <div className="space-y-4">
                <h3 className="display-headline text-2xl sm:text-3xl font-bold text-white group-hover:text-impulse-cyan transition-colors">
                  {evt.title}
                </h3>
                <p className="text-impulse-fog text-sm sm:text-base leading-relaxed font-normal">
                  {evt.line}
                </p>
                <div className="pt-2 border-t border-impulse-cyan/15">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-impulse-cyan block">
                    ARENA PROTOCOL:
                  </span>
                  <p className="font-mono text-xs text-impulse-fog/80 mt-1">
                    {evt.format}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="#auditions"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-impulse-cyan/40 font-mono text-xs font-bold text-impulse-cyan tracking-wider uppercase group-hover:bg-impulse-cyan group-hover:text-impulse-ink transition-all"
                >
                  <span>Register Delegation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
