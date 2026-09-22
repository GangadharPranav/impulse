"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Render-less anime.js timeline orchestrator (client-only, no SSR)
const HeroAnimeEntrance = dynamic(
  () => import("@/components/HeroAnimeEntrance"),
  { ssr: false }
);

// Headline split into individually-animated words
const HEADLINE_WORDS = ["The", "future", "belongs", "to", "those", "who", "create", "it."];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-32 pb-20 bg-[#050e12] text-white overflow-hidden">
      {/* Anime.js entrance timeline — fires on mount */}
      <HeroAnimeEntrance />

      {/* ── 01: Background Layer: Brand-Illuminated IMPULSE Logo Artwork ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Radial ambient glow source */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full bg-gradient-to-tr from-[#033744]/70 via-[#08747E]/35 to-[#22B3B8]/20 blur-[130px] pointer-events-none" />

        {/* Outer subtle orbital rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[880px] aspect-square rounded-full border border-[#22B3B8]/15 animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[700px] aspect-square rounded-full border border-dashed border-[#1E9EA9]/20 animate-[spin_80s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[520px] aspect-square rounded-full border border-[#22B3B8]/25" />

        {/* Giant Monochromatic Watermarked IMPULSE Logo in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[680px] aspect-square opacity-[0.20] mix-blend-screen filter drop-shadow-[0_0_90px_rgba(34,179,184,0.5)]">
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
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `radial-gradient(#22B3B8 1px, transparent 1px)`,
            backgroundSize: "36px 36px"
          }} 
        />
        
        {/* Contrast scrims for maximum typography clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e12]/85 via-transparent to-[#050e12]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050e12] via-transparent to-[#050e12]/70" />
      </div>

      {/* ── 02: Centered Hero Layout ── */}
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 xl:px-12 w-full z-10 py-8 flex flex-col items-center text-center space-y-7">

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
          className="bannerFont text-white text-center leading-[1.02] tracking-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-0 max-w-4xl"
          style={{ fontSize: "clamp(2.6rem, 5.8vw, 5.2rem)" }}
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
          className="text-[#E8EEF0]/90 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed font-sans"
        >
          Where unscripted debate meets rigorous corporate consulting.
          Solving complex boardroom dilemmas, dissecting Fortune 500 cases, and forging
          strategic decision-makers for global enterprises.
        </p>

        {/* CTAs pointing to multi-page routes */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#033744]/60 hover:bg-[#033744] border border-amber-400/40 hover:border-amber-400 text-amber-300 text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.15)]"
          >
            <span>🏆</span>
            <span>Hall of Winners</span>
          </Link>
        </div>

        {/* Stat Strip */}
        <div className="pt-8 mt-4 border-t border-[#22B3B8]/20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center font-sans max-w-3xl w-full">
          {[
            { value: "#1", label: "Premier GD Society" },
            { value: "1000+", label: "Debaters Coached" },
            { value: "≥₹1.5L", label: "Prize Pool" },
            { value: "15+", label: "National Podiums" },
          ].map((stat) => (
            <div key={stat.label} data-hero="stat" className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-[11px] text-[#22B3B8] font-mono tracking-wider mt-1 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
