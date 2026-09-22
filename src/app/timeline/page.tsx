"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useImpulseStore } from "@/lib/store";
import { useHydrated } from "@/hooks/useHydrated";

export default function TimelinePage() {
  const storeTimeline = useImpulseStore((state) => state.timeline);
  const mounted = useHydrated();
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const timelineList = mounted ? storeTimeline : [];

  const years = ["All", "2026", "2025", "2024"];

  const filteredMilestones = timelineList.filter((m) => {
    if (selectedYear === "All") return true;
    return m.year === selectedYear;
  });

  return (
    <div className="pt-24 sm:pt-28 w-full bg-[#050e12] text-[#E8EEF0] min-h-screen">
      {/* ── Page Hero Header ── */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-8 xl:px-12 border-b border-[#22B3B8]/20 bg-gradient-to-b from-[#033744]/50 via-[#050e12] to-[#050e12]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-[#22B3B8]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
              INSTITUTIONAL RECORD &bull; BVRIT NARSAPUR
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Chronicle of Evolution &amp; Podiums
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#E8EEF0]/80 max-w-2xl font-sans leading-relaxed">
                Tracing our trajectory from a grassroots collegiate discussion cell into an audited consulting syndicate and national tournament powerhouse.
              </p>
            </div>

            {/* Quick Stat Counter */}
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-[#032b35]/60 border border-[#22B3B8]/30 font-mono text-xs">
              <div>
                <span className="text-2xl font-bold text-white block">2024</span>
                <span className="text-[#22B3B8] text-[10px] uppercase tracking-wider">FOUNDED</span>
              </div>
              <div className="w-[1px] h-8 bg-white/20" />
              <div>
                <span className="text-2xl font-bold text-[#3FE3E8] block">15+</span>
                <span className="text-[#22B3B8] text-[10px] uppercase tracking-wider">PODIUMS</span>
              </div>
              <div className="w-[1px] h-8 bg-white/20" />
              <div>
                <span className="text-2xl font-bold text-amber-300 block">1,000+</span>
                <span className="text-[#22B3B8] text-[10px] uppercase tracking-wider">COACHED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Year Filter Bar ── */}
      <section className="py-6 px-5 sm:px-8 xl:px-12 bg-[#032128]/70 border-b border-[#22B3B8]/15 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 uppercase">Filter Era:</span>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-4 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-full ${
                  selectedYear === yr
                    ? "bg-[#22B3B8] text-[#033744] shadow-[0_0_12px_rgba(34,179,184,0.4)]"
                    : "bg-[#033744]/60 text-[#E8EEF0]/80 border border-[#22B3B8]/30 hover:border-[#22B3B8] hover:text-white"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          <Link
            href="/winners"
            className="text-xs font-mono text-[#22B3B8] hover:underline flex items-center gap-1 hidden sm:flex"
          >
            <span>See Winners Podium</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── Timeline Track ── */}
      <section className="py-20 px-5 sm:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto relative">
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#22B3B8] via-[#1E9EA9] to-[#033744]" />

          <div className="space-y-12 pl-12 sm:pl-20">
            {filteredMilestones.map((m, idx) => (
              <div key={m.id || idx} className="relative group">
                {/* Node on Vertical Track */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full border-2 border-[#22B3B8] bg-[#050e12] flex items-center justify-center shadow-[0_0_12px_#22B3B8] group-hover:scale-125 transition-transform duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#3FE3E8] animate-pulse" />
                </div>

                {/* Milestone Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-[#03232c]/60 border border-[#22B3B8]/25 hover:border-[#22B3B8] hover:shadow-[0_0_35px_rgba(34,179,184,0.2)] transition-all duration-300 space-y-4 relative overflow-hidden backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22B3B8]/15 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#22B3B8] px-3 py-1 rounded-full bg-[#22B3B8]/15 border border-[#22B3B8]/30">
                        {m.quarter} // {m.year}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                        {m.category}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        m.status === "Completed"
                          ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                          : m.status === "In Progress"
                          ? "bg-amber-950 text-amber-300 border border-amber-500/30"
                          : "bg-blue-950 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#3FE3E8] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
