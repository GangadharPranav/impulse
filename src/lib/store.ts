import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface ImpulseEvent {
  id: string;
  title: string;
  category: "Flagship Conclave" | "Crisis War Room" | "Executive Masterclass" | "Research Forum" | "General Debate";
  month: string;
  day: string;
  year: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationOpen: boolean;
  link: string;
  prizePool?: string;
}

export interface Winner {
  id: string;
  eventId: string;
  eventTitle: string;
  edition: string;
  rank: "1st Place" | "2nd Place" | "3rd Place" | "Special Mention";
  teamName: string;
  members: string[];
  college: string;
  prizeAmount: string;
  citation: string;
  date: string;
}

export interface TimelineMilestone {
  id: string;
  quarter: string;
  year: string;
  category: string;
  title: string;
  detail: string;
  status: "Completed" | "In Progress" | "Upcoming";
}

export interface ClubMember {
  id: string;
  name: string;
  role: string;
  vertical: "Executive Secretariat" | "Strategy & Case Design" | "Operations & Logistics" | "Intel & Content Research" | "Outreach & Corporate Relations" | "Faculty & Advisory";
  bio: string;
  email?: string;
  linkedIn?: string;
  isExecutive: boolean;
}

export const INITIAL_EVENTS: ImpulseEvent[] = [
  {
    id: "praxis-26",
    month: "MAR",
    day: "14",
    year: "2026",
    category: "Flagship Conclave",
    title: "PRAXIS '26: Annual National Case & Strategic Debate Conclave",
    time: "09:30 AM - 07:00 PM IST",
    location: "Main Auditorium & SAC Chambers, BVRIT Narsapur",
    description:
      "Witness 80+ collegiate teams tackle live corporate turnaround mandates evaluated by Senior Partners from McKinsey, BCG, and venture leaders.",
    image: "/bg/praxis_summit.jpg",
    registrationOpen: true,
    link: "/events#praxis-26",
    prizePool: "₹75,000",
  },
  {
    id: "the-arena",
    month: "APR",
    day: "04",
    year: "2026",
    category: "Crisis War Room",
    title: "The Arena: Unscripted Hostile Takeover & Boardroom Drill",
    time: "02:00 PM - 06:30 PM IST",
    location: "Executive Seminar Hall 3, Academic Block A",
    description:
      "A fast-paced, high-pressure crisis scenario with breaking mock-press reports, real-time market trading halt simulations, and hostile board proxy fights.",
    image: "/bg/boardroom_crisis.jpg",
    registrationOpen: true,
    link: "/events#the-arena",
    prizePool: "₹35,000",
  },
  {
    id: "mbb-masterclass",
    month: "APR",
    day: "25",
    year: "2026",
    category: "Executive Masterclass",
    title: "Cracking The MBB Case: Structured Problem Solving with Pyramid Principles",
    time: "10:00 AM - 01:30 PM IST",
    location: "Virtual Global Webinar & Hybrid Campus Studio",
    description:
      "Comprehensive masterclass hosted by IMPULSE alumni practicing at McKinsey & Company on hypothesis-driven issue trees and client communications.",
    image: "/bg/about_thinking.jpg",
    registrationOpen: true,
    link: "/events#mbb-masterclass",
    prizePool: "Certificates & MBB Mentorship",
  },
  {
    id: "ma-forum",
    month: "MAY",
    day: "18",
    year: "2026",
    category: "Research Forum",
    title: "Indian Cross-Border M&A & Private Equity Valuation Summit",
    time: "11:00 AM - 05:00 PM IST",
    location: "Conference Hall B & Live Stream",
    description:
      "Release of the IMPULSE 2026 Emerging Markets Valuation Paper, followed by panel deliberations with tier-1 private equity investment directors.",
    image: "/bg/debate_arena.jpg",
    registrationOpen: false,
    link: "/events#ma-forum",
    prizePool: "₹40,000 Research Grant",
  },
];

