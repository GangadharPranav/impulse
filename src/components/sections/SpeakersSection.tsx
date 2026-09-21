"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Speaker {
  id: string;
  name: string;
  role: string;
  org: string;
  topic: string;
  avatarBg: string;
  imageAlt: string;
}

const speakers: Speaker[] = [
  {
    id: "kunal-shah",
    name: "Kunal Shah",
    role: "Founder & CEO",
    org: "CRED",
    topic: "First-Principles Thinking & Delta 4 Framework",
    avatarBg: "from-[#22B3B8]/20 to-[#08747E]/10",
    imageAlt: "Kunal Shah",
  },
  {
    id: "bhavish-aggarwal",
    name: "Bhavish Aggarwal",
    role: "Founder & CEO",
    org: "Ola & Ola Electric",
    topic: "Building Resilient Supply Chains Under Fire",
    avatarBg: "from-[#1E9EA9]/20 to-[#033744]/10",
    imageAlt: "Bhavish Aggarwal",
  },
  {
    id: "aman-gupta",
    name: "Aman Gupta",
    role: "Co-Founder & CMO",
    org: "boAt Lifestyle / Shark Tank",
    topic: "D2C Brand Architecture & Consumer Moats",
    avatarBg: "from-[#3FE3E8]/20 to-[#1E9EA9]/10",
    imageAlt: "Aman Gupta",
  },
  {
    id: "anurag-kashyap",
    name: "Anurag Kashyap",
    role: "Filmmaker & Storyteller",
    org: "Indian Cinema",
    topic: "Persuasion, Tension & Uncompromised Truth",
    avatarBg: "from-[#08747E]/20 to-[#033744]/10",
    imageAlt: "Anurag Kashyap",
  },
  {
    id: "priya-sundaram",
    name: "Priya Sundaram",
    role: "Engagement Manager",
    org: "McKinsey & Company",
    topic: "MECE Decomposition & Timed Case Cracking",
    avatarBg: "from-[#22B3B8]/20 to-[#1E9EA9]/10",
    imageAlt: "McKinsey Engagement Manager",
  },
  {
    id: "vikram-sharma",
    name: "Vikramaditya Sharma",
    role: "Associate Partner",
    org: "Bain & Company",
    topic: "Private Equity Diligence & Operational Playbooks",
    avatarBg: "from-[#1E9EA9]/20 to-[#08747E]/10",
    imageAlt: "Bain Associate Partner",
  },
  {
    id: "radhakrishnan-pillai",
    name: "Dr. Radhakrishnan Pillai",
    role: "Corporate Chanakya Author",
    org: "Chanakya Institute",
    topic: "Saptanga Governance in Modern Negotiations",
    avatarBg: "from-[#3FE3E8]/20 to-[#08747E]/10",
    imageAlt: "Dr. Radhakrishnan Pillai",
  },
  {
    id: "arjun-varma",
    name: "Arjun Varma",
    role: "National Case Champion",
    org: "IIM Ahmedabad Alumnus",
    topic: "Defending Valuation Models Under Jury Pressure",
    avatarBg: "from-[#22B3B8]/25 to-[#033744]/15",
    imageAlt: "Arjun Varma",
  },
];

