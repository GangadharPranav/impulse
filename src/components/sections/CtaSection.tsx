"use client";

import { useState } from "react";
import Image from "next/image";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    branchYear: "",
    email: "",
    topic: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="join"
      className="relative py-28 px-6 sm:px-12 bg-impulse-abyss border-b border-impulse-cyan/15 overflow-hidden scroll-mt-10"
    >
      <div id="auditions" className="absolute -top-20" />
      <div id="register" className="absolute -top-20" />
      {/* Full-bleed AI Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/bg/praxis_summit.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-impulse-abyss via-impulse-abyss/70 to-impulse-abyss" />
      </div>

      {/* Background Subtle Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-impulse-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-impulse-cyan animate-ping" />
            <span className="eyebrow-tag">07 // THE REASSEMBLY &bull; AUDITIONS</span>
          </div>
          <h2 className="display-headline text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Claim Your Seat in the Chamber
          </h2>
          <p className="text-impulse-fog text-base sm:text-lg leading-relaxed">
            The fragments lock into a cohesive decision. Auditions for the next
            cohort are now open. We don&apos;t screen for GPAs; we screen for
            conviction.
          </p>
        </div>

        {/* 3D Spine Reassembly Indicator */}
        <div className="p-4 rounded-xl border border-impulse-cyan/30 bg-impulse-surface/40 backdrop-blur-sm flex items-center justify-between font-mono text-xs text-impulse-cyan">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-impulse-cyan shadow-[0_0_10px_#3FE3E8]" />
            <span>3D SPINE // STAGE 04: MAGNETIC SNAP &amp; FLUX FLARE</span>
          </div>
          <span className="hidden sm:inline text-impulse-fog/50">
            6 SHARDS &rarr; 1 MONOLITH
          </span>
        </div>

        {/* 4-Field Minimalist Form */}
        <div className="p-8 sm:p-12 rounded-3xl border border-impulse-cyan/30 bg-impulse-surface/50 backdrop-blur-md shadow-[0_0_50px_rgba(3,55,68,0.7)]">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-impulse-cyan bg-impulse-abyss flex items-center justify-center mx-auto text-impulse-cyan text-2xl font-mono shadow-[0_0_20px_rgba(34,179,184,0.5)]">
                ✓
              </div>
              <h3 className="display-headline text-2xl sm:text-3xl font-bold text-white">
                Dossier Received
              </h3>
              <p className="text-impulse-fog max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Your transmission has been routed to the IMPULSE Crisis Council.
                Watch your inbox for the chamber briefing location and initial case
                prompt.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 font-mono text-xs text-impulse-cyan underline tracking-widest uppercase hover:text-white"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field 1: Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-wider text-impulse-cyan block"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Aditi Sharma"
                    className="w-full px-4 py-3.5 rounded-xl border border-impulse-cyan/30 bg-impulse-abyss text-white placeholder-impulse-fog/40 focus:border-impulse-cyan focus:outline-none focus:ring-1 focus:ring-impulse-cyan transition-colors"
                  />
                </div>

                {/* Field 2: Branch & Year */}
                <div className="space-y-2">
                  <label
                    htmlFor="branchYear"
                    className="font-mono text-xs uppercase tracking-wider text-impulse-cyan block"
                  >
                    Branch &amp; Year *
                  </label>
                  <input
                    id="branchYear"
                    type="text"
                    required
                    value={formData.branchYear}
                    onChange={(e) =>
                      setFormData({ ...formData, branchYear: e.target.value })
                    }
                    placeholder="e.g. CSE, 3rd Year"
                    className="w-full px-4 py-3.5 rounded-xl border border-impulse-cyan/30 bg-impulse-abyss text-white placeholder-impulse-fog/40 focus:border-impulse-cyan focus:outline-none focus:ring-1 focus:ring-impulse-cyan transition-colors"
                  />
                </div>
              </div>

              {/* Field 3: Institute Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-xs uppercase tracking-wider text-impulse-cyan block"
                >
                  Institute / Preferred Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="e.g. aditi.22b@bvrit.ac.in"
                  className="w-full px-4 py-3.5 rounded-xl border border-impulse-cyan/30 bg-impulse-abyss text-white placeholder-impulse-fog/40 focus:border-impulse-cyan focus:outline-none focus:ring-1 focus:ring-impulse-cyan transition-colors"
                />
              </div>

              {/* Field 4: The Core Filter Question */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="topic"
                    className="font-mono text-xs uppercase tracking-wider text-impulse-cyan block"
                  >
                    The 20-Minute Challenge *
                  </label>
                  <span className="font-mono text-[10px] text-impulse-fog/50">
                    OUR PRIMARY SCREENING FILTER
                  </span>
                </div>
                <textarea
                  id="topic"
                  rows={4}
                  required
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  placeholder="What controversial topic, corporate dilemma, or hypothesis would you argue about for 20 minutes without notes?"
                  className="w-full px-4 py-3.5 rounded-xl border border-impulse-cyan/30 bg-impulse-abyss text-white placeholder-impulse-fog/40 focus:border-impulse-cyan focus:outline-none focus:ring-1 focus:ring-impulse-cyan transition-colors text-sm leading-relaxed"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-impulse-cyan text-impulse-ink font-mono font-bold text-xs tracking-[0.2em] uppercase hover:bg-impulse-glow hover:shadow-[0_0_30px_rgba(63,227,232,0.6)] transition-all duration-300 active:scale-95"
              >
                Request Arena Briefing &rarr;
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
