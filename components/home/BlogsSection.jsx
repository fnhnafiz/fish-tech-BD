"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

/**
 * Sample fallback posts displayed when the backend API is not yet connected
 * during local development. Once `/api/blogs?limit=3` or `NEXT_PUBLIC_API_URL`
 * responds with live records, those posts automatically replace these defaults.
 */
const FALLBACK_BLOGS = [
  {
    id: "probiotic-water-management-monsoon",
    slug: "probiotic-water-management-monsoon",
    category: "Aquaculture",
    publishedAt: "2026-11-10",
    title:
      "Probiotic Water Management: Reducing Mortality During Peak Monsoon Shifts",
    excerpt:
      "Learn how structured probiotic dosing and dissolved oxygen monitoring help commercial fish and shrimp farmers stabilize pond water chemistry after heavy seasonal rainfall.",
    thumbnail: "/images/about-1.jpg",
  },
  {
    id: "rapid-pcr-pathogen-screening-hatcheries",
    slug: "rapid-pcr-pathogen-screening-hatcheries",
    category: "Research",
    publishedAt: "2026-11-04",
    title:
      "Rapid PCR Pathogen Screening for Biosecure Shrimp Hatcheries in Cox’s Bazar",
    excerpt:
      "Explore how early molecular diagnostics at Fishtech Laboratory detect WSSV and bacterial risks before stocking, protecting hatchery investments and farm survival rates.",
    thumbnail: "/images/about-2.jpg",
  },
  {
    id: "fishtech-expands-coe-training-clinics",
    slug: "fishtech-expands-coe-training-clinics",
    category: "Company News",
    publishedAt: "2026-10-28",
    title:
      "Fishtech BD Expands Regional Training Clinics Across Mymensingh & Patuakhali",
    excerpt:
      "Through our Aquaculture Centre of Excellence (CoE) hubs, over 1,500 local farmers completed hands-on water testing and feed optimization workshops this quarter.",
    thumbnail: "/images/about-3.jpg",
  },
];

const CATEGORY_BADGE_STYLES = {
  aquaculture: "bg-[#0084d6] text-white",
  research: "bg-emerald-600 text-white",
  "company news": "bg-[#004494] text-white",
};

function getCategoryBadgeClass(category = "") {
  const key = category.trim().toLowerCase();
  return CATEGORY_BADGE_STYLES[key] || "bg-[#004494] text-white";
}

/**
 * Formats ISO date strings consistently without local-timezone day drift.
 * Pure YYYY-MM-DD calendar dates format in UTC; full timestamps format in Asia/Dhaka.
 */
function formatPublishDate(dateValue) {
  if (!dateValue) return "Recent Update";

  const raw = String(dateValue).trim();
  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(raw);
  const parsed = new Date(isDateOnly ? `${raw}T00:00:00Z` : raw);

  if (Number.isNaN(parsed.getTime())) {
    return raw;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: isDateOnly ? "UTC" : "Asia/Dhaka",
  }).format(parsed);
}

/**
 * Normalizes heterogeneous backend payload structures into a consistent blog card model.
 */
function normalizeBlogPost(raw, index) {
  const slugOrId = raw.slug || raw.id || raw._id || `post-${index + 1}`;
  return {
    id: raw.id || raw._id || slugOrId,
    slug: slugOrId,
    title: raw.title || "Untitled Aquaculture Update",
    excerpt:
      raw.excerpt ||
      raw.summary ||
      raw.shortDescription ||
      raw.description ||
      "Read the latest field insights and technical guidelines from Fishtech BD Limited.",
    category:
      typeof raw.category === "object"
        ? raw.category?.name || "Aquaculture"
        : raw.category || "Aquaculture",
    publishedAt:
      raw.publishedAt || raw.published_at || raw.createdAt || raw.date || "",
    thumbnail:
      raw.thumbnail ||
      raw.coverImage ||
      raw.image ||
      raw.featuredImage ||
      "/images/about-1.jpg",
  };
}

function BlogThumbnail({ src, alt, category }) {
  const [imgSrc, setImgSrc] = useState(src || "/images/about-1.jpg");

  return (
    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-100">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setImgSrc("/images/about-1.jpg")}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
      />
      {category && (
        <span
          className={`absolute left-4 top-4 z-10 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide shadow-sm ${getCategoryBadgeClass(
            category
          )}`}
        >
          {category}
        </span>
      )}
    </div>
  );
}

