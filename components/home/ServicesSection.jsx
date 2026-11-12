import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Modular service card definitions with dedicated photography.
 * Update titles, descriptions, routes, images, or accents here.
 */
const SERVICES_DATA = [
  {
    id: "aqua-medicine",
    title: "Aqua Medicine",
    category: "Health & Nutrition",
    href: "/services/aqua-medicine",
    image: "/images/service-aqua-medicine.jpg",
    accent: "aqua",
    tag: "01",
    description:
      "Science-backed probiotics, minerals, growth promoters, and water management solutions for healthy aquatic yields.",
  },
  {
    id: "technical-service",
    title: "Technical Service",
    category: "Field Advisory",
    href: "/services/technical-service",
    image: "/images/about-3.jpg",
    accent: "blue",
    tag: "02",
    description:
      "On-field expert consultation, pond diagnostics, and hands-on farm management support across Bangladesh.",
  },
  {
    id: "coe",
    title: "CoE (Aquaculture Centre of Excellence)",
    category: "Training Hubs",
    href: "/services/coe",
    image: "/images/service-coe.jpg",
    accent: "emerald",
    tag: "03",
    description:
      "Dedicated regional training and demonstration hubs in Mymensingh, Patuakhali, and Cox’s Bazar.",
  },
  {
    id: "fishtech-laboratory",
    title: "Fishtech Laboratory",
    category: "PCR & Water Lab",
    href: "/services/fishtech-laboratory",
    image: "/images/about-2.jpg",
    accent: "blue",
    tag: "04",
    description:
      "Advanced diagnostic testing for water quality, soil health, and aquatic pathogens to prevent disease outbreaks.",
  },
];

const ACCENT_VARIANTS = {
  aqua: {
    cardBorder: "hover:border-[#0084d6]/55",
    bottomBar: "from-[#0084d6] to-cyan-400",
    ctaText: "text-[#0084d6] group-hover:text-[#004494]",
    arrowPill:
      "bg-[#0084d6]/10 text-[#0084d6] group-hover:bg-[#0084d6] group-hover:text-white",
  },
  blue: {
    cardBorder: "hover:border-[#004494]/50",
    bottomBar: "from-[#004494] to-[#0084d6]",
    ctaText: "text-[#004494]",
    arrowPill:
      "bg-[#004494]/8 text-[#004494] group-hover:bg-[#004494] group-hover:text-white",
  },
  emerald: {
    cardBorder: "hover:border-emerald-500/50",
    bottomBar: "from-emerald-600 to-teal-400",
    ctaText: "text-emerald-700 group-hover:text-emerald-800",
    arrowPill:
      "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
  },
};

export default function ServicesSection({
  eyebrow = "Our Services",
  headingStart = "Comprehensive",
  headingHighlight = "Aquaculture & Health",
  headingEnd = "Solutions",
  subtitle = "Supporting farmers, hatcheries, and agribusiness partners across Bangladesh from pond-side advisory to precision laboratory diagnostics.",
  services = SERVICES_DATA,
}) {
  return (
    <section
      aria-labelledby="services-section-heading"
      className="relative border-y border-slate-200/70 bg-[#F8FAFC] py-14 sm:py-16 lg:py-20 overflow-x-clip"
    >
      {/* Subtle ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* SECTION HEADER (Centered Corporate Layout)               */}
        {/* ======================================================== */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#0084d6]"
            />
            <span>{eyebrow}</span>
          </div>

          <h2
            id="services-section-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
          >
            {headingStart}{" "}
            <span className="text-[#004494]">{headingHighlight}</span>{" "}
            {headingEnd}
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
        {/* 4-CARD STAGGERED PHOTO GRID (Up / Down Alternating Flow) */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {services.map((service, index) => {
            const style =
              ACCENT_VARIANTS[service.accent] || ACCENT_VARIANTS.blue;
            const isStaggeredDown = index % 2 === 1;

            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/85 bg-white shadow-[0_8px_30px_-10px_rgba(0,68,148,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-14px_rgba(0,68,148,0.20)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] motion-reduce:transition-none motion-reduce:hover:transform-none ${
                  isStaggeredDown ? "sm:mt-8 lg:mt-12" : "lg:mt-0"
                } ${style.cardBorder}`}
              >
                {/* Top Photo Container */}
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />

                  {/* Subtle dark gradient scrim for badge readability */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#001c44]/65 via-[#001c44]/10 to-transparent"
                  />

                  {/* Floating Index Pill */}
                  {service.tag && (
                    <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold tracking-wider text-[#004494] shadow-sm backdrop-blur-xs">
                      {service.tag}
                    </span>
                  )}

                  {/* Bottom-Left Category Tag */}
                  {service.category && (
                    <span className="absolute bottom-3.5 left-4 z-10 inline-flex items-center rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
                      {service.category}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#004494] sm:text-[19px]">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Footer CTA */}
                  <div
                    className={`mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold tracking-wide sm:text-[13px] ${style.ctaText}`}
                  >
                    <span>Explore Service</span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${style.arrowPill}`}
                    >
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>

                {/* Smooth bottom gradient reveal bar */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none ${style.bottomBar}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
