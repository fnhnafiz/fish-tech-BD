"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OurStorySection({
  eyebrow = "About Fishtech BD",
  headingStart = "Pioneering Sustainable",
  headingHighlight = "Aquaculture & Animal Health",
  headingEnd = "in Bangladesh",
  description = "Fishtech BD Limited is committed to empowering Bangladesh’s aquaculture and livestock sectors with science-backed aqua medicines, precision diagnostics, and nationwide technical advisory. Together with farmers and partners, we build healthier ponds, stronger yields, and resilient rural livelihoods.",
  storyP1 = "Founded with a bold vision to modernize Bangladesh's aquaculture ecosystem, Fishtech BD Limited has emerged as an authoritative leader in high-health fish seed multiplication, Specific Pathogen-Free (SPF) shrimp breeding, and scientific aquatic animal healthcare.",
  storyP2 = "Through our specialized sister concerns, dedicated research laboratories, and nationwide Centres of Excellence (CoE), we bridge laboratory precision with ground-level pond management. Our teams work tirelessly across all 64 districts to ensure disease-resilient yields, ecological balance, and economic prosperity for farming families.",
}) {
  return (
    <section
      aria-labelledby="overview-story-heading"
      className="relative py-12 sm:py-16 lg:py-20 overflow-x-clip "
    >
      {/* Background Subtle Architectural Dot Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-sky-50/80 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Content & Story                    */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Badge (Matching Home Page) */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500"
                />
                <span>{eyebrow}</span>
              </div>

              {/* Authoritative Headline */}
              <h2
                id="overview-story-heading"
                className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
              >
                {headingStart}{" "}
                <span className="text-[#004494]">{headingHighlight}</span>{" "}
                {headingEnd}
              </h2>

              {/* Brand Accent Bar */}
              <div
                aria-hidden="true"
                className="h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
              />
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
              <p>{description}</p>
              <p>{storyP1}</p>
              <p>{storyP2}</p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about/sister-concerns"
                className="inline-flex items-center gap-2 rounded-lg bg-[#004494] px-6 py-3 text-xs sm:text-sm font-bold tracking-wide text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-[#003370] hover:shadow-lg active:scale-95"
              >
                <span>Explore Sister Concerns</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Pure Bangladesh Map Image                   */}
          {/* (Clean 3D relief map — ZERO tags, ZERO overlays)          */}
          {/* ======================================================== */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Soft Ambient Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#004494]/15 via-sky-300/20 to-emerald-300/15 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"
              />

              {/* Pure Map Image Frame — Absolutely NO tags, badges, or overlays */}
              <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-xl flex items-center justify-center p-3 sm:p-5">
                <Image
                  src="/images/bangladesh-map.jpg"
                  alt="Map of Bangladesh - Fishtech BD Nationwide Operations"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
