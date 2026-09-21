"use client";

import Image from "next/image";

interface VerticalTile {
  title: string;
  tag: string;
  lead: string;
  focus: string[];
}

const teamVerticals: VerticalTile[] = [
  {
    title: "Strategy & Case Design",
    tag: "VERTICAL 01",
    lead: "Architecting unscripted corporate simulations and pressure points.",
    focus: ["Case Dossier R&D", "Scoring Rubrics", "Simulation Engineering"],
  },
  {
    title: "Operations & Logistics",
    tag: "VERTICAL 02",
    lead: "Chamber orchestration, timer controls, and tournament staging.",
    focus: ["Arena Coordination", "Tournament Timers", "Floor Moderation"],
  },
  {
    title: "Intel & Content Research",
    tag: "VERTICAL 03",
    lead: "Tracking macroeconomic shifts, regulatory audits, and market collapses.",
    focus: ["Market Intelligence", "Debate Briefings", "Fact Verification"],
  },
  {
    title: "Outreach & Corporate Relations",
    tag: "VERTICAL 04",
    lead: "Connecting the cohort with consulting mentors, judges, and recruiters.",
    focus: ["Alumni Relations", "Inter-College Summits", "Corporate Mentorship"],
  },
];

const marqueeMoments = [
  {
    title: "Hostile Cross-Examination Round",
    session: "SESSION #38 // CRISIS WAR ROOM",
    quote: "Defending a 40% valuation cut under sudden supply-chain disruption.",
  },
  {
    title: "12-Person Fishbowl Group Discussion",
    session: "SESSION #41 // VERBAL NEXUS",
    quote: "Tactical pivots and active listening in an unmoderated chamber.",
  },
  {
    title: "Boardroom Turnaround Pitch",
    session: "SESSION #44 // EXECUTIVE BRIEF",
    quote: "3-minute elevator presentations to senior faculty & industry alumni.",
  },
  {
    title: "PRAXIS Inter-College Qualifiers",
    session: "SUMMIT QUALIFIERS // MARCH '26",
    quote: "Over 80 delegates competing for the CEO Challenge podium.",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative py-28 px-6 sm:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-0.5 bg-impulse-cyan" />
            <span className="eyebrow-tag">05 // COHORT STRUCTURE</span>
          </div>
          <h2 className="display-headline text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Four Tactical Verticals
          </h2>
          <p className="text-impulse-fog text-base sm:text-lg leading-relaxed">
            The club operates as a lean consulting syndicate. Every member owns a
            functional capability essential to running high-velocity simulations.
          </p>
        </div>

        {/* 4 Functional Vertical Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamVerticals.map((vert, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-impulse-cyan/25 bg-impulse-surface/40 backdrop-blur-sm space-y-6 hover:border-impulse-cyan/60 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between border-b border-impulse-cyan/20 pb-4">
                <span className="eyebrow-tag text-[11px] text-impulse-cyan">
                  {vert.tag}
                </span>
                <span className="font-mono text-xs text-impulse-fog/40">
                  DEPT // ACTIVE
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-impulse-cyan transition-colors">
                  {vert.title}
                </h3>
                <p className="text-impulse-fog text-sm mt-2 leading-relaxed">
                  {vert.lead}
                </p>
              </div>

              <div className="pt-2 border-t border-impulse-cyan/15 flex flex-wrap gap-2">
                {vert.focus.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full bg-impulse-cyan/10 border border-impulse-cyan/30 text-impulse-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Gallery of Chamber Moments (Teal duotone aesthetics) */}
        <div className="space-y-6 pt-8 border-t border-impulse-cyan/20">
          <div className="flex items-center justify-between">
            <span className="eyebrow-tag text-impulse-cyan">
              DOCUMENTED CHAMBER PROCEEDINGS
            </span>
            <span className="font-mono text-xs text-impulse-fog/60">
              FIELD NOTES &bull; BVRIT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marqueeMoments.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-impulse-cyan/20 bg-impulse-surface/60 p-6 space-y-4 hover:border-impulse-cyan hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                {/* AI Visual Banner */}
                <div className="w-full h-28 rounded-xl border border-impulse-cyan/30 relative overflow-hidden">
                  <Image
                    src={idx % 2 === 0 ? "/bg/boardroom_crisis.jpg" : "/bg/debate_arena.jpg"}
                    alt={item.title}
                    fill
                    sizes="280px"
                    className="object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-impulse-abyss/80 to-transparent" />
                  <span className="absolute bottom-2 left-3 font-mono text-[9px] text-impulse-cyan tracking-widest">
                    BVRIT_CHAMBER_LOG
                  </span>
                  <div className="absolute top-2 right-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-impulse-cyan animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-impulse-cyan uppercase tracking-wider block">
                    {item.session}
                  </span>
                  <h4 className="font-bold text-white text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-impulse-fog/80 text-xs leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
