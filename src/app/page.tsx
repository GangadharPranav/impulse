import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import IsbAccreditationsSection from "@/components/sections/IsbAccreditationsSection";
import IsbPillarsSection from "@/components/sections/IsbPillarsSection";
import WhatBringsYouHereSection from "@/components/sections/WhatBringsYouHereSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const PORTAL_DESTINATIONS = [
  {
    title: "About Our Pedagogy",
    subtitle: "McKinsey · BCG · Bain frameworks & unscripted crisis war rooms.",
    tag: "PEDAGOGY & THESIS",
    href: "/about",
    color: "border-[#22B3B8]/30 hover:border-[#22B3B8]",
    cta: "Explore Our Story",
    icon: "⚡",
  },
  {
    title: "Upcoming Conclaves & Events",
    subtitle: "PRAXIS '26, Hostile Takeover Drills, and MBB Masterclasses.",
    tag: "CAMPUS CALENDAR",
    href: "/events",
    color: "border-[#1E9EA9]/30 hover:border-[#3FE3E8]",
    cta: "View Full Schedule",
    icon: "📅",
  },
  {
    title: "Institutional Milestones",
    subtitle: "From 2024 chartering to state-wide collegiate championships.",
    tag: "TIMELINE & RECORD",
    href: "/timeline",
    color: "border-[#08747E]/40 hover:border-[#22B3B8]",
    cta: "View Club Timeline",
    icon: "⏳",
  },
  {
    title: "Syndicate Members & Leads",
    subtitle: "Executive Secretariat and our four tactical functional verticals.",
    tag: "MEMBERS & ADVISORY",
    href: "/members",
    color: "border-[#22B3B8]/30 hover:border-[#3FE3E8]",
    cta: "Meet The Cohort",
    icon: "👥",
  },
  {
    title: "Hall of Conclave Winners",
    subtitle: "Celebrating national champions, podium standings, and cash awards.",
    tag: "VICTORY & ACCREDITATION",
    href: "/winners",
    color: "border-amber-400/40 hover:border-amber-400",
    cta: "View Hall of Fame",
    icon: "🏆",
  },
  {
    title: "Club Member Admin Portal",
    subtitle: "Restricted gateway for club members to announce winners and manage events.",
    tag: "INTERNAL CONTROLS",
    href: "/admin",
    color: "border-emerald-500/30 hover:border-emerald-400",
    cta: "Enter Member Portal",
    icon: "🔒",
  },
];

export default function Home() {
  return (
    <main className="w-full relative">
      {/* 01 // Hero Section: Illuminated IMPULSE Logo Background + 3D Core */}
      <HeroSection />

      {/* 02 // Kinetic Ticker Ribbon */}
      <div data-anime="ribbon">
        <MarqueeRibbon
          items={[
            "THINK. ARGUE. DECIDE.",
            "BVRIT NARSAPUR • ESTD. 2024",
            "CASE STUDY & GROUP DISCUSSION CLUB",
            "LIVE BOARDROOM CRISIS WAR ROOM",
            "UNSCRIPTED DEBATE ARENA",
            "EXECUTIVE INTELLECT FORGED HERE",
            "MCKINSEY • BCG • BAIN PEDAGOGY",
            "₹1,50,000+ CONCLAVE PRIZE POOL",
          ]}
          speed={32}
          className="bg-[#02252E] border-y border-[#22B3B8]/30 text-white"
        />
      </div>

      {/* 03 // Multi-Page Gateway Directory Cards */}
      <section className="py-20 px-5 sm:px-8 xl:px-12 bg-[#041217] border-b border-[#22B3B8]/20 relative">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22B3B8] shadow-[0_0_8px_#22B3B8]" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
                  PLATFORM NAVIGATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Explore The IMPULSE Ecosystem
              </h2>
            </div>
            <p className="text-[#E8EEF0]/70 text-sm max-w-md font-sans">
              Access dedicated archives for our pedagogical thesis, active tournament calendar, cohort roster, and official hall of champions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTAL_DESTINATIONS.map((dest, i) => (
              <Link
                key={i}
                href={dest.href}
                className={`p-7 rounded-2xl bg-[#03232c]/60 hover:bg-[#033744]/80 border ${dest.color} transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1.5`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{dest.icon}</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#22B3B8] uppercase px-2.5 py-0.5 rounded bg-[#22B3B8]/10 border border-[#22B3B8]/20">
                      {dest.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#3FE3E8] transition-colors">
                    {dest.title}
                  </h3>

                  <p className="text-sm text-[#E8EEF0]/80 leading-relaxed font-sans">
                    {dest.subtitle}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#22B3B8] group-hover:text-white uppercase tracking-wider">
                  <span>{dest.cta}</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // Audited Impact & Real-time Metrics */}
      <ImpactSection />

      {/* 05 // Corporate Alliances & Pedagogy Benchmarks */}
      <div data-anime="reveal">
        <IsbAccreditationsSection />
      </div>

      {/* 06 // Foundations of Excellence: 3 Institutional Pillars */}
      <div data-anime="reveal">
        <IsbPillarsSection />
      </div>

      {/* 07 // Interactive Intent Filter */}
      <div data-anime="reveal">
        <WhatBringsYouHereSection />
      </div>

      {/* 08 // Luminary Keynote Speakers & Executive Mentors */}
      <div data-anime="reveal">
        <SpeakersSection />
      </div>

      {/* 09 // Executive Testimonials & MBB Alumni Wall of Fame */}
      <div data-anime="reveal">
        <TestimonialsSection />
      </div>
    </main>
  );
}
