"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight, FiHome } from "react-icons/fi";

/**
 * Reusable Page Banner Component
 * Matches the executive LightCastle-inspired dark blue wave aesthetic.
 * Usable across all sub-pages (About, Services, R&D, Insights, Career, Contact).
 */
export default function PageBanner({
  title = "About",
  subtitle = "A brief history of our aquaculture journey, innovation, and sustainable farming commitment.",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Overview" },
  ],
  badge,
  bgImage,
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-r from-[#001738] via-[#00285e] to-[#001c44] text-white pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20 ${className}`}
    >
      {/* Optional Custom Background Image Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Decorative LightCastle-Style Sweeping Wave Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <svg
          className="absolute -right-20 -top-24 h-[140%] w-[120%] opacity-25"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 200 120, 500 350, 900 180 C 1100 80, 1300 220, 1400 150"
            stroke="url(#banner-cyan-grad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-100 240 C 250 160, 550 390, 950 220 C 1150 120, 1350 260, 1450 190"
            stroke="url(#banner-cyan-grad)"
            strokeWidth="1"
            opacity="0.8"
          />
          <path
            d="M-100 280 C 300 200, 600 430, 1000 260 C 1200 160, 1400 300, 1500 230"
            stroke="url(#banner-cyan-grad)"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <path
            d="M-100 320 C 350 240, 650 470, 1050 300 C 1250 200, 1450 340, 1550 270"
            stroke="url(#banner-cyan-grad)"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <path
            d="M-100 360 C 400 280, 700 510, 1100 340 C 1300 240, 1500 380, 1600 310"
            stroke="url(#banner-cyan-grad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="banner-cyan-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#004494" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0084d6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient radial glows */}
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-[#0084d6]/15 blur-3xl" />

        {/* Delicate architectural dots pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Main Banner Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation Trail */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mb-4 inline-flex items-center gap-1.5 text-xs sm:text-sm text-sky-200/75"
            >
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                const isFirst = idx === 0;

                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && (
                      <span
                        className="text-white/30 text-xs px-1 select-none"
                        aria-hidden="true"
                      >
                        &gt;
                      </span>
                    )}

                    {isLast || !crumb.href ? (
                      <span
                        className="text-white font-semibold tracking-wide"
                        aria-current="page"
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors duration-150 flex items-center gap-1"
                      >
                        {isFirst && <FiHome className="w-3.5 h-3.5 opacity-80" />}
                        <span>{crumb.label}</span>
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          )}

          {/* Optional Badge / Eyebrow */}
          {badge && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/10 text-sky-200 border border-white/15 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{badge}</span>
              </span>
            </div>
          )}

          {/* Page Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-sky-100/80 max-w-2xl font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Subtle Gradient Border Accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
      />
    </div>
  );
}
