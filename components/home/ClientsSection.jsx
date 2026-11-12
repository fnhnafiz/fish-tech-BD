"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Default client stories tailored for Fishtech BD Limited.
 * Customize stats, quotes, authors, regions, and image paths here or pass via props.
 */
const DEFAULT_CLIENT_STORIES = [
  {
    id: "khulna-shrimp",
    region: "Khulna • Shrimp Aquaculture",
    stat: "32% higher shrimp survival",
    quote:
      "Switching to Fishtech BD’s probiotic protocol and regular water testing completely transformed our harvest. Pond mortality dropped sharply even during peak monsoon swings.",
    author: "Md. Tariqul Islam",
    role: "Managing Partner, Sundarban Agro Shrimp Farm",
    defaultImage: "/images/about-1.jpg",
    selectedImage: "/images/client-1.jpg",
    alt: "Commercial shrimp farm in Khulna using Fishtech BD solutions",
  },
  {
    id: "mymensingh-hatchery",
    region: "Mymensingh • Modern Hatchery",
    stat: "45% stronger fry viability",
    quote:
      "Their Aquaculture Centre of Excellence team helped us standardize dissolved oxygen management and broodstock nutrition. Our fingerling quality is now trusted by farms nationwide.",
    author: "Engr. Kamrul Hasan",
    role: "Proprietor, Brahmaputra Modern Hatchery",
    defaultImage: "/banner-1.jpg",
    selectedImage: "/images/client-2.jpg",
    alt: "Hatchery manager inspecting healthy fingerlings in Mymensingh",
  },
  {
    id: "patuakhali-dealer",
    region: "Patuakhali • Distribution Partner",
    stat: "2.5x farmer repeat trust",
    quote:
      "Farmers return to our depot because Fishtech BD’s aqua medicines deliver real results in the pond, backed by reliable supply and responsive field technical specialists.",
    author: "Shafiqur Rahman",
    role: "Chief Distributor, Coastal Aqua Inputs",
    defaultImage: "/images/about-3.jpg",
    selectedImage: "/images/client-3.jpg",
    alt: "Authorized Fishtech BD aqua medicine distributor in Patuakhali",
  },
  {
    id: "coxs-bazar-lab",
    region: "Cox’s Bazar • Coastal Hatcheries",
    stat: "Same-day PCR diagnostics",
    quote:
      "Getting rapid pathogen screening from Fishtech Laboratory allowed us to detect early risks before stocking. That single intervention protected our entire seasonal crop.",
    author: "Farhana Yasmin",
    role: "Operations Director, Bayline Marine Aquaculture",
    defaultImage: "/banner-2.jpg",
    selectedImage: "/images/about-2.jpg",
    alt: "PCR pathogen diagnostic laboratory supporting Cox's Bazar hatcheries",
  },
  {
    id: "rajshahi-carp",
    region: "Rajshahi • Integrated Fisheries",
    stat: "28% better feed efficiency",
    quote:
      "With Fishtech BD’s on-site water audits and mineral balancing support, our feed conversion ratio improved noticeably while keeping pond ammonia safe all summer.",
    author: "Anisur Rahman",
    role: "Lead Cultivator, Padma Integrated Fisheries",
    defaultImage: "/images/about-1.jpg",
    selectedImage: "/images/about-3.jpg",
    alt: "Field technical advisory beside commercial carp farm in Rajshahi",
  },
];

const VISIBLE_OFFSETS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.75,
};

