"use client";

import React from "react";

export default function IsbAccreditationsSection() {
  const partners = [
    { name: "McKinsey & Company", role: "Strategy Partner" },
    { name: "Boston Consulting Group", role: "Case Sponsor" },
    { name: "Bain & Company", role: "Advisory Council" },
    { name: "Goldman Sachs", role: "M&A Case Lab" },
    { name: "Harvard Business Cases", role: "Pedagogy Benchmark" },
    { name: "Morgan Stanley", role: "Capital Markets Lab" },
  ];

  const recognitions = [
    {
      stat: "#1",
      label: "IN HYDERABAD REGION",
      desc: "Collegiate Strategy & Consulting Societies",
    },
    {
      stat: "100%",
      label: "CASE CRACKING RIGOR",
      desc: "Harvard & MIT Sloan Benchmark Pedagogy",
    },
    {
      stat: "450+",
      label: "GLOBAL ALUMNI",
      desc: "Across Tier-1 Consulting, Banking & Tech",
    },
    {
      stat: "₹4.2 Cr+",
      label: "CUMULATIVE SCHOLARSHIPS",
      desc: "Fellowship Grants & Research Stipends",
    },
  ];

  return (
    <section className="py-16 bg-[#02252E] text-white border-b border-[#22B3B8]/20 relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22B3B8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
        {/* Top: Prestigious Numbers Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 border-b border-[#22B3B8]/20">
          {recognitions.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-[#22B3B8]">
                {item.stat}
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-white uppercase pt-1">
                {item.label}
              </div>
              <p className="text-xs text-[#E8EEF0]/80 font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom: Corporate Alliances & Benchmarks */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-mono tracking-[0.24em] text-[#22B3B8] uppercase font-bold block mb-1">
              CORPORATE PARTNERS &amp; PEDAGOGY BENCHMARKS
            </span>
            <h4 className="text-xl font-serif font-bold text-white">
              Trusted by Leading Global Advisory Firms
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3 font-mono text-xs text-slate-300">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border border-[#22B3B8]/25 bg-[#033744]/60 hover:border-[#22B3B8] hover:text-white transition-all text-center"
              >
                <div className="font-bold text-white tracking-wider">{p.name}</div>
                <div className="text-[10px] text-[#22B3B8] uppercase">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
