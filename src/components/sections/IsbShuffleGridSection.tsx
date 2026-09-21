"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Programme {
  id: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  mode: string;
  description: string;
  highlights: string[];
  image: string;
  link: string;
  size: "large" | "medium" | "tall";
}

const PROGRAMMES: Programme[] = [
  {
    id: "pgp-strategy",
    category: "POSTGRADUATE DIPLOMA",
    badge: "FLAGSHIP",
    title: "PGP in Strategic Consulting & Analytics",
    subtitle: "Comprehensive 1-Year Management Residency",
    duration: "1 Year Full-Time",
    mode: "Campus Residency • Dual Campus",
    description:
      "Engineered for high-potential analytical minds to transition into global strategy firms, private equity advisory, and corporate transformation desks.",
    highlights: [
      "Rigorous MECE issue-tree structuring & hypothesis testing",
      "Live client consulting engagements with Fortune 500 partners",
      "Comprehensive corporate finance, M&A, and LBO modeling",
    ],
    image: "/bg/about_thinking.jpg",
    link: "#initiatives",
    size: "large",
  },
  {
    id: "amp-crisis",
    category: "EXECUTIVE SUITE",
    badge: "EXECUTIVE",
    title: "Advanced Management in Crisis & Turnaround",
    subtitle: "Modular Executive Certification for Senior Leaders",
    duration: "6 Months Modular",
    mode: "Weekend Immersions & Global Labs",
    description:
      "Tailored for emerging executives and startup founders to master high-stakes turnaround strategy, insolvency mechanics, and crisis PR.",
    highlights: [
      "Unscripted boardroom war-room simulations",
      "Cross-border distressed debt valuation frameworks",
      "Executive presence & crisis stakeholder negotiation",
    ],
    image: "/bg/boardroom_crisis.jpg",
    link: "#initiatives",
    size: "medium",
  },
  {
    id: "fellow-research",
    category: "RESEARCH FELLOWSHIP",
    badge: "DOCTORAL TRACK",
    title: "IMPULSE Fellow in Emerging Market Strategy",
    subtitle: "Research Fellowship & Case Writing Track",
    duration: "2 Years Research",
    mode: "Full Scholarship • Case Lab",
    description:
      "Deep research residency producing peer-reviewed management cases, market intelligence reports, and geopolitical economic policy briefs.",
    highlights: [
      "Mentorship under global business school faculty",
      "Publication in international case repositories",
      "Full academic and field research grant funding",
    ],
    image: "/bg/debate_arena.jpg",
    link: "#case-lab",
    size: "tall",
  },
  {
    id: "venture-lab",
    category: "VENTURE ACCELERATION",
    badge: "INCUBATION",
    title: "Venture Catalyst & Founder Studio",
    subtitle: "Pre-Seed to Series-A Scaleup Studio",
    duration: "16 Weeks Intensive",
    mode: "Founder Residency & Seed Syndicate",
    description:
      "Bridging analytical case cracking with venture creation. Backed by angel syndicates and tech leaders to turn student solutions into capitalized startups.",
    highlights: [
      "Direct venture syndicate demo days",
      "Comprehensive unit economic & product-market fit audits",
      "Access to institutional VC partners across Bangalore & Mumbai",
    ],
    image: "/bg/praxis_summit.jpg",
    link: "#initiatives",
    size: "medium",
  },
];