export const INITIAL_WINNERS: Winner[] = [
  {
    id: "win-1",
    eventId: "praxis-26",
    eventTitle: "PRAXIS '26 CEO Challenge",
    edition: "Spring 2026",
    rank: "1st Place",
    teamName: "The Sovereign Strategists",
    members: ["Rohit Varma", "Aditi Rao", "Kartik Iyer"],
    college: "Indian School of Business (ISB) / BVRIT Affiliate",
    prizeAmount: "₹40,000",
    citation: "Exemplary stress-testing of supply-chain insolvency risks with a defensible 3-year recapitalization model under intense jury scrutiny.",
    date: "March 14, 2026",
  },
  {
    id: "win-2",
    eventId: "praxis-26",
    eventTitle: "PRAXIS '26 CEO Challenge",
    edition: "Spring 2026",
    rank: "2nd Place",
    teamName: "Apex Alpha Consultants",
    members: ["Pooja Nambiar", "Siddharth Sen"],
    college: "IIT Madras Department of Management Studies",
    prizeAmount: "₹25,000",
    citation: "Flawless MECE decomposition of unit economics and aggressive market-entry contingency planning.",
    date: "March 14, 2026",
  },
  {
    id: "win-3",
    eventId: "praxis-26",
    eventTitle: "PRAXIS '26 CEO Challenge",
    edition: "Spring 2026",
    rank: "3rd Place",
    teamName: "Narsapur Syndicate",
    members: ["Vikramaditya Rao", "Sneha Reddy"],
    college: "BVRIT Narsapur",
    prizeAmount: "₹10,000",
    citation: "Demonstrated superior floor moderation and rapid rhetorical counter-attacks in the hostile press round.",
    date: "March 14, 2026",
  },
  {
    id: "win-4",
    eventId: "verbal-nexus-25",
    eventTitle: "Verbal Nexus Fall '25 National Debate",
    edition: "Fall 2025",
    rank: "1st Place",
    teamName: "Dialectic Vanguard",
    members: ["Tanya Chawla", "Kavya Deshmukh"],
    college: "NALSAR University of Law, Hyderabad",
    prizeAmount: "₹30,000",
    citation: "Masterful rhetorical framing and unshakeable cross-examination poise across 4 unmoderated parliamentary rounds.",
    date: "November 28, 2025",
  },
  {
    id: "win-5",
    eventId: "verbal-nexus-25",
    eventTitle: "Verbal Nexus Fall '25 National Debate",
    edition: "Fall 2025",
    rank: "2nd Place",
    teamName: "Pragmatic Axis",
    members: ["Dhruv Mehra", "Ananya Sundaram"],
    college: "BITS Pilani Hyderabad Campus",
    prizeAmount: "₹15,000",
    citation: "Outstanding statistical rebuttal synthesis and dynamic team pivoting in the sudden crisis switch.",
    date: "November 28, 2025",
  },
  {
    id: "win-6",
    eventId: "boardroom-crisis-25",
    eventTitle: "Boardroom Crisis War Room 2025",
    edition: "Monsoon 2025",
    rank: "Special Mention",
    teamName: "Valuation Matrix",
    members: ["Arjun Kulkarni", "Farhan Akhtar"],
    college: "CBIT Hyderabad",
    prizeAmount: "₹5,000",
    citation: "Highest jury score in spontaneous corporate forensic auditing under 15-minute preparation limits.",
    date: "August 18, 2025",
  },
];

