"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiPhoneCall,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/banner-1.jpg",
    badge: "Smart Aquaculture & IoT Telemetry",
    title: "Pioneering Sustainable Fisheries with Precision Technology",
    description:
      "Empowering 10,000+ fish and shrimp farmers across Bangladesh with real-time water quality sensors, automated acoustic feeding, and certified biosecurity solutions.",
    primaryBtn: {
      text: "Explore Our Solutions",
      href: "/services",
    },
    secondaryBtn: {
      text: "Consult with Expert",
      href: "/contact",
    },
    highlights: [
      "Real-Time Water Telemetry",
      "Automated Feeding IoT",
      "Certified Aqua Medicine",
    ],
  },
  {
    id: 2,
    image: "/banner-2.jpg",
    badge: "Accredited Lab & Center of Excellence",
    title: "Next-Generation Hatchery Automation & Disease Diagnostics",
    description:
      "Harnessing rapid PCR pathogen detection, nano-bubble aeration engineering, and farmer training to maximize survival rates and export-grade yield.",
    primaryBtn: {
      text: "Book Lab Diagnostics",
      href: "/services/laboratory",
    },
    secondaryBtn: {
      text: "View R&D Projects",
      href: "/rd/projects",
    },
    highlights: [
      "Same-Day PCR Screening",
      "High-SPF Seed Culture",
      "Zero-Waste Biofloc / RAS",
    ],
  },
];

export default function HeroSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Guarantee automatic sliding
  useEffect(() => {
    if (!swiperInstance) return;

    // Start native autoplay
    if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
      swiperInstance.autoplay.start();
    }

    // Safety fallback: if browser pointer events pause Swiper,
    // this ensures it continues to auto-slide every 5 seconds
    const interval = setInterval(() => {
      if (swiperInstance && !swiperInstance.destroyed) {
        if (!swiperInstance.autoplay?.running) {
          swiperInstance.slideNext();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [swiperInstance]);

  return (
    <section
      aria-label="Hero Banner Slider"
      className="relative w-full h-[680px] sm:h-[680px] lg:h-screen lg:min-h-[640px] lg:max-h-[960px] overflow-hidden bg-[#001738]"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiper.autoplay?.start();
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              {/* Background Image with Framer Motion Zoom In Effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.div
                  key={`bg-zoom-${slide.id}-${isActive}`}
                  initial={{ scale: 1 }}
                  animate={
                    isActive
                      ? { scale: 1.18 }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 6.5,
                    ease: "easeOut",
                  }}
                  className="relative w-full h-full origin-center"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : "low"}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </motion.div>

                {/* Oceanic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/95 via-[#00275a]/80 to-black/40 pointer-events-none" />
                {/* Subtle bottom gradient to blend naturally with following sections */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#001738]/80 to-transparent pointer-events-none" />
              </div>

              {/* Slide Content Layer with Staggered Framer Motion Reveal */}
              <div className="relative z-10 w-full h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36 lg:pt-28 pb-12 sm:pb-16">
                  <div className="max-w-3xl space-y-4 sm:space-y-5">
                    {/* Subheading / Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
                      }
                      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                      className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-[13px] font-semibold tracking-wide uppercase backdrop-blur-md shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      <FiShield className="w-3.5 h-3.5 text-sky-300" />
                      <span>{slide.badge}</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                      className="text-2xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white tracking-tight leading-[1.14]"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Paragraph Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 25 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
                      }
                      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                      className="text-xs sm:text-sm lg:text-base text-sky-100/85 leading-relaxed max-w-2xl font-normal"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                      className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
                    >
                      <Link
                        href={slide.primaryBtn.href}
                        className="inline-flex items-center justify-center gap-2 bg-[#0084d6] hover:bg-[#0073bc] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-sky-500/25 transition-all duration-200 active:scale-95 group"
                      >
                        <span>{slide.primaryBtn.text}</span>
                        <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href={slide.secondaryBtn.href}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg backdrop-blur-sm transition-all duration-200 active:scale-95"
                      >
                        <FiPhoneCall className="w-4 h-4 text-sky-300" />
                        <span>{slide.secondaryBtn.text}</span>
                      </Link>
                    </motion.div>

                    {/* Key Highlights list */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                      }
                      transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                      className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-sky-200/90 font-medium border-t border-white/10"
                    >
                      {slide.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2">
                          <FiCheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ======================================================== */}
      {/* CUSTOM FLOATING CONTROLS & PAGINATION                    */}
      {/* ======================================================== */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-4">
        

        {/* Navigation Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0084d6] border border-white/20 hover:border-transparent text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-90 shadow-md"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0084d6] border border-white/20 hover:border-transparent text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-90 shadow-md"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Horizontal Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => swiperInstance?.slideToLoop(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === dotIdx
                ? "w-8 bg-[#0084d6] shadow-sm shadow-sky-400/50"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
