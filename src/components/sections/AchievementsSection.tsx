"use client";

interface Milestone {
  quarter: string;
  year: string;
  title: string;
  category: string;
  detail: string;
}

const milestones: Milestone[] = [
  {
    quarter: "Q1",
    year: "2025",
    category: "INTER-COLLEGE TOURNAMENT",
    title: "National Corporate Case Simulation Finalists",
    detail:
      "Ranked Top 5 out of 120+ collegiate delegations defending turnaround strategies for distressed EV supply chains.",
  },
  {
    quarter: "Q2",
    year: "2025",
    category: "COMMUNITY SCALING",
    title: "Launch of the BVRIT 100-Hour GD Mastery Cohort",
    detail:
      "Trained 180+ pre-final year engineering candidates in active listening, pivot strategies, and structured synthesis.",
  },
  {
    quarter: "Q3",
    year: "2025",
    category: "ANNUAL SUMMIT",
    title: "Inaugural PRAXIS Summit Staged",
    detail:
      "Convened 350+ delegates across 12 institutions for the CEO Challenge and Verbal Nexus combat arenas.",
  },
  {
    quarter: "Q1",
    year: "2026",
    category: "CAMPUS EXPANSION",
    title: "Deployment of The War Room Simulation Framework",
    detail:
      "Formalized weekly unscripted crisis response drills into the campus leadership development calendar.",
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-28 px-6 sm:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-0.5 bg-impulse-cyan" />
            <span className="eyebrow-tag">06 // MILESTONES &amp; PODIUMS</span>
          </div>
          <h2 className="display-headline text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Institutional Timeline
          </h2>
          <p className="text-impulse-fog text-base sm:text-lg leading-relaxed">
            Consistent performance in adversarial case analysis and structured
            debate forums across the state and nation.
          </p>
        </div>

        {/* Left-Aligned Monospaced Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-impulse-cyan/30 space-y-12 max-w-4xl">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Pulsing Cyan Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-impulse-cyan bg-impulse-abyss flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-impulse-cyan animate-pulse" />
              </div>

              {/* Milestone Content Card */}
              <div className="p-8 rounded-2xl border border-impulse-cyan/20 bg-impulse-surface/40 backdrop-blur-sm space-y-3 group-hover:border-impulse-cyan/60 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-impulse-cyan tracking-widest uppercase">
                    {m.quarter} // {m.year}
                  </span>
                  <span className="font-mono text-[10px] text-impulse-fog/60 tracking-wider uppercase">
                    {m.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {m.title}
                </h3>

                <p className="text-impulse-fog text-sm sm:text-base leading-relaxed">
                  {m.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
