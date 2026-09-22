import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ClientExperience from "@/components/ClientExperience";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "IMPULSE — Case Study & Group Discussion Club | BVRIT Narsapur",
  description:
    "The future belongs to those who create it. IMPULSE shapes global leaders through rigorous case analysis, spontaneous group discussions, and strategic consulting simulations.",
  keywords: [
    "IMPULSE",
    "BVRIT",
    "BVRIT Narsapur",
    "Case Study Club",
    "Group Discussion",
    "Consulting Club",
    "PRAXIS 2026",
    "Management Programmes",
    "Verbal Nexus",
  ],
  authors: [{ name: "IMPULSE Executive Secretariat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050e12] text-[#E8EEF0] antialiased selection:bg-[#22B3B8] selection:text-[#033744] relative min-h-screen font-sans flex flex-col">
        <SmoothScroll>
          {/* Global Client Experience (3D Canvas, Cursor, Motion) */}
          <ClientExperience />

          {/* Unified Fixed Masthead Navigation */}
          <Navbar />

          {/* Main Dynamic Page Content */}
          <div className="flex-1 w-full relative z-10 flex flex-col">
            {children}
          </div>

          {/* Institutional Dual-Campus Footer */}
          <FooterSection />
        </SmoothScroll>
      </body>
    </html>
  );
}
