"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, ShieldCheck, Globe2, Award } from "lucide-react";
import { Marquee } from "@/components/common/Marquee";
import { CLIENTS_ROW_1, CLIENTS_ROW_2 } from "@/components/Data/clientsData";

/**
 * Single Client / Partner Logo Card
 */
function ClientLogoCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(item)}
      className="group/card relative flex h-28 w-44 sm:h-32 sm:w-52 md:h-36 md:w-56 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6] hover:shadow-lg hover:shadow-sky-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] touch-manipulation"
      title={`${item.name} • ${item.category}`}
      aria-label={`View details about ${item.name}`}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={item.logo}
          alt={item.name}
          width={180}
          height={110}
          className="max-h-14 sm:max-h-16 md:max-h-18 w-auto max-w-[85%] object-contain transition-all duration-300 group-hover/card:scale-105"
        />
      </div>

      {/* Subtle indicator bar on hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#004494] to-[#0084d6] transition-all duration-300 group-hover/card:w-20"
      />
    </button>
  );
}

export default function ClientsSection({
  eyebrow = "Our Clients & Partners",
  headingStart = "Trusted by Leading",
  headingHighlight = "Global Institutions & Development Partners",
  subtitle = "We collaborate with international development agencies, research bodies, NGOs, and industry pioneers to transform sustainable aquaculture across Bangladesh.",
  showCta = true,
  ctaLabel = "Explore All Partnerships",
  ctaHref = "/about/clients",
}) {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <section
      aria-labelledby="clients-marquee-heading"
      className="relative py-12 sm:py-16 lg:py-20 overflow-x-clip bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB]"
    >
      {/* Background Ambience Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-emerald-50/60 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/90 bg-sky-50/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-xs">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
            />
            <span>{eyebrow}</span>
          </div>

          <h2
            id="clients-marquee-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.18]"
          >
            {headingStart}{" "}
            <span className="bg-gradient-to-r from-[#004494] via-[#0084d6] to-[#004494] bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>
      </div>

      {/* Infinite Dual-Row Marquee Container */}
      <div className="relative mt-10 sm:mt-14 w-full overflow-hidden">
        {/* Left Fade Gradient Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/90 to-transparent"
        />

        {/* Right Fade Gradient Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-[#F9FAFB] via-[#F9FAFB]/90 to-transparent"
        />

        {/* Row 1: Leftward Scrolling (Right to Left) */}
        <Marquee
          direction="left"
          speed={36}
          pauseOnHover={true}
          repeat={4}
          className="[--gap:1rem] sm:[--gap:1.5rem]"
        >
          {CLIENTS_ROW_1.map((item) => (
            <ClientLogoCard
              key={`row1-${item.id}`}
              item={item}
              onClick={setSelectedPartner}
            />
          ))}
        </Marquee>

        {/* Row 2: Rightward Scrolling (Left to Right) */}
        <Marquee
          direction="right"
          speed={40}
          pauseOnHover={true}
          repeat={4}
          className="[--gap:1rem] sm:[--gap:1.5rem] mt-3 sm:mt-5"
        >
          {CLIENTS_ROW_2.map((item) => (
            <ClientLogoCard
              key={`row2-${item.id}`}
              item={item}
              onClick={setSelectedPartner}
            />
          ))}
        </Marquee>
      </div>

    

      {/* Partner Quick-View Modal */}
      {selectedPartner && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#004494] bg-sky-50 px-2.5 py-1 rounded-md">
                {selectedPartner.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex flex-col items-center text-center">
              <div className="flex h-24 w-44 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                <Image
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </div>

              <h3
                id="partner-modal-title"
                className="mt-4 text-lg font-bold text-slate-900 sm:text-xl"
              >
                {selectedPartner.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {selectedPartner.description}
              </p>

              <div className="mt-6 w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Fishtech BD Strategic Partner</span>
                <span className="flex items-center gap-1 text-[#004494] font-semibold">
                  Verified Alliance <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
