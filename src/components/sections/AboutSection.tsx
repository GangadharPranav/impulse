"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden"
    >
      {/* AI Generated Brain Background — subtle ambient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/bg/about_thinking.jpg"
          alt="Neural Network Thinking"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-impulse-abyss via-impulse-abyss/85 to-impulse-abyss" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Full-bleed section headline (E-Cell wide approach) */}
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-0.5 bg-impulse-cyan" />
            <span className="eyebrow-tag">01 // THE THESIS</span>
          </div>
          <h2
            className="font-display font-extrabold tracking-[-0.03em] text-white leading-none max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
          >
            Most students consume ideas.{" "}
            <span
              className="text-impulse-cyan"
              style={{
                textShadow: "0 0 40px rgba(34,179,184,0.4)",
              }}
            >
              We force you
            </span>{" "}
            to defend them.
          </h2>
        </div>

        {/* Asymmetric Split: Image + Copy Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: AI Brain Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-impulse-cyan/25 shadow-[0_0_60px_rgba(34,179,184,0.15)] aspect-[4/3]">
              <Image
                src="/bg/about_thinking.jpg"
                alt="Neural Network — Critical Thinking Visualization"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-impulse-abyss via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-impulse-abyss/80 backdrop-blur-md border border-impulse-cyan/30 rounded-xl p-4 font-mono text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full border border-impulse-cyan flex items-center justify-center">
                      <span className="w-1 h-1 bg-impulse-cyan rounded-full" />
                    </span>
                    <span className="text-impulse-cyan tracking-wider">3D SPINE // STAGE 02</span>
                  </div>
                  <p className="text-impulse-fog/60 text-[11px] tracking-wider pl-4">
                    Glass envelope dissolves · Filament fragments into 6 analytical facets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Three High-Impact Copy Blocks */}
          <div className="lg:col-span-7 space-y-8">
            {[
              {
                num: "[01]",
                tag: "THE PROBLEM",
                title: "Passive Knowledge Collapses Under Cross-Examination",
                body: "Campus placements, tier-one corporate case comps, and executive boardrooms don't evaluate textbook regurgitation. They test intellectual composure, logical resilience, and whether your conclusions hold when an adversarial panel dismantles your base assumptions.",
              },
              {
                num: "[02]",
                tag: "THE SIMULATION",
                title: "An Unscripted Tactical Arena",
                body: "IMPULSE operates without scripts or pre-baked slides. Every week, members step into high-pressure war games: sudden operational bankruptcies, hostile media scrums, and spontaneous 12-person GD combats where only structured clarity survives.",
              },
              {
                num: "[03]",
                tag: "THE OUTCOME",
                title: "Defensible Decisions Under Cognitive Duress",
                body: "We cultivate thinkers who articulate with surgical precision. You leave with commanding executive presence, the instinct to spot fallacies in seconds, and the confidence to lead high-stakes discussions anywhere in the world.",
              },
            ].map((block, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-impulse-cyan/20 bg-impulse-surface/40 backdrop-blur-sm space-y-3 relative hover:border-impulse-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,179,184,0.1)] overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-impulse-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="font-mono text-xs text-impulse-cyan/70 font-semibold tracking-wider">
                    {block.num} {block.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                    {block.title}
                  </h3>
                  <p className="text-impulse-fog text-base leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Bleed Pull-Quote */}
        <div className="mt-24 pt-16 border-t border-impulse-cyan/25 text-center px-4">
          <p className="eyebrow-tag text-impulse-cyan mb-4">THE IMPULSE MANDATE</p>
          <blockquote
            className="font-display font-extrabold text-white max-w-5xl mx-auto leading-tight tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)" }}
          >
            &ldquo;Turn students into thinkers, communicators, and
            decision-makers.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
