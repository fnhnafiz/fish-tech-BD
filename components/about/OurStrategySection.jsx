"use client";

import React from "react";
import Link from "next/link";
import {
  Dna,
  HeartPulse,
  Microscope,
  Truck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  Compass,
} from "lucide-react";

const STRATEGY_PILLARS = [
  {
    step: "01",
    tag: "FOUNDATIONAL SUPPLY",
    title: "Biosecure Breeding & Upstream Genetics",
    headline: "Eliminating Disease Risks at the Source",
    description:
      "Establishing pathogen-free hatcheries for SPF Bagda shrimp, freshwater Golda prawn, and high-FCR finfish fry under clinical quarantine and genetic selectivity.",
    initiatives: [
      "PCR-screened pathogen-free broodstock",
      "Precision salinity & environmental incubation",
      "Selective high-survival commercial strains",
    ],
    metric: "100M+",
    metricLabel: "Annual Seed Target",
    accent: "blue",
    icon: Dna,
    topLine: "from-[#004494] to-[#0084d6]",
    badge: "bg-blue-50 text-[#004494] border-blue-200/80",
    iconBg: "bg-[#004494]/10 text-[#004494] group-hover:bg-[#004494] group-hover:text-white",
  },
  {
    step: "02",
    tag: "POND ECOSYSTEM HEALTH",
    title: "Preventative Health & Bio-Nutrition",
    headline: "Science-Backed Eco-Friendly Inputs",
    description:
      "Formulating high-efficiency pond probiotics, mineral balancers, bio-nutrition inputs, and water conditioning agents that safeguard aquatic life without antibiotic dependency.",
    initiatives: [
      "Eco-friendly biological water conditioners",
      "Immune-boosting nutritional premixes",
      "100% antibiotic-free ethical formulations",
    ],
    metric: "Zero",
    metricLabel: "Antibiotic Residue Standard",
    accent: "aqua",
    icon: HeartPulse,
    topLine: "from-[#0084d6] to-cyan-400",
    badge: "bg-cyan-50 text-[#0073bc] border-cyan-200/80",
    iconBg: "bg-[#0084d6]/10 text-[#0084d6] group-hover:bg-[#0084d6] group-hover:text-white",
  },
  {
    step: "03",
    tag: "REGIONAL SCIENTIFIC CARE",
    title: "Decentralized Diagnostic Hubs (CoE)",
    headline: "Rapid PCR Diagnostic Labs at Farmers' Doorstep",
    description:
      "Operating regional Aquaculture Centres of Excellence in key farming zones (Mymensingh, Cox's Bazar, Patuakhali) to provide on-site PCR testing and scientific diagnostics.",
    initiatives: [
      "Same-day water chemistry profiling",
      "Microbiological PCR pathogen screening",
      "Practical farmer capacity-building seminars",
    ],
    metric: "< 24h",
    metricLabel: "Diagnostic Reporting Time",
    accent: "emerald",
    icon: Microscope,
    topLine: "from-emerald-600 to-teal-400",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    iconBg: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    step: "04",
    tag: "LAST-MILE EMPOWERMENT",
    title: "Grassroots Distribution & Field Advisory",
    headline: "Empowering 250,000+ Farmers Nationwide",
    description:
      "Mobilizing 150+ authorized dealer hubs with dedicated field technical officers who provide on-pond technical guidance, oxygen support, and rapid distribution nationwide.",
    initiatives: [
      "Oxygenated cold-chain seed logistics fleet",
      "On-pond technical advisory specialists",
      "Direct farmer tele-advisory helpline",
    ],
    metric: "64",
    metricLabel: "Districts Nationwide",
    accent: "orange",
    icon: Truck,
    topLine: "from-[#f97316] to-amber-400",
    badge: "bg-orange-50 text-[#ea580c] border-orange-200/80",
    iconBg: "bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white",
  },
];

