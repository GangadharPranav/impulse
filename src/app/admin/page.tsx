"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  useImpulseStore,
  ImpulseEvent,
  Winner,
  TimelineMilestone,
  ClubMember,
} from "@/lib/store";
import { useHydrated } from "@/hooks/useHydrated";

export default function AdminPortalPage() {
  const store = useImpulseStore();
  const mounted = useHydrated();
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"winners" | "events" | "members" | "timeline" | "backup">("winners");

  // Winner Form State
  const [newWinner, setNewWinner] = useState({
    eventTitle: "PRAXIS '26 CEO Challenge",
    edition: "Spring 2026",
    rank: "1st Place" as Winner["rank"],
    teamName: "",
    members: "",
    college: "",
    prizeAmount: "₹25,000",
    citation: "",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  });

  // Event Form State
  const [newEvent, setNewEvent] = useState({
    title: "",
    category: "Flagship Conclave" as ImpulseEvent["category"],
    month: "MAY",
    day: "10",
    year: "2026",
    time: "10:00 AM - 04:00 PM IST",
    location: "Auditorium, BVRIT Narsapur",
    description: "",
    prizePool: "₹50,000",
    registrationOpen: true,
    image: "/bg/praxis_summit.jpg",
    link: "/events",
  });

  // Member Form State
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    vertical: "Strategy & Case Design" as ClubMember["vertical"],
    bio: "",
    email: "",
    isExecutive: false,
  });

  // Timeline Form State
  const [newMilestone, setNewMilestone] = useState({
    quarter: "Q2",
    year: "2026",
    category: "TOURNAMENT",
    title: "",
    detail: "",
    status: "Completed" as TimelineMilestone["status"],
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const success = store.loginAdmin(passcode);
    if (!success) {
      setAuthError("Invalid club member passkey. Please check with your vertical lead.");
    }
  };

  const handleAddWinner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWinner.teamName || !newWinner.citation) {
      alert("Please enter team name and jury citation.");
      return;
    }
    store.addWinner({
      eventId: `event-${Date.now()}`,
      eventTitle: newWinner.eventTitle,
      edition: newWinner.edition,
      rank: newWinner.rank,
      teamName: newWinner.teamName,
      members: newWinner.members.split(",").map((s) => s.trim()).filter(Boolean),
      college: newWinner.college || "BVRIT Narsapur",
      prizeAmount: newWinner.prizeAmount,
      citation: newWinner.citation,
      date: newWinner.date,
    });
    setNewWinner({
      ...newWinner,
      teamName: "",
      members: "",
      college: "",
      citation: "",
    });
    showNotification("🏆 Winner announcement published successfully! Now live on /winners.");
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.description) {
      alert("Please provide an event title and description.");
      return;
    }
    store.addEvent({
      ...newEvent,
    });
    setNewEvent({
      ...newEvent,
      title: "",
      description: "",
    });
    showNotification("📅 New event created successfully! Now live on /events.");
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMember.name || !newMember.role) {
      alert("Please provide member name and role.");
      return;
    }
    store.addMember({
      ...newMember,
    });
    setNewMember({
      ...newMember,
      name: "",
      role: "",
      bio: "",
      email: "",
    });
    showNotification("👥 Member profile added successfully! Now live on /members.");
  };

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMilestone.title || !newMilestone.detail) {
      alert("Please provide milestone title and detail.");
      return;
    }
    store.addMilestone({
      ...newMilestone,
    });
    setNewMilestone({
      ...newMilestone,
      title: "",
      detail: "",
    });
    showNotification("⏳ Milestone recorded successfully! Now live on /timeline.");
  };

  if (!mounted) return null;

  // ── 01: Locked State (Club Member Passkey Terminal) ──
  if (!store.isAdminAuthenticated) {
    return (
      <div className="pt-28 pb-20 px-4 min-h-screen bg-[#050e12] flex items-center justify-center text-[#E8EEF0]">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#03242e]/90 border border-[#22B3B8]/40 shadow-[0_0_50px_rgba(34,179,184,0.2)] space-y-6 relative overflow-hidden backdrop-blur-md">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-[#02181e] border border-[#22B3B8]/50 flex items-center justify-center mx-auto text-2xl shadow-inner">
              🔒
            </div>
            <h1 className="text-2xl font-serif font-bold text-white tracking-tight">
              IMPULSE Member Portal
            </h1>
            <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
              BVRIT NARSAPUR &bull; RESTRICTED ACCESS
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-[#22B3B8] mb-1.5 uppercase font-bold">
                Enter Club Passkey / Member PIN:
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="e.g. IMPULSE2026"
                required
                className="w-full bg-[#02181e] border border-[#22B3B8]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#22B3B8]"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-mono">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] font-mono font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(34,179,184,0.4)]"
            >
              Verify Credentials &rarr;
            </button>

            <div className="p-3 rounded-xl bg-[#02181e] border border-white/10 text-[11px] font-mono text-slate-400 text-center">
              <span>Club Member Demo Key: </span>
              <button
                type="button"
                onClick={() => setPasscode("IMPULSE2026")}
                className="text-[#22B3B8] underline font-bold"
              >
                IMPULSE2026
              </button>
            </div>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white">
              &larr; Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── 02: Authenticated Admin Dashboard ──
  return (
    <div className="pt-24 sm:pt-28 w-full bg-[#050e12] text-[#E8EEF0] min-h-screen pb-24">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-5 z-50 p-4 rounded-xl bg-emerald-900/95 border border-emerald-400 text-emerald-100 font-mono text-xs shadow-2xl animate-bounce">
          {notification}
        </div>
      )}

      {/* Header Bar */}
      <section className="py-8 px-5 sm:px-8 xl:px-12 border-b border-[#22B3B8]/20 bg-[#022129]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                AUTHENTICATED &bull; CLUB SECRETARIAT
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
              IMPULSE Management Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/winners"
              className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-slate-300 hover:text-white"
            >
              View /winners 🏆
            </Link>
            <Link
              href="/events"
              className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-slate-300 hover:text-white"
            >
              View /events 📅
            </Link>
            <button
              onClick={() => store.logoutAdmin()}
              className="px-4 py-2 rounded-full bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-mono hover:bg-red-900 transition-colors"
            >
              Lock / Exit Portal
            </button>
          </div>
        </div>
      </section>

      {/* Summary KPI Strip */}
      <section className="py-6 px-5 sm:px-8 xl:px-12 bg-[#032a34]/40 border-b border-[#22B3B8]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
          <div className="p-4 rounded-2xl bg-[#02181e] border border-[#22B3B8]/20">
            <span className="text-slate-400 text-[10px] uppercase block">TOTAL EVENTS</span>
            <span className="text-2xl font-bold text-[#3FE3E8]">{store.events.length}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#02181e] border border-[#22B3B8]/20">
            <span className="text-slate-400 text-[10px] uppercase block">ANNOUNCED WINNERS</span>
            <span className="text-2xl font-bold text-amber-300">{store.winners.length}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#02181e] border border-[#22B3B8]/20">
            <span className="text-slate-400 text-[10px] uppercase block">MILESTONES RECORDED</span>
            <span className="text-2xl font-bold text-white">{store.timeline.length}</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#02181e] border border-[#22B3B8]/20">
            <span className="text-slate-400 text-[10px] uppercase block">ACTIVE MEMBERS</span>
            <span className="text-2xl font-bold text-[#22B3B8]">{store.members.length}</span>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-4 px-5 sm:px-8 xl:px-12 bg-[#02181e] border-b border-[#22B3B8]/20 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {[
            { id: "winners", label: "🏆 Announce & Manage Winners" },
            { id: "events", label: "📅 Manage Events" },
            { id: "members", label: "👥 Manage Members" },
            { id: "timeline", label: "⏳ Edit Milestones" },
            { id: "backup", label: "⚙️ System & Defaults" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-[#22B3B8] text-[#033744] shadow-[0_0_15px_rgba(34,179,184,0.4)]"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Panels */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-10">

        {/* ── TAB 1: WINNERS ── */}
        {activeTab === "winners" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-[#03232c] border border-[#22B3B8]/30 space-y-4 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white">
                Announce New Event Winner
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Publish a podium result instantly to the public Winners page.
              </p>

              <form onSubmit={handleAddWinner} className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-[#22B3B8] block mb-1">Event Title:</label>
                  <input
                    type="text"
                    value={newWinner.eventTitle}
                    onChange={(e) => setNewWinner({ ...newWinner, eventTitle: e.target.value })}
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#22B3B8] block mb-1">Edition:</label>
                    <input
                      type="text"
                      value={newWinner.edition}
                      onChange={(e) => setNewWinner({ ...newWinner, edition: e.target.value })}
                      placeholder="e.g. Spring 2026"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[#22B3B8] block mb-1">Podium Standing:</label>
                    <select
                      value={newWinner.rank}
                      onChange={(e) => setNewWinner({ ...newWinner, rank: e.target.value as any })}
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    >
                      <option value="1st Place">1st Place (Gold)</option>
                      <option value="2nd Place">2nd Place (Silver)</option>
                      <option value="3rd Place">3rd Place (Bronze)</option>
                      <option value="Special Mention">Special Mention</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Team Name:</label>
                  <input
                    type="text"
                    value={newWinner.teamName}
                    onChange={(e) => setNewWinner({ ...newWinner, teamName: e.target.value })}
                    placeholder="e.g. The Strategic Syndicate"
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Delegates / Member Names (comma-separated):</label>
                  <input
                    type="text"
                    value={newWinner.members}
                    onChange={(e) => setNewWinner({ ...newWinner, members: e.target.value })}
                    placeholder="e.g. Rohan Sharma, Ananya Sen"
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#22B3B8] block mb-1">College / Institution:</label>
                    <input
                      type="text"
                      value={newWinner.college}
                      onChange={(e) => setNewWinner({ ...newWinner, college: e.target.value })}
                      placeholder="e.g. BVRIT Narsapur"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[#22B3B8] block mb-1">Prize / Cash Won:</label>
                    <input
                      type="text"
                      value={newWinner.prizeAmount}
                      onChange={(e) => setNewWinner({ ...newWinner, prizeAmount: e.target.value })}
                      placeholder="e.g. ₹30,000"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Jury Citation / Commendation:</label>
                  <textarea
                    rows={3}
                    value={newWinner.citation}
                    onChange={(e) => setNewWinner({ ...newWinner, citation: e.target.value })}
                    placeholder="Describe how the team defended their model or won the debate arena..."
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] font-bold py-3 rounded-xl uppercase tracking-wider transition-all"
                >
                  Publish Winner Announcement &rarr;
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">
                Live Winners Announcements ({store.winners.length})
              </h3>
              <div className="space-y-3">
                {store.winners.map((w) => (
                  <div
                    key={w.id}
                    className="p-4 rounded-2xl bg-[#03232c] border border-white/10 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-400">{w.rank}</span>
                        <span className="text-slate-400 text-xs font-mono">&bull;</span>
                        <span className="text-xs font-mono text-[#22B3B8]">{w.eventTitle}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">{w.teamName}</h4>
                      <p className="text-xs text-slate-300 font-sans mt-0.5">{w.college} &bull; {w.prizeAmount}</p>
                      <p className="text-xs text-slate-400 italic font-sans mt-1">&ldquo;{w.citation}&rdquo;</p>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm(`Delete winner entry for "${w.teamName}"?`)) {
                          store.deleteWinner(w.id);
                          showNotification("Entry removed.");
                        }
                      }}
                      className="text-red-400 hover:text-red-200 font-mono text-xs px-2.5 py-1 bg-red-950/40 rounded border border-red-500/30"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: EVENTS ── */}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-[#03232c] border border-[#22B3B8]/30 space-y-4 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white">
                Create / Publish Event
              </h3>

              <form onSubmit={handleAddEvent} className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-[#22B3B8] block mb-1">Event Title:</label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="e.g. PRAXIS '26 CEO Challenge"
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Category:</label>
                  <select
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value as any })}
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="Flagship Conclave">Flagship Conclave</option>
                    <option value="Crisis War Room">Crisis War Room</option>
                    <option value="Executive Masterclass">Executive Masterclass</option>
                    <option value="Research Forum">Research Forum</option>
                    <option value="General Debate">General Debate</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[#22B3B8] block mb-1">Month:</label>
                    <input
                      type="text"
                      value={newEvent.month}
                      onChange={(e) => setNewEvent({ ...newEvent, month: e.target.value })}
                      placeholder="e.g. MAY"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white uppercase"
                    />
                  </div>
                  <div>
                    <label className="text-[#22B3B8] block mb-1">Day:</label>
                    <input
                      type="text"
                      value={newEvent.day}
                      onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })}
                      placeholder="e.g. 14"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[#22B3B8] block mb-1">Year:</label>
                    <input
                      type="text"
                      value={newEvent.year}
                      onChange={(e) => setNewEvent({ ...newEvent, year: e.target.value })}
                      placeholder="2026"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Time &amp; Location:</label>
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    placeholder="e.g. Main Auditorium & SAC Chambers"
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Prize Pool / Award:</label>
                  <input
                    type="text"
                    value={newEvent.prizePool}
                    onChange={(e) => setNewEvent({ ...newEvent, prizePool: e.target.value })}
                    placeholder="e.g. ₹75,000"
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Description:</label>
                  <textarea
                    rows={3}
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Mandate details, rounds, timeline..."
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white font-sans text-xs"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="regOpen"
                    checked={newEvent.registrationOpen}
                    onChange={(e) => setNewEvent({ ...newEvent, registrationOpen: e.target.checked })}
                    className="w-4 h-4 accent-[#22B3B8]"
                  />
                  <label htmlFor="regOpen" className="text-white cursor-pointer">
                    Registration is Open
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] font-bold py-3 rounded-xl uppercase tracking-wider transition-all"
                >
                  Publish Event &rarr;
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">
                Active Conclaves &amp; Events ({store.events.length})
              </h3>
              <div className="space-y-3">
                {store.events.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 rounded-2xl bg-[#03232c] border border-white/10 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#22B3B8]">{evt.month} {evt.day}, {evt.year}</span>
                        <span className="text-slate-400 text-xs font-mono">&bull;</span>
                        <span className="text-xs font-mono text-slate-300">{evt.category}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">{evt.title}</h4>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">{evt.location}</p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => {
                          store.updateEvent(evt.id, { registrationOpen: !evt.registrationOpen });
                          showNotification(`Registration ${!evt.registrationOpen ? "Opened" : "Closed"}.`);
                        }}
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${
                          evt.registrationOpen
                            ? "bg-emerald-950 text-emerald-300 border-emerald-500/40"
                            : "bg-slate-800 text-slate-400 border-slate-600"
                        }`}
                      >
                        {evt.registrationOpen ? "Open" : "Closed"}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete event "${evt.title}"?`)) {
                            store.deleteEvent(evt.id);
                            showNotification("Event deleted.");
                          }
                        }}
                        className="text-red-400 hover:text-red-200 font-mono text-xs px-2 py-1 bg-red-950/40 rounded border border-red-500/30"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: MEMBERS ── */}
        {activeTab === "members" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-[#03232c] border border-[#22B3B8]/30 space-y-4 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white">
                Add Syndicate Member
              </h3>

              <form onSubmit={handleAddMember} className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-[#22B3B8] block mb-1">Full Name:</label>
                  <input
                    type="text"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Rao"
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Designation / Role:</label>
                  <input
                    type="text"
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    placeholder="e.g. Lead Case Architect"
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Tactical Vertical:</label>
                  <select
                    value={newMember.vertical}
                    onChange={(e) => setNewMember({ ...newMember, vertical: e.target.value as any })}
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="Executive Secretariat">Executive Secretariat</option>
                    <option value="Strategy & Case Design">Strategy & Case Design</option>
                    <option value="Operations & Logistics">Operations & Logistics</option>
                    <option value="Intel & Content Research">Intel & Content Research</option>
                    <option value="Outreach & Corporate Relations">Outreach & Corporate Relations</option>
                    <option value="Faculty & Advisory">Faculty & Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Bio / Profile Summary:</label>
                  <textarea
                    rows={3}
                    value={newMember.bio}
                    onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                    placeholder="Expertise, background, accolades..."
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Email:</label>
                  <input
                    type="email"
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    placeholder="name@impulse-bvrit.ac.in"
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="isExec"
                    checked={newMember.isExecutive}
                    onChange={(e) => setNewMember({ ...newMember, isExecutive: e.target.checked })}
                    className="w-4 h-4 accent-[#22B3B8]"
                  />
                  <label htmlFor="isExec" className="text-white cursor-pointer">
                    Mark as Executive Core Committee
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] font-bold py-3 rounded-xl uppercase tracking-wider transition-all"
                >
                  Add Member &rarr;
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">
                Club Members Roster ({store.members.length})
              </h3>
              <div className="space-y-3">
                {store.members.map((mem) => (
                  <div
                    key={mem.id}
                    className="p-4 rounded-2xl bg-[#03232c] border border-white/10 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#22B3B8]">{mem.vertical}</span>
                        {mem.isExecutive && (
                          <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded">
                            EXECUTIVE
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">{mem.name}</h4>
                      <p className="text-xs text-slate-300 font-mono">{mem.role}</p>
                      <p className="text-xs text-slate-400 font-sans mt-1 line-clamp-2">{mem.bio}</p>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm(`Remove member "${mem.name}"?`)) {
                          store.deleteMember(mem.id);
                          showNotification("Member deleted.");
                        }
                      }}
                      className="text-red-400 hover:text-red-200 font-mono text-xs px-2 py-1 bg-red-950/40 rounded border border-red-500/30"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: TIMELINE ── */}
        {activeTab === "timeline" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-[#03232c] border border-[#22B3B8]/30 space-y-4 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white">
                Record Milestone / Achievement
              </h3>

              <form onSubmit={handleAddMilestone} className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#22B3B8] block mb-1">Quarter:</label>
                    <input
                      type="text"
                      value={newMilestone.quarter}
                      onChange={(e) => setNewMilestone({ ...newMilestone, quarter: e.target.value })}
                      placeholder="e.g. Q2"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[#22B3B8] block mb-1">Year:</label>
                    <input
                      type="text"
                      value={newMilestone.year}
                      onChange={(e) => setNewMilestone({ ...newMilestone, year: e.target.value })}
                      placeholder="2026"
                      className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Category:</label>
                  <input
                    type="text"
                    value={newMilestone.category}
                    onChange={(e) => setNewMilestone({ ...newMilestone, category: e.target.value })}
                    placeholder="e.g. INTER-COLLEGE TOURNAMENT"
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Milestone Title:</label>
                  <input
                    type="text"
                    value={newMilestone.title}
                    onChange={(e) => setNewMilestone({ ...newMilestone, title: e.target.value })}
                    placeholder="e.g. National Championship Finalists"
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Details:</label>
                  <textarea
                    rows={3}
                    value={newMilestone.detail}
                    onChange={(e) => setNewMilestone({ ...newMilestone, detail: e.target.value })}
                    placeholder="Context, team size, outcome..."
                    required
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="text-[#22B3B8] block mb-1">Status:</label>
                  <select
                    value={newMilestone.status}
                    onChange={(e) => setNewMilestone({ ...newMilestone, status: e.target.value as any })}
                    className="w-full bg-[#02181e] border border-white/15 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22B3B8] hover:bg-[#3FE3E8] text-[#033744] font-bold py-3 rounded-xl uppercase tracking-wider transition-all"
                >
                  Record Milestone &rarr;
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">
                Recorded Milestones ({store.timeline.length})
              </h3>
              <div className="space-y-3">
                {store.timeline.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-2xl bg-[#03232c] border border-white/10 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#22B3B8]">{m.quarter} {m.year}</span>
                        <span className="text-slate-400 text-xs font-mono">&bull;</span>
                        <span className="text-xs font-mono text-slate-300">{m.category}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">{m.title}</h4>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">{m.detail}</p>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm(`Delete milestone "${m.title}"?`)) {
                          store.deleteMilestone(m.id);
                          showNotification("Milestone deleted.");
                        }
                      }}
                      className="text-red-400 hover:text-red-200 font-mono text-xs px-2 py-1 bg-red-950/40 rounded border border-red-500/30"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 5: BACKUP & DATA CONTROLS ── */}
        {activeTab === "backup" && (
          <div className="max-w-2xl mx-auto space-y-6 p-8 rounded-3xl bg-[#03232c] border border-[#22B3B8]/30">
            <h3 className="text-2xl font-serif font-bold text-white">
              Data Storage &amp; Backup Utilities
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              All website data is synced into your local browser state and reflected live on the public pages. You can reset to official seed data or export your content.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="p-4 rounded-xl bg-[#02181e] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Reset to Official Default Data</h4>
                  <p className="text-xs text-slate-400">Restores all original sample events, winners, and members.</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to reset all data to default seed data?")) {
                      store.resetAllData();
                      showNotification("Data reset to defaults.");
                    }
                  }}
                  className="px-4 py-2 rounded-lg bg-red-950 text-red-200 border border-red-500/40 font-mono text-xs font-bold"
                >
                  Reset Defaults
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#02181e] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Export Website Data to JSON</h4>
                  <p className="text-xs text-slate-400">Download a backup file of all current events, winners, and team.</p>
                </div>
                <button
                  onClick={() => {
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
                      events: store.events,
                      winners: store.winners,
                      timeline: store.timeline,
                      members: store.members,
                    }, null, 2));
                    const downloadAnchor = document.createElement("a");
                    downloadAnchor.setAttribute("href", dataStr);
                    downloadAnchor.setAttribute("download", "impulse_club_backup.json");
                    document.body.appendChild(downloadAnchor);
                    downloadAnchor.click();
                    downloadAnchor.remove();
                    showNotification("Backup JSON downloaded.");
                  }}
                  className="px-4 py-2 rounded-lg bg-[#22B3B8] text-[#033744] font-mono text-xs font-bold"
                >
                  Export JSON
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
