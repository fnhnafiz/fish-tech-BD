"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  X,
  Layers,
  Waves,
} from "lucide-react";
import {
  AQUARIUM_FEEDS,
  AQUARIUM_CATEGORIES,
} from "@/components/Data/aquariumFeedData";

export default function AquariumFeedSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewItem, setQuickViewItem] = useState(null);

  // Lock background body scroll when Quick View modal is open
  useEffect(() => {
    if (quickViewItem) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle || "";
      };
    }
  }, [quickViewItem]);

  // Filter items
  const filteredFeeds = useMemo(() => {
    return AQUARIUM_FEEDS.filter((feed) => {
      const matchesCategory =
        selectedCategory === "all" || feed.categoryId === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        feed.name.toLowerCase().includes(q) ||
        feed.category.toLowerCase().includes(q) ||
        feed.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-slate-50/60">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
     

        {/* ========================================================== */}
        {/* 12 PRODUCTS GRID: 2 COLUMNS ON MOBILE (grid-cols-2)        */}
        {/* Equal card heights (card zeno choto boro na hoi)          */}
        {/* ========================================================== */}
        {filteredFeeds.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200">
            <Layers className="h-10 w-10 text-slate-300 mx-auto mb-2.5" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              No matching feeds found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We couldn&apos;t find any aquarium feeds matching your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3.5 inline-flex items-center gap-1.5 rounded-xl bg-[#004494] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#003370]"
            >
              View All 12 Feeds
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 items-stretch">
            {filteredFeeds.map((feed) => (
              <div
                key={feed.id}
                role="button"
                tabIndex={0}
                onClick={() => setQuickViewItem(feed)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setQuickViewItem(feed);
                  }
                }}
                className="group/card relative flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0084d6]/60 transition-all duration-300 overflow-hidden cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#004494]"
                aria-label={`View details of ${feed.name}`}
              >
                {/* ================================================== */}
                {/* SLIDING IMAGE CONTAINER ON HOVER                   */}
                {/* ================================================== */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900/5 shrink-0">
                  {/* Primary Image: Slides Up Out of View on Hover */}
                  <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover/card:-translate-y-full">
                    <Image
                      src={feed.primaryImage}
                      alt={feed.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Secondary Image: Slides In from Bottom on Hover */}
                  <div className="absolute inset-0 translate-y-full transition-transform duration-700 ease-in-out group-hover/card:translate-y-0">
                    <Image
                      src={feed.hoverImage}
                      alt={`${feed.name} in action`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001c44]/75 via-transparent to-transparent" />
                    {/* Visual habitat indicator */}
                    <span className="absolute bottom-2 left-2 text-[9px] sm:text-[10px] font-bold text-white bg-black/55 backdrop-blur-xs px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Waves className="h-2.5 w-2.5 text-sky-400" />
                      Habitat View
                    </span>
                  </div>

                  {/* Hover Slide Hint (hidden on mobile, fades on desktop hover) */}
                  <div className="absolute bottom-2 right-2 opacity-80 group-hover/card:opacity-0 transition-opacity duration-300 pointer-events-none hidden sm:block">
                    <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[9px] font-semibold text-white">
                      Hover to slide &rarr;
                    </span>
                  </div>
                </div>

                {/* ================================================== */}
                {/* CARD BODY: ONLY TITLE & DESCRIPTION                */}
                {/* Fixed height clamping for 100% uniform cards       */}
                {/* ================================================== */}
                <div className="p-3 sm:p-5 flex flex-col flex-1 justify-start">
                  {/* Title (fixed 2-line height so all cards align perfectly) */}
                  <h3 className="text-xs sm:text-base font-extrabold text-slate-900 group-hover/card:text-[#004494] transition-colors line-clamp-2 h-[2rem] sm:h-[3rem] leading-snug">
                    {feed.name}
                  </h3>

                  {/* Description (fixed 3-line height so all cards align perfectly) */}
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed line-clamp-3 h-[3.25rem] sm:h-[4rem] mt-1 sm:mt-1.5">
                    {feed.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* QUICK VIEW MODAL: OPENS ON CARD CLICK                          */}
      {/* Shows Image, Full Title & Full Paragraph (No Inquiry Form)     */}
      {/* Background scrolling is disabled when opened                   */}
      {/* ============================================================== */}
      {quickViewItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="feed-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setQuickViewItem(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setQuickViewItem(null)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Modal Image (Fixed Aspect Ratio with high-res display) */}
            <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
              <Image
                src={quickViewItem.primaryImage}
                alt={quickViewItem.name}
                fill
                sizes="(max-width: 640px) 100vw, 520px"
                className="object-cover"
                priority
              />
            </div>

            {/* Full Title */}
            <div className="mt-4 sm:mt-5">
              <h2
                id="feed-modal-title"
                className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-snug"
              >
                {quickViewItem.name}
              </h2>
            </div>

            {/* Full Paragraph / Description */}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed sm:leading-7">
                {quickViewItem.description}
              </p>
            </div>

            {/* Modal Footer Close Button */}
            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setQuickViewItem(null)}
                className="rounded-xl bg-[#004494] hover:bg-[#003370] px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
