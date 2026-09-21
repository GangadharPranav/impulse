"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface EventItem {
  id: string;
  month: string;
  day: string;
  year: string;
  category: string;
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationOpen: boolean;
  link: string;
}

const EVENTS: EventItem[] = [
  {
    id: "praxis-26",
    month: "MAR",
    day: "14",
    year: "2026",
    category: "FLAGSHIP CONCLAVE",
    title: "PRAXIS '26: Annual National Case & Strategic Debate Conclave",
    time: "09:30 AM - 07:00 PM IST",
    location: "Main Auditorium & SAC Chambers, BVRIT Narsapur",
    description:
      "Witness 80+ collegiate teams tackle live corporate turnaround mandates evaluated by Senior Partners from McKinsey, BCG, and venture leaders.",
    image: "/bg/praxis_summit.jpg",
    registrationOpen: true,
    link: "#praxis",
  },
  {
    id: "the-arena",
    month: "APR",
    day: "04",
    year: "2026",
    category: "CRISIS WAR ROOM",
    title: "The Arena: Unscripted Hostile Takeover & Boardroom Drill",
    time: "02:00 PM - 06:30 PM IST",
    location: "Executive Seminar Hall 3, Academic Block A",
    description:
      "A fast-paced, high-pressure crisis scenario with breaking mock-press reports, real-time market trading halt simulations, and hostile board proxy fights.",
    image: "/bg/boardroom_crisis.jpg",
    registrationOpen: true,
    link: "#initiatives",
  },
  {
    id: "mbb-masterclass",
    month: "APR",
    day: "25",
    year: "2026",
    category: "EXECUTIVE MASTERCLASS",
    title: "Cracking The MBB Case: Structured Problem Solving with Pyramid Principles",
    time: "10:00 AM - 01:30 PM IST",
    location: "Virtual Global Webinar & Hybrid Campus Studio",
    description:
      "Comprehensive masterclass hosted by IMPULSE alumni practicing at McKinsey & Company on hypothesis-driven issue trees and client communications.",
    image: "/bg/about_thinking.jpg",
    registrationOpen: true,
    link: "#initiatives",
  },
  {
    id: "ma-forum",
    month: "MAY",
    day: "18",
    year: "2026",
    category: "ANNUAL RESEARCH FORUM",
    title: "Indian Cross-Border M&A & Private Equity Valuation Summit",
    time: "11:00 AM - 05:00 PM IST",
    location: "Conference Hall B & Live Stream",
    description:
      "Release of the IMPULSE 2026 Emerging Markets Valuation Paper, followed by panel deliberations with tier-1 private equity investment directors.",
    image: "/bg/debate_arena.jpg",
    registrationOpen: false,
    link: "#initiatives",
  },
];

export default function IsbEventsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents = filter === "all"
    ? EVENTS
    : EVENTS.filter(e => e.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#22B3B8]" />
              <span className="text-[11px] font-mono tracking-[0.24em] text-[#22B3B8] uppercase font-bold">
                CAMPUS CALENDAR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#033744] tracking-tight">
              Upcoming Events &amp; Conclaves
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg font-sans">
              Engage with thought leaders, test your strategic acumen in live simulations, and attend masterclasses hosted across our chapters.
            </p>
          </div>

          <Link
            href="#initiatives"
            className="self-start md:self-end inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#08747E] hover:text-[#22B3B8] transition-colors"
          >
            <span>VIEW FULL CALENDAR</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-slate-200">
          {[
            { label: "All Events", value: "all" },
            { label: "Flagship Conclave", value: "flagship" },
            { label: "Crisis War Room", value: "crisis" },
            { label: "Executive Masterclasses", value: "masterclass" },
            { label: "Research Forums", value: "research" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider transition-all uppercase rounded-none ${
                filter === tab.value
                  ? "bg-[#033744] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-300 hover:border-[#22B3B8] hover:text-[#033744]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#22B3B8] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start gap-5">
                  {/* ISB Signature Date Badge */}
                  <div className="tagDate flex-shrink-0">
                    <span className="month">{event.month}</span>
                    <span className="day">{event.day}</span>
                  </div>

                  {/* Header info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#22B3B8]">
                        {event.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {event.time}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#033744] group-hover:text-[#08747E] transition-colors leading-snug">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Event Image preview */}
                <div className="mt-5 relative h-44 w-full overflow-hidden bg-slate-100 border border-slate-100">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                    <span className="flex items-center gap-1.5 drop-shadow">
                      <svg className="w-3.5 h-3.5 text-[#22B3B8]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed font-sans">
                  {event.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={event.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#08747E] hover:text-[#22B3B8]"
                >
                  <span>EVENT DETAILS &amp; ITINERARY</span>
                  <span>&rarr;</span>
                </Link>

                {event.registrationOpen ? (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#22B3B8] animate-pulse" />
                    REGISTRATION OPEN
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    REGISTRATION CLOSED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
