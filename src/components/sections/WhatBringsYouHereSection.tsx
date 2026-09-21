"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface OpportunityItem {
  id: string;
  personas: string[];
  intents: string[];
  badge: string;
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: "praxis-flagship",
    personas: ["prospective", "student", "recruiter"],
    intents: ["competitions", "programmes", "leadership"],
    badge: "FLAGSHIP CONCLAVE",
    title: "PRAXIS '26 National Case & Debate Conclave",
    duration: "3-Day Immersive Summit",
    eligibility: "Open to Top Tier Undergraduates & Postgraduates",
    description:
      "India's premier high-stakes case cracked arena where 80+ collegiate delegations battle across live M&A scenarios, venture financing negotiations, and unscripted crisis simulations.",
    ctaText: "Register Delegation",
    ctaLink: "#praxis",
  },
  {
    id: "consulting-fellowship",
    personas: ["prospective", "student"],
    intents: ["programmes", "consulting", "leadership"],
    badge: "ACADEMIC PROGRAMME",
    title: "IMPULSE Strategy & Case Consulting Fellowship",
    duration: "6 Months • Dual Semester",
    eligibility: "Rigorous Audition & Written Case Screening",
    description:
      "Intensive cohort-based curriculum taught by MBB practitioners. Covers market entry, profitability teardowns, financial modeling, and structured problem solving with pyramid principles.",
    ctaText: "Explore Fellowship Curriculum",
    ctaLink: "#initiatives",
  },
  {
    id: "corporate-recruiting",
    personas: ["recruiter"],
    intents: ["talent", "programmes"],
    badge: "CORPORATE PARTNERSHIP",
    title: "Executive Talent Recruitment & Campus Hiring",
    duration: "Year-Round Recruitment Drives",
    eligibility: "McKinsey, BCG, Bain, Big 4, & High-Growth Unicorns",
    description:
      "Gain direct access to pre-vetted, case-hardened strategic analysts with proven analytical firepower, executive communication, and crisis decision-making capabilities.",
    ctaText: "Connect with Placement Cell",
    ctaLink: "#contact",
  },
  {
    id: "boardroom-crisis",
    personas: ["student", "alumni"],
    intents: ["competitions", "consulting"],
    badge: "LIVE SIMULATION",
    title: "The Arena: Unscripted Boardroom Crisis War Room",
    duration: "Bi-Weekly Closed-Door Drills",
    eligibility: "Fellows & Invited Inter-Collegiate Teams",
    description:
      "A timed corporate catastrophe simulation with real-time news leaks, stock volatility, and hostile takeover attempts designed to test poise under extreme duress.",
    ctaText: "View Simulation Rules",
    ctaLink: "#initiatives",
  },
  {
    id: "case-lab-research",
    personas: ["scholar", "alumni", "recruiter"],
    intents: ["research", "consulting"],
    badge: "RESEARCH & INTELLECT",
    title: "IMPULSE Management Case Repository & Journals",
    duration: "Quarterly Publications",
    eligibility: "Open Access for Business Schools & Researchers",
    description:
      "Comprehensive repository of real-world emerging market business cases, private equity turnaround blueprints, and ESG corporate governance whitepapers.",
    ctaText: "Access Research Papers",
    ctaLink: "#case-lab",
  },
  {
    id: "alumni-mentorship",
    personas: ["student", "alumni"],
    intents: ["leadership", "consulting"],
    badge: "1-ON-1 SPRINT",
    title: "Executive Mentorship Council: 1-on-1 MBB Prep",
    duration: "8-Week Sprint Series",
    eligibility: "IMPULSE Senior Fellows",
    description:
      "Direct personalized case interview prep, resume critiques, and partner-track grooming with alumni currently practicing at McKinsey, Bain, BCG, and private equity funds.",
    ctaText: "Request Mentor Match",
    ctaLink: "#mentors",
  },
];

