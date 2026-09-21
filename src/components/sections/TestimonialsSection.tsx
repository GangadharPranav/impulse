"use client";

import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  org: string;
  quote: string;
  avatarText: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: "subhasis",
    name: "Prof. Subhasis Chaudhuri",
    role: "Former Director & Senior Academic Mentor",
    org: "IIT Bombay",
    quote:
      "Institutions do not build leaders by shielding students from difficulty. They build them by constructing disciplined arenas of intellectual combat. IMPULSE exemplifies the standard of student-led problem solving India needs.",
    avatarText: "SC",
    avatarColor: "from-cyan-500 to-teal-700",
  },
  {
    id: "dharmendra",
    name: "Dharmendra Pradhan",
    role: "Advocate for Youth Innovation & Industry Readiness",
    org: "Higher Education Leadership",
    quote:
      "Bridging the chasm between textbook theories and real corporate boardroom decisions requires genuine case rigor. The simulations conducted by the IMPULSE syndicate set a benchmark for engineering and management campuses nationwide.",
    avatarText: "DP",
    avatarColor: "from-teal-600 to-blue-800",
  },
  {
    id: "patron",
    name: "Dr. K. V. N. Sunitha",
    role: "Principal & Institutional Patron",
    org: "BVRIT Narsapur",
    quote:
      "IMPULSE has elevated the standard of discourse across our institution. Our students do not merely clear campus recruitment; they enter consulting firms, product organizations, and boardrooms ready to lead from day one.",
    avatarText: "KS",
    avatarColor: "from-emerald-500 to-teal-800",
  },
  {
    id: "alumni",
    name: "Ananya Deshmukh",
    role: "Senior Associate & Past IMPULSE President",
    org: "Bain & Company",
    quote:
      "When I faced partner-round case interviews at Bain, nothing was unfamiliar. The unscripted crisis simulations and brutal peer cross-examinations at IMPULSE prepared me for every twist of consulting life.",
    avatarText: "AD",
    avatarColor: "from-cyan-400 to-indigo-700",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="relative py-28 px-5 sm:px-8 xl:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-impulse-cyan/8 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-impulse-cyan shadow-[0_0_8px_var(--impulse-cyan)]" />
            <span className="font-mono text-xs font-semibold tracking-[0.24em] text-impulse-cyan uppercase">
              06 // INSTITUTIONAL VOICES
            </span>
          </div>
          <h2
            className="font-display font-extrabold text-white tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
          >
            Endorsed by Leaders
          </h2>
          <p className="text-impulse-fog/90 text-base sm:text-lg leading-relaxed">
            Reflections from respected academicians, institutional directors, 
            and alumni who have witnessed the transformation firsthand.
          </p>
        </div>

        {/* Big Testimonial Card with Slide/Tab Transition */}
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl border border-impulse-cyan/30 bg-[#044353]/35 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Gigantic Stylized Quotation Mark Graphic */}
          <div className="absolute top-6 right-8 text-impulse-cyan/10 font-serif text-8xl sm:text-9xl pointer-events-none select-none font-bold leading-none">
            &ldquo;
          </div>

          <div className="relative z-10 space-y-8">
            {/* Quote Body with smooth fade */}
            <p className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-white/95 leading-snug tracking-tight">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-impulse-cyan/20">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[activeIndex].avatarColor} flex items-center justify-center font-display font-extrabold text-lg text-white border-2 border-impulse-cyan/60 shadow-[0_0_20px_rgba(34,179,184,0.4)] flex-shrink-0`}
              >
                {testimonials[activeIndex].avatarText}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="font-mono text-xs font-semibold text-impulse-cyan tracking-wider uppercase">
                  {testimonials[activeIndex].role} &bull;{" "}
                  <span className="text-white/80">
                    {testimonials[activeIndex].org}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Hairline Bar */}
          <div className="kage-bar" style={{ transform: "scaleX(1)" }} />
        </div>

        {/* Tab Switcher Buttons / Avatars Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-impulse-cyan text-impulse-ink border-impulse-cyan shadow-[0_0_25px_rgba(34,179,184,0.5)] font-bold scale-105"
                  : "bg-[#044353]/30 text-white/80 border-white/10 hover:border-impulse-cyan/40 hover:bg-[#044353]/60"
              }`}
              data-cursor
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                  activeIndex === idx
                    ? "bg-impulse-ink text-impulse-cyan"
                    : "bg-white/10 text-white"
                }`}
              >
                {item.avatarText}
              </span>
              <span className="font-mono text-xs tracking-wider uppercase whitespace-nowrap">
                {item.name.split(" ")[0]} {item.name.split(" ").slice(-1)[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
