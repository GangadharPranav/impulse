import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "IMPULSE — Case Study & Group Discussion Club | BVRIT Narsapur | ISB Model",
  description:
    "The future belongs to those who create it. IMPULSE shapes global leaders through rigorous case analysis, spontaneous group discussions, and strategic consulting simulations.",
  keywords: [
    "IMPULSE",
    "ISB",
    "BVRIT",
    "BVRIT Narsapur",
    "Case Study Club",
    "Group Discussion",
    "Consulting Club",
    "PRAXIS 2026",
    "Management Programmes",
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
      <body className="bg-white text-[#0F1E4A] antialiased selection:bg-[#192890] selection:text-white relative min-h-screen font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