export default function IsbShuffleGridSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { label: "All Programmes", value: "all" },
    { label: "Postgraduate", value: "postgraduate" },
    { label: "Executive Suite", value: "executive" },
    { label: "Research Fellowship", value: "research" },
    { label: "Venture Acceleration", value: "venture" },
  ];

  const filtered = selectedCategory === "all"
    ? PROGRAMMES
    : PROGRAMMES.filter((p) =>
        p.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00A896]" />
              <span className="text-[11px] font-mono tracking-[0.24em] text-[#00A896] uppercase font-bold">
                ACADEMIC &amp; EXECUTIVE OFFERINGS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1E4A] tracking-tight">
              Explore Our Programmes
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg font-sans">
              Rigorous, transformative curricula designed to cultivate intellectual firepower, strategic resilience, and visionary leadership.
            </p>
          </div>

          {/* Category Dropdown / Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  selectedCategory === cat.value
                    ? "bg-[#0F1E4A] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: Large Featured Card (8 cols) */}
          {filtered[0] && (
            <div className="md:col-span-8 group bg-[#0F1E4A] text-white overflow-hidden relative border border-slate-200 min-h-[440px] flex flex-col justify-end p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
              <Image
                src={filtered[0].image}
                alt={filtered[0].title}
                fill
                className="object-cover opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E4A] via-[#0F1E4A]/60 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-[#00A896] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                    {filtered[0].badge}
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    {filtered[0].duration} &bull; {filtered[0].mode}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-2">
                  {filtered[0].title}
                </h3>
                <p className="text-sm font-mono text-[#00A896] mb-4">
                  {filtered[0].subtitle}
                </p>

                <p className="text-slate-300 text-sm max-w-xl leading-relaxed mb-6 font-sans">
                  {filtered[0].description}
                </p>

                <ul className="space-y-2 mb-6 text-xs font-mono text-slate-300 max-w-lg hidden sm:block">
                  {filtered[0].highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#00A896]">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={filtered[0].link}
                  className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-mono font-bold uppercase tracking-widest px-5 py-3 transition-colors shadow-sm"
                >
                  <span>EXPLORE CURRICULUM &amp; ADMISSIONS</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {/* Card 2: Medium Card (4 cols) */}
          {filtered[1] && (
            <div className="md:col-span-4 group bg-white border border-slate-200 overflow-hidden flex flex-col justify-between p-7 shadow-sm hover:border-[#192890] hover:shadow-xl transition-all duration-300">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 mb-6 border border-slate-100">
                  <Image
                    src={filtered[1].image}
                    alt={filtered[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-[#0F1E4A] text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      {filtered[1].badge}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase text-[#00A896] block mb-1">
                  {filtered[1].category}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0F1E4A] leading-snug group-hover:text-[#192890] transition-colors">
                  {filtered[1].title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1 mb-3">
                  {filtered[1].duration}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {filtered[1].description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={filtered[1].link}
                  className="tertiaryBlue inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider"
                >
                  <span>PROGRAMME DETAILS</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {/* Card 3: Medium Card (6 cols) */}
          {filtered[2] && (
            <div className="md:col-span-6 group bg-white border border-slate-200 overflow-hidden flex flex-col sm:flex-row justify-between p-6 sm:p-7 shadow-sm hover:border-[#192890] hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden bg-slate-100 flex-shrink-0 mb-5 sm:mb-0 mr-0 sm:mr-6">
                <Image
                  src={filtered[2].image}
                  alt={filtered[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00A896] block mb-1">
                    {filtered[2].category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#0F1E4A] leading-snug group-hover:text-[#192890] transition-colors">
                    {filtered[2].title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1 mb-3">
                    {filtered[2].duration} &bull; {filtered[2].mode}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {filtered[2].description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={filtered[2].link}
                    className="tertiaryBlue inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    <span>FELLOWSHIP OVERVIEW</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Card 4: Medium Card (6 cols) */}
          {filtered[3] && (
            <div className="md:col-span-6 group bg-white border border-slate-200 overflow-hidden flex flex-col sm:flex-row justify-between p-6 sm:p-7 shadow-sm hover:border-[#192890] hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden bg-slate-100 flex-shrink-0 mb-5 sm:mb-0 mr-0 sm:mr-6">
                <Image
                  src={filtered[3].image}
                  alt={filtered[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00A896] block mb-1">
                    {filtered[3].category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#0F1E4A] leading-snug group-hover:text-[#192890] transition-colors">
                    {filtered[3].title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1 mb-3">
                    {filtered[3].duration} &bull; {filtered[3].mode}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {filtered[3].description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={filtered[3].link}
                    className="tertiaryBlue inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    <span>FOUNDER RESIDENCY</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
