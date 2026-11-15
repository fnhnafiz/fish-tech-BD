"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Store,
  MapPin,
  Briefcase,
  Fish,
  Award,
} from "lucide-react";

const DEFAULT_OVERVIEW_STATS = [
  {
    id: "farmers",
    value: 50000,
    suffix: "+",
    label: "Farmers Covered",
    icon: Users,
    accent: "blue",
  },
  {
    id: "dealers",
    value: 1200,
    suffix: "+",
    label: "Dealers Nationwide",
    icon: Store,
    accent: "aqua",
  },
  {
    id: "upazilas",
    value: 400,
    suffix: "+",
    label: "Upazilas Covered",
    icon: MapPin,
    accent: "emerald",
  },
  {
    id: "employees",
    value: 350,
    suffix: "+",
    label: "Dedicated Employees",
    icon: Briefcase,
    accent: "blue",
  },
  {
    id: "seed-output",
    value: 50,
    suffix: "M+",
    label: "Annual Seed & PL Output",
    icon: Fish,
    accent: "aqua",
  },
  {
    id: "coe-centers",
    value: 3,
    suffix: " CoE",
    label: "Centres of Excellence",
    icon: Award,
    accent: "emerald",
  },
];

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
 * Animated counter that decelerates smoothly into the target value.
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
      {Math.round(displayValue).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/**
 * Dedicated Overview Stats Section
 * Positioned cleanly outside and below the story section.
 * Renders 6 impact metric cards in a responsive grid, easily expandable for future stats.
 */
export default function OverviewStatsSection({
  stats = DEFAULT_OVERVIEW_STATS,
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Fishtech BD Group Key Operational Milestones"
      className="relative bg-slate-50/70 py-10 sm:py-12 lg:py-14 "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Responsive 6-Card Grid (Auto wraps cleanly if more stats are added) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            const style = ACCENT_STYLES[stat.accent] || ACCENT_STYLES.blue;

            return (
              <article
                key={stat.id}
                className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6]/45 hover:shadow-lg flex flex-col justify-between"
              >
                {/* Top hairline indicator reveal */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${style.bar}`}
                />

                {/* Card Top: Number and Icon */}
                <div className="flex items-start justify-between gap-2">
                  <div className="text-2xl sm:text-[26px] xl:text-[28px] font-black tracking-tight text-[#004494] leading-tight">
                    <CountUpNumber
                      target={stat.value}
                      suffix={stat.suffix}
                      startAnimation={isVisible}
                    />
                  </div>

                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${style.iconWrap}`}
                  >
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Card Bottom: Label */}
                <p className="mt-3 text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">
                  {stat.label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
