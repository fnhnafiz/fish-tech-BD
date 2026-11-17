"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Store,
  MapPin,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const DEFAULT_STATS = [
  {
    id: "farmers",
    value: 50000,
    suffix: "+",
    label: "Farmers Covered",
    icon: "users",
    accent: "blue",
  },
  {
    id: "dealers",
    value: 1200,
    suffix: "+",
    label: "Dealers Nationwide",
    icon: "store",
    accent: "aqua",
  },
  {
    id: "upazilas",
    value: 400,
    suffix: "+",
    label: "Upazilas Covered",
    icon: "mapPin",
    accent: "emerald",
  },
  {
    id: "employees",
    value: 350,
    suffix: "+",
    label: "Dedicated Employees",
    icon: "briefcase",
    accent: "blue",
  },
];

const DEFAULT_IMAGES = {
  primary: {
    src: "/images/about-1.jpg",
    alt: "Modern aquaculture fish and shrimp farm pond in Bangladesh",
  },
  secondary: {
    src: "/images/about-2.jpg",
    alt: "Fishtech BD aquaculture laboratory and pathogen diagnostics",
    caption: "Diagnostic Research Lab",
  },
  tertiary: {
    src: "/images/about-3.jpg",
    alt: "Field technical service officer assisting aquaculture farmer",
    caption: "On-Site Technical Support",
  },
};

const ICON_MAP = {
  users: Users,
  store: Store,
  mapPin: MapPin,
  briefcase: Briefcase,
};

const ACCENT_STYLES = {
  blue: {
    iconWrap: "bg-[#004494]/8 text-[#004494] group-hover:bg-[#004494] group-hover:text-white",
    bar: "bg-[#004494]",
  },
  aqua: {
    iconWrap: "bg-[#0084d6]/10 text-[#0084d6] group-hover:bg-[#0084d6] group-hover:text-white",
    bar: "bg-[#0084d6]",
  },
  emerald: {
    iconWrap: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    bar: "bg-emerald-600",
  },
};

/**
 * Formats integer values consistently with thousands separators and appends optional suffix.
 */
function formatMetricValue(value, suffix = "") {
  return `${Math.round(value).toLocaleString("en-US")}${suffix}`;
}

/**
 * CountUpNumber animates from 0 to target value once visible on scroll,
 * automatically snapping to target when the user prefers reduced motion.
 */
function CountUpNumber({ target, suffix = "", startAnimation, duration = 1600 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimatedRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frameId = null;

    if (prefersReducedMotion || duration <= 0) {
      frameId = requestAnimationFrame(() => {
        hasAnimatedRef.current = true;
        setDisplayValue(target);
      });
      return () => {
        if (frameId !== null) cancelAnimationFrame(frameId);
      };
    }

    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for natural deceleration near the final figure
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * easedProgress);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        hasAnimatedRef.current = true;
        setDisplayValue(target);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [startAnimation, target, duration]);

  return (
    <span className="tabular-nums">
      {formatMetricValue(displayValue, suffix)}
    </span>
  );
}

export default function AboutSection({
  eyebrow = "About Fishtech BD",
  headingStart = "Pioneering Sustainable",
  headingHighlight = "Aquaculture & Animal Health",
  headingEnd = "in Bangladesh",
  description = "Fishtech BD Limited is committed to empowering Bangladesh’s aquaculture and livestock sectors with science-backed aqua medicines, precision diagnostics, and nationwide technical advisory. Together with farmers and partners, we build healthier ponds, stronger yields, and resilient rural livelihoods.",
  stats = DEFAULT_STATS,
  ctaLabel = "Learn More",
  ctaHref = "/about/overview",
  badgeText = "Trusted Across Bangladesh",
  videoSrc = "/about-video.mp4",
  images = DEFAULT_IMAGES,
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Fallback cleanly if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === "undefined") {
      const frameId = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-fishtech-heading"
      className="relative  py-8 sm:py-12 lg:py-12 overflow-x-clip"
    >
      {/* Subtle LightCastle-inspired architectural background pattern */}
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
          {/* LEFT COLUMN: Content, Impact Stat Grid & CTA             */}
          {/* ======================================================== */}
          <div
            className={`lg:col-span-6 space-y-7 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 motion-reduce:opacity-100"
            }`}
          >
            {/* Eyebrow Badge */}
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
                id="about-fishtech-heading"
                className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
              >
                {headingStart}{" "}
                <span className="text-[#004494]">
                  {headingHighlight}
                </span>{" "}
                {headingEnd}
              </h2>

              {/* Structured Brand Accent Bar */}
              <div
                aria-hidden="true"
                className="h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
              />
            </div>

            {/* Company Intro */}
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {description}
            </p>

           

            {/* Primary CTA */}
            <div className="pt-2">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[#004494] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-md shadow-[#004494]/20 transition-all duration-200 hover:bg-[#003370] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] active:scale-[0.98]"
              >
                <span>{ctaLabel}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Brand Video Showcase (Autoplay, Infinite)  */}
          {/* ======================================================== */}
          <div
            className={`lg:col-span-6 transition-all duration-700 delay-150 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 motion-reduce:opacity-100"
            }`}
          >
            <div className="relative mx-auto max-w-xl pb-6 sm:pb-8 lg:max-w-none">
              {/* Architectural backdrop dot grid behind video */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 h-48 w-48 rounded-2xl bg-[radial-gradient(#0084d6_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-25"
              />

              {/* Subtle green & aqua corner accent frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-2 h-32 w-32 rounded-2xl border-2 border-emerald-500/25 sm:left-0"
              />

              {/* Floating Experience / Trust Pill Badge */}
              <div className="relative z-20 mb-3 flex justify-end sm:absolute sm:-top-5 sm:right-6 sm:mb-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-[0_10px_30px_-8px_rgba(0,68,148,0.22)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{badgeText}</span>
                </div>
              </div>

              {/* Brand Video Frame - Infinite Loop Autoplay Without Controls */}
              <div className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-950 shadow-[0_20px_50px_-15px_rgba(0,40,95,0.25)] ring-1 ring-slate-900/5">
                <div className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.play().catch(() => {});
                    }}
                    className="h-full w-full object-cover object-center pointer-events-none"
                  />
                  {/* Subtle inner protective vignette */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