export default function WhatBringsYouHereSection() {
  const [selectedPersona, setSelectedPersona] = useState<string>("prospective");
  const [selectedIntent, setSelectedIntent] = useState<string>("all");

  const filteredItems = useMemo(() => {
    return OPPORTUNITIES.filter((item) => {
      const matchPersona =
        selectedPersona === "all" || item.personas.includes(selectedPersona);
      const matchIntent =
        selectedIntent === "all" || item.intents.includes(selectedIntent);
      return matchPersona && matchIntent;
    });
  }, [selectedPersona, selectedIntent]);

  return (
    <section id="what-brings-you-here" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#22B3B8]" />
            <span className="text-[11px] font-mono tracking-[0.24em] text-[#22B3B8] uppercase font-bold">
              PERSONALISED PATHWAYS
            </span>
            <span className="w-5 h-[2px] bg-[#22B3B8]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#033744] tracking-tight">
            What brings you here?
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-sans">
            Select your profile and objectives below to discover tailored programmes, case archives, and institutional opportunities.
          </p>
        </div>

        {/* Dual Interactive Dropdown Bar (ISB signature UI) */}
        <div className="bg-[#F8FAFC] border-2 border-[#22B3B8]/25 p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Dropdown 1: I am a... */}
            <div className="md:col-span-6 space-y-2">
              <label htmlFor="persona-select" className="block text-xs font-mono font-bold text-[#033744] uppercase tracking-wider">
                1. I AM A:
              </label>
              <div className="relative">
                <select
                  id="persona-select"
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="w-full bg-white border border-slate-300 px-4 py-3.5 text-[#033744] font-sans font-medium text-base rounded-none focus:outline-none focus:ring-2 focus:ring-[#22B3B8] focus:border-transparent appearance-none cursor-pointer pr-10 shadow-sm"
                >
                  <option value="prospective">Prospective Student / Candidate</option>
                  <option value="student">Current Collegiate Member / Fellow</option>
                  <option value="recruiter">Corporate Recruiter / Talent Acquisition Partner</option>
                  <option value="alumni">Working Professional / Alumni</option>
                  <option value="scholar">Faculty, Researcher &amp; Case Writer</option>
                  <option value="all">View All Profiles</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#033744]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dropdown 2: looking for... */}
            <div className="md:col-span-6 space-y-2">
              <label htmlFor="intent-select" className="block text-xs font-mono font-bold text-[#033744] uppercase tracking-wider">
                2. AND I AM LOOKING FOR:
              </label>
              <div className="relative">
                <select
                  id="intent-select"
                  value={selectedIntent}
                  onChange={(e) => setSelectedIntent(e.target.value)}
                  className="w-full bg-white border border-slate-300 px-4 py-3.5 text-[#033744] font-sans font-medium text-base rounded-none focus:outline-none focus:ring-2 focus:ring-[#22B3B8] focus:border-transparent appearance-none cursor-pointer pr-10 shadow-sm"
                >
                  <option value="all">Everything Matching My Profile</option>
                  <option value="competitions">Case Competitions &amp; Debate Conclaves (PRAXIS)</option>
                  <option value="programmes">Consulting Fellowships &amp; Structured Tracks</option>
                  <option value="consulting">Strategy Sprints &amp; M&amp;A Simulations</option>
                  <option value="talent">Hiring Pre-Vetted Strategic Talent</option>
                  <option value="leadership">Executive Mentorship &amp; Networking</option>
                  <option value="research">Case Studies &amp; Research Whitepapers</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#033744]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Results Counter */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8 font-mono text-xs text-slate-500">
          <span>
            SHOWING <strong className="text-[#033744]">{filteredItems.length}</strong> CURATED OPPORTUNITIES
          </span>
          <button
            onClick={() => {
              setSelectedPersona("all");
              setSelectedIntent("all");
            }}
            className="text-[#22B3B8] hover:underline font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#22B3B8] hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Top Badge & Duration */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-[#033744] text-white">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#033744] group-hover:text-[#08747E] transition-colors leading-snug mt-2">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="text-[#22B3B8] font-bold">ELIGIBILITY:</span>
                  <span className="truncate">{item.eligibility}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={item.ctaLink}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#033744] hover:bg-[#22B3B8] hover:text-[#033744] text-white text-xs font-mono font-bold uppercase tracking-widest py-3 px-4 transition-all duration-300 shadow-sm"
                >
                  <span>{item.ctaText}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