export const INITIAL_TIMELINE: TimelineMilestone[] = [
  {
    id: "time-1",
    quarter: "Q1",
    year: "2024",
    category: "FOUNDATION",
    title: "Chartering of IMPULSE at BVRIT Narsapur",
    detail: "Founded by passionate student consultants and faculty mentors to bridge the chasm between textbook academia and corporate consulting boardrooms.",
    status: "Completed",
  },
  {
    id: "time-2",
    quarter: "Q3",
    year: "2024",
    category: "CURRICULUM DEPLOYMENT",
    title: "Establishment of the 100-Hour GD Mastery Framework",
    detail: "Rolled out structured weekly simulations covering 50+ Harvard Business Publishing and corporate turnarounds with peer evaluation rubrics.",
    status: "Completed",
  },
  {
    id: "time-3",
    quarter: "Q1",
    year: "2025",
    category: "INTER-COLLEGE TOURNAMENT",
    title: "National Corporate Case Simulation Finalists",
    detail: "Ranked Top 5 out of 120+ collegiate delegations defending turnaround strategies for distressed EV supply chains across top-tier summits.",
    status: "Completed",
  },
  {
    id: "time-4",
    quarter: "Q3",
    year: "2025",
    category: "ANNUAL SUMMIT",
    title: "Inaugural PRAXIS Summit Staged",
    detail: "Convened 350+ delegates across 12 institutions for the CEO Challenge and Verbal Nexus combat arenas with ₹1,00,000 in prizes.",
    status: "Completed",
  },
  {
    id: "time-5",
    quarter: "Q1",
    year: "2026",
    category: "CAMPUS EXPANSION",
    title: "Deployment of The War Room Simulation Framework",
    detail: "Formalized weekly unscripted crisis response drills and partnered with MBB alumni mentors for placement cohort incubation.",
    status: "Completed",
  },
  {
    id: "time-6",
    quarter: "Q2",
    year: "2026",
    category: "GLOBAL SYNDICATE",
    title: "Inter-Campus Case Exchange & Digital Hall of Fame",
    detail: "Launching multi-campus collaborative research initiatives, digital case archives, and statewide invitational roundtables.",
    status: "In Progress",
  },
];

export const INITIAL_MEMBERS: ClubMember[] = [
  {
    id: "mem-1",
    name: "Srikar Reddy",
    role: "President & Head of Syndicate",
    vertical: "Executive Secretariat",
    bio: "Senior Consultant in training with national accolades in MBB case competitions. Driving institutional growth, chapter alliances, and boardroom drill standards.",
    email: "president@impulse-bvrit.ac.in",
    isExecutive: true,
  },
  {
    id: "mem-2",
    name: "Sneha Varma",
    role: "Vice President & Lead Strategist",
    vertical: "Executive Secretariat",
    bio: "Specializing in hypothesis-driven corporate valuation and crisis management. Directing the PRAXIS '26 conclave steering committee.",
    email: "vp@impulse-bvrit.ac.in",
    isExecutive: true,
  },
  {
    id: "mem-3",
    name: "Rahul Krishnamurthy",
    role: "Director of Case Design",
    vertical: "Strategy & Case Design",
    bio: "Architecting unscripted corporate simulations, financial forensic audits, and tournament challenge dossiers for collegiate war rooms.",
    isExecutive: false,
  },
  {
    id: "mem-4",
    name: "Pooja Hegde",
    role: "Head of Chamber Operations",
    vertical: "Operations & Logistics",
    bio: "Overseeing chamber time controls, parliamentary debate protocols, tournament staging, and registration pipelines across campus venues.",
    isExecutive: false,
  },
  {
    id: "mem-5",
    name: "Anand Deshmukh",
    role: "Lead Market Intelligence Analyst",
    vertical: "Intel & Content Research",
    bio: "Tracking macroeconomic indicators, regulatory shifts, and quarterly corporate balance sheets to curate battle-tested debate prompts.",
    isExecutive: false,
  },
  {
    id: "mem-6",
    name: "Tanvi Kulkarni",
    role: "Director of Corporate Alliances",
    vertical: "Outreach & Corporate Relations",
    bio: "Fostering partnerships with consulting recruiters, industry guest speakers, startup founders, and collegiate debate federations.",
    isExecutive: false,
  },
  {
    id: "mem-7",
    name: "Dr. K. S. Rao",
    role: "Chief Faculty Advisor",
    vertical: "Faculty & Advisory",
    bio: "Professor of Management Studies and Strategic Leadership at BVRIT Narsapur, guiding pedagogy, governance, and institutional ethics.",
    isExecutive: true,
  },
];

