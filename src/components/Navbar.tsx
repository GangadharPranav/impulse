"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200">
      {/* ── ISB Top Utility Masthead Bar ── */}
      <div className="bg-[#0F1E4A] text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-4 text-white/80 font-medium">
            <span>Hyderabad Campus</span>
            <span className="text-white/40">&bull;</span>
            <span>BVRIT Narsapur Chapter</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-[#00A896] font-semibold">Affiliated Executive Syndicate</span>
          </div>

          <div className="flex items-center gap-6 text-white/80">
            <Link href="#research" className="hover:text-white transition-colors">
              Research &amp; Case Repository
            </Link>
            <Link href="#faculty" className="hover:text-white transition-colors">
              Faculty &amp; Mentors
            </Link>
            <Link href="#events" className="hover:text-white transition-colors">
              Conclaves
            </Link>
            <Link
              href="#portal"
              className="text-[#00A896] hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Portal Login</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar (ISB Signature Style) ── */}
      <div
        className={`border-b border-[#E2E8F0] transition-all duration-300 ${
          scrolled ? "py-3 shadow-md bg-white/95 backdrop-blur-md" : "py-4 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#0F1E4A]/20 p-0.5 bg-white shadow-sm flex-shrink-0">
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
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-[#0F1E4A]">
            <Link href="#programmes" className="hover:text-[#192890] transition-colors py-1">
              Programmes
            </Link>
            <Link href="#pillars" className="hover:text-[#192890] transition-colors py-1">
              Our Story
            </Link>
            <Link href="#filter" className="hover:text-[#192890] transition-colors py-1">
              Explore Intent
            </Link>
            <Link href="#events" className="hover:text-[#192890] transition-colors py-1">
              Events &amp; Conclaves
            </Link>
            <Link href="#research" className="hover:text-[#192890] transition-colors py-1">
              Case Lab
            </Link>
            <Link href="#about" className="hover:text-[#192890] transition-colors py-1">
              About
            </Link>
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#apply"
              className="bg-[#192890] hover:bg-[#0F1E4A] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm flex items-center gap-2"
            >
              <span>Apply / Register</span>
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
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-sm text-[#0F1E4A] border-b border-[#E2E8F0] pb-4">
            <Link
              href="#programmes"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#192890] py-1"
            >
              Programmes
            </Link>
            <Link
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#192890] py-1"
            >
              Our Story &amp; Pillars
            </Link>
            <Link
              href="#filter"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#192890] py-1"
            >
              What Brings You Here?
            </Link>
            <Link
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#192890] py-1"
            >
              Events &amp; Conclaves
            </Link>
            <Link
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#192890] py-1"
            >
              Case Research
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#192890] py-1"
            >
              About
            </Link>
          </nav>

          <div className="pt-2">
            <Link
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#192890] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full shadow-sm"
            >
              Apply / Register &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
