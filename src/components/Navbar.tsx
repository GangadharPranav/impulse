"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Timeline", href: "/timeline" },
  { name: "Members", href: "/members" },
  { name: "Winners", href: "/winners", badge: "NEW" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200">
      {/* ── Top Utility Masthead Bar ── */}
      <div className="bg-[#0F1E4A] text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-4 text-white/80 font-medium">
            <span>BVRIT Narsapur Campus</span>
            <span className="text-white/40">&bull;</span>
            <span>Case Study &amp; Group Discussion Club</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-[#00A896] font-semibold">ISB Pedagogy Affiliate</span>
          </div>

          <div className="flex items-center gap-6 text-white/80">
            <Link href="/about" className="hover:text-white transition-colors">
              Pedagogy &amp; Thesis
            </Link>
            <Link href="/events" className="hover:text-white transition-colors">
              Conclaves
            </Link>
            <Link href="/winners" className="text-amber-300 hover:text-white transition-colors flex items-center gap-1">
              <span>🏆</span>
              <span>Hall of Winners</span>
            </Link>
            <Link
              href="/admin"
              className="text-[#00A896] hover:text-white font-semibold flex items-center gap-1.5 transition-colors bg-white/10 hover:bg-[#00A896] hover:text-[#0F1E4A] px-2.5 py-0.5 rounded transition-all"
            >
              <span>🔒 Member Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div
        className={`border-b border-[#E2E8F0] transition-all duration-300 ${
          scrolled ? "py-2.5 shadow-md bg-white/95 backdrop-blur-md" : "py-3.5 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#0F1E4A]/20 p-0.5 bg-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="IMPULSE Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#0F1E4A] group-hover:text-[#192890] transition-colors">
                IMPULSE
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#00A896] uppercase font-bold">
                CASE STUDY &amp; GD SOCIETY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] font-semibold text-[#0F1E4A]">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 transition-colors flex items-center gap-1.5 ${
                    active
                      ? "text-[#192890] font-bold"
                      : "text-slate-700 hover:text-[#192890]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                      {link.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#00A896] rounded-full shadow-[0_0_8px_#00A896]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/admin"
              className="border border-[#0F1E4A]/25 hover:border-[#00A896] text-[#0F1E4A] hover:text-[#00A896] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Admin</span>
            </Link>

            <Link
              href="/events"
              className="bg-[#192890] hover:bg-[#0F1E4A] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm flex items-center gap-2"
            >
              <span>Register Conclave</span>
              <span className="text-[#00A896] font-bold">&rarr;</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 border border-[#E2E8F0] rounded-lg p-2 text-[#0F1E4A]"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-5 h-0.5 bg-[#0F1E4A] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#0F1E4A] transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#0F1E4A] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 font-semibold text-sm text-[#0F1E4A] border-b border-[#E2E8F0] pb-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-[#0F1E4A]/5 text-[#192890] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.badge && (
                      <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {active && <span className="text-[#00A896] text-xs font-mono font-bold">&bull; Active</span>}
                </Link>
              );
            })}

            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-emerald-800 bg-emerald-50 border border-emerald-200 font-mono text-xs font-bold uppercase tracking-wider mt-2"
            >
              <span>🔒 Member Admin Portal</span>
              <span>&rarr;</span>
            </Link>
          </nav>

          <div className="pt-1">
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#192890] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full shadow-sm"
            >
              Explore Conclaves &amp; Register &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