interface ImpulseStoreState {
  events: ImpulseEvent[];
  winners: Winner[];
  timeline: TimelineMilestone[];
  members: ClubMember[];
  isAdminAuthenticated: boolean;

  // Admin Actions
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;

  // Events CRUD
  addEvent: (event: Omit<ImpulseEvent, "id">) => void;
  updateEvent: (id: string, updated: Partial<ImpulseEvent>) => void;
  deleteEvent: (id: string) => void;

  // Winners CRUD
  addWinner: (winner: Omit<Winner, "id">) => void;
  updateWinner: (id: string, updated: Partial<Winner>) => void;
  deleteWinner: (id: string) => void;

  // Timeline CRUD
  addMilestone: (milestone: Omit<TimelineMilestone, "id">) => void;
  updateMilestone: (id: string, updated: Partial<TimelineMilestone>) => void;
  deleteMilestone: (id: string) => void;

  // Members CRUD
  addMember: (member: Omit<ClubMember, "id">) => void;
  updateMember: (id: string, updated: Partial<ClubMember>) => void;
  deleteMember: (id: string) => void;

  // Reset to default seed data
  resetAllData: () => void;
}

export const useImpulseStore = create<ImpulseStoreState>()(
  persist(
    (set) => ({
      events: INITIAL_EVENTS,
      winners: INITIAL_WINNERS,
      timeline: INITIAL_TIMELINE,
      members: INITIAL_MEMBERS,
      isAdminAuthenticated: false,

      loginAdmin: (passcode: string) => {
        // Official Club Passcodes
        const validCodes = ["IMPULSE2026", "BVRIT-MEMBER", "ADMIN123"];
        if (validCodes.includes(passcode.trim().toUpperCase())) {
          set({ isAdminAuthenticated: true });
          return true;
        }
        return false;
      },

      logoutAdmin: () => set({ isAdminAuthenticated: false }),

      addEvent: (eventData) => {
        const id = `event-${Date.now()}`;
        set((state) => ({ events: [ { ...eventData, id }, ...state.events ] }));
      },

      updateEvent: (id, updated) => {
        set((state) => ({
          events: state.events.map((e) => (e.id === id ? { ...e, ...updated } : e)),
        }));
      },

      deleteEvent: (id) => {
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        }));
      },

      addWinner: (winnerData) => {
        const id = `win-${Date.now()}`;
        set((state) => ({ winners: [ { ...winnerData, id }, ...state.winners ] }));
      },

      updateWinner: (id, updated) => {
        set((state) => ({
          winners: state.winners.map((w) => (w.id === id ? { ...w, ...updated } : w)),
        }));
      },

      deleteWinner: (id) => {
        set((state) => ({
          winners: state.winners.filter((w) => w.id !== id),
        }));
      },

      addMilestone: (milestoneData) => {
        const id = `time-${Date.now()}`;
        set((state) => ({ timeline: [ { ...milestoneData, id }, ...state.timeline ] }));
      },

      updateMilestone: (id, updated) => {
        set((state) => ({
          timeline: state.timeline.map((m) => (m.id === id ? { ...m, ...updated } : m)),
        }));
      },

      deleteMilestone: (id) => {
        set((state) => ({
          timeline: state.timeline.filter((m) => m.id !== id),
        }));
      },

      addMember: (memberData) => {
        const id = `mem-${Date.now()}`;
        set((state) => ({ members: [ ...state.members, { ...memberData, id } ] }));
      },

      updateMember: (id, updated) => {
        set((state) => ({
          members: state.members.map((m) => (m.id === id ? { ...m, ...updated } : m)),
        }));
      },

      deleteMember: (id) => {
        set((state) => ({
          members: state.members.filter((m) => m.id !== id),
        }));
      },

      resetAllData: () => {
        set({
          events: INITIAL_EVENTS,
          winners: INITIAL_WINNERS,
          timeline: INITIAL_TIMELINE,
          members: INITIAL_MEMBERS,
        });
      },
    }),
    {
      name: "impulse_club_store_v1",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
