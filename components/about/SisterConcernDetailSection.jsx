"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * SisterConcernDetailSection Component
 * 2-Column Split:
 *  - Left Column: Pure editorial content (Eyebrow, Heading, Lead statement, Paragraphs).
 *  - Right Column: High-impact 3 or 4 image dynamic showcase (pure photography, zero text clutter, zero modals).
 */
export default function SisterConcernDetailSection({
  eyebrow = "FLAGSHIP SISTER CONCERN • FISHTECH GROUP",
  title = "Fishtech Hatchery",
  leadText = "Established as the foundational seed production and breeding wing of Fishtech Group, Fishtech Hatchery leads Bangladesh's commercial aquaculture sector in biosecure incubation, scientific broodstock development, and nationwide live seed logistics.",
  paragraphs = [
    "Our modern facility operates with specialized recirculating aquaculture systems (RAS), micro-screened water conditioning, multi-stage sediment filtration, and 24/7 dissolved oxygen monitoring. Every batch of fish seed is reared in pathogen-controlled indoor nursery tanks under the direct care of experienced fisheries biologists and aquatic veterinary technicians.",
    "By sourcing certified, disease-screened broodstock and enforcing selective breeding protocols, Fishtech Hatchery produces fish fry with superior Feed Conversion Ratios (FCR), uniform growth traits, and high natural resilience against bacterial and viral freshwater infections.",
    "Ensuring farmer profitability extends beyond hatching. We provide temperature-stabilized, high-density oxygenated packing and express logistics to commercial farming clusters across Mymensingh, Bogura, Rajshahi, Jashore, and Khulna, complemented by on-site pond acclimatization guidance.",
  ],
  image = "/images/concerns/fishtech-hatchery.jpg",
  fallbackImage = "/images/client-2.jpg",
  imageAlt = "Fishtech Hatchery modern incubation and nursery facility in Bangladesh",
  images = null,
}) {
  const [imgSrc, setImgSrc] = useState(image);

  // If images array is provided, use it; otherwise fallback to single image
  const hasMultipleImages = Array.isArray(images) && images.length >= 3;
  const isFourImages = hasMultipleImages && images.length >= 4;

  return (
    <section
      aria-labelledby="concern-detail-heading"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB]"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-emerald-50/60 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Pure Editorial Heading and Paragraphs        */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/90 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                />
                <span>{eyebrow}</span>
              </div>

              <h1
                id="concern-detail-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.16]"
              >
                {title}
              </h1>

              <div
                aria-hidden="true"
                className="h-1 w-20 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
              />
            </div>

            {/* Lead Overview Statement */}
            <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
              {leadText}
            </p>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 3 or 4 Image Showcase / Single Image       */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#004494]/15 via-sky-300/15 to-emerald-300/15 blur-2xl opacity-75"
            />

            {hasMultipleImages ? (
              /* Multi-Image Layout (3 or 4 images) */
              isFourImages ? (
                /* 4-Image 2x2 Grid */
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {images.slice(0, 4).map((item, idx) => {
                    const src = typeof item === "string" ? item : item.src;
                    const alt = typeof item === "string" ? `${title} photo ${idx + 1}` : (item.alt || title);
                    return (
                      <div
                        key={idx}
                        className="group relative w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#004494]/40"
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* 3-Image Asymmetric Layout (1 Top Wide + 2 Bottom Split) */
                <div className="relative space-y-3.5 sm:space-y-4">
                  {/* Top Master Image */}
                  {images[0] && (
                    <div className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#004494]/40">
                      <Image
                        src={typeof images[0] === "string" ? images[0] : images[0].src}
                        alt={typeof images[0] === "string" ? `${title} facility` : (images[0].alt || title)}
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
                    {images.slice(1, 3).map((item, idx) => {
                      const src = typeof item === "string" ? item : item.src;
                      const alt = typeof item === "string" ? `${title} photo ${idx + 2}` : (item.alt || title);
                      return (
                        <div
                          key={idx}
                          className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#004494]/40"
                        >
                          <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 22vw"
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            ) : (
              /* Fallback Single Image Layout */
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-2.5 shadow-2xl shadow-sky-950/10">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] sm:rounded-[26px] bg-slate-100">
                  <Image
                    src={imgSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    priority
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    onError={() => setImgSrc(fallbackImage)}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
