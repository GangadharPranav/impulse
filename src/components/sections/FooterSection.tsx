"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A132C] text-slate-300 pt-16 pb-12 px-5 sm:px-8 xl:px-12 border-t-4 border-[#00A896]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Masthead & Newsletter Strip */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#00A896] bg-white p-0.5 shadow-md flex-shrink-0">
              <Image
                src="/logo.png"
                alt="IMPULSE Official Badge"
                width={56}
                height={56}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                IMPULSE
              </span>
              <span className="font-mono text-[10px] tracking-[0.24em] text-[#00A896] uppercase font-bold">
                CASE STUDY &amp; GROUP DISCUSSION CLUB &bull; BVRIT
              </span>
            </div>
          </div>

          {/* Institutional Inquiries & Quick Contact */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="mailto:impulse@bvrit.ac.in"
              className="px-4 py-2.5 bg-white/5 border border-white/15 hover:border-[#00A896] text-white hover:text-[#00A896] transition-colors"
            >
              SECRETARIAT: impulse@bvrit.ac.in
            </a>
            <Link
              href="#praxis"
              className="px-5 py-2.5 bg-[#00A896] hover:bg-[#008f80] text-white font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              APPLY FOR PRAXIS &apos;26
            </Link>
          </div>
        </div>

        {/* 4-Column Directory (ISB Institutional Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-xs font-sans">
          
          {/* Col 1: Programmes */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">
              ACADEMIC PROGRAMMES
            </h4>
            <ul className="space-y-2.5 font-mono text-[11px] text-slate-400">
              <li>
                <Link href="#initiatives" className="hover:text-[#00A896] transition-colors">
                  &bull; PGP in Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="#initiatives" className="hover:text-[#00A896] transition-colors">
                  &bull; Advanced Management in Crisis (AMP)
                </Link>
              </li>
              <li>
                <Link href="#initiatives" className="hover:text-[#00A896] transition-colors">
                  &bull; Strategic Fellow in Emerging Markets
                </Link>
              </li>
              <li>
                <Link href="#initiatives" className="hover:text-[#00A896] transition-colors">
                  &bull; Venture Catalyst &amp; Founder Studio
                </Link>
              </li>
              <li>
                <Link href="#praxis" className="hover:text-[#00A896] transition-colors">
                  &bull; PRAXIS &apos;26 National Case Conclave
                </Link>
              </li>
              <li>
                <Link href="#initiatives" className="hover:text-[#00A896] transition-colors">
                  &bull; The Arena: Boardroom Crisis Drills
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Research & Centers of Excellence */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">
              CENTRES OF EXCELLENCE
            </h4>
            <ul className="space-y-2.5 font-mono text-[11px] text-slate-400">
              <li>
                <Link href="#case-lab" className="hover:text-[#00A896] transition-colors">
                  &bull; Centre for Emerging Market Strategy
                </Link>
              </li>
              <li>
                <Link href="#case-lab" className="hover:text-[#00A896] transition-colors">
                  &bull; Corporate Turnaround &amp; M&amp;A Lab
                </Link>
              </li>
              <li>
                <Link href="#case-lab" className="hover:text-[#00A896] transition-colors">
                  &bull; Proprietary Case Repository
                </Link>
              </li>
              <li>
                <Link href="#mentors" className="hover:text-[#00A896] transition-colors">
                  &bull; Executive Mentorship Council
                </Link>
              </li>
              <li>
                <Link href="#alumni" className="hover:text-[#00A896] transition-colors">
                  &bull; Global MBB Alumni Chapter
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#00A896] transition-colors">
                  &bull; Corporate Recruiter Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Dual-Campus Footprint */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">
              CAMPUSES &amp; SECRETARIAT
            </h4>
            
            <div className="space-y-4 text-slate-400">
              <div>
                <p className="font-mono font-bold text-white uppercase text-[11px]">
                  BVRIT Narsapur Headquarters
                </p>
                <p className="text-[11px] leading-relaxed mt-1">
                  Students Activity Center (SAC), Room 204<br />
                  Academic Block A, BVRIT Campus<br />
                  Narsapur, Medak District, Telangana 502313
                </p>
              </div>

              <div>
                <p className="font-mono font-bold text-white uppercase text-[11px]">
                  Hyderabad Executive Secretariat
                </p>
                <p className="text-[11px] leading-relaxed mt-1">
                  Financial District Liaison Cell<br />
                  Gachibowli, Hyderabad, Telangana 500032
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Stay Informed & Socials */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">
              CONNECT &amp; ALUMNI PORTAL
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              Subscribe to the weekly IMPULSE Case Briefing &amp; Emerging Markets Strategy Journal.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to the IMPULSE Strategy Journal.");
              }}
              className="space-y-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your institutional email..."
                className="w-full bg-white/5 border border-white/20 px-3 py-2 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-[#00A896]"
              />
              <button
                type="submit"
                className="w-full bg-white/10 hover:bg-[#00A896] text-white font-mono text-xs font-bold uppercase tracking-wider py-2 transition-colors border border-white/20"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com",
                  svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  svg: (
                    <>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </>
                  ),
                },
                {
                  name: "YouTube",
                  href: "https://youtube.com",
                  svg: <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17m7.5-7v4l4-2z" />,
                },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-9 h-9 border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#00A896] hover:border-[#00A896] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    {soc.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} IMPULSE CLUB &bull; BVRIT NARSAPUR. RECOGNIZED BY AACSB &amp; MBB ALUMNI CHARTER.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white transition-colors">Honor Code</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#00A896] hover:text-white transition-colors font-bold uppercase"
              title="Back to top"
            >
              <span>TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