function BlogSkeletonCard() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
    >
      <div className="aspect-video w-full shrink-0 animate-pulse bg-slate-200/80" />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="h-3.5 w-28 animate-pulse rounded bg-slate-200" />
          <div className="mt-3.5 space-y-2">
            <div className="h-5 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-5 w-4/5 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3.5 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-3.5 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-3.5 w-2/3 animate-pulse rounded bg-slate-100" />
          </div>
        </div>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default function BlogsSection({
  eyebrow = "Insights & Updates",
  headingStart = "Latest",
  headingHighlight = "Blogs & Articles",
  subtitle = "Field insights, aquaculture research breakthroughs, and company news from across Bangladesh.",
  viewAllLabel = "View All Blogs",
  viewAllHref = "/insights/blogs",
  apiEndpoint,
}) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLatestBlogs() {
      const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
      const targetUrl =
        apiEndpoint ||
        (apiBase ? `${apiBase}/blogs?limit=3` : "/api/blogs?limit=3");

      try {
        const res = await fetch(targetUrl, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const payload = await res.json();
        const rawList = Array.isArray(payload)
          ? payload
          : payload?.data || payload?.blogs || payload?.posts || [];

        const published = rawList
          .filter((item) =>
            item?.status
              ? String(item.status).toLowerCase() === "published"
              : item?.isPublished ?? true
          )
          .slice(0, 3)
          .map(normalizeBlogPost);

        setBlogs(published);
      } catch (err) {
        if (err.name === "AbortError") return;
        // Gracefully use sample editorial posts when backend API is disconnected in dev
        setBlogs(FALLBACK_BLOGS);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchLatestBlogs();
    return () => controller.abort();
  }, [apiEndpoint]);

  return (
    <section
      aria-labelledby="latest-blogs-heading"
      className="relative  py-8 sm:py-12 lg:py-12 overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* SECTION HEADER (Left Title + Right Desktop CTA)          */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              <span>{eyebrow}</span>
            </div>

            <h2
              id="latest-blogs-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
            >
              {headingStart}{" "}
              <span className="text-[#004494]">{headingHighlight}</span>
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Desktop View All Button */}
          <Link
            href={viewAllHref}
            className="hidden md:inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#004494] px-5 py-3 text-xs font-bold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#003370] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] active:scale-[0.98] sm:text-sm group"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* ======================================================== */}
        {/* BLOG CARDS GRID (Strict Equal Card Heights)              */}
        {/* ======================================================== */}
        {isLoading ? (
          <div
            aria-busy="true"
            aria-label="Loading latest articles"
            className="mt-10 sm:mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8 items-stretch"
          >
            <BlogSkeletonCard />
            <BlogSkeletonCard />
            <BlogSkeletonCard />
          </div>
        ) : blogs.length === 0 ? (
          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 px-6 py-14 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#004494]">
              <BookOpen className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Articles Published Yet
            </h3>
            <p className="mt-1.5 max-w-md text-sm text-slate-600">
              New aquaculture advisories and research insights from our team will appear here soon.
            </p>
            <Link
              href={viewAllHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#004494] hover:text-[#0084d6]"
            >
              <span>Visit Insights Hub</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8 items-stretch">
            {blogs.map((post) => {
              const postHref = `/insights/blogs/${post.slug}`;

              return (
                <article
                  key={post.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/85 bg-white shadow-[0_2px_14px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6]/45 hover:shadow-[0_20px_40px_-15px_rgba(0,68,148,0.16)] focus-within:ring-2 focus-within:ring-[#0084d6] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  {/* Fixed Aspect Thumbnail + Category Pill */}
                  <BlogThumbnail
                    src={post.thumbnail}
                    alt={post.title}
                    category={post.category}
                  />

                  {/* Equal-Height Flexible Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      {/* Publish Date */}
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Calendar
                          className="h-3.5 w-3.5 text-[#0084d6] shrink-0"
                          aria-hidden="true"
                        />
                        <time dateTime={post.publishedAt || undefined}>
                          {formatPublishDate(post.publishedAt)}
                        </time>
                      </div>

                      {/* Clamped Clickable Title (stretched over entire card) */}
                      <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#004494] sm:text-[19px] line-clamp-2">
                        <Link
                          href={postHref}
                          className="outline-none after:absolute after:inset-0"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      {/* Clamped Excerpt */}
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Anchored Card Footer CTA */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold tracking-wide text-[#004494] sm:text-[13px]">
                      <span>Read More</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Mobile Bottom View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href={viewAllHref}
            className="group inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-[#004494] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#003370] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] active:scale-[0.98]"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
