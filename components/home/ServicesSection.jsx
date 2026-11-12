import React from "react";
import Link from "next/link";
import {
  Droplets,
  UserCheck,
  GraduationCap,
  Microscope,
  ArrowRight,
} from "lucide-react";

/**
 * Modular service card definitions.
 * Update titles, descriptions, routes, icons, or accents here.
 */
const SERVICES_DATA = [
  {
    id: "aqua-medicine",
    title: "Aqua Medicine",
    href: "/services/aqua-medicine",
    icon: Droplets,
    accent: "aqua",
    tag: "01",
    description:
      "Science-backed probiotics, minerals, growth promoters, and water management solutions for healthy aquatic yields.",
  },
  {
    id: "technical-service",
    title: "Technical Service",
    href: "/services/technical-service",
    icon: UserCheck,
    accent: "blue",
    tag: "02",
    description:
      "On-field expert consultation, pond diagnostics, and hands-on farm management support across Bangladesh.",
  },
  {
    id: "coe",
    title: "CoE (Aquaculture Centre of Excellence)",
    href: "/services/coe",
    icon: GraduationCap,
    accent: "emerald",
    tag: "03",
    description:
      "Dedicated regional training and demonstration hubs in Mymensingh, Patuakhali, and Cox’s Bazar.",
  },
  {
    id: "fishtech-laboratory",
    title: "Fishtech Laboratory",
    href: "/services/fishtech-laboratory",
    icon: Microscope,
    accent: "blue",
    tag: "04",
    description:
      "Advanced diagnostic testing for water quality, soil health, and aquatic pathogens to prevent disease outbreaks.",
  },
];

const ACCENT_VARIANTS = {
  aqua: {
    cardBorder: "hover:border-[#0084d6]/55",
    topBar: "bg-gradient-to-r from-[#0084d6] to-cyan-400",
    iconBox:
      "bg-[#0084d6]/10 text-[#0084d6] group-hover:bg-[#0084d6] group-hover:text-white",
    ctaText: "text-[#0084d6] group-hover:text-[#004494]",
  },
  blue: {
    cardBorder: "hover:border-[#004494]/50",
    topBar: "bg-gradient-to-r from-[#004494] to-[#0084d6]",
    iconBox:
      "bg-[#004494]/8 text-[#004494] group-hover:bg-[#004494] group-hover:text-white",
    ctaText: "text-[#004494]",
  },
  emerald: {
    cardBorder: "hover:border-emerald-500/50",
    topBar: "bg-gradient-to-r from-emerald-600 to-teal-400",
    iconBox:
      "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    ctaText: "text-emerald-700 group-hover:text-emerald-800",
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
      className="relative py-8 sm:py-12 lg:py-12 overflow-x-clip"
    >
      {/* Subtle ambient background accent */}
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
        {/* 4-CARD SERVICE GRID (Subgrid aligned on desktop)         */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_1fr_auto]">
          {services.map((service) => {
            const IconComponent = service.icon;
            const style =
              ACCENT_VARIANTS[service.accent] || ACCENT_VARIANTS.blue;

            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] motion-reduce:transition-none motion-reduce:hover:transform-none lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-y-4 ${style.cardBorder}`}
              >
                {/* Out-of-flow top highlight accent bar */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none ${style.topBar}`}
                />

                {/* Row 1: Tinted Icon Badge & Index */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 motion-reduce:transition-none ${style.iconBox}`}
                  >
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {service.tag && (
                    <span className="text-xs font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-slate-400">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Row 2: Service Title */}
                <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#004494] sm:text-[19px]">
                  {service.title}
                </h3>

                {/* Row 3: Concise Description */}
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Row 4: Explore Service CTA Footer */}
                <div
                  className={`mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold tracking-wide sm:text-[13px] ${style.ctaText}`}
                >
                  <span>Explore Service</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
