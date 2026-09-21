"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  id: string;
  name: string;
  badge: string;
  highlight: string;
  summary: string;
  category: "GLOBAL" | "CORPORATE" | "ACADEMIC" | "MEDIA";
}

const milestones: Milestone[] = [
  {
    id: "forbes",
    name: "FORBES ASIA",
    badge: "MEDIA SPOTLIGHT",
    highlight: "Student Leadership & Case Culture Feature",
    summary:
      "Recognized for fostering corporate-readiness and unstructured crisis resolution in tier-2 collegiate ecosystems.",
    category: "MEDIA",
  },
  {
    id: "nasdaq",
    name: "NASDAQ TOWER",
    badge: "NEW YORK",
    highlight: "Times Square International Honor",
    summary:
      "Broadcast on the iconic NASDAQ screen celebrating student entrepreneurship and decision-making societies.",
    category: "GLOBAL",
  },
  {
    id: "shibuya",
    name: "SHIBUYA CROSSING",
    badge: "TOKYO",
    highlight: "Global Youth Vanguard Spotlight",
    summary:
      "Featured across Tokyo's massive media facades during the International Collegiate Case Symposium.",
    category: "GLOBAL",
  },
  {
    id: "gcc",
    name: "EUREKA! GCC",
    badge: "INTERNATIONAL",
    highlight: "Semi-Finalist Strategy Syndicate",
    summary:
      "Competed across 500+ global teams, crafting scalable market-entry frameworks for cross-border logistics.",
    category: "GLOBAL",
  },
  {
    id: "iima",
    name: "IIM AHMEDABAD",
    badge: "CONFLUENCE '25",
    highlight: "National Case Championship Podium",
    summary:
      "Defended an M&A turn-around model against 64 finalist teams before a panel of senior strategy consultants.",
    category: "ACADEMIC",
  },
  {
    id: "hbp",
    name: "HARVARD BUSINESS",
    badge: "CURRICULUM",
    highlight: "Case Publishing Study Partner",
    summary:
      "Analyzing licensed Harvard and INSEAD management cases as the gold standard for our weekly Case Lab sessions.",
    category: "ACADEMIC",
  },
  {
    id: "mckinsey",
    name: "McKINSEY & CO.",
    badge: "STRATEGY SPRINT",
    highlight: "National Case Challenge Quarter-Finals",
    summary:
      "Authored an enterprise decarbonization road-map commended for MECE rigor and financial sensitivity analysis.",
    category: "CORPORATE",
  },
  {
    id: "bain",
    name: "BAIN & COMPANY",
    badge: "MENTORSHIP PIPELINE",
    highlight: "Direct Consulting Network & Masterclasses",
    summary:
      "Alumni and engagement managers conduct private problem-solving teardowns for the IMPULSE senior cohort.",
    category: "CORPORATE",
  },
];

export default function GlobalReachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = cardsRef.current?.querySelectorAll(".reach-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
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
      id="reach"
      className="relative py-28 px-5 sm:px-8 xl:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-impulse-cyan shadow-[0_0_8px_var(--impulse-cyan)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.24em] text-impulse-cyan uppercase">
                04 // GLOBAL FOOTPRINT
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-white tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 5rem)" }}
            >
              Global Reach &amp; Media Highlights
            </h2>
            <p className="text-impulse-fog/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              From Shibuya screen displays to Times Square NASDAQ features and IIM podiums—IMPULSE’s 
              reputation for relentless rigor has garnered premier national and international recognition.
            </p>
          </div>

          <div className="font-mono text-xs tracking-wider text-impulse-cyan/80 bg-impulse-surface/60 border border-impulse-cyan/30 px-4 py-2.5 rounded-full backdrop-blur-sm self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-impulse-cyan animate-pulse" />
            <span>GLOBAL SYNDICATE REACH</span>
          </div>
        </div>

        {/* 8 Media & Milestone Badges Grid (Grayscale-to-Color Hover & Scroll Reveal) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {milestones.map((item) => (
            <div
              key={item.id}
              className="reach-item group relative p-7 rounded-2xl border border-white/10 hover:border-impulse-cyan/60 bg-[#044353]/25 hover:bg-[#044353]/50 backdrop-blur-md space-y-4 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(34,179,184,0.18)] flex flex-col justify-between overflow-hidden"
              data-cursor
            >
              {/* Top Header: Badge & Category */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.24em] text-impulse-cyan uppercase border border-impulse-cyan/30 px-2 py-0.5 rounded bg-impulse-abyss/60">
                    {item.badge}
                  </span>
                  <span className="font-mono text-[9px] text-white/50 tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* Brand Name with Grayscale to Full Cyan Transition */}
                <h3 className="font-display font-black text-2xl tracking-tight text-white/75 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(34,179,184,0.5)] transition-all duration-300">
                  {item.name}
                </h3>

                {/* Highlight */}
                <h4 className="font-mono text-xs font-semibold text-impulse-cyan tracking-wide">
                  {item.highlight}
                </h4>

                {/* Summary */}
                <p className="text-xs text-impulse-fog/70 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Micro Marker */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40 group-hover:text-impulse-cyan transition-colors">
                <span>VERIFIED RECORD</span>
                <span>↗</span>
              </div>

              <div className="kage-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