export function ClientsCarousel({
  items = DEFAULT_CLIENT_STORIES,
  autoPlayInterval = 6000,
  pauseOnHover = true,
  className,
  ...props
}) {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const elapsedRef = useRef(0);

  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [tier, setTier] = useState("desktop");
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const total = items.length;
  const activeIndex = ((page % total) + total) % total;

  // Track responsive breakpoint tier safely without synchronous state updates in effect body
  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      if (width < 768) {
        setTier("mobile");
      } else if (width < 1120) {
        setTier("tablet");
      } else {
        setTier("desktop");
      }
    };

    const rafId = requestAnimationFrame(updateViewport);
    window.addEventListener("resize", updateViewport);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  // Respect OS reduced-motion preference for autoplay
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    const rafId = requestAnimationFrame(syncPreference);
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      cancelAnimationFrame(rafId);
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  // Autoplay loop with progress bar tracking
  useEffect(() => {
    const shouldPause =
      isPaused || prefersReducedMotion || (pauseOnHover && isHovered);

    if (shouldPause) {
      lastTimeRef.current = null;
      return;
    }

    const step = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      elapsedRef.current += delta;

      if (elapsedRef.current >= autoPlayInterval) {
        elapsedRef.current = 0;
        lastTimeRef.current = null;
        setProgress(0);
        setPage((curr) => curr + 1);
        return;
      }

      setProgress(Math.min((elapsedRef.current / autoPlayInterval) * 100, 100));
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [page, pauseOnHover, isHovered, isPaused, prefersReducedMotion, autoPlayInterval]);

  const resetTimer = useCallback(() => {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    resetTimer();
    setHasUserInteracted(true);
    setPage((curr) => curr - 1);
  }, [resetTimer]);

  const handleNext = useCallback(() => {
    resetTimer();
    setHasUserInteracted(true);
    setPage((curr) => curr + 1);
  }, [resetTimer]);

  const handleSelectTab = (event) => {
    const indexStr = event.currentTarget.dataset.index;
    if (indexStr === undefined) return;

    const targetIdx = Number.parseInt(indexStr, 10);
    let diff = targetIdx - activeIndex;

    if (diff > total / 2) {
      diff -= total;
    } else if (diff < -total / 2) {
      diff += total;
    }

    resetTimer();
    setHasUserInteracted(true);
    setPage((curr) => curr + diff);
  };

  const handleSelectCard = (event) => {
    const offsetStr = event.currentTarget.dataset.offset;
    if (offsetStr === undefined) return;

    const offset = Number.parseInt(offsetStr, 10);
    if (offset !== 0) {
      resetTimer();
      setHasUserInteracted(true);
      setPage((curr) => curr + offset);
    }
  };

  const handleKeyDown = (event) => {
    if (event.target instanceof HTMLElement && event.target.tagName === "BUTTON") {
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }
  };

  const activeDimensions = {
    desktop: { width: 762, height: 480 },
    tablet: { width: 560, height: 430 },
    mobile: { width: Math.min(340, Math.max(264, viewportWidth - 48)), height: 495 },
  }[tier];

  const activeItem = items[activeIndex];

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Fishtech BD Client Stories"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative w-full max-w-[1240px] mx-auto flex flex-col items-center select-none outline-none focus-visible:ring-2 focus-visible:ring-[#0084d6] rounded-3xl py-4 overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Carousel Viewport Track */}
        <div
          id="clients-carousel-panel"
          className="relative w-full flex items-center justify-center my-2"
          style={{ height: activeDimensions.height }}
        >
          {VISIBLE_OFFSETS.map((offset) => {
            const virtualIndex = page + offset;
            const itemIndex = ((virtualIndex % total) + total) % total;
            const item = items[itemIndex];
            const isActive = offset === 0;

            const getVariant = () => {
              if (tier === "mobile") {
                const activeW = activeDimensions.width;
                const activeH = activeDimensions.height;
                const gap = 16;
                const peekW = 56;
                const peekH = 400;

                if (offset === 0) {
                  return {
                    x: -activeW / 2,
                    y: -activeH / 2,
                    width: activeW,
                    height: activeH,
                    opacity: 1,
                    zIndex: 10,
                    pointerEvents: "auto",
                  };
                }

                if (offset === -1) {
                  return {
                    x: -activeW / 2 - gap - peekW,
                    y: -peekH / 2,
                    width: peekW,
                    height: peekH,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                }

                if (offset === 1) {
                  return {
                    x: activeW / 2 + gap,
                    y: -peekH / 2,
                    width: peekW,
                    height: peekH,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                }

                return {
                  x: offset < 0 ? -activeW / 2 - 220 : activeW / 2 + 220,
                  y: -peekH / 2,
                  width: peekW,
                  height: peekH,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                };
              }

              if (tier === "tablet") {
                const activeW = 560;
                const activeH = 430;
                const gap = 18;
                const sideW = 96;
                const sideH = 320;

                if (offset === 0) {
                  return {
                    x: -activeW / 2,
                    y: -activeH / 2,
                    width: activeW,
                    height: activeH,
                    opacity: 1,
                    zIndex: 10,
                    pointerEvents: "auto",
                  };
                }

                if (offset === -1) {
                  return {
                    x: -activeW / 2 - gap - sideW,
                    y: -sideH / 2,
                    width: sideW,
                    height: sideH,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                }

                if (offset === 1) {
                  return {
                    x: activeW / 2 + gap,
                    y: -sideH / 2,
                    width: sideW,
                    height: sideH,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                }

                return {
                  x: offset < 0 ? -activeW / 2 - 240 : activeW / 2 + 240,
                  y: -sideH / 2,
                  width: 74,
                  height: 200,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                };
              }

              switch (offset) {
                case 0:
                  return {
                    x: -381,
                    y: -240,
                    width: 762,
                    height: 480,
                    opacity: 1,
                    zIndex: 10,
                    pointerEvents: "auto",
                  };
                case -1:
                  return {
                    x: -506,
                    y: -165,
                    width: 105,
                    height: 330,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                case 1:
                  return {
                    x: 401,
                    y: -165,
                    width: 105,
                    height: 330,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                case -2:
                  return {
                    x: -596,
                    y: -100,
                    width: 74,
                    height: 200,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                case 2:
                  return {
                    x: 522,
                    y: -100,
                    width: 74,
                    height: 200,
                    opacity: 1,
                    zIndex: 100,
                    pointerEvents: "auto",
                  };
                case -3:
                  return {
                    x: -720,
                    y: -100,
                    width: 74,
                    height: 200,
                    opacity: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                  };
                case 3:
                  return {
                    x: 646,
                    y: -100,
                    width: 74,
                    height: 200,
                    opacity: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                  };
                default:
                  return {
                    x: offset < 0 ? -860 : 860,
                    y: -100,
                    width: 74,
                    height: 200,
                    opacity: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                  };
              }
            };

            return (
              <motion.div
                key={virtualIndex}
                role={isActive ? "group" : undefined}
                aria-roledescription={isActive ? "slide" : undefined}
                aria-label={
                  isActive ? `${itemIndex + 1} of ${total}: ${item.author}` : undefined
                }
                aria-hidden={!isActive}
                data-offset={offset}
                onClick={handleSelectCard}
                initial={false}
                animate={getVariant()}
                transition={TRANSITION_SPRING}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  willChange: "transform",
                }}
                className={cn(
                  "rounded-[28px] sm:rounded-[32px] bg-white text-slate-900 border border-slate-200/80 shadow-[0_14px_40px_rgba(0,68,148,0.10),0_4px_12px_rgba(15,23,42,0.05)] overflow-visible",
                  !isActive && "cursor-pointer hover:border-[#0084d6]/45"
                )}
              >
                {/* Curved bridge connectors linking stacked side peek cards */}
                {offset === -1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                    style={{
                      width: 22,
                      height: 42,
                      margin: "auto 0",
                      left: "calc(100% - 1px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 20 37.3338"
                      preserveAspectRatio="none"
                      className="size-full fill-current overflow-visible block drop-shadow-[0_2px_4px_rgba(0,68,148,0.08)]"
                    >
                      <path d="M0 0C0 0 1.2422 13.5759 10 13.5759C18.7578 13.5759 20 0 20 0V37.3338C20 37.3338 18.7578 23.7578 10 23.7578C1.2422 23.7578 0 37.3338 0 37.3338V0Z" />
                    </svg>
                  </div>
                )}

                {offset === 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                    style={{
                      width: 22,
                      height: 42,
                      margin: "auto 0",
                      right: "calc(100% - 1px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 20 37.3338"
                      preserveAspectRatio="none"
                      className="size-full fill-current overflow-visible block drop-shadow-[0_2px_4px_rgba(0,68,148,0.08)]"
                    >
                      <path d="M0 0C0 0 1.2422 13.5759 10 13.5759C18.7578 13.5759 20 0 20 0V37.3338C20 37.3338 18.7578 23.7578 10 23.7578C1.2422 23.7578 0 37.3338 0 37.3338V0Z" />
                    </svg>
                  </div>
                )}

                {offset === -2 && tier === "desktop" && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                    style={{
                      width: 18,
                      height: 28,
                      margin: "auto 0",
                      left: "calc(100% - 1px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 16 28"
                      preserveAspectRatio="none"
                      className="size-full fill-current overflow-visible block drop-shadow-[0_2px_4px_rgba(0,68,148,0.08)]"
                    >
                      <path d="M0 0C0 0 0.993759 10.1818 8 10.1818C15.0062 10.1818 16 0 16 0V28C16 28 15.0062 17.8182 8 17.8182C0.993759 17.8182 0 28 0 28V0Z" />
                    </svg>
                  </div>
                )}

                {offset === 2 && tier === "desktop" && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                    style={{
                      width: 18,
                      height: 28,
                      margin: "auto 0",
                      right: "calc(100% - 1px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 16 28"
                      preserveAspectRatio="none"
                      className="size-full fill-current overflow-visible block drop-shadow-[0_2px_4px_rgba(0,68,148,0.08)]"
                    >
                      <path d="M0 0C0 0 0.993759 10.1818 8 10.1818C15.0062 10.1818 16 0 16 0V28C16 28 15.0062 17.8182 8 17.8182C0.993759 17.8182 0 28 0 28V0Z" />
                    </svg>
                  </div>
                )}

                {/* Card Inner Frame */}
                <div
                  className="size-full overflow-hidden relative"
                  style={{ borderRadius: "inherit" }}
                >
                  {/* Collapsed Side Peek Image Layer */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={cn(
                      "absolute inset-0 p-2",
                      isActive && "pointer-events-none"
                    )}
                  >
                    <div className="size-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-slate-100 relative">
                      <Image
                        alt=""
                        src={item.defaultImage}
                        fill
                        sizes="120px"
                        draggable={false}
                        className="size-full object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#002855]/25 transition-opacity hover:bg-[#002855]/10"
                      />
                    </div>
                  </motion.div>

                  {/* Expanded Active Card Content Layer */}
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      width: activeDimensions.width,
                      height: activeDimensions.height,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : offset < 0 ? -822 : 822,
                      }}
                      transition={TRANSITION_SPRING}
                      className={cn(
                        "size-full flex flex-col md:flex-row p-4 sm:p-5 md:p-6 lg:p-8 gap-3 sm:gap-4 md:gap-7",
                        !isActive && "pointer-events-none"
                      )}
                    >
                      {/* Left Text Content */}
                      <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left justify-between py-1 gap-2 sm:gap-3">
                        <div className="space-y-2 w-full flex flex-col items-center md:items-start">
                          {item.region && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
                              <span>{item.region}</span>
                            </span>
                          )}

                          <h3
                            title={item.stat}
                            className="text-xl sm:text-2xl md:text-[28px] lg:text-[34px] font-extrabold tracking-tight text-[#004494] leading-tight w-full"
                          >
                            {item.stat}
                          </h3>
                        </div>

                        <div className="relative w-full min-w-0 my-auto py-1">
                          <span
                            aria-hidden="true"
                            className="font-serif text-3xl lg:text-4xl text-[#0084d6]/30 absolute right-full -top-1 pr-1.5 select-none pointer-events-none hidden md:inline"
                          >
                            “
                          </span>

                          <p className="text-xs sm:text-sm md:text-base lg:text-[17px] text-slate-700 leading-relaxed font-normal">
                            “{item.quote}”
                          </p>
                        </div>

                        {/* Signature Connected Author + Role Badge */}
                        <div className="flex min-w-0 w-full max-w-full overflow-hidden items-center md:items-start justify-center md:justify-start">
                          <div className="flex flex-col items-center md:items-start min-w-0 max-w-full">
                            <span className="w-fit inline-flex items-center justify-center rounded-[5px] py-1 px-3 text-[11px] sm:text-xs bg-[#EAF2FB] text-[#004494] shrink-0 select-none">
                              <span className="whitespace-nowrap font-bold">
                                {item.author}
                              </span>
                            </span>

                            <div
                              aria-hidden="true"
                              className="shrink-0 flex items-center justify-center md:justify-start px-3 h-[6px] -my-[1px] text-[#EAF2FB] relative z-10"
                            >
                              <svg
                                className="block shrink-0 fill-current overflow-visible"
                                preserveAspectRatio="none"
                                viewBox="0 -2 14 12"
                                width="14"
                                height="10"
                              >
                                <path d="M0 -2 V0 C0 0 5.09091 0.49688 5.09091 4 C5.09091 7.50312 0 8 0 8 V10 H14 V8 C14 8 8.90909 7.50312 8.90909 4 C8.90909 0.49688 14 0 14 0 V-2 Z" />
                              </svg>
                            </div>

                            <span className="w-fit inline-flex items-center justify-center rounded-[5px] font-medium py-1 px-3 text-[10px] sm:text-xs bg-[#EAF2FB] text-slate-600 max-w-full select-none">
                              <span title={item.role} className="truncate">
                                {item.role}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Client Portrait / Operation Photo */}
                      <div className="relative shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] bg-slate-100 w-full md:w-[clamp(185px,44%,320px)] flex-1 md:flex-initial md:h-full max-h-[210px] md:max-h-none ring-1 ring-slate-900/5">
                        <Image
                          alt={item.alt || item.author}
                          src={item.selectedImage}
                          fill
                          sizes="(max-width: 768px) 90vw, 330px"
                          draggable={false}
                          className="size-full object-cover object-center"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#001c44]/25 via-transparent to-transparent"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accessible Polite Status Region (only announces after interaction) */}
        <p className="sr-only" role="status" aria-live="polite">
          {hasUserInteracted
            ? `Client story ${activeIndex + 1} of ${total}: ${activeItem.author}, ${activeItem.stat}`
            : ""}
        </p>

        {/* Bottom Controls: Prev, Progress Indicators, Play/Pause, Next */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous client story"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#004494] shadow-2xs transition-colors hover:border-[#004494] hover:bg-[#004494] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] touch-manipulation"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div
            role="tablist"
            aria-label="Client stories"
            className="flex items-center gap-1.5"
          >
            {items.map((item, idx) => {
              const isSelected = idx === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  data-index={idx}
                  id={`client-carousel-tab-${idx}`}
                  aria-controls="clients-carousel-panel"
                  onClick={handleSelectTab}
                  aria-selected={isSelected}
                  aria-label={`View client story ${idx + 1}: ${item.author}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={cn(
                    "h-[8px] rounded-full overflow-hidden border-0 p-0 cursor-pointer transition-[width] duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#0084d6]",
                    isSelected
                      ? "w-[72px] sm:w-[80px] bg-slate-200"
                      : "w-[8px] bg-slate-300 hover:bg-[#0084d6]/60"
                  )}
                >
                  {isSelected && (
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#004494] to-[#0084d6]"
                      style={{
                        transformOrigin: "0% 50%",
                        transform: `scaleX(${prefersReducedMotion ? 1 : progress / 100
                          })`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Play client stories" : "Pause client stories"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs transition-colors hover:border-[#0084d6] hover:text-[#004494] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] touch-manipulation"
          >
            {isPaused ? (
              <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            ) : (
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next client story"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#004494] shadow-2xs transition-colors hover:border-[#004494] hover:bg-[#004494] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] touch-manipulation"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}

export default function ClientsSection({
  eyebrow = "Our Clients",
  headingStart = "Trusted by Leading",
  headingHighlight = "Aquaculture Farms & Hatcheries",
  subtitle = "Discover how commercial farmers, hatcheries, and authorized agro-dealers across Bangladesh achieve healthier stocks and resilient yields with Fishtech BD.",
  stories = DEFAULT_CLIENT_STORIES,
  ctaLabel = "Explore Our Farm Network",
  ctaHref = "/about/clients",
}) {
  return (
    <section
      aria-labelledby="clients-section-heading"
      className="relative  py-8 sm:py-12 lg:py-12 overflow-x-clip"
    >
      {/* Subtle architectural background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-sky-100/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-emerald-50/70 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            <span>{eyebrow}</span>
          </div>

          <h2
            id="clients-section-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
          >
            {headingStart}{" "}
            <span className="text-[#004494]">{headingHighlight}</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
          />
        </div>

        {/* Interactive Expanding Client Stories Carousel */}
        <div className="mt-8 sm:mt-10">
          <ClientsCarousel items={stories} />
        </div>

        {/* Bottom Client Network Link */}
        <div className="mt-6 text-center">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#004494] shadow-2xs transition-all duration-200 hover:border-[#004494]/40 hover:bg-sky-50/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6]"
          >
            <span>{ctaLabel}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

