"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Fish,
  Waves,
  ShieldCheck,
  Droplets,
  HeartPulse,
  Sprout,
  Building2,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

/**
 * Structured Sister Concerns data for Fishtech BD Limited.
 * Card structure is built specifically for corporate company logos at the top
 * and rich venture capabilities, descriptions, and action links below.
 * Upload actual logos to `public/images/concerns/[id].png` anytime.
 */
const SISTER_CONCERNS_DATA = [
  {
    id: "fishtech-hatchery",
    name: "Fishtech Hatchery",
    acronym: "FH",
    sector: "hatchery",
    category: "Fish Seed",
    href: "/about/sister-concerns/fishtech-hatchery",
    logo: "/images/concerns/fishtech-hatchery.png",
    fallbackIcon: Fish,
    featured: true,
    accent: "blue",
    tagline: "Flagship Aquaculture Venture",
    specialization: "Pioneering High-Health Fish Seed & Fingerlings",
    description:
      "Modern hatchery technology, precision biosecurity, and selective broodstock management ensuring nationwide farmers receive high-survival, fast-growing fish fry.",
    highlights: ["50M+ Annual Seed", "Certified Broodstock", "Nationwide Logistics"],
    metrics: [
      { label: "Annual Seed Output", value: "50M+" },
      { label: "Biosecurity Compliance", value: "100%" },
    ],
    ctaLabel: "Explore Flagship Venture",
  },
  {
    id: "fishtech-golda-hatchery",
    name: "Fishtech Golda Hatchery",
    acronym: "FGH",
    sector: "hatchery",
    category: "Freshwater Prawn",
    href: "/about/sister-concerns/fishtech-golda-hatchery",
    logo: "/images/concerns/fishtech-golda-hatchery.png",
    fallbackIcon: Waves,
    accent: "aqua",
    tagline: "Specialized Prawn Breeding",
    specialization: "Premium Post-Larvae for Sustainable Prawn Farming",
    description:
      "Dedicated incubation and nursery facilities producing disease-free Macrobrachium rosenbergii (Golda) post-larvae under precise environmental control.",
    highlights: ["Disease-Free PL", "Precision Salinity", "High Survival Rate"],
    ctaLabel: "Learn More",
  },
  {
    id: "fishtech-spf-monodon",
    name: "Fishtech SPF Monodon",
    acronym: "FSM",
    sector: "hatchery",
    category: "Coastal Shrimp",
    href: "/about/sister-concerns/fishtech-spf-monodon",
    logo: "/images/concerns/fishtech-spf-monodon.png",
    fallbackIcon: ShieldCheck,
    accent: "emerald",
    tagline: "SPF Shrimp Genetics",
    specialization: "Specific Pathogen-Free Bagda Seed for Coastal Yields",
    description:
      "Certified Specific Pathogen-Free (SPF) Penaeus monodon breeding facility delivering virus-screened, resilient Bagda shrimp seed to coastal farms.",
    highlights: ["SPF Certified", "PCR Multi-Screened", "Coastal Resilience"],
    ctaLabel: "Learn More",
  },
  {
    id: "growtech-aquaculture",
    name: "Growtech Aquaculture",
    acronym: "GA",
    sector: "inputs",
    category: "Aqua Inputs",
    href: "/about/sister-concerns/growtech-aquaculture",
    logo: "/images/concerns/growtech-aquaculture.png",
    fallbackIcon: Droplets,
    accent: "aqua",
    tagline: "Aquatic Farm Solutions",
    specialization: "Bio-Nutrition, Probiotics & Pond Ecosystem Health",
    description:
      "Formulating high-efficiency pond probiotics, mineral balancers, bio-nutrition inputs, and water conditioning agents for commercial aquaculture.",
    highlights: ["Bio-Probiotics", "Water Conditioners", "Field Technical Support"],
    ctaLabel: "Learn More",
  },
  {
    id: "growtech-animal-health",
    name: "Growtech Animal Health",
    acronym: "GAH",
    sector: "health",
    category: "Animal Health",
    href: "/about/sister-concerns/growtech-animal-health",
    logo: "/images/concerns/growtech-animal-health.png",
    fallbackIcon: HeartPulse,
    accent: "blue",
    tagline: "Veterinary Science & Care",
    specialization: "Therapeutic Medicines & Livestock Supplements",
    description:
      "Delivering trusted veterinary medicines, nutritional premixes, immune stimulants, and healthcare formulations for aquaculture, poultry, and livestock.",
    highlights: ["GMP Compliant", "Therapeutic Range", "Immuno-Boosters"],
    ctaLabel: "Learn More",
  },
  {
    id: "growtech-agro",
    name: "Growtech Agro",
    acronym: "GAG",
    sector: "inputs",
    category: "Agri-Tech",
    href: "/about/sister-concerns/growtech-agro",
    logo: "/images/concerns/growtech-agro.png",
    fallbackIcon: Sprout,
    accent: "emerald",
    tagline: "Sustainable Agri-Tech",
    specialization: "Bio-Fertilizers, Crop Enhancers & Modern Inputs",
    description:
      "Pioneering eco-friendly crop nutrition, organic soil conditioners, micronutrient solutions, and agricultural productivity inputs across Bangladesh.",
    highlights: ["Bio-Stimulants", "Soil Micronutrients", "Farmer Workshops"],
    ctaLabel: "Learn More",
  },
  {
    id: "carol-enterprise",
    name: "Carol Enterprise",
    acronym: "CE",
    sector: "health",
    category: "Trading & Supply",
    href: "/about/sister-concerns/carol-enterprise",
    logo: "/images/concerns/carol-enterprise.png",
    fallbackIcon: Building2,
    accent: "blue",
    tagline: "Agro-Industrial Distribution",
    specialization: "Strategic Sourcing, Logistics & Bulk Distribution",
    description:
      "Handling nationwide logistics, raw material import sourcing, and high-volume commercial agro-industrial supply chain operations with rapid dispatch.",
    highlights: ["Nationwide Fleet", "Direct Bulk Sourcing", "Fast Distribution"],
    ctaLabel: "Learn More",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Ventures", count: 7 },
  { id: "hatchery", label: "Hatcheries & Breeding", count: 3 },
  { id: "inputs", label: "Aqua & Agri Inputs", count: 2 },
  { id: "health", label: "Health & Logistics", count: 2 },
];

const ACCENT_MAP = {
  blue: {
    iconBox: "bg-[#004494]/10 text-[#004494] group-hover:bg-[#004494] group-hover:text-white",
    badge: "bg-blue-50 text-[#004494] border-blue-200/80",
    hoverBorder: "hover:border-[#004494]/40",
    bottomLine: "from-[#004494] via-[#0084d6] to-emerald-500",
    ctaText: "text-[#004494] group-hover:text-[#003370]",
  },
  aqua: {
    iconBox: "bg-[#0084d6]/10 text-[#0084d6] group-hover:bg-[#0084d6] group-hover:text-white",
    badge: "bg-cyan-50 text-[#0073bc] border-cyan-200/80",
    hoverBorder: "hover:border-[#0084d6]/45",
    bottomLine: "from-[#0084d6] via-cyan-500 to-emerald-500",
    ctaText: "text-[#0073bc] group-hover:text-[#004494]",
  },
  emerald: {
    iconBox: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    hoverBorder: "hover:border-emerald-500/45",
    bottomLine: "from-emerald-600 via-[#0084d6] to-[#004494]",
    ctaText: "text-emerald-700 group-hover:text-emerald-800",
  },
};

/**
 * Dedicated Corporate Logo Showcase Stage.
 * Positions company logo prominently at the top of the card.
 * Falls back to an executive corporate emblem lockup until the image is uploaded.
 */
function ConcernLogoStage({
  logo,
  name,
  acronym,
  fallbackIcon: FallbackIcon,
  category,
  accentStyle,
  isFeatured = false,
}) {
  const [logoStatus, setLogoStatus] = useState(logo ? "loading" : "error");
  const isLoaded = logoStatus === "loaded";

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 ${
        isFeatured
          ? "bg-white/95 backdrop-blur-md border border-white/40 shadow-sm h-28 sm:h-32"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border border-slate-200/80 group-hover:border-[#004494]/30 group-hover:bg-blue-50/30 group-hover:shadow-sm h-28 sm:h-30"
      }`}
    >
      {/* Subtle architectural dot grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b8_0.9px,transparent_0.9px)] [background-size:12px_12px] opacity-25"
      />

      {/* Top row: Venture Acronym & Category Pill */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase ${
            isFeatured
              ? "bg-[#004494] text-white"
              : "bg-slate-200/80 text-slate-700"
          }`}
        >
          <span>{acronym}</span>
          <span className="text-[9px] opacity-75 font-semibold">• VENTURE</span>
        </span>

        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase border ${accentStyle.badge}`}
        >
          {category}
        </span>
      </div>

      {/* Center: Corporate Logo or High-End Logo Lockup */}
      <div className="relative z-10 flex items-center justify-center my-auto py-1">
        {logo && logoStatus !== "error" && (
          <div className="relative h-11 sm:h-12 w-full max-w-[200px] flex items-center justify-center">
            <Image
              src={logo}
              alt={`${name} Official Logo`}
              width={180}
              height={48}
              sizes="200px"
              onLoad={() => setLogoStatus("loaded")}
              onError={() => setLogoStatus("error")}
              className={`h-full w-auto max-h-11 sm:max-h-12 object-contain transition-transform duration-300 group-hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          </div>
        )}

        {/* Corporate Fallback Logo Emblem */}
        {!isLoaded && (
          <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-102">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-xs transition-colors duration-200 ${
                isFeatured
                  ? "bg-[#004494] text-white"
                  : accentStyle.iconBox
              }`}
            >
              <FallbackIcon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-tight text-slate-900 group-hover:text-[#004494] transition-colors leading-tight line-clamp-1">
                {name}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                Fishtech Group Venture
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400">
        <span className="truncate">Fishtech BD Ltd.</span>
        <span className="font-semibold text-slate-500 group-hover:text-[#0084d6] transition-colors">
          Official Entity
        </span>
      </div>
    </div>
  );
}

export default function SisterConcernsSection({
  eyebrow = "Corporate Ecosystem & Holdings",
  headingStart = "Our",
  headingHighlight = "Sister Concerns",
  subtitle = "A premier diversified conglomerate of specialized hatcheries, biosecure breeding facilities, precision aquaculture inputs, veterinary animal health, and nationwide distribution.",
  concerns = SISTER_CONCERNS_DATA,
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredConcerns = useMemo(() => {
    if (activeFilter === "all") return concerns;
    return concerns.filter((item) => item.sector === activeFilter);
  }, [concerns, activeFilter]);

  return (
    <section
      aria-labelledby="sister-concerns-heading"
      className="relative bg-slate-50/70 py-12 sm:py-16 lg:py-20 overflow-x-clip"
    >
      {/* Background Ambience & Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h2
            id="sister-concerns-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px] lg:leading-[1.18]"
          >
            {headingStart}{" "}
            <span className="text-[#004494]">{headingHighlight}</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE CATEGORY FILTER TABS                          */}
        {/* ======================================================== */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] ${
                  isActive
                    ? "bg-[#004494] text-white shadow-md shadow-blue-900/15"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80 shadow-2xs"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[11px] font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 7-CARD ASYMMETRIC CORPORATE GRID (Logo on Top, Content Below) */}
        {/* ======================================================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6 items-stretch">
          {filteredConcerns.map((concern) => {
            const style = ACCENT_MAP[concern.accent] || ACCENT_MAP.blue;
            const FallbackIcon = concern.fallbackIcon || Building2;
            const isFeatured = concern.featured && activeFilter === "all";

            /* ---------------------------------------------------- */
            /* FEATURED FLAGSHIP CARD (Fishtech Hatchery)          */
            /* ---------------------------------------------------- */
            if (isFeatured) {
              return (
                <Link
                  key={concern.id}
                  href={concern.href}
                  className="@container group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#004494]/30 bg-gradient-to-br from-[#00285e] via-[#004494] to-[#0070ba] p-6 sm:p-7 text-white shadow-[0_20px_45px_-15px_rgba(0,68,148,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-12px_rgba(0,68,148,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] sm:col-span-2 lg:col-span-6"
                >
                  {/* Decorative Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 right-6 text-white/[0.05] transition-transform duration-500 group-hover:scale-110"
                  >
                    <FallbackIcon className="h-56 w-56" />
                  </div>

                  {/* 1. TOP: Dedicated Logo Stage */}
                  <div className="relative z-10">
                    <ConcernLogoStage
                      logo={concern.logo}
                      name={concern.name}
                      acronym={concern.acronym}
                      fallbackIcon={FallbackIcon}
                      category={concern.category}
                      accentStyle={style}
                      isFeatured
                    />

                    {/* 2. MIDDLE: Content Below Logo */}
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-400/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                          />
                          <span>{concern.tagline}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                        {concern.name}
                      </h3>

                      <p className="text-sm sm:text-[15px] leading-relaxed text-sky-100/90 line-clamp-3">
                        {concern.description}
                      </p>

                      {/* Flagship Metrics Row */}
                      {concern.metrics && (
                        <div className="pt-2 grid grid-cols-2 gap-3 max-w-md">
                          {concern.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="rounded-lg bg-white/10 backdrop-blur-xs p-2.5 border border-white/15"
                            >
                              <div className="text-xl sm:text-2xl font-black text-white">
                                {metric.value}
                              </div>
                              <div className="text-[11px] text-sky-200 font-medium">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Capabilities */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {concern.highlights?.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-sky-100 backdrop-blur-xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3. BOTTOM: Prominent CTA */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs sm:text-[13px] font-bold text-[#004494] shadow-sm transition-colors group-hover:bg-sky-50">
                      <span>{concern.ctaLabel || "Explore Venture"}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="hidden @sm:inline-block text-xs font-medium text-sky-200/85">
                      Certified Quality Broodstock &amp; Seed
                    </span>
                  </div>

                  {/* Bottom Accent Bar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              );
            }

            /* ---------------------------------------------------- */
            /* STANDARD CORPORATE VENTURE CARD (All Other Concerns) */
            /* ---------------------------------------------------- */
            const colSpanClass =
              activeFilter === "all"
                ? "lg:col-span-3"
                : filteredConcerns.length === 2
                ? "lg:col-span-6"
                : "lg:col-span-4";

            return (
              <Link
                key={concern.id}
                href={concern.href}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,68,148,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] ${colSpanClass} ${style.hoverBorder}`}
              >
                {/* 1. TOP: Dedicated Logo Stage */}
                <div>
                  <ConcernLogoStage
                    logo={concern.logo}
                    name={concern.name}
                    acronym={concern.acronym}
                    fallbackIcon={FallbackIcon}
                    category={concern.category}
                    accentStyle={style}
                  />

                  {/* 2. MIDDLE: Content Below Logo */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0084d6] transition-colors">
                      {concern.tagline}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#004494] transition-colors">
                      {concern.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {concern.description}
                    </p>

                    {/* Capability Highlights Pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {concern.highlights?.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1 rounded-md bg-slate-100/90 px-2 py-0.5 text-[11px] font-medium text-slate-600 group-hover:bg-blue-50/80 group-hover:text-[#004494] transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{highlight}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. BOTTOM: Action Link Bar */}
                <div
                  className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-[13px] font-bold tracking-wide ${style.ctaText}`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span>{concern.ctaLabel || "Learn More"}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-600">
                    Venture Details
                  </span>
                </div>

                {/* Bottom Border Reveal */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 ${style.bottomLine}`}
                />
              </Link>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM CORPORATE FOOTER NOTE                             */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-xl border border-slate-200/80 bg-white px-5 py-3 text-xs sm:text-sm text-slate-600 shadow-2xs">
            <span className="flex items-center gap-2 font-semibold text-slate-900">
              <Layers className="h-4 w-4 text-[#004494]" aria-hidden="true" />
              <span>Conglomerate Synergies:</span>
            </span>
            <span>All 7 ventures operate under strict biosecurity standards and unified technical oversight.</span>
            <Link
              href="/about/overview"
              className="inline-flex items-center gap-1 font-bold text-[#004494] hover:underline"
            >
              <span>Group Overview</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
