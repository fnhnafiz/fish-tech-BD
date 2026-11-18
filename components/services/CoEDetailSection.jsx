"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MapPin, ArrowRight, Sparkles } from "lucide-react";

const DEFAULT_MYMENSINGH_IMAGES = [
  {
    id: "mymensingh-coe-main",
    src: "/images/service-coe.jpg",
    alt: "Aquaculture Centre of Excellence CoE Mymensingh demonstration hub and training facility",
  },
  {
    id: "mymensingh-field-training",
    src: "/images/about-3.jpg",
    alt: "Farmers receiving hands-on technical demonstration and pond advisory in Mymensingh",
  },
  {
    id: "mymensingh-water-diagnostics",
    src: "/images/about-2.jpg",
    alt: "On-site water testing and microscope diagnostics at Mymensingh CoE",
  },
];

export default function CoEDetailSection({
  eyebrow = "AQUACULTURE CENTRE OF EXCELLENCE • MYMENSINGH",
  title = "Mymensingh Aquaculture Centre of Excellence (CoE)",
  leadText = "Fishtech BD's flagship technology transfer and demonstration facility, bridging academic fisheries science with ground-level pond management for commercial farmers across northern Bangladesh.",
  paragraphs = [
    "Situated at the epicentre of Bangladesh's freshwater aquaculture industry, the Mymensingh Aquaculture Centre of Excellence (CoE) serves as our primary demonstration, education, and diagnostic hub. Designed to support commercial pangas, tilapia, carp, and catfish farming clusters, the centre demonstrates how scientific protocols translate into lower mortality, improved Feed Conversion Ratios (FCR), and higher harvest yields.",
    "The facility features specialized biosecure demonstration ponds showcasing modern water management, multi-point paddlewheel and bottom diffusion aeration systems, and automated feeding techniques. Farmers visiting the centre can observe scientific best management practices (BMP) in action, learning directly from qualified fisheries biologists and technical officers.",
    "Beyond field demonstrations, CoE Mymensingh houses an advanced diagnostic testing desk that provides local farmers with rapid analysis for Dissolved Oxygen, pH, Ammonia, and parasite screening. In collaboration with nearby academic institutions including the Faculty of Fisheries at Bangladesh Agricultural University (BAU), the centre hosts structured workshops, biosecure stocking clinics, and technology transfer sessions throughout the farming calendar.",
  ],
  images = DEFAULT_MYMENSINGH_IMAGES,
  locationText = "Mymensingh Aquaculture Cluster, Bangladesh",
  phone = "+880 1700-000000",
  ctaLabel = "Explore All Services",
  ctaHref = "/services/technical-service",
}) {
  return (
    <section
      aria-labelledby="coe-detail-heading"
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
          {/* LEFT COLUMN: Editorial Content & Hub Details              */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/90 bg-sky-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>

              <h1
                id="coe-detail-heading"
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

            {/* Location & Helpline Strip */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Regional Advisory & Hub Helpline
                  </span>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="text-base font-black text-[#004494] hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="sm:ml-auto">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#004494] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-[#003370] hover:shadow-lg active:scale-95"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Facility Location Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-[#004494] shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-slate-800">Facility Location:</strong> {locationText}
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Pure 3-Image Showcase (Asymmetric Layout)  */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#004494]/15 via-sky-300/15 to-emerald-300/15 blur-2xl opacity-75"
            />

            {/* 3-Image UI Structure */}
            <div className="relative space-y-3.5 sm:space-y-4">
              {/* Image 1: Top Featured Master Image */}
              {images[0] && (
                <div className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#004494]/40">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt || title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl sm:rounded-3xl"
                  />
                </div>
              )}

              {/* Bottom Row: 2 Complementary Images Side by Side */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {images.slice(1, 3).map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#004494]/40"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt || `${title} activity ${idx + 2}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 22vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
