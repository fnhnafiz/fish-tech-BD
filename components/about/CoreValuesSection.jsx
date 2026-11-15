"use client";

import React, { useEffect, useRef, useState } from "react";

const VALUES_DATA = [
  {
    id: "integrity",
    number: "01",
    title: "Integrity",
    motto: "Be transparent, honest, and open",
    description:
      "Upholding uncompromising scientific honesty, ethical diagnostics, and transparent partnerships across our hatcheries, laboratories, and nationwide supply chain.",
    accentColor: "from-[#004494] via-[#0084d6] to-sky-400",
    topBar: "bg-[#004494]",
    tagBg: "bg-blue-50 text-[#004494] border-blue-200/80",
    // Custom SVG Icon matching reference: Orbital Atom / Scientific Nucleus
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital Ellipse 1 (Horizontal) */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="17"
          stroke="#004494"
          strokeWidth="3.2"
          className="transition-colors group-hover/value:stroke-[#0084d6]"
        />
        {/* Orbital Ellipse 2 (Rotated 60deg) */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="17"
          transform="rotate(60 50 50)"
          stroke="#004494"
          strokeWidth="3.2"
        />
        {/* Orbital Ellipse 3 (Rotated -60deg) */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="17"
          transform="rotate(-60 50 50)"
          stroke="#004494"
          strokeWidth="3.2"
        />
        {/* Inner Dashed Ring */}
        <circle
          cx="50"
          cy="50"
          r="16"
          stroke="#f97316"
          strokeWidth="2.2"
          strokeDasharray="4 3"
        />
        {/* Center Nucleus Sphere */}
        <circle cx="50" cy="50" r="10" fill="#0084d6" fillOpacity="0.18" />
        <circle cx="50" cy="50" r="6" fill="#004494" />
        {/* Orbital Electron Dots */}
        <circle cx="92" cy="50" r="3.5" fill="#f97316" />
        <circle cx="29" cy="14" r="3.5" fill="#0084d6" />
        <circle cx="71" cy="86" r="3.5" fill="#f97316" />
      </svg>
    ),
  },
  {
    id: "inclusivity",
    number: "02",
    title: "Inclusivity",
    motto: "Treat others the way you would want to be treated",
    description:
      "Empowering grassroots farmers, local entrepreneurs, and rural communities by making high-health seed, diagnostics, and modern know-how accessible to all.",
    accentColor: "from-[#0084d6] via-cyan-500 to-sky-400",
    topBar: "bg-[#0084d6]",
    tagBg: "bg-cyan-50 text-[#0073bc] border-cyan-200/80",
    // Custom SVG Icon matching reference: 4 Interlocking Modules & Dashed Circles
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-Left Rounded Arch Dome */}
        <path
          d="M20 44 V26 C20 18 28 14 36 14 C44 14 52 18 52 26 V44 H20 Z"
          stroke="#0084d6"
          strokeWidth="3.2"
          fill="#0084d6"
          fillOpacity="0.08"
        />
        {/* Top-Right Circle with Inner Dashed Ring */}
        <circle cx="74" cy="29" r="15" stroke="#004494" strokeWidth="3.2" />
        <circle
          cx="74"
          cy="29"
          r="9"
          stroke="#f97316"
          strokeWidth="2.2"
          strokeDasharray="3 3"
        />
        {/* Bottom-Left Circle with Inner Dashed Ring */}
        <circle cx="36" cy="71" r="15" stroke="#004494" strokeWidth="3.2" />
        <circle
          cx="36"
          cy="71"
          r="9"
          stroke="#f97316"
          strokeWidth="2.2"
          strokeDasharray="3 3"
        />
        {/* Bottom-Right Rounded Arch Dome */}
        <path
          d="M58 86 V68 C58 60 66 56 74 56 C82 56 90 60 90 68 V86 H58 Z"
          stroke="#0084d6"
          strokeWidth="3.2"
          fill="#0084d6"
          fillOpacity="0.08"
        />
      </svg>
    ),
  },
  {
    id: "excellence",
    number: "03",
    title: "Excellence",
    motto: "Strive to be the best at what you do",
    description:
      "Setting national benchmarks in biosecure hatchery operations, SPF shrimp genetics, high-efficiency feeds, and diagnostic laboratory precision.",
    accentColor: "from-[#004494] via-indigo-600 to-[#0084d6]",
    topBar: "bg-[#004494]",
    tagBg: "bg-blue-50 text-[#004494] border-blue-200/80",
    // Custom SVG Icon matching reference: Scalloped Rosette Seal with Center Star
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 12-Point Scalloped Outer Seal of Excellence */}
        <path
          d="M50 10 C56 10 59 16 64 18 C69 20 75 18 79 22 C83 26 81 32 83 37 C85 42 91 45 91 51 C91 57 85 60 83 65 C81 70 83 76 79 80 C75 84 69 82 64 84 C59 86 56 92 50 92 C44 92 41 86 36 84 C31 82 25 84 21 80 C17 76 19 70 17 65 C15 60 9 57 9 51 C9 45 15 42 17 37 C19 32 17 26 21 22 C25 18 31 20 36 18 C41 16 44 10 50 10 Z"
          stroke="#004494"
          strokeWidth="3.2"
          fill="#004494"
          fillOpacity="0.06"
        />
        {/* Inner Concentric Dashed Ring */}
        <circle
          cx="50"
          cy="51"
          r="24"
          stroke="#f97316"
          strokeWidth="2.2"
          strokeDasharray="4 3"
        />
        {/* Center 4-Point Sparkling Star */}
        <path
          d="M50 35 C50 43 42 51 34 51 C42 51 50 59 50 67 C50 59 58 51 66 51 C58 51 50 43 50 35 Z"
          fill="#0084d6"
        />
      </svg>
    ),
  },
  {
    id: "sustainability",
    number: "04",
    title: "Sustainability",
    motto: "Protect aquatic ecosystems for future generations",
    description:
      "Pioneering eco-friendly aquatic formulations, natural biological pond conditioning, and responsible resource utilization to safeguard our water bodies.",
    accentColor: "from-emerald-600 via-teal-500 to-[#0084d6]",
    topBar: "bg-emerald-600",
    tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    // Custom SVG Icon: Dual Bio-Eco Leaves & Concentric Orbital Ripples
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Ripple */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#10b981"
          strokeWidth="3.2"
          fill="#10b981"
          fillOpacity="0.06"
        />
        {/* Middle Dashed Eco Ring */}
        <circle
          cx="50"
          cy="50"
          r="26"
          stroke="#f97316"
          strokeWidth="2.2"
          strokeDasharray="4 3"
        />
        {/* Organic Intertwined Eco-Leaf Duo */}
        <path
          d="M50 24 C64 24 74 38 72 52 C70 66 54 74 50 76 C46 74 30 66 28 52 C26 38 36 24 50 24 Z"
          stroke="#004494"
          strokeWidth="2.8"
        />
        <path
          d="M50 30 V70"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M50 42 Q58 38 62 42"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 52 Q42 48 38 52"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function CoreValuesSection({
  eyebrow = "VALUES THAT DRIVE US",
  heading = "The Principles Behind Everything We Build",
  subtitle = "Our shared values define how we innovate, collaborate with farmers, conduct scientific diagnostics, and steward Bangladesh's blue economy.",
  values = VALUES_DATA,
}) {
  const sectionRef = useRef(null);
  const [isScrolledIn, setIsScrolledIn] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frameId = requestAnimationFrame(() => setIsScrolledIn(true));
      return () => cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrolledIn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="core-values-heading"
      className="relative  py-16 sm:py-20 lg:py-28 overflow-hidden "
    >
      {/* Background Architectural Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-sky-50/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-emerald-50/70 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="space-y-4 max-w-3xl">
          {/* Eyebrow with Orange Accent Dash (Matching Reference) */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-[3px] bg-[#f97316] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#f97316]">
              {eyebrow}
            </span>
          </div>

          <h2
            id="core-values-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.18]"
          >
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div
            aria-hidden="true"
            className="h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>

        {/* ======================================================== */}
        {/* VALUES CARDS GRID (Icons Spin on Scroll & Hover)         */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {values.map((item) => (
            <article
              key={item.id}
              className="group/value relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#0084d6]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,68,148,0.16)]"
            >
              {/* Top Hairline Indicator Reveal on Hover */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover/value:scale-x-100 ${item.topBar}`}
              />

              {/* Watermark Number in Top-Right Corner */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-5 text-2xl font-black text-slate-200/60 select-none group-hover/value:text-[#004494]/15 transition-colors"
              >
                {item.number}
              </div>

              {/* Top Section: Spinning Icon Stage */}
              <div>
                <div className="pt-2 pb-6">
                  {/* Icon Container with Scroll Spin & Hover Spin */}
                  <div
                    className={`w-20 h-20 sm:w-22 sm:h-22 rounded-2xl flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-sky-50/50 border border-slate-200/80 shadow-xs transition-transform duration-1000 ease-out will-change-transform ${
                      isScrolledIn ? "rotate-[360deg]" : "rotate-0"
                    } group-hover/value:rotate-[720deg] group-hover/value:scale-105`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover/value:text-[#004494] transition-colors">
                  {item.title}
                </h3>

                {/* Motto (Matching Reference Quote) */}
                <p className="mt-2 text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                  {item.motto}
                </p>

                {/* Full Impact Description */}
                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-500 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span className="group-hover/value:text-[#004494] transition-colors">
                  Core Principle
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/value:bg-[#0084d6] transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