export default function OurStrategySection({
  eyebrow = "OUR STRATEGY",
  headingStart = "Our Strategy:",
  headingHighlight = "Catalyzing Sustainable Growth",
  subtitle = "A closed-loop strategic roadmap connecting biosecure genetics, precision aqua-nutrition, regional diagnostic laboratories, and last-mile farmer empowerment across Bangladesh.",
  pillars = STRATEGY_PILLARS,
}) {
  return (
    <section
      aria-labelledby="our-strategy-heading"
      className="relative bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 py-8 sm:py-12 lg:py-12 overflow-hidden "
    >
      {/* Background Architectural Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ======================================================== */}
        {/* SECTION HEADER (Right-Aligned as explicitly requested)   */}
        {/* ======================================================== */}
        <div className="ml-auto max-w-3xl text-right flex flex-col items-end space-y-3">
          {/* Eyebrow with Orange Accent Dash on the Right */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#f97316]">
              {eyebrow}
            </span>
            <span className="w-7 h-[3px] bg-[#f97316] rounded-full inline-block" />
          </div>

          <h2
            id="our-strategy-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight"
          >
            {headingStart} <span className="text-[#004494]">{headingHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* Accent Line Aligned to the Right */}
          <div
            aria-hidden="true"
            className="h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 via-[#0084d6] to-[#004494]"
          />
        </div>

        {/* ======================================================== */}
        {/* STRATEGIC ROADMAP CARDS (Connected Process Flow)         */}
        {/* ======================================================== */}
        <div className="relative">
          {/* Connecting Line along top on large desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-[#004494] via-[#0084d6] via-emerald-500 to-[#f97316] opacity-25 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch relative z-10">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;

              return (
                <article
                  key={pillar.step}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#0084d6]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,68,148,0.18)]"
                >
                  {/* Top Hairline Gradient Reveal on Hover */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${pillar.topLine} transition-transform duration-300 group-hover:scale-x-100`}
                  />

                  {/* Card Header: Step Badge & Focus Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center font-black text-xs text-slate-800 shadow-2xs group-hover:bg-[#004494] group-hover:text-white group-hover:border-[#004494] transition-colors">
                        {pillar.step}
                      </span>

                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border ${pillar.badge}`}
                      >
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Icon Box */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${pillar.iconBg}`}
                    >
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#004494] transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Short Headline Motto */}
                    <p className="mt-1 text-xs font-bold text-slate-700 leading-snug">
                      {pillar.headline}
                    </p>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>

                    {/* Key Strategic Initiatives Checklist */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Core Execution Focus:
                      </span>
                      {pillar.initiatives.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Strategic Target Metric Pill */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200/70">
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                        Target Metric:
                      </span>
                      <div className="text-right">
                        <span className="text-xs sm:text-[13px] font-black text-[#004494] block">
                          {pillar.metric}
                        </span>
                        <span className="text-[9px] text-slate-500 font-medium">
                          {pillar.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM PHILOSOPHY CARD (The Closed-Loop Advantage)       */}
        {/* ======================================================== */}
        <div className="rounded-2xl bg-gradient-to-r from-[#001738] via-[#00285e] to-[#001c44] p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-300">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>THE CLOSED-LOOP STRATEGY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              End-to-End Excellence: From Biosecure Hatcheries to Market Table
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed">
              By combining disease-free seed, specialized nutrition, regional diagnostic labs, and field extension, we ensure maximum survival rates and enduring farmer profitability.
            </p>
          </div>

          {/* 3 Core Strategic Pillars Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
            <div className="rounded-xl bg-white/10 backdrop-blur-xs p-3.5 border border-white/15 text-center">
              <div className="text-lg font-black text-sky-300">Biosecurity</div>
              <div className="text-[11px] text-white/80 mt-0.5">Clean Genetics</div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-xs p-3.5 border border-white/15 text-center">
              <div className="text-lg font-black text-emerald-300">Diagnostics</div>
              <div className="text-[11px] text-white/80 mt-0.5">Rapid PCR Care</div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-xs p-3.5 border border-white/15 text-center">
              <div className="text-lg font-black text-amber-300">Farmer First</div>
              <div className="text-[11px] text-white/80 mt-0.5">Nationwide Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
