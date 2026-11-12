"use client";

import React, { useState } from "react";
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
} from "lucide-react";

/**
 * Structured Sister Concerns data for Fishtech BD Limited.
 * Card 1 (`featured: true`) anchors the top row across 6 columns on desktop.
 * Upload matching logos under `public/images/concerns/` anytime; crisp Lucide
 * icons render automatically whenever an image is not yet available.
 */
const SISTER_CONCERNS_DATA = [
  {
    id: "fishtech-hatchery",
    name: "Fishtech Hatchery",
    category: "Fish Seed",
    href: "/about/sister-concerns/fishtech-hatchery",
    logo: "/images/concerns/fishtech-hatchery.png",
    fallbackIcon: Fish,
    featured: true,
    accent: "blue",
    tagline: "Flagship Venture",
    description:
      "High-quality fish seed and fingerling production using modern hatchery technology, precision biosecurity, and selective broodstock management.",
    ctaLabel: "Explore Venture",
  },
  {
    id: "fishtech-golda-hatchery",
    name: "Fishtech Golda Hatchery",
    category: "Freshwater Prawn",
    href: "/about/sister-concerns/fishtech-golda-hatchery",
    logo: "/images/concerns/fishtech-golda-hatchery.png",
    fallbackIcon: Waves,
    accent: "aqua",
    description:
      "Specialized freshwater prawn (Golda) post-larvae production for sustainable farming.",
    ctaLabel: "Learn More",
  },
  {
    id: "fishtech-spf-monodon",
    name: "Fishtech SPF Monodon",
    category: "Coastal Shrimp",
    href: "/about/sister-concerns/fishtech-spf-monodon",
    logo: "/images/concerns/fishtech-spf-monodon.png",
    fallbackIcon: ShieldCheck,
    accent: "emerald",
    description:
      "Specific Pathogen-Free (SPF) Bagda shrimp breeding for disease-resilient coastal yields.",
    ctaLabel: "Learn More",
  },
  {
    id: "growtech-aquaculture",
    name: "Growtech Aquaculture",
    category: "Aqua Inputs",
    href: "/about/sister-concerns/growtech-aquaculture",
    logo: "/images/concerns/growtech-aquaculture.png",
    fallbackIcon: Droplets,
    accent: "aqua",
    description:
      "Innovative aquaculture inputs, feed solutions, and modern farm management support.",
    ctaLabel: "Learn More",
  },
  {
    id: "growtech-animal-health",
    name: "Growtech Animal Health",
    category: "Animal Health",
    href: "/about/sister-concerns/growtech-animal-health",
    logo: "/images/concerns/growtech-animal-health.png",
    fallbackIcon: HeartPulse,
    accent: "blue",
    description:
      "Trusted veterinary medicines, nutritional supplements, and livestock healthcare solutions.",
    ctaLabel: "Learn More",
  },
  {
    id: "growtech-agro",
    name: "Growtech Agro",
    category: "Agri-Tech",
    href: "/about/sister-concerns/growtech-agro",
    logo: "/images/concerns/growtech-agro.png",
    fallbackIcon: Sprout,
    accent: "emerald",
    description:
      "Advancing modern crop care, agro-inputs, and sustainable agricultural productivity.",
    ctaLabel: "Learn More",
  },
  {
    id: "carol-enterprise",
    name: "Carol Enterprise",
    category: "Trading & Supply",
    href: "/about/sister-concerns/carol-enterprise",
    logo: "/images/concerns/carol-enterprise.png",
    fallbackIcon: Building2,
    accent: "blue",
    description:
      "Strategic trading, supply chain distribution, and commercial agro-industrial operations.",
    ctaLabel: "Learn More",
  },
];

const ACCENT_MAP = {
  blue: {
    iconBox:
      "bg-[#004494]/8 text-[#004494] group-hover:bg-[#004494] group-hover:text-white",
    badge: "bg-sky-50 text-[#004494] border-sky-200/80",
    hoverBorder: "hover:border-[#004494]/40",
    bottomLine: "from-[#004494] via-[#0084d6] to-emerald-500",
    ctaText: "text-[#004494]",
  },
  aqua: {
    iconBox:
      "bg-[#0084d6]/10 text-[#0084d6] group-hover:bg-[#0084d6] group-hover:text-white",
    badge: "bg-cyan-50 text-[#0073bc] border-cyan-200/80",
    hoverBorder: "hover:border-[#0084d6]/45",
    bottomLine: "from-[#0084d6] via-cyan-500 to-emerald-500",
    ctaText: "text-[#0084d6] group-hover:text-[#004494]",
  },
  emerald: {
    iconBox:
      "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    hoverBorder: "hover:border-emerald-500/45",
    bottomLine: "from-emerald-600 via-[#0084d6] to-[#004494]",
    ctaText: "text-emerald-700 group-hover:text-emerald-800",
  },
};

/**
 * Displays a venture logo from `public/images/concerns/` once loaded,
 * smoothly falling back to a crisp tinted Lucide icon badge otherwise.
 */
