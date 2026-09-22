"use client";

import React, { useState } from "react";
import { useImpulseStore } from "@/lib/store";
import { useHydrated } from "@/hooks/useHydrated";

export default function MembersPage() {
  const storeMembers = useImpulseStore((state) => state.members);
  const mounted = useHydrated();
  const [activeVertical, setActiveVertical] = useState<string>("All");

  const membersList = mounted ? storeMembers : [];

  const verticals = [
    "All",
    "Executive Secretariat",
    "Strategy & Case Design",
    "Operations & Logistics",
    "Intel & Content Research",
    "Outreach & Corporate Relations",
    "Faculty & Advisory",
  ];

  const filteredMembers = membersList.filter((mem) => {
    if (activeVertical === "All") return true;
    return mem.vertical === activeVertical;
  });

  return (
    <div className="pt-24 sm:pt-28 w-full bg-[#050e12] text-[#E8EEF0] min-h-screen">
      {/* ── Page Hero Header ── */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-8 xl:px-12 border-b border-[#22B3B8]/20 bg-gradient-to-b from-[#033744]/50 via-[#050e12] to-[#050e12]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#033744]/90 border border-[#22B3B8]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#22B3B8] uppercase">
              SYNDICATE LEADERSHIP &bull; BVRIT NARSAPUR
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Executive Secretariat &amp; Tactical Verticals
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#E8EEF0]/80 max-w-2xl font-sans leading-relaxed">
                Meet the minds engineering our corporate simulations, chamber logistics, market intelligence dossiers, and corporate recruiting networks.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#auditions"
                className="bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(34,179,184,0.35)]"
              >
                Join As Member &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vertical Filter Tabs ── */}
      <section className="py-6 px-5 sm:px-8 xl:px-12 bg-[#032128]/70 border-b border-[#22B3B8]/15 sticky top-16 z-30 backdrop-blur-md overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          {verticals.map((vert) => (
            <button
              key={vert}
              onClick={() => setActiveVertical(vert)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all rounded-full ${
                activeVertical === vert
                  ? "bg-[#22B3B8] text-[#033744] shadow-[0_0_15px_rgba(34,179,184,0.4)]"
                  : "bg-[#033744]/60 text-[#E8EEF0]/80 border border-[#22B3B8]/30 hover:border-[#22B3B8] hover:text-white"
              }`}
            >
              {vert}
            </button>
          ))}
        </div>
      </section>

      {/* ── Members Roster Grid ── */}
      <section className="py-16 px-5 sm:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#03232c]/60 border border-[#22B3B8]/25 hover:border-[#22B3B8] hover:shadow-[0_0_35px_rgba(34,179,184,0.2)] transition-all duration-300 flex flex-col justify-between group space-y-6 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#22B3B8] px-2.5 py-1 rounded bg-[#22B3B8]/10 border border-[#22B3B8]/20">
                      {member.vertical}
                    </span>
                    {member.isExecutive && (
                      <span className="text-[9px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 uppercase font-bold">
                        EXECUTIVE CORE
                      </span>
                    )}
                  </div>

                  {/* Profile Header */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#033744] via-[#08747E] to-[#22B3B8] border-2 border-[#22B3B8]/60 flex items-center justify-center font-serif text-2xl font-bold text-white flex-shrink-0 shadow-[0_0_15px_rgba(34,179,184,0.3)] group-hover:scale-105 transition-transform duration-300">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#3FE3E8] transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-[#22B3B8] font-semibold mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#E8EEF0]/85 font-sans leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Strip */}
                {member.email && (
                  <div className="pt-4 border-t border-[#22B3B8]/15 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="truncate">{member.email}</span>
                    <span className="text-[#22B3B8]">&bull; Active</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cohort Recruitment Audition Banner ── */}
      <section id="auditions" className="py-20 px-5 sm:px-8 xl:px-12 bg-[#02252E] border-t border-[#22B3B8]/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-[#22B3B8] tracking-[0.25em] uppercase font-bold">
            SEMESTER INTAKE AUDITIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Apply to Join the Next IMPULSE Syndicate
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Whether you excel at financial forensic analysis, chamber floor coordination, macroeconomic research, or executive corporate outreach, IMPULSE has a seat for you at the table.
          </p>

          <div className="p-8 rounded-3xl bg-[#031d24] border border-[#22B3B8]/30 max-w-xl mx-auto text-left space-y-4">
            <h4 className="font-mono text-xs text-[#22B3B8] uppercase font-bold tracking-wider">
              INDUCTION PROTOCOL:
            </h4>
            <div className="space-y-2 text-xs font-sans text-slate-300">
              <p>1. <strong>Stage 1:</strong> Online Case Diagnostic &amp; Analytical Screening</p>
              <p>2. <strong>Stage 2:</strong> 15-Minute Spontaneous Fishbowl GD Simulation</p>
              <p>3. <strong>Stage 3:</strong> Executive Panel Cross-Examination Interview</p>
            </div>

            <button
              onClick={() => alert("Audition registration form link has been copied. Please submit your statement of intent before the deadline.")}
              className="w-full mt-4 bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] text-xs font-mono font-bold uppercase tracking-wider py-3 rounded-full transition-all text-center"
            >
              Submit Audition Statement of Intent &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
