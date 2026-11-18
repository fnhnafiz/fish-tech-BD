"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const SISTER_CONCERNS_DATA = [
  {
    id: "fishtech-hatchery",
    name: "Fishtech Hatchery",
    href: "/about/sister-concerns/fishtech-hatchery",
    logo: "/images/concerns/fishtech-hatchery.jpg",
    description:
      "Modern hatchery technology with precision biosecurity and selective broodstock management — ensuring nationwide farmers receive high-survival, fast-growing fish fry.",
    category: "Fish Seed",
    gradient: "from-[#004494] to-[#0070ba]",
  },
  {
    id: "fishtech-golda-hatchery",
    name: "Fishtech Golda Hatchery",
    href: "/about/sister-concerns/fishtech-golda-hatchery",
    logo: "/images/concerns/fishtech-golda-hatchery.jpg",
    description:
      "Dedicated nursery facilities producing disease-free Macrobrachium rosenbergii (Golda) post-larvae under precise environmental and salinity control.",
    category: "Freshwater Prawn",
    gradient: "from-[#0073bc] to-[#0084d6]",
  },
  {
    id: "fishtech-spf-monodon",
    name: "Fishtech SPF Monodon",
    href: "/about/sister-concerns/fishtech-spf-monodon",
    logo: "/images/concerns/fishtech-spf-monodon.jpg",
    description:
      "Certified SPF Penaeus monodon breeding facility delivering PCR-screened, virus-free, resilient Bagda shrimp seed to coastal farms across Bangladesh.",
    category: "Coastal Shrimp",
    gradient: "from-emerald-700 to-emerald-500",
  },
  {
    id: "growtech-aquaculture",
    name: "Growtech Aquaculture",
    href: "/about/sister-concerns/growtech-aquaculture",
    logo: "/images/concerns/growtech-aquaculture.jpg",
    description:
      "High-efficiency pond probiotics, mineral balancers, bio-nutrition inputs, and water conditioning agents formulated for commercial aquaculture success.",
    category: "Aqua Inputs",
    gradient: "from-[#0084d6] to-cyan-500",
  },
  {
    id: "growtech-animal-health",
    name: "Growtech Animal Health",
    href: "/about/sister-concerns/growtech-animal-health",
    logo: "/images/concerns/growtech-animal-health.jpg",
    description:
      "Trusted veterinary medicines, nutritional premixes, immune stimulants, and healthcare formulations for aquaculture, poultry, and livestock sectors.",
    category: "Animal Health",
    gradient: "from-[#004494] to-[#0084d6]",
  },
  {
    id: "growtech-agro",
    name: "Growtech Agro",
    href: "/about/sister-concerns/growtech-agro",
    logo: "/images/concerns/growtech-agro.jpg",
    description:
      "Eco-friendly crop nutrition, organic soil conditioners, micronutrient solutions, and modern agri-tech inputs serving farmers across Bangladesh.",
    category: "Agri-Tech",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "carol-enterprise",
    name: "Carol Enterprise",
    href: "/about/sister-concerns/carol-enterprise",
    logo: "/images/concerns/carol-enterprise.jpg",
    description:
      "Nationwide logistics, raw material import sourcing, and high-volume agro-industrial supply chain operations with rapid and reliable dispatch.",
    category: "Trading & Supply",
    gradient: "from-slate-700 to-[#004494]",
  },
];

function ConcernCard({ concern }) {
  return (
    <Link
      href={concern.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl shadow-md border border-slate-200/60 bg-white aspect-[4/3] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-14px_rgba(0,68,148,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004494]"
    >
      {/* Full-cover logo image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={concern.logo}
          alt={`${concern.name} logo`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Persistent top gradient for category pill readability */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 via-black/20 to-transparent z-10" />

      {/* Category pill — always visible at top */}
      <div className="relative z-20 px-4 pt-4">
        <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-white">
          {concern.category}
        </span>
      </div>

      {/* Slide-up overlay — hidden at rest, slides up on hover */}
      <div
        className={`
          absolute inset-x-0 bottom-0 z-20
          bg-gradient-to-t ${concern.gradient}
          translate-y-full group-hover:translate-y-0
          transition-transform duration-450 ease-out
          px-5 pt-6 pb-5 flex flex-col gap-2.5
        `}
        style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
      >
        {/* Title — slides up with slight delay */}
        <h3
          className="text-white font-extrabold text-base sm:text-lg leading-snug tracking-tight
            translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-350 delay-75 ease-out"
        >
          {concern.name}
        </h3>

        {/* Description — slides up with more delay */}
        <p
          className="text-white/85 text-xs leading-relaxed line-clamp-3
            translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-350 delay-150 ease-out"
        >
          {concern.description}
        </p>

        {/* CTA — slides up last */}
        <div
          className="flex items-center gap-1.5 text-white font-bold text-xs mt-1
            translate-y-4 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-350 delay-200 ease-out"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
        </div>
      </div>

      {/* Normal-state bottom info (hides when overlay appears) */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-10
          bg-gradient-to-t from-black/70 via-black/35 to-transparent
          group-hover:opacity-0 transition-opacity duration-250"
      >
        <p className="text-white font-extrabold text-sm sm:text-base leading-snug tracking-tight drop-shadow">
          {concern.name}
        </p>
      </div>
    </Link>
  );
}

export default function SisterConcernsSection({
  eyebrow = "Corporate Ecosystem",
  headingStart = "Our",
  headingHighlight = "Sister Concerns",
  subtitle = "A diversified group of specialized hatcheries, aquaculture inputs, veterinary health, and agro-industrial ventures under Fishtech BD Limited.",
  concerns = SISTER_CONCERNS_DATA,
}) {
  return (
    <section
      aria-labelledby="sister-concerns-heading"
      className="relative bg-[#F9FAFB] py-12 sm:py-16 overflow-x-clip"
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-25"
      />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-24 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#004494]/8 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h2
            id="sister-concerns-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            {headingStart}{" "}
            <span className="text-[#004494]">{headingHighlight}</span>
          </h2>

          <p className="text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            {subtitle}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((concern) => (
            <ConcernCard key={concern.id} concern={concern} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/about/sister-concerns"
            className="inline-flex items-center gap-2 rounded-xl bg-[#004494] px-7 py-3 text-sm font-bold text-white shadow-md shadow-blue-900/20 transition-all duration-200 hover:bg-[#003370] hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            <span>View All Sister Concerns</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
