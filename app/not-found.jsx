"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, MotionConfig } from "framer-motion";
import {
  Fish,
  Home,
  ArrowLeft,
  Compass,
  Layers,
  FileText,
  PhoneCall,
  Waves,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "About Fishtech", href: "/about/overview", icon: Compass },
  { label: "Our Services", href: "/services", icon: Layers },
  { label: "Latest Blogs", href: "/insights/blogs", icon: FileText },
  { label: "Get in Touch", href: "/#contact", icon: PhoneCall },
];

const FLOATING_BUBBLES = [
  { size: "h-3 w-3", left: "10%", bottom: "14%", duration: 6.5, delay: 0 },
  { size: "h-4 w-4", left: "22%", bottom: "8%", duration: 7.5, delay: 1.1 },
  { size: "h-2.5 w-2.5", left: "76%", bottom: "16%", duration: 6, delay: 0.6 },
  { size: "h-5 w-5", left: "86%", bottom: "10%", duration: 8, delay: 1.8 },
  { size: "h-3 w-3", left: "48%", bottom: "6%", duration: 7, delay: 2.2 },
];

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#00122b] via-[#00285e] to-[#004494] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
        {/* Ambient Underwater Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#0084d6]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(125,211,252,0.12)_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
        />

        {/* Subtle Rising Water Bubbles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {FLOATING_BUBBLES.map((bubble, idx) => (
            <motion.span
              key={idx}
              style={{ left: bubble.left, bottom: bubble.bottom }}
              animate={{
                y: [0, -140, -240],
                opacity: [0, 0.45, 0],
                scale: [0.85, 1.1, 0.9],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute rounded-full border border-sky-200/40 bg-sky-200/15 ${bubble.size}`}
            />
          ))}
        </div>

        {/* Top Brand Bar */}
        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link
            href="/"
            aria-label="FishTech BD Home"
            className="inline-flex items-center rounded-lg p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            <div className="relative h-10 sm:h-11 w-auto aspect-[222/102]">
              <Image
                src="/logo.png"
                alt="FishTech BD Logo"
                width={222}
                height={102}
                priority
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          </Link>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-sky-200 backdrop-blur-xs">
            <Waves className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
            <span>404 Status</span>
          </span>
        </header>

        {/* Center Hero Glass Card */}
        <section
          aria-labelledby="not-found-heading"
          className="relative z-10 mx-auto my-8 w-full max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-7 text-center shadow-[0_24px_80px_-20px_rgba(0,10,30,0.65)] backdrop-blur-md sm:p-10 lg:p-12"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-sky-200">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400"
              />
              <span>Error 404 • Off Course</span>
            </div>

            {/* Animated 4 [Sonar Fish] 4 Display */}
            <div
              aria-hidden="true"
              className="mt-5 flex select-none items-center justify-center gap-3 sm:gap-5"
            >
              <span className="bg-gradient-to-b from-white via-sky-100 to-sky-400/65 bg-clip-text text-7xl font-black tracking-tighter text-transparent sm:text-8xl lg:text-9xl">
                4
              </span>

              {/* Rippling Sonar Circle */}
              <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                <motion.span
                  animate={{ scale: [1, 1.38, 1], opacity: [0.45, 0, 0.45] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border border-sky-300/50"
                />
                <motion.span
                  animate={{ scale: [1, 1.22, 1], opacity: [0.55, 0.1, 0.55] }}
                  transition={{
                    duration: 4,
                    delay: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-2 rounded-full border border-emerald-400/45"
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-sky-300/60 bg-gradient-to-br from-[#0084d6]/45 to-[#00285e]/90 shadow-inner sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                  <motion.div
                    animate={{
                      x: [-3, 3, -3],
                      y: [2, -2, 2],
                      rotate: [-4, 4, -4],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Fish className="h-8 w-8 text-sky-200 sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
                  </motion.div>
                </div>
              </div>

              <span className="bg-gradient-to-b from-white via-sky-100 to-sky-400/65 bg-clip-text text-7xl font-black tracking-tighter text-transparent sm:text-8xl lg:text-9xl">
                4
              </span>
            </div>

            {/* Title & Description */}
            <h1
              id="not-found-heading"
              className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[34px] lg:leading-tight"
            >
              Looks Like You’ve Drifted Into Uncharted Waters
            </h1>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-sky-100/80 sm:text-base">
              The page you are looking for may have been moved, renamed, or is
              currently unavailable. Let’s guide you back to our aquaculture hub.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3 text-sm font-bold tracking-wide text-[#004494] shadow-lg shadow-[#00122b]/30 transition-all duration-200 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:scale-[0.98] sm:w-auto"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                <span>Back to Home</span>
              </Link>

              <button
                type="button"
                onClick={handleGoBack}
                className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold tracking-wide text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:scale-[0.98] sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Quick Explore Destinations */}
            <nav
              aria-label="Helpful destinations"
              className="mt-8 border-t border-white/15 pt-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-sky-200/75">
                Quick Links
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
                {QUICK_LINKS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-sky-100 transition-colors hover:border-sky-300/45 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                    >
                      <IconComponent
                        className="h-3.5 w-3.5 text-sky-300"
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        </section>

        {/* Bottom Copyright Strip */}
        <footer className="relative z-10 mx-auto w-full max-w-6xl text-center text-xs text-sky-200/70">
          &copy; {new Date().getFullYear()} FishTech BD Limited. All rights
          reserved.
        </footer>
      </main>
    </MotionConfig>
  );
}