function ConcernLogoBadge({
  logo,
  name,
  fallbackIcon: FallbackIcon,
  accentStyle,
  isFeatured = false,
}) {
  const [logoStatus, setLogoStatus] = useState(logo ? "loading" : "error");
  const isLoaded = logoStatus === "loaded";

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl transition-colors duration-300 motion-reduce:transition-none aspect-square ${isFeatured ? "h-14 w-14" : "h-12 w-12"
        } ${isLoaded
          ? "border border-slate-200/80 bg-white p-1.5 shadow-2xs"
          : isFeatured
            ? "border border-white/25 bg-white/15 text-white backdrop-blur-xs group-hover:bg-white group-hover:text-[#004494]"
            : `border border-slate-200/70 ${accentStyle.iconBox}`
        }`}
    >
      {!isLoaded && (
        <FallbackIcon
          className={isFeatured ? "h-7 w-7" : "h-6 w-6"}
          aria-hidden="true"
        />
      )}

      {logo && logoStatus !== "error" && (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={52}
          height={52}
          sizes="56px"
          onLoad={() => setLogoStatus("loaded")}
          onError={() => setLogoStatus("error")}
          className={`h-full w-full object-contain transition-opacity duration-200 ${isLoaded
              ? "opacity-100"
              : "pointer-events-none absolute inset-0 opacity-0"
            }`}
        />
      )}
    </div>
  );
}

export default function SisterConcernsSection({
  eyebrow = "Our Group & Ventures",
  headingStart = "Our",
  headingHighlight = "Sister Concerns",
  subtitle = "A diversified ecosystem of hatcheries, aquaculture inputs, animal health, and agribusiness ventures empowering farmers nationwide.",
  concerns = SISTER_CONCERNS_DATA,
}) {
  return (
    <section
      aria-labelledby="sister-concerns-heading"
      className="relative  bg-slate-50/80 py-8 sm:py-12 lg:py-12 overflow-x-clip"
    >
      {/* Subtle architectural dot backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            <span>{eyebrow}</span>
          </div>

          <h2
            id="sister-concerns-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
          >
            {headingStart}{" "}
            <span className="text-[#004494]">{headingHighlight}</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>

        {/* ======================================================== */}
        {/* 7-CARD ASYMMETRIC CORPORATE BENTO GRID                   */}
        {/* Top Row: 6 + 3 + 3  |  Bottom Row: 3 + 3 + 3 + 3         */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {concerns.map((concern) => {
            const style = ACCENT_MAP[concern.accent] || ACCENT_MAP.blue;
            const FallbackIcon = concern.fallbackIcon || Building2;

            if (concern.featured) {
              return (
                <Link
                  key={concern.id}
                  href={concern.href}
                  className="@container group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#004494]/30 bg-gradient-to-br from-[#00285e] via-[#004494] to-[#0070ba] p-6 sm:p-8 text-white shadow-[0_20px_45px_-15px_rgba(0,68,148,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-12px_rgba(0,68,148,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] motion-reduce:transition-none motion-reduce:hover:transform-none sm:col-span-2 lg:col-span-6"
                >
                  {/* Decorative Ambient Glow & Watermark Icon */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-sky-400/20 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 right-6 text-white/[0.06] transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none"
                  >
                    <FallbackIcon className="h-44 w-44" />
                  </div>

                  {/* Card Top & Content */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <ConcernLogoBadge
                        logo={concern.logo}
                        name={concern.name}
                        fallbackIcon={FallbackIcon}
                        accentStyle={style}
                        isFeatured
                      />

                      <div className="flex items-center gap-2">
                        {concern.tagline && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-400/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                            />
                            <span>{concern.tagline}</span>
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-sky-100 backdrop-blur-xs">
                          {concern.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-[26px] lg:text-[28px]">
                      {concern.name}
                    </h3>

                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-sky-100/90 sm:text-[15px] line-clamp-2">
                      {concern.description}
                    </p>
                  </div>

                  {/* Prominent Flagship CTA */}
                  <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#004494] shadow-sm transition-colors group-hover:bg-sky-50 sm:text-[13px]">
                      <span>{concern.ctaLabel || "Explore Venture"}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="hidden @sm:inline-block text-xs font-medium text-sky-200/80">
                      Certified Quality Seed &amp; Fingerlings
                    </span>
                  </div>

                  {/* Smooth bottom accent bar reveal */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                </Link>
              );
            }

            return (
              <Link
                key={concern.id}
                href={concern.href}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,68,148,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] motion-reduce:transition-none motion-reduce:hover:transform-none lg:col-span-3 ${style.hoverBorder}`}
              >
                {/* Top Row & Text Content */}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <ConcernLogoBadge
                      logo={concern.logo}
                      name={concern.name}
                      fallbackIcon={FallbackIcon}
                      accentStyle={style}
                    />

                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${style.badge}`}
                    >
                      {concern.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#004494]">
                    {concern.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {concern.description}
                  </p>
                </div>

                {/* Uniform Bottom CTA */}
                <div
                  className={`mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold tracking-wide sm:text-[13px] ${style.ctaText}`}
                >
                  <span>{concern.ctaLabel || "Learn More"}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Smooth bottom border reveal */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none ${style.bottomLine}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
