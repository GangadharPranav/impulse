"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingImpulseEmblem from "@/components/FloatingImpulseEmblem";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-28 pb-16 bg-[#050e12] text-white overflow-hidden">
      {/* ── 01: Background Layer: Video + Atmospheric Scrims ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Verbal Nexus event footage as cinematic BG */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.45 }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark base — pure near-black, no teal tint */}
        <div className="absolute inset-0 bg-[#050e12]/50" />
        {/* Left-heavy scrim — pure darks only, no green mid-stop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e12]/85 via-[#050e12]/30 to-transparent" />
        {/* Top & bottom fade into site bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050e12]/75 via-transparent to-[#050e12]" />

        {/* Ambient Emissive Cyan Swell on the Right (behind 3D Logo) */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-[#22B3B8]/15 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* ── 02: Interactive 3D Particle Constellation (Cyan Nodes) ── */}
      <ParticleCanvas />

      {/* ── 03: Two-Column Container (Text on Left, 3D Logo on Right) ── */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 w-full z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Editorial Text & CTAs (col-span-7) ── */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-[#22B3B8]/40 backdrop-blur-md shadow-[0_0_18px_rgba(34,179,184,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
                CASE STUDY &amp; GROUP DISCUSSION CLUB &bull; BVRIT
              </span>
            </div>

            {/* ISB Editorial Title: "The future belongs to those who create it." */}
            <h1
              className="bannerFont text-white text-left leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}
            >
              The future belongs to those who create it.
            </h1>

            {/* Narrative Description */}
            <p className="text-[#E8EEF0]/90 text-base sm:text-lg max-w-2xl text-left leading-relaxed font-sans">
              Where unscripted debate meets rigorous corporate consulting. 
              Solving complex boardroom dilemmas, dissecting Fortune 500 cases, and forging strategic decision-makers for global enterprises.
            </p>

            {/* Action Buttons & Conclave Film Trigger */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#what-brings-you-here"
                className="bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(34,179,184,0.4)] flex items-center gap-2"
              >
                <span>Explore Opportunities</span>
                <span className="font-bold">&rarr;</span>
              </Link>
              
              <Link
                href="#initiatives"
                className="bg-[#033744]/80 hover:bg-[#033744] border border-[#22B3B8]/40 hover:border-[#22B3B8] text-white text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Flagship Tracks
              </Link>

              {/* Video Play Button (ISB Signature) */}
              <div className="flex items-center gap-2.5 pl-1 sm:pl-2">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Introduction Video"
                  className="w-11 h-11 rounded-full bg-[#22B3B8] text-[#033744] flex items-center justify-center shadow-[0_0_20px_rgba(34,179,184,0.5)] hover:scale-110 hover:bg-white transition-all duration-300 group"
                  title="Watch Institutional Keynote Film"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 group-hover:scale-110 transition-transform"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-xs font-mono font-bold tracking-wider text-[#E8EEF0] uppercase hidden sm:inline-block">
                  Conclave Film
                </span>
              </div>
            </div>

            {/* Quick Facts Strip: 4 Columns */}
            <div className="pt-6 sm:pt-8 border-t border-[#22B3B8]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-sans max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">#1</div>
                <div className="text-[11px] text-[#22B3B8] font-mono tracking-wider mt-0.5 uppercase">
                  Premier GD Society
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">1000+</div>
                <div className="text-[11px] text-[#22B3B8] font-mono tracking-wider mt-0.5 uppercase">
                  Debaters Coached
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">&ge;₹1.5L</div>
                <div className="text-[11px] text-[#22B3B8] font-mono tracking-wider mt-0.5 uppercase">
                  Prize Pool
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">15+</div>
                <div className="text-[11px] text-[#22B3B8] font-mono tracking-wider mt-0.5 uppercase">
                  National Podiums
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Slowly Rotating 3D Logo Emblem (col-span-5) ── */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <FloatingImpulseEmblem />
          </div>

        </div>
      </div>

      {/* Video Modal if toggled */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#22B3B8]/40 shadow-2xl bg-black">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="IMPULSE Showcase"
              allow="autoplay; fullscreen"
              className="w-full h-full"
            />
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 text-white bg-[#033744] hover:bg-[#22B3B8] hover:text-[#033744] p-2 rounded-full font-bold transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
