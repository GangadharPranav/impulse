"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Pillar {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  linkText: string;
}

const PILLARS: Pillar[] = [
  {
    id: "faculty",
    title: "World-Class Mentorship & Faculty",
    category: "ACADEMIC EXCELLENCE",
    description:
      "Guided by top-tier consultants from McKinsey, BCG, and elite IIM/ISB alumni, our rigorous pedagogy equips students to dissect unstructured ambiguity with analytical precision.",
    image: "/bg/about_thinking.jpg",
    href: "#mentors",
    linkText: "Discover Our Mentorship Council",
  },
  {
    id: "research",
    title: "Pioneering Case Lab & Strategy Lab",
    category: "RESEARCH & INTELLECT",
    description:
      "Deeply rooted in emerging markets and corporate crisis frameworks, our case lab publishes proprietary business cases, market intelligence, and private equity turnaround models.",
    image: "/bg/boardroom_crisis.jpg",
    href: "#case-lab",
    linkText: "Explore Proprietary Case Studies",
  },
  {
    id: "alumni",
    title: "A Powerful Global Alumni Network",
    category: "GLOBAL FOOTPRINT",
    description:
      "Over 450+ IMPULSE alumni thrive across MBB consultancies, Tier-1 investment banks, high-growth unicorn founders, and Fortune 500 strategic advisory desks worldwide.",
    image: "/bg/praxis_summit.jpg",
    href: "#alumni",
    linkText: "Connect with Alumni Chapters",
  },
];

export default function IsbPillarsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % PILLARS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle institutional grid watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0F1E4A 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
        {/* Header with Title & Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#22B3B8]" />
              <span className="text-[11px] font-mono tracking-[0.22em] text-[#22B3B8] uppercase font-bold">
                INSTITUTIONAL PILLARS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#033744] tracking-tight">
              The Foundations of Excellence
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg font-sans">
              Discover how our academic rigor, proprietary case methodologies, and elite network forge leaders who shape global business strategy.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-[#033744] bg-white hover:bg-[#033744] text-slate-700 hover:text-white transition-all flex items-center justify-center shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-[#033744] bg-white hover:bg-[#033744] text-slate-700 hover:text-white transition-all flex items-center justify-center shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`group bg-white rounded-none border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                activeIndex === idx ? "ring-2 ring-[#22B3B8]/50" : ""
              }`}
            >
              {/* Pillar Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#033744]/80 via-[#033744]/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="inline-block px-2.5 py-1 bg-[#22B3B8] text-[#033744] font-mono text-[10px] uppercase font-bold tracking-wider mb-1 shadow-sm">
                    {pillar.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#033744] leading-snug group-hover:text-[#08747E] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#08747E] hover:text-[#22B3B8] group-hover:gap-2.5 transition-all"
                  >
                    <span>{pillar.linkText}</span>
                    <span className="text-base font-bold">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
