"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, ArrowRight, Sparkles } from "lucide-react";

const DEFAULT_IMAGES = [
  {
    id: "field-advisory",
    src: "/images/about-3.jpg",
    alt: "Fishtech field technical officer advising an aquaculture farmer at pond-side",
  },
  {
    id: "water-diagnostics",
    src: "/images/about-2.jpg",
    alt: "Fishtech laboratory technician performing water quality diagnostics and pathogen testing",
  },
  {
    id: "farmer-training",
    src: "/images/service-coe.jpg",
    alt: "Aquaculture Centre of Excellence farmer training session in Bangladesh",
  },
  {
    id: "biosecure-monitoring",
    src: "/images/about-1.jpg",
    alt: "Biosecure commercial fish and shrimp farm pond in Bangladesh",
  },
];

export default function TechnicalServiceDetailSection({
  eyebrow = "NATIONWIDE FIELD ADVISORY & EXTENSION",
  title = "Scientific On-Site Technical Advisory & Diagnostics",
  leadText = "Bridging laboratory precision with practical ground-level pond management to empower aquaculture farmers across all 64 districts of Bangladesh.",
  paragraphs = [
    "Fishtech BD Limited takes immense pride in its dedicated technical service division, comprising certified fisheries graduates, veterinary microbiologists, and seasoned aquatic health consultants. Our officers travel directly to commercial fish, shrimp, and prawn farming clusters to provide immediate, actionable technical advisory.",
    "Rather than encouraging blanket or indiscriminate chemical treatments, our technical service emphasizes diagnostic-first management. We perform comprehensive water and soil chemistry assessments, evaluate phytoplankton blooms, examine gill and gut health under field microscopes, and design tailored intervention protocols that protect pond ecology.",
    "Through our nationwide Centres of Excellence (CoE) and mobile rapid-response units, we also facilitate farmer workshops, biosecure stocking demonstrations, and round-the-clock emergency assistance, ensuring our farming partners achieve healthy harvests and sustainable profitability season after season.",
  ],
  images = DEFAULT_IMAGES,
}) {
  const isThreeImages = images.length === 3;

  return (
    <section
      aria-labelledby="technical-service-heading"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB]"
    >
      {/* Background Architectural Dot Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35"
      />
      {/* Subtle Ambient Color Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-96 w-96 rounded-full bg-[#004494]/6 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-emerald-500/6 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Content (Heading & Paragraphs)     */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/90 bg-sky-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>

              <h1
                id="technical-service-heading"
                className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-[1.18]"
              >
                {title}
              </h1>

              <div
                aria-hidden="true"
                className="h-1 w-20 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
              />
            </div>

            {/* Lead Statement */}
            <p className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
              {leadText}
            </p>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Helpline Strip & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technical Advisory Helpline
                  </span>
                  <a
                    href="tel:+8801700000000"
                    className="text-base font-black text-[#004494] hover:underline"
                  >
                    +880 1700-000000
                  </a>
                </div>
              </div>

              <div className="sm:ml-auto">
                <Link
                  href="/about/overview"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#004494] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-[#003370] hover:shadow-lg active:scale-95"
                >
                  <span>Explore Network & CoE</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Pure Image Grid (3/4 Images, No Text/Modal)*/}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#004494]/15 via-sky-300/15 to-emerald-300/15 blur-2xl opacity-70"
            />

            {/* Pure Image Grid */}
            <div
              className={`relative grid gap-3.5 sm:gap-4 ${
                isThreeImages
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {images.slice(0, 4).map((item, idx) => {
                const isFeaturedInThree = isThreeImages && idx === 0;

                return (
                  <div
                    key={item.id || idx}
                    className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#004494]/40 ${
                      isFeaturedInThree
                        ? "sm:col-span-2 aspect-[16/10]"
                        : "aspect-[4/3] sm:aspect-square"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt || "Fishtech Technical Service Activity"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Protective Inner Ring */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
