"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useImpulseStore, Winner } from "@/lib/store";
import { useHydrated } from "@/hooks/useHydrated";

export default function WinnersPage() {
  const storeWinners = useImpulseStore((state) => state.winners);
  const mounted = useHydrated();
  const [selectedRank, setSelectedRank] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const winnersList = mounted ? storeWinners : [];

  const ranks = ["All", "1st Place", "2nd Place", "3rd Place", "Special Mention"];

  const filteredWinners = winnersList.filter((w) => {
    const matchesRank = selectedRank === "All" || w.rank === selectedRank;
    const matchesSearch =
      w.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.members.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRank && matchesSearch;
  });

  const getRankBadge = (rank: Winner["rank"]) => {
    switch (rank) {
      case "1st Place":
        return {
          icon: "🥇",
          label: "CHAMPION // 1ST PLACE",
          classes: "bg-amber-500/15 border-amber-400/50 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]",
          cardBorder: "border-amber-400/50 shadow-[0_0_40px_rgba(251,191,36,0.15)]",
        };
      case "2nd Place":
        return {
          icon: "🥈",
          label: "RUNNER-UP // 2ND PLACE",
          classes: "bg-slate-300/15 border-slate-300/50 text-slate-200",
          cardBorder: "border-slate-300/35",
        };
      case "3rd Place":
        return {
          icon: "🥉",
          label: "2ND RUNNER-UP // 3RD PLACE",
          classes: "bg-amber-700/15 border-amber-600/50 text-amber-400",
          cardBorder: "border-amber-600/30",
        };
      default:
        return {
          icon: "⭐",
          label: "SPECIAL JURY COMMENDATION",
          classes: "bg-[#22B3B8]/15 border-[#22B3B8]/40 text-[#22B3B8]",
          cardBorder: "border-[#22B3B8]/30",
        };
    }
  };

  return (
    <div className="pt-24 sm:pt-28 w-full bg-[#050e12] text-[#E8EEF0] min-h-screen">
      {/* ── Page Hero Header ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 xl:px-12 border-b border-[#22B3B8]/20 bg-gradient-to-b from-[#033744]/60 via-[#050e12] to-[#050e12] overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-amber-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            <span className="text-amber-400">🏆</span>
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-amber-300 uppercase">
              HALL OF FAME &bull; CONCLAVE PODIUMS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                Official Conclave Winners &amp; Champions
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#E8EEF0]/80 max-w-2xl font-sans leading-relaxed">
                Honoring collegiate teams and debaters who conquered our unscripted war rooms, defended resilient turnarounds, and claimed podium honors.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <Link
                href="/admin"
                className="px-5 py-2.5 rounded-full bg-[#22B3B8]/15 border border-[#22B3B8]/50 text-[#22B3B8] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#22B3B8] hover:text-[#033744] transition-all flex items-center gap-2"
              >
                <span>🔒 Announce Winners (Admin)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters & Search ── */}
      <section className="py-6 px-5 sm:px-8 xl:px-12 bg-[#032128]/70 border-b border-[#22B3B8]/15 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-mono text-slate-400 mr-2 uppercase hidden sm:inline">Podium:</span>
            {ranks.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRank(r)}
                className={`px-4 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-full ${
                  selectedRank === r
                    ? "bg-[#22B3B8] text-[#033744] shadow-[0_0_12px_rgba(34,179,184,0.4)]"
                    : "bg-[#033744]/60 text-[#E8EEF0]/80 border border-[#22B3B8]/30 hover:border-[#22B3B8] hover:text-white"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team, student name, college..."
              className="w-full bg-[#02181e] border border-[#22B3B8]/30 rounded-full px-4 py-2 text-xs text-white placeholder-slate-400 font-mono focus:outline-none focus:border-[#22B3B8]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Winners Grid ── */}
      <section className="py-16 px-5 sm:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredWinners.length === 0 ? (
            <div className="text-center py-20 bg-[#03232c]/30 rounded-3xl border border-[#22B3B8]/20 space-y-4">
              <span className="text-4xl">🏆</span>
              <h3 className="text-xl font-bold text-white">No Winners Found</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                No announced winners currently match your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedRank("All");
                  setSearchQuery("");
                }}
                className="font-mono text-xs text-[#22B3B8] underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredWinners.map((winner) => {
                const rankMeta = getRankBadge(winner.rank);
                return (
                  <div
                    key={winner.id}
                    className={`p-7 sm:p-9 rounded-3xl bg-[#03232c]/65 border ${rankMeta.cardBorder} hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden backdrop-blur-sm group`}
                  >
                    <div className="space-y-4">
                      {/* Top Rank Badge & Prize */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div
                          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase ${rankMeta.classes}`}
                        >
                          <span>{rankMeta.icon}</span>
                          <span>{rankMeta.label}</span>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-mono text-slate-400 block text-[10px] uppercase">
                            AWARD / PRIZE
                          </span>
                          <span className="font-mono text-sm sm:text-base font-bold text-emerald-400">
                            {winner.prizeAmount}
                          </span>
                        </div>
                      </div>

                      {/* Event & Team Info */}
                      <div>
                        <span className="text-[11px] font-mono text-[#22B3B8] tracking-widest uppercase block mb-1">
                          {winner.eventTitle} &bull; {winner.edition}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                          {winner.teamName}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-slate-300 mt-1 flex items-center gap-1.5">
                          <span>🏛️</span>
                          <span>{winner.college}</span>
                        </p>
                      </div>

                      {/* Team Members */}
                      <div className="p-3.5 rounded-2xl bg-[#02181e] border border-white/10 space-y-1.5">
                        <span className="text-[10px] font-mono text-[#22B3B8] uppercase font-bold tracking-wider">
                          DELEGATION MEMBERS:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {winner.members.map((m, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Jury Citation */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          OFFICIAL JURY CITATION:
                        </span>
                        <p className="text-sm text-[#E8EEF0]/90 italic leading-relaxed font-sans border-l-2 border-[#22B3B8] pl-3 py-0.5">
                          &ldquo;{winner.citation}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Date Tag */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                      <span>VERIFIED CONCLAVE RECORD</span>
                      <span className="text-white">{winner.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
