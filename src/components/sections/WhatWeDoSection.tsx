"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Light up skill bars on scroll
      const bars = barsRef.current?.querySelectorAll(".skill-fill-bar");
      if (bars) {
        gsap.fromTo(
          bars,
          { width: "0%" },
          {
            width: "100%",
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: barsRef.current,
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
      id="tracks"
      className="relative py-28 px-6 sm:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-0.5 bg-impulse-cyan" />
            <span className="eyebrow-tag">02 // CORE TRACKS</span>
          </div>
          <h2 className="display-headline text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Two Pillars of Combat Intellect
          </h2>
          <p className="text-impulse-fog text-lg leading-relaxed">
            Rigorous breakdown of multi-variable corporate dilemmas coupled with
            high-tempo spontaneous public discourse.
          </p>
        </div>

        {/* Two Tall Panels Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel A: Case Study Analysis */}
          <div className="p-8 sm:p-10 rounded-3xl border border-impulse-cyan/30 bg-impulse-surface/40 backdrop-blur-md space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-impulse-cyan/20 pb-4">
                <span className="eyebrow-tag text-impulse-cyan">TRACK ALPHA</span>
                <span className="font-mono text-xs text-impulse-fog/60">
                  DECONSTRUCT // SYNTHESIZE
                </span>
              </div>
              <h3 className="display-headline text-2xl sm:text-4xl text-white font-bold">
                Case Study Analysis
              </h3>
              <p className="text-impulse-fog text-sm sm:text-base leading-relaxed">
                Break apart authentic McKinsey, BCG, and Harvard business
                cases under timed constraints. Defend recommendations against
                hostile cross-examination.
              </p>
            </div>

            {/* Vertical Numbered Sequence (Not a card grid) */}
            <div className="space-y-6 pt-4 border-t border-impulse-cyan/15">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  01
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Root Cause Diagnosis
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Separating symptom noise from foundational operational and
                    market failure points.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  02
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Constraint-Based Financial Modeling
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Back-of-the-envelope sanity checks and capital-efficiency
                    evaluations in real time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  03
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Stress-Testing Strategic Roadmaps
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Anticipating regulatory backlashes, competitor retaliation,
                    and internal supply bottlenecks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  04
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Executive Deliverable Delivery
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Distilling 40-page ambiguous scenarios into defensible 3-minute
                    boardroom pitches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Panel B: Group Discussion Arena */}
          <div className="p-8 sm:p-10 rounded-3xl border border-impulse-cyan/30 bg-impulse-surface/40 backdrop-blur-md space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-impulse-cyan/20 pb-4">
                <span className="eyebrow-tag text-impulse-cyan">TRACK BRAVO</span>
                <span className="font-mono text-xs text-impulse-fog/60">
                  ORATE // COMMAND
                </span>
              </div>
              <h3 className="display-headline text-2xl sm:text-4xl text-white font-bold">
                Group Discussion Arena
              </h3>
              <p className="text-impulse-fog text-sm sm:text-base leading-relaxed">
                Step into spontaneous 12-person discussion fishbowls. Learn how
                to command attention without shouting, steer runaway topics, and
                synthesize disparate views.
              </p>
            </div>

            {/* Vertical Numbered Sequence */}
            <div className="space-y-6 pt-4 border-t border-impulse-cyan/15">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  01
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    The First 60 Seconds Anchor
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Framing the perimeter of the debate immediately before the
                    circle spirals into chaos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  02
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Tactical Interruption &amp; Pivot
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Gracefully cutting through repetitive monologues using
                    fact-based counters and directional questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  03
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Real-Time Counter-Synthesis
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Absorbing an opponent&apos;s point, exposing its boundary
                    limitations, and building a stronger thesis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-impulse-cyan bg-impulse-cyan/10 px-2.5 py-1 rounded border border-impulse-cyan/30">
                  04
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    Composure &amp; Vocal Modulation
                  </h4>
                  <p className="text-impulse-fog/80 text-sm mt-0.5">
                    Mastering deliberate pauses, pitch control, and unshakable
                    non-verbal presence under pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Development Fill Bars (No fake percentages, just lit labels) */}
        <div
          ref={barsRef}
          className="pt-12 border-t border-impulse-cyan/20 space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="eyebrow-tag text-impulse-cyan">
                COMPETENCY PROGRESSION
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                Calibrated Executive Capabilities
              </h3>
            </div>
            <span className="font-mono text-xs text-impulse-fog/60">
              ACTIVATION SEQUENCE
            </span>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Critical Thinking",
                tag: "DECONSTRUCTION OF LOGICAL FALLACIES",
              },
              {
                title: "Logical Reasoning & Evidence Framing",
                tag: "FIRST-PRINCIPLES ARGUMENTATION",
              },
              {
                title: "Macro Business Acumen & Industry Intuition",
                tag: "FINANCIAL & OPERATIONAL SYSTEMS",
              },
              {
                title: "Communication Mastery & Vocal Authority",
                tag: "UNSCRIPTED ADVERSARIAL DELIVERY",
              },
              {
                title: "Leadership & High-Stakes Decision-Making",
                tag: "COMPOSE UNDER CONFLICT",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-impulse-cyan/20 bg-impulse-abyss/80 relative overflow-hidden"
              >
                {/* Lit Fill Bar */}
                <div className="skill-fill-bar absolute inset-y-0 left-0 bg-gradient-to-r from-impulse-cyan/15 via-impulse-cyan/25 to-impulse-cyan/40 border-r-2 border-impulse-cyan transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-impulse-cyan font-bold">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {skill.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-impulse-cyan/90 uppercase">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
