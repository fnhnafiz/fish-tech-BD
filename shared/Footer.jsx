"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "lenis/react";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowUp,
  FiSend,
  FiShield,
  FiCheckCircle,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const lenis = useLenis();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#001c44] text-white relative mt-20 sm:mt-24 lg:mt-28 border-t border-white/10">
      {/* Decorative top accent gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-[#0084d6] to-cyan-300" />

      {/* ======================================================== */}
      {/* FLOATING TOP BANNER: Elevated & Shifted Upward Card      */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -translate-y-12 sm:-translate-y-16 lg:-translate-y-20 z-20 -mb-6 sm:-mb-8 lg:-mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#002f6c] via-[#004494] to-[#002654] border border-white/20 shadow-2xl shadow-[#00122e]/60 p-6 sm:p-8 lg:p-10 overflow-hidden">
            {/* Ambient Lighting Gradients */}
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Newsletter Pitch */}
              <div className="lg:col-span-7 space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs font-semibold tracking-wide uppercase">
                  <FiShield className="w-3.5 h-3.5" />
                  <span>Aquaculture Advisory & Tech Digest</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Stay Updated with Modern Aquaculture Innovations
                </h3>
                <p className="text-xs sm:text-sm text-sky-100/80 max-w-xl leading-relaxed">
                  Get monthly field reports, water management guidelines, seasonal disease alerts, and market price intelligence delivered to your inbox.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleSubscribe} className="pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-md">
                    <label htmlFor="footer-newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="footer-newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 text-xs sm:text-sm outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300 transition-colors"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0084d6] hover:bg-[#0073bc] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
                    >
                      <span>Subscribe</span>
                      <FiSend className="w-4 h-4" />
                    </button>
                  </div>
                  {subscribed && (
                    <p className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-medium">
                      <FiCheckCircle className="w-3.5 h-3.5" />
                      <span>Thank you for subscribing! We respect your privacy.</span>
                    </p>
                  )}
                </form>
              </div>

              {/* Emergency Hotline & Direct Support Card */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-start sm:items-center lg:items-start xl:items-center justify-lg-end bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/20 transition-all backdrop-blur-xs">
                <div className="w-12 h-12 rounded-xl bg-sky-500/25 border border-sky-300/40 flex items-center justify-center text-sky-200 shrink-0 shadow-inner">
                  <FiPhoneCall className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block">
                    24/7 Farmer Hotline & Advisory
                  </span>
                  <a
                    href="tel:+8801700000000"
                    className="text-lg sm:text-xl font-bold text-white hover:text-sky-300 transition-colors block leading-tight tracking-tight"
                  >
                    +880 1700-000000
                  </a>
                  <span className="text-xs text-sky-100/75 block">
                    Urgent pond hypoxia, pathogen alerts & lab tests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MAIN FOOTER COLUMNS: Organized, Accessible Navigation    */}
      {/* ======================================================== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-2 sm:pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Column 1: Brand, About & Trust (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center group"
              aria-label="FishTech BD Home"
            >
              <div className="relative h-12 sm:h-14 w-auto aspect-[222/102] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="FishTech BD Logo"
                  width={222}
                  height={102}
                  loading="lazy"
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-sky-100/75 leading-relaxed">
              Pioneering smart fisheries, IoT water telemetry, accredited PCR pathology, and biosecure aqua medicine to empower fish and shrimp farmers across Bangladesh.
            </p>

            {/* Social Links */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300/90 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {[
                  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
                  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
                  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
                  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/8801700000000" },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0084d6] border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Affiliations & Certifications */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-sky-200/70">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                BFRI Collaboration
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Column 2: Core Services (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Technical Service", href: "/services/technical-service" },
                { name: "Aqua Medicine & Feeds", href: "/services/aqua-medicine" },
                { name: "CoE Farmer Training", href: "/services/coe" },
                { name: "PCR Diagnostic Lab", href: "/services/laboratory" },
                { name: "IoT Water Telemetry", href: "/services/water-quality" },
                { name: "Nano-Bubble Aeration", href: "/services/aeration" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sky-100/75 hover:text-white transition-colors"
                  >
                    <FiChevronRight className="w-3 h-3 text-sky-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sectors & Species (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 border-b border-white/10 pb-2">
              Target Sectors
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Shrimp & Vannamei", href: "/sectors/shrimp" },
                { name: "Carp & Whitefish", href: "/sectors/carp" },
                { name: "Biofloc & RAS", href: "/sectors/biofloc-ras" },
                { name: "Cage Aquaculture", href: "/sectors/cage-culture" },
                { name: "Hatchery Automation", href: "/sectors/hatchery" },
                { name: "Cold-Chain & Export", href: "/sectors/cold-chain" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sky-100/75 hover:text-white transition-colors"
                  >
                    <FiChevronRight className="w-3 h-3 text-sky-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: R&D, Company & Career (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 border-b border-white/10 pb-2">
              Company & R&D
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Company Overview", href: "/about/overview" },
                { name: "Board of Directors", href: "/about/board-of-directors" },
                { name: "MoU Partnerships", href: "/about/mou" },
                { name: "Active R&D Projects", href: "/rd/projects" },
                { name: "Research Papers", href: "/rd/publications" },
                { name: "Careers & Internship", href: "/career", badge: "Hiring" },
                { name: "Events & Workshops", href: "/events" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sky-100/75 hover:text-white transition-colors"
                  >
                    <FiChevronRight className="w-3 h-3 text-sky-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Offices & Regional Centers (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 border-b border-white/10 pb-2">
              Head Office & Hubs
            </h4>
            <div className="space-y-3.5 text-xs text-sky-100/75">
              {/* Head Office */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <FiMapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      Corporate Head Office
                    </span>
                    <p className="text-[11px] leading-relaxed text-sky-100/70">
                      Level 7, Navana Tower, Gulshan-1, Dhaka-1212, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Hubs */}
              <div className="space-y-1 pt-1 border-t border-white/5">
                <span className="font-semibold text-white block text-[11px]">
                  Regional Diagnostic Hubs:
                </span>
                <p className="text-[11px] text-sky-100/70">
                  • Khulna & Cox&apos;s Bazar (Shrimp Center)
                </p>
                <p className="text-[11px] text-sky-100/70">
                  • Mymensingh & Bogura (Freshwater CoE)
                </p>
              </div>

              {/* Email & Working Hours */}
              <div className="space-y-1 pt-1 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <FiMail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <a
                    href="mailto:info@fishtechbd.com"
                    className="hover:text-white transition-colors"
                  >
                    info@fishtechbd.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-sky-100/60">
                  <FiClock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Sat - Thu: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM LEGAL & COPYRIGHT BAR                             */}
      {/* ======================================================== */}
      <div className="border-t border-white/10 bg-[#001738]/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-100/65">
            <div className="text-center sm:text-left">
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-medium">FishTech BD Ltd.</span> All rights reserved.
              </p>
              <p className="text-[11px] text-sky-200/50 mt-0.5">
                Modernizing Bangladesh Fisheries with Science, Data & Biosecurity.
              </p>
            </div>

            {/* Legal Links & Back to Top */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/biosecurity-policy" className="hover:text-white transition-colors">
                Biosecurity Standards
              </Link>
              <span className="text-white/20">•</span>

              {/* Scroll to Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top of page"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-[#0084d6] text-white transition-all duration-200 active:scale-95"
              >
                <span>Back to Top</span>
                <FiArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
