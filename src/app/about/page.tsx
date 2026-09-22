import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import IsbPillarsSection from "@/components/sections/IsbPillarsSection";
import IsbAccreditationsSection from "@/components/sections/IsbAccreditationsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";

export const metadata: Metadata = {
  title: "About Our Pedagogy & Thesis | IMPULSE BVRIT",
  description:
    "Learn about IMPULSE: The premier Case Study and Group Discussion Club at BVRIT Narsapur. Unscripted debate, McKinsey/BCG frameworks, and boardroom crisis drills.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 w-full bg-[#050e12] text-[#E8EEF0]">
      {/* ── Page Hero Header ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 xl:px-12 border-b border-[#22B3B8]/20 overflow-hidden bg-gradient-to-b from-[#033744]/40 via-[#050e12] to-[#050e12]">
        {/* Subtle illuminated backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#22B3B8]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-[#22B3B8]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
              ABOUT IMPULSE &bull; BVRIT NARSAPUR
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight max-w-4xl leading-tight">
            Forging Strategic Thinkers in an <span className="text-[#22B3B8] underline decoration-[#22B3B8]/40 decoration-wavy">Unscripted World</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8EEF0]/90 max-w-3xl leading-relaxed font-sans">
            IMPULSE is the flagship Case Study and Group Discussion Club of BVRIT Narsapur. We combine the intellectual rigor of top-tier strategy consulting with high-intensity verbal combat arenas.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/events"
              className="bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase px-7 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(34,179,184,0.35)]"
            >
              Explore Our Conclaves &rarr;
            </Link>
            <Link
              href="/members"
              className="border border-[#22B3B8]/40 hover:border-[#22B3B8] text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-all"
            >
              Meet The Syndicate
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 1: The Core Thesis ── */}
      <AboutSection />

      {/* ── Section 2: What We Do (Tactical Breakdown) ── */}
      <WhatWeDoSection />

      {/* ── Section 3: Foundations of Excellence: 3 Institutional Pillars ── */}
      <IsbPillarsSection />

      {/* ── Section 4: Corporate Alliances & Pedagogy Benchmarks ── */}
      <IsbAccreditationsSection />

      {/* ── Section 5: The BVRIT Chapter Charter & Call to Action ── */}
      <section className="py-20 px-5 sm:px-8 xl:px-12 bg-[#02252E] border-t border-[#22B3B8]/20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-[#22B3B8] tracking-[0.25em] uppercase font-bold">
            JOIN THE SYNDICATE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Ready to Defend Your Ideas Under Boardroom Pressure?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Auditions and cohort intakes happen each semester at BVRIT Narsapur. Experience the thrill of unscripted debate and consulting problem solving.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all"
            >
              Register for PRAXIS &apos;26 &rarr;
            </Link>
            <Link
              href="/winners"
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all"
            >
              View Recent Winners 🏆
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