export default function SpeakersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"slider" | "grid">("slider");

  return (
    <section
      ref={sectionRef}
      id="speakers"
      className="relative py-28 px-5 sm:px-8 xl:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-impulse-cyan shadow-[0_0_8px_var(--impulse-cyan)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.24em] text-impulse-cyan uppercase">
                05 // INSPIRATIONAL VOICES
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-white tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 5rem)" }}
            >
              Inspirational Speakers &amp; Mentors
            </h2>
            <p className="text-impulse-fog/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              Industry titans, MBB strategy leaders, startup founders, and national champions 
              who have taken the stage at IMPULSE to challenge and elevate our students.
            </p>
          </div>

          {/* Tab View Switcher */}
          <div className="flex items-center gap-2 bg-[#044353]/50 border border-impulse-cyan/30 p-1 rounded-full self-start md:self-auto backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("slider")}
              className={`font-mono text-xs tracking-wider uppercase px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === "slider"
                  ? "bg-impulse-cyan text-impulse-ink font-bold shadow-[0_0_12px_rgba(34,179,184,0.4)]"
                  : "text-impulse-fog/70 hover:text-white"
              }`}
              data-cursor
            >
              Marquee Stream
            </button>
            <button
              onClick={() => setActiveTab("grid")}
              className={`font-mono text-xs tracking-wider uppercase px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === "grid"
                  ? "bg-impulse-cyan text-impulse-ink font-bold shadow-[0_0_12px_rgba(34,179,184,0.4)]"
                  : "text-impulse-fog/70 hover:text-white"
              }`}
              data-cursor
            >
              Roster Grid
            </button>
          </div>
        </div>

        {/* View Mode: Marquee Slider or 8-Card Grid */}
        {activeTab === "slider" ? (
          <div className="relative overflow-hidden py-4 -mx-5 sm:-mx-8 xl:-mx-12">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-impulse-abyss to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-impulse-abyss to-transparent z-20 pointer-events-none" />

            {/* Continuous Marquee Stream */}
            <div
              className="animate-marquee-left flex gap-6 whitespace-nowrap"
              style={{ width: "220%" }}
            >
              {[...speakers, ...speakers].map((sp, idx) => (
                <div
                  key={`${sp.id}-${idx}`}
                  className="w-[300px] flex-shrink-0 group relative p-6 rounded-3xl border border-impulse-cyan/25 bg-[#044353]/35 hover:bg-[#044353]/60 backdrop-blur-md flex flex-col items-center text-center space-y-4 transition-all duration-400 hover:-translate-y-2 hover:border-impulse-cyan hover:shadow-[0_16px_40px_rgba(34,179,184,0.25)]"
                  data-cursor
                >
                  {/* Circular Portrait Photo Card with Zoom on Hover */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-impulse-cyan/50 p-1 bg-impulse-abyss shadow-[0_0_20px_rgba(34,179,184,0.3)] group-hover:border-impulse-glow group-hover:shadow-[0_0_30px_rgba(63,227,232,0.6)] transition-all duration-300">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${sp.avatarBg} flex items-center justify-center font-display font-extrabold text-2xl text-white group-hover:scale-105 transition-transform duration-300`}
                    >
                      {sp.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Speaker Details with Overlay Slide-Up */}
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-xl text-white group-hover:text-impulse-glow transition-colors">
                      {sp.name}
                    </h3>
                    <p className="font-mono text-xs font-bold text-impulse-cyan uppercase tracking-wider">
                      {sp.role} &bull; {sp.org}
                    </p>
                  </div>

                  <p className="text-xs text-impulse-fog/75 line-clamp-2 leading-relaxed font-normal">
                    &ldquo;{sp.topic}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-white/10 w-full flex justify-center">
                    <span className="font-mono text-[9px] text-impulse-cyan/70 tracking-widest uppercase">
                      IMPULSE DISTINGUISHED KEYNOTE
                    </span>
                  </div>

                  <div className="kage-bar" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((sp) => (
              <div
                key={sp.id}
                className="group relative p-6 rounded-3xl border border-impulse-cyan/25 bg-[#044353]/35 hover:bg-[#044353]/60 backdrop-blur-md flex flex-col items-center text-center space-y-4 transition-all duration-400 hover:-translate-y-2 hover:border-impulse-cyan hover:shadow-[0_16px_40px_rgba(34,179,184,0.25)]"
                data-cursor
              >
                {/* Circular Portrait Photo Card with Zoom on Hover */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-impulse-cyan/50 p-1 bg-impulse-abyss shadow-[0_0_20px_rgba(34,179,184,0.3)] group-hover:border-impulse-glow group-hover:shadow-[0_0_30px_rgba(63,227,232,0.6)] transition-all duration-300">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${sp.avatarBg} flex items-center justify-center font-display font-extrabold text-2xl text-white group-hover:scale-105 transition-transform duration-300`}
                  >
                    {sp.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-impulse-glow transition-colors">
                    {sp.name}
                  </h3>
                  <p className="font-mono text-xs font-bold text-impulse-cyan uppercase tracking-wider">
                    {sp.role} &bull; {sp.org}
                  </p>
                </div>

                <p className="text-xs text-impulse-fog/75 leading-relaxed font-normal">
                  &ldquo;{sp.topic}&rdquo;
                </p>

                <div className="kage-bar" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
