"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import FloatingImpulseEmblem from "@/components/FloatingImpulseEmblem";

// Render-less anime.js timeline orchestrator (client-only, no SSR)
const HeroAnimeEntrance = dynamic(
  () => import("@/components/HeroAnimeEntrance"),
  { ssr: false }
);

// Headline split into individually-animated words
const HEADLINE_WORDS = ["The", "future", "belongs", "to", "those", "who", "create", "it."];

export default function HeroSection() {

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-28 pb-16 bg-[#050e12] text-white overflow-hidden">
      {/* Anime.js entrance timeline — fires on mount */}
      <HeroAnimeEntrance />

      {/* ── 01: Background Layer: Brand-Illuminated IMPULSE Logo Artwork ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Radial ambient glow source */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full bg-gradient-to-tr from-[#033744]/60 via-[#08747E]/30 to-[#22B3B8]/15 blur-[120px] pointer-events-none" />

        {/* Outer subtle orbital rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] aspect-square rounded-full border border-[#22B3B8]/10 animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] aspect-square rounded-full border border-dashed border-[#1E9EA9]/15 animate-[spin_80s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[500px] aspect-square rounded-full border border-[#22B3B8]/20" />

        {/* Giant Monochromatic Watermarked IMPULSE Logo in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[620px] aspect-square opacity-[0.14] mix-blend-screen filter drop-shadow-[0_0_80px_rgba(34,179,184,0.45)]">
          <Image
            src="/logo.png"
            alt="IMPULSE Watermark Emblem"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Architectural Tech Grid & Ambient Scrims */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `radial-gradient(#22B3B8 1px, transparent 1px)`,
            backgroundSize: "36px 36px"
          }} 
        />
        
        {/* Directional contrast scrims for maximum typography clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e12]/95 via-[#050e12]/75 to-[#050e12]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050e12] via-transparent to-[#050e12]/60" />
      </div>

      {/* ── 03: Two-Column Container ── */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 w-full z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">

            {/* Eyebrow Pill — animated by HeroAnimeEntrance */}
            <div
              data-hero="eyebrow"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-[#22B3B8]/40 backdrop-blur-md shadow-[0_0_18px_rgba(34,179,184,0.25)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
                CASE STUDY &amp; GROUP DISCUSSION CLUB &bull; BVRIT
              </span>
            </div>

            {/* Headline — each word is individually animated */}
            <h1
              className="bannerFont text-white text-left leading-[1.02] tracking-tight flex flex-wrap gap-x-[0.3em] gap-y-0"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}
              aria-label="The future belongs to those who create it."
            >
              {HEADLINE_WORDS.map((word, i) => (
                <span key={i} data-hero="word" className="inline-block">
                  {word}
                </span>
              ))}
            </h1>

            {/* Body */}
            <p
              data-hero="body"
              className="text-[#E8EEF0]/90 text-base sm:text-lg max-w-2xl text-left leading-relaxed font-sans"
            >
              Where unscripted debate meets rigorous corporate consulting.
              Solving complex boardroom dilemmas, dissecting Fortune 500 cases, and forging
              strategic decision-makers for global enterprises.
            </p>

            {/* CTAs pointing to multi-page routes */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/events"
                data-hero="cta"
                className="bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(34,179,184,0.4)] flex items-center gap-2"
              >
                <span>Explore Events &amp; Conclaves</span>
                <span className="font-bold">&rarr;</span>
              </Link>

              <Link
                href="/about"
                data-hero="cta"
                className="bg-[#033744]/80 hover:bg-[#033744] border border-[#22B3B8]/40 hover:border-[#22B3B8] text-white text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                About Our Pedagogy
              </Link>

              <Link
                href="/winners"
                data-hero="cta"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#033744]/40 hover:bg-[#033744] border border-[#22B3B8]/30 hover:border-[#22B3B8] text-[#3FE3E8] text-xs font-mono tracking-wider uppercase transition-all duration-300"
              >
                <span className="text-amber-400">🏆</span>
                <span>Hall of Winners</span>
              </Link>
            </div>

            {/* Stat Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#22B3B8]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-sans max-w-xl">
              {[
                { value: "#1", label: "Premier GD Society" },
                { value: "1000+", label: "Debaters Coached" },
                { value: "≥₹1.5L", label: "Prize Pool" },
                { value: "15+", label: "National Podiums" },
              ].map((stat) => (
                <div key={stat.label} data-hero="stat">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white">{stat.value}</div>
                  <div className="text-[11px] text-[#22B3B8] font-mono tracking-wider mt-0.5 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: 3D Logo ── */}
          <div data-hero="emblem" className="lg:col-span-5 flex justify-center items-center">
            <FloatingImpulseEmblem />
          </div>

        </div>
      </div>
    </section>
  );
}
