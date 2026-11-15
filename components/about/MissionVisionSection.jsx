"use client";

import React from "react";
import Image from "next/image";
import {
  FiEye,
  FiTarget,
  FiCheckCircle,
  FiCompass,
  FiAward,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const DEFAULT_MISSION_VISION_DATA = {
  vision: {
    tag: "01 / OUR VISION",
    title: "VISION",
    headline: "Pioneering Sustainable Aquaculture & Blue Economic Excellence",
    description:
      "To be the foremost scientific catalyst in South Asian aquaculture — pioneering disease-resilient breeding, fostering sustainable pond ecosystems, and transforming the livelihoods of fish and shrimp farming communities across Bangladesh into globally competitive agro-enterprises.",
    secondaryDescription:
      "We envision a vibrant blue economy anchored in scientific integrity, environmental harmony, and nutritional self-sufficiency for generations to come.",
    pillars: [
      "Sustainable Blue Economy",
      "Scientific Empowerment",
      "National Food Security",
      "Global Biosecurity Standards",
    ],
    image: "/images/vision.jpg",
    imageAlt: "Fishtech BD Sustainable Aquaculture Farm and Technician at Sunrise",
  },
  mission: {
    tag: "02 / OUR MISSION",
    title: "MISSION",
    headline: "Delivering Health, Vigour, and Rural Prosperity at Scale",
    description:
      "Our holistic mission is to ensure health, vigour, and sustainable prosperity for all by multiplying the finest quality Specific Pathogen-Free (SPF) seed, formulating advanced aquatic nutrition, and delivering diagnostic veterinary medicines at accessible prices with continuous nationwide expansion.",
    secondaryDescription:
      "We partner as dedicated allies with progressive farmers, hatchery technicians, researchers, and rural entrepreneurs — continuously innovating to maintain environmental harmony and ensure maximum farm productivity.",
    pillars: [
      "High-Health Seed Multiplication",
      "Diagnostic & Biosecurity Care",
      "Grassroots Farmer Partnerships",
      "Affordable Ethical Solutions",
    ],
    image: "/images/mission.jpg",
    imageAlt: "Fishtech BD Aquaculture Diagnostic Laboratory Scientist",
  },
};

export default function MissionVisionSection({
  data = DEFAULT_MISSION_VISION_DATA,
}) {
  const { vision, mission } = data;

  return (
    <section className="relative bg-slate-50/60 py-8 sm:py-12 lg:py-12 overflow-hidden">
      {/* Background Decorative Grid Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-1/4 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
        {/* ======================================================== */}
        {/* SECTION HEADER (Aligned to the Right)                    */}
        {/* ======================================================== */}
        <div className="ml-auto max-w-3xl text-right flex flex-col items-end space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#004494] shadow-2xs">
            <FiCompass className="w-3.5 h-3.5 text-sky-500" />
            <span>PURPOSE &amp; DIRECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Our <span className="text-[#004494]">Vision</span> &amp;{" "}
            <span className="text-[#0084d6]">Mission</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Anchored by scientific research, driven by environmental ethics, and
            dedicated to empowering hundreds of thousands of farming families across Bangladesh.
          </p>

          <div
            aria-hidden="true"
            className="h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>

        {/* ======================================================== */}
        {/* ROW 1: VISION (Image Left, Content Right)                */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Vision Image (Left) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              {/* Soft decorative color ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#004494]/20 via-sky-300/30 to-emerald-300/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"
              />

              {/* Clean Image Container */}
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
                <Image
                  src={vision.image}
                  alt={vision.imageAlt || "Vision of Fishtech BD"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette for contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                />

                {/* Floating Top Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#004494] text-xs font-bold border border-white/50 shadow-md">
                    <FiEye className="w-3.5 h-3.5 text-sky-600" />
                    <span>Future-Ready Aquaculture</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Content (Right) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-sky-600">
              <span className="w-6 h-[2px] bg-sky-500 rounded-full" />
              <span>{vision.tag}</span>
            </div>

            {/* Vision Title (Matches reference large blue title) */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004494] tracking-tight">
              {vision.title}
            </h3>

            {/* Headline */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              {vision.headline}
            </p>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 text-justify">
              {vision.description}
            </p>

            {/* Paragraph 2 */}
            {vision.secondaryDescription && (
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 text-justify">
                {vision.secondaryDescription}
              </p>
            )}

            {/* Key Value Pillars */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vision.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-slate-200/70 shadow-2xs"
                >
                  <FiCheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ROW 2: MISSION (Content Left, Image Right)               */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 lg:pt-12">
          {/* Mission Content (Left) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-emerald-600">
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
              <span>{mission.tag}</span>
            </div>

            {/* Mission Title (Matches reference large blue title) */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004494] tracking-tight">
              {mission.title}
            </h3>

            {/* Headline */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              {mission.headline}
            </p>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 text-justify">
              {mission.description}
            </p>

            {/* Paragraph 2 */}
            {mission.secondaryDescription && (
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 text-justify">
                {mission.secondaryDescription}
              </p>
            )}

            {/* Key Value Pillars */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {mission.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-slate-200/70 shadow-2xs"
                >
                  <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Image (Right) */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Soft decorative color ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-300/20 via-sky-300/30 to-[#004494]/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"
              />

              {/* Clean Image Container */}
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
                <Image
                  src={mission.image}
                  alt={mission.imageAlt || "Mission of Fishtech BD"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette for contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                />

                {/* Floating Top Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#004494] text-xs font-bold border border-white/50 shadow-md">
                    <FiTarget className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Scientific Rigour &amp; Care</span>
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
