"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useImpulseStore, ImpulseEvent } from "@/lib/store";
import { useHydrated } from "@/hooks/useHydrated";

export default function EventsPage() {
  const storeEvents = useImpulseStore((state) => state.events);
  const mounted = useHydrated();
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<ImpulseEvent | null>(null);

  const categories = [
    "All",
    "Flagship Conclave",
    "Crisis War Room",
    "Executive Masterclass",
    "Research Forum",
  ];

  const eventsList = mounted ? storeEvents : [];

  const filteredEvents = eventsList.filter((evt) => {
    const matchesCategory =
      filter === "All" || evt.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 w-full bg-[#050e12] text-[#E8EEF0] min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-8 xl:px-12 border-b border-[#22B3B8]/20 bg-gradient-to-b from-[#033744]/50 via-[#050e12] to-[#050e12]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-[#22B3B8]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
              CAMPUS CALENDAR &amp; CONCLAVES
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Competitive Arenas &amp; Executive Summits
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#E8EEF0]/80 max-w-2xl font-sans leading-relaxed">
                Step into high-velocity boardroom simulations, defend complex business valuations, and compete for ₹1,50,000+ in conclave prizes.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <Link
                href="/winners"
                className="px-5 py-2.5 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-400/20 transition-all flex items-center gap-1.5"
              >
                <span>🏆 View Event Winners</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter & Search Controls ── */}
      <section className="py-8 px-5 sm:px-8 xl:px-12 bg-[#032128]/70 border-b border-[#22B3B8]/15 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-full ${
                  filter === cat
                    ? "bg-[#22B3B8] text-[#033744] shadow-[0_0_15px_rgba(34,179,184,0.4)]"
                    : "bg-[#033744]/60 text-[#E8EEF0]/80 border border-[#22B3B8]/30 hover:border-[#22B3B8] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search event title, venue..."
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

      {/* ── Events Grid ── */}
      <section className="py-16 px-5 sm:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-[#03232c]/30 rounded-3xl border border-[#22B3B8]/20 space-y-4">
              <span className="text-4xl">📅</span>
              <h3 className="text-xl font-bold text-white">No Events Found</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                No events currently match the selected criteria. Try adjusting your category filter or search terms.
              </p>
              <button
                onClick={() => {
                  setFilter("All");
                  setSearchQuery("");
                }}
                className="font-mono text-xs text-[#22B3B8] underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#03232c]/60 border border-[#22B3B8]/25 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#22B3B8] hover:shadow-[0_0_35px_rgba(34,179,184,0.2)] transition-all duration-300 group relative overflow-hidden"
                >
                  <div>
                    {/* Header with Date Badge */}
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Date Badge */}
                      <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#033744] border border-[#22B3B8]/40 shadow-inner flex-shrink-0 text-center font-mono">
                        <span className="text-[10px] sm:text-xs font-bold text-[#22B3B8] uppercase">
                          {event.month}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-white leading-none">
                          {event.day}
                        </span>
                        <span className="text-[9px] text-[#E8EEF0]/60">
                          {event.year}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#22B3B8] px-2 py-0.5 rounded bg-[#22B3B8]/10 border border-[#22B3B8]/20">
                            {event.category}
                          </span>
                          {event.prizePool && (
                            <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 font-bold">
                              Pool: {event.prizePool}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#3FE3E8] transition-colors leading-snug">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* Event Banner Image */}
                    <div className="mt-5 relative h-48 w-full rounded-2xl overflow-hidden border border-[#22B3B8]/20 bg-[#02181e]">
                      <Image
                        src={event.image || "/bg/praxis_summit.jpg"}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02181e] via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                        <span className="flex items-center gap-1.5 drop-shadow">
                          <span className="text-[#22B3B8]">📍</span>
                          <span className="truncate">{event.location}</span>
                        </span>
                        <span className="text-[#22B3B8] font-bold">
                          ⏰ {event.time.split("-")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-[#E8EEF0]/80 text-sm leading-relaxed font-sans line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  {/* Actions Strip */}
                  <div className="pt-6 mt-6 border-t border-[#22B3B8]/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#22B3B8] hover:text-[#3FE3E8] transition-colors"
                    >
                      <span>VIEW FULL BRIEF</span>
                      <span>&rarr;</span>
                    </button>

                    {event.registrationOpen ? (
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1.5 rounded-full font-semibold hover:bg-emerald-900 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        REGISTER NOW
                      </button>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 font-semibold px-2 py-1">
                        REGISTRATION CLOSED
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Event Details & Registration Modal ── */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#032b35] border border-[#22B3B8]/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#22B3B8] px-2.5 py-1 rounded bg-[#22B3B8]/10 border border-[#22B3B8]/20">
                  {selectedEvent.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-2">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-slate-400 hover:text-white p-2 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#02181e] border border-[#22B3B8]/20 font-mono text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">DATE</span>
                <span className="text-white font-bold">{selectedEvent.month} {selectedEvent.day}, {selectedEvent.year}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">TIMING</span>
                <span className="text-white font-bold">{selectedEvent.time}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">PRIZE POOL</span>
                <span className="text-amber-300 font-bold">{selectedEvent.prizePool || "Certificates"}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#22B3B8] uppercase tracking-wider">
                VENUE &amp; LOGISTICS
              </h4>
              <p className="text-sm text-[#E8EEF0]">
                {selectedEvent.location}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#22B3B8] uppercase tracking-wider">
                EVENT DOSSIER &amp; DESCRIPTION
              </h4>
              <p className="text-sm text-[#E8EEF0]/90 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#22B3B8]/20 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-mono text-white hover:bg-white/10"
              >
                Close
              </button>

              {selectedEvent.registrationOpen ? (
                <button
                  onClick={() => {
                    alert(`Registration confirmed for "${selectedEvent.title}". Check your institutional email for confirmation & dossier.`);
                    setSelectedEvent(null);
                  }}
                  className="bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs font-mono font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(34,179,184,0.4)]"
                >
                  Submit Registration &rarr;
                </button>
              ) : (
                <span className="text-xs font-mono text-slate-400">
                  Registration currently closed for this round
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
