"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Download, Sparkles } from "lucide-react";

/**
 * OurStrategySection Component
 *
 * Designed according to executive editorial publication layouts (e.g. WorldFish / CGIAR strategy briefs).
 * 2-Column Split:
 *  - Left: Clean editorial typography (Header, bold lead vision statement, authoritative paragraphs, CTA button).
 *  - Right: Branded publication report document cover showcasing the national strategic roadmap.
 *
 * Dynamic-ready: Content and image props allow seamless integration with future CMS / Admin panel APIs.
 */
export default function OurStrategySection({
  eyebrow = "NATIONAL ROADMAP",
  title = "OUR STRATEGY",
  leadText = "We provide holistic scientific thinking, biosecure genetics, and field-tested solutions to transform Bangladesh's aquatic food systems for healthy people, resilient communities, and the planet.",
  paragraphs = [
    "Over 60 percent of all animal protein consumed in Bangladesh comes from aquatic foods. They are also, bite for bite, among the densest sources of essential micronutrients — the vital vitamins, minerals, and bioavailable fatty acids fundamental for health, cognitive growth, and lifelong wellbeing. The naturally low carbon footprint of sustainable aquaculture also reinforces resilience for farming communities faced with rising climate challenges.",
    "Aquatic foods are produced and harvested with diverse technologies and across varied scales — from rural homestead earthen ponds and progressive youth-led farming clusters to commercial hatcheries and coastal shrimp ghers. Our strategy seeks to transform aquatic food systems to ensure equitable, disease-resilient, and sustainable access to nutritious food from water.",
    "Equity is vital across all tiers of society, so that women pond managers, young aquapreneurs, and marginalized smallholders are fully equipped with pathogen-screened seed, precision water diagnostics, and direct pond-side advisory. By elevating farm-level productivity, our roadmap drives rural economic independence and long-term ecological balance across all 64 districts.",
  ],

  image = "/images/our-strategy.jpg",
  imageAlt = "Fishtech BD Aquaculture Strategy 2030 - Research and Innovation Document Cover",
  documentBadge = "2030 Research & Innovation Strategy",
}) {
  return (
    <section
      aria-labelledby="our-strategy-heading"
      className="relative py-8 sm:py-12 lg:py-12 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />

      {/* Soft Ambient Radial Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Content & Strategy Vision          */}
          {/* (Exact structure from reference, elevated with Fishtech) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-[#004494]" aria-hidden="true" />
                <span className="text-xs font-black tracking-[0.2em] uppercase text-[#004494]">
                  {eyebrow}
                </span>
              </div>

              <h2
                id="our-strategy-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#004494] uppercase leading-tight"
              >
                {title}
              </h2>

              <div
                aria-hidden="true"
                className="h-1 w-20 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
              />
            </div>

            {/* Lead Statement (Bold, authoritative, prominent) */}
            <p className="text-base sm:text-lg lg:text-[19px] font-bold text-slate-800 leading-snug tracking-normal">
              {leadText}
            </p>

            {/* Editorial Paragraphs (Clean, legible, authoritative spacing) */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>


          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Strategy Report Cover Showcase               */}
          {/* (Framed 3D Publication Pedestal — Pure Image Container)  */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[460px]">
              {/* Ambient Glow behind document */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#004494]/20 via-[#0084d6]/15 to-emerald-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"
              />

              {/* Publication Container Frame */}
              <div className="relative rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-[0_15px_45px_-10px_rgba(0,68,148,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-15px_rgba(0,68,148,0.28)]">
                {/* Paper Stack Depth Effect (Top decorative border) */}
                <div
                  aria-hidden="true"
                  className="absolute -top-2 left-6 right-6 h-2 rounded-t-xl bg-slate-200/60 border-t border-x border-slate-300/60"
                />

                {/* Pure Image Container - Dynamic Friendly */}
                <div className="relative w-full aspect-[1/1.38] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-xs">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Document Metadata Bar */}
                <div className="mt-3.5 flex items-center justify-between px-2 pt-2 border-t border-slate-100 text-slate-500 text-xs">
                  <span className="font-bold text-[#004494] text-[11px] sm:text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    <span>{documentBadge}</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Fishtech BD Publication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
