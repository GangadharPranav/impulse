import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import IsbAccreditationsSection from "@/components/sections/IsbAccreditationsSection";
import IsbPillarsSection from "@/components/sections/IsbPillarsSection";
import WhatBringsYouHereSection from "@/components/sections/WhatBringsYouHereSection";
import InitiativesSection from "@/components/sections/InitiativesSection";
import IsbEventsSection from "@/components/sections/IsbEventsSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#033744] flex flex-col w-full selection:bg-[#22B3B8] selection:text-[#033744]">
      {/* 01 // Fixed Navigation Masthead (Dual-tier ISB prestige with IMPULSE logo) */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 02 // Hero Section: Text on Left, Slowly Rotating 3D IMPULSE Logo on Right */}
        <HeroSection />

        {/* 03 // Single Kinetic Ticker Ribbon (Cyan on Abyss) */}
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

        {/* 04 // Audited Impact & Real-time Metrics (Animated Counters in Cyan/Teal/Abyss) */}
        <ImpactSection />

        {/* 05 // Corporate Alliances & Pedagogy Benchmarks (McKinsey, BCG, Bain, Harvard) */}
        <IsbAccreditationsSection />

        {/* 06 // Foundations of Excellence: 3 Institutional Pillars */}
        <IsbPillarsSection />

        {/* 07 // Signature ISB Interactive Intent Filter: 'What brings you here?' */}
        <WhatBringsYouHereSection />

        {/* 08 // Multi-Track Core Initiatives (6 Distinct Non-Repeating Flagships) */}
        <InitiativesSection />

        {/* 09 // Campus Calendar & Events with ISB Date Badges [ MAR 14 ] */}
        <IsbEventsSection />

        {/* 10 // Luminary Keynote Speakers & Executive Mentors */}
        <SpeakersSection />

        {/* 11 // Executive Testimonials & MBB Alumni Wall of Fame */}
        <TestimonialsSection />
      </main>

      {/* 12 // Institutional Dual-Campus Footer (BVRIT Headquarters & Hyderabad Secretariat) */}
      <FooterSection />
    </div>
  );
}
