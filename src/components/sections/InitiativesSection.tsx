"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Initiative {
  id: string;
  tag: string;
  tagStyle: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricColor: string;
  borderStyle: string;
  cardBg: string;
  hoverShadow: string;
  iconBoxStyle: string;
  iconSvg: React.ReactNode;
  timeline: string;
}

const initiatives: Initiative[] = [
  {
    id: "praxis",
    tag: "FLAGSHIP CONCLAVE",
    tagStyle: "text-cyan-300 bg-cyan-950/60 border-cyan-500/30",
    title: "PRAXIS '26",
    subtitle: "National Case Championship & Leadership Summit",
    description:
      "BVRIT's largest inter-collegiate corporate simulation. Teams dissect multi-million dollar business crises before a jury of MBB consultants and founders.",
    metric: "₹1,50,000+ Prize Pool & MBB Mentorship",
    metricColor: "text-cyan-300",
    borderStyle: "border-cyan-500/30 hover:border-cyan-400",
    cardBg: "bg-gradient-to-b from-[#061e27]/80 to-[#020b10]/95",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(34,179,184,0.25)]",
    iconBoxStyle: "border-cyan-400/40 text-cyan-400 bg-cyan-950/70 shadow-[0_0_20px_rgba(34,179,184,0.3)]",
    timeline: "ANNUAL // MARCH",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-current stroke-[1.8]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "arena",
    tag: "COMBAT GD LEAGUE",
    tagStyle: "text-[#22B3B8] bg-[#033744] border-[#22B3B8]/40",
    title: "THE ARENA",
    subtitle: "High-Velocity Group Discussion & Debate Rounds",
    description:
      "Timed, unscripted verbal combat where speakers are thrown into unexpected geopolitical, tech, and market disruption dilemmas with zero prep time.",
    metric: "40+ Cohort Rounds per Semester",
    metricColor: "text-[#3FE3E8]",
    borderStyle: "border-[#22B3B8]/30 hover:border-[#3FE3E8]",
    cardBg: "bg-gradient-to-b from-[#044353]/80 to-[#02252E]/95",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(34,179,184,0.25)]",
    iconBoxStyle: "border-[#22B3B8]/40 text-[#22B3B8] bg-[#033744] shadow-[0_0_20px_rgba(34,179,184,0.3)]",
    timeline: "BI-WEEKLY // FRIDAYS",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-current stroke-[1.8]">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    id: "caselab",
    tag: "CONSULTING BOOTCAMP",
    tagStyle: "text-[#1E9EA9] bg-[#033744] border-[#1E9EA9]/40",
    title: "CASE LAB",
    subtitle: "Framework Masterclasses & Problem Teardowns",
    description:
      "Dissect real-world strategy problems using MECE, 4P, Porter's Five Forces, and profitability trees. We turn ambiguous corporate chaos into actionable slide decks.",
    metric: "80+ Business Cases Analyzed",
    metricColor: "text-[#1E9EA9]",
    borderStyle: "border-[#1E9EA9]/30 hover:border-[#22B3B8]",
    cardBg: "bg-gradient-to-b from-[#033744]/80 to-[#02252E]/95",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(30,158,169,0.25)]",
    iconBoxStyle: "border-[#1E9EA9]/40 text-[#1E9EA9] bg-[#033744] shadow-[0_0_20px_rgba(30,158,169,0.3)]",
    timeline: "WEEKLY SESSIONS",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-current stroke-[1.8]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M7 8h10M7 12h6" />
      </svg>
    ),
  },
  {
    id: "illuminate",
    tag: "LEADERSHIP SERIES",
    tagStyle: "text-[#3FE3E8] bg-[#033744] border-[#3FE3E8]/40",
    title: "ILLUMINATE",
    subtitle: "Distinguished Speaker & Executive Fireside",
    description:
      "Exclusive sessions featuring McKinsey engagement managers, Bain consultants, venture capitalists, and top corporate strategists addressing the cohort.",
    metric: "18+ C-Suite & Partner Speakers",
    metricColor: "text-[#3FE3E8]",
    borderStyle: "border-[#08747E]/40 hover:border-[#3FE3E8]",
    cardBg: "bg-gradient-to-b from-[#044353]/80 to-[#02252E]/95",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(63,227,232,0.25)]",
    iconBoxStyle: "border-[#3FE3E8]/40 text-[#3FE3E8] bg-[#033744] shadow-[0_0_20px_rgba(63,227,232,0.3)]",
    timeline: "MONTHLY KEYNOTE",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-current stroke-[1.8]">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "ambassador",
    tag: "OUTREACH NETWORK",
    tagStyle: "text-[#22B3B8] bg-[#033744] border-[#22B3B8]/40",
    title: "CAMPUS AMBASSADOR",
    subtitle: "Collegiate Leadership & Representation Program",
    description:
      "Representing IMPULSE across 50+ universities in South India. Student ambassadors spearhead case culture, run regional prelims, and access premier masterclasses.",
    metric: "50+ Engineering & MBA Colleges",
    metricColor: "text-[#22B3B8]",
    borderStyle: "border-[#22B3B8]/30 hover:border-[#22B3B8]",
    cardBg: "bg-gradient-to-b from-[#033744]/80 to-[#02252E]/95",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(34,179,184,0.25)]",
    iconBoxStyle: "border-[#22B3B8]/40 text-[#22B3B8] bg-[#033744] shadow-[0_0_20px_rgba(34,179,184,0.3)]",
    timeline: "PAN-INDIA COHORT",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-current stroke-[1.8]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "crackcase",
    tag: "CAREER ACCELERATOR",
    tagStyle: "text-white bg-[#033744] border-white/30",
    title: "CRACK THE CASE",
    subtitle: "Management Placement & GD Screening Prep",
    description:
      "A fast-tracked summer prep program designed to help final-year candidates conquer corporate Group Discussions, Bain/Deloitte interviews, and case interviews.",
    metric: "100% Consulting & PM Shortlist Rate",
    metricColor: "text-white",
    borderStyle: "border-white/30 hover:border-[#22B3B8]",
    cardBg: "bg-gradient-to-b from-[#044353]/80 to-[#02252E]/95",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]",
    iconBoxStyle: "border-white/40 text-white bg-[#033744] shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    timeline: "PRE-PLACEMENT SEASON",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-current stroke-[1.8]">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function InitiativesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".initiative-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 45, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 78%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="initiatives"
      className="relative py-28 px-5 sm:px-8 xl:px-12 bg-[#03090e] border-b border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22B3B8]" />
              <span className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-400 uppercase">
                02 // FLAGSHIP PROGRAMS
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-white tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 5rem)" }}
            >
              Our Core Initiatives
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
              From high-stakes national case championships to weekly closed-door war rooms—engineered 
              with distinct focus tracks to forge analytical precision, spontaneous oratory, and executive presence.
            </p>
          </div>

          <div className="font-mono text-xs tracking-wider text-white/90 bg-white/5 border border-white/15 px-4 py-2 rounded-full backdrop-blur-sm self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>6 ACTIVE PROGRAMS // MULTI-TRACK ARENA</span>
          </div>
        </div>

        {/* 6 Initiative Cards Grid (with Vibrant Individual Color Signatures & 3D Lift) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {initiatives.map((item) => (
            <div
              key={item.id}
              className={`initiative-card group relative p-8 rounded-3xl border ${item.borderStyle} ${item.cardBg} backdrop-blur-xl flex flex-col justify-between transition-all duration-400 hover:-translate-y-2.5 hover:scale-[1.02] ${item.hoverShadow} overflow-hidden`}
              data-cursor
            >
              <div className="space-y-5 relative z-10">
                {/* Top Bar: Dedicated Colored Vector Artwork & Timeline Tag */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110 ${item.iconBoxStyle}`}
                  >
                    {item.iconSvg}
                  </div>
                  <span className="font-mono text-[9.5px] font-bold tracking-[0.2em] text-white/70 uppercase border border-white/10 px-2.5 py-1 rounded-full bg-black/40">
                    {item.timeline}
                  </span>
                </div>

                {/* Tag & Titles */}
                <div className="space-y-1.5 pt-1">
                  <span
                    className={`inline-block font-mono text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-0.5 rounded border ${item.tagStyle}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-white/75 font-medium">
                    {item.subtitle}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Footer: Metric Badge & Arrow */}
              <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
                <div className={`font-mono text-[11px] font-semibold ${item.metricColor}`}>
                  <span className="mr-1.5">✦</span>
                  {item.metric}
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 stroke-current stroke-[2]">
                    <path d="M3 11 11 3M5 3h6v6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
