"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, X, Calendar, Clock, Video } from "lucide-react";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@FishtechBDLimited";

/**
 * Sample fallback videos used when the backend `/api/videos?limit=3` endpoint
 * is not yet connected during local development.
 * Replace `youtubeUrl` values with your live @FishtechBDLimited video URLs or 11-char IDs.
 */
const FALLBACK_VIDEOS = [
  {
    id: "video-1",
    title:
      "Smart Paddle-Wheel Aeration & Pond Oxygen Management for High-Density Farming",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    category: "Field Demo",
    duration: "04:35",
    publishedAt: "2026-11-08",
    caption: "Practical aeration placement and dissolved oxygen telemetry guide.",
    fallbackImage: "/images/about-1.jpg",
  },
  {
    id: "video-2",
    title:
      "Inside Fishtech Laboratory: Rapid PCR Pathogen Screening for Shrimp Hatcheries",
    youtubeUrl: "https://youtu.be/aqz-KE-bpKQ",
    category: "Lab Insights",
    duration: "06:12",
    publishedAt: "2026-10-30",
    caption: "How early water and post-larvae diagnostics prevent crop losses.",
    fallbackImage: "/images/about-2.jpg",
  },
  {
    id: "video-3",
    title:
      "Farmer Success Story: Boosting Coastal Bagda & Carp Yields in Khulna",
    youtubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    category: "Success Story",
    duration: "05:18",
    publishedAt: "2026-10-19",
    caption: "On-field technical advisory with progressive aquaculture growers.",
    fallbackImage: "/images/about-3.jpg",
  },
];

/**
 * Extracts a clean 11-character YouTube video ID from standard watch URLs,
 * youtu.be short links, Shorts, Live, embed URLs, or raw 11-character IDs.
 */
export function extractYouTubeId(urlOrId) {
  if (!urlOrId) return "";
  const trimmed = String(urlOrId).trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const parsed = new URL(
      trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
    );
    const vParam = parsed.searchParams.get("v");
    if (vParam && /^[a-zA-Z0-9_-]{11}$/.test(vParam)) {
      return vParam;
    }

    const segments = parsed.pathname.split("/").filter(Boolean);
    const candidate = parsed.hostname.includes("youtu.be")
      ? segments[0]
      : ["embed", "shorts", "live", "v"].includes(segments[0])
        ? segments[1]
        : null;

    if (candidate && /^[a-zA-Z0-9_-]{11}$/.test(candidate)) {
      return candidate;
    }
  } catch {
    const match = trimmed.match(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|shorts\/|live\/|watch\?.*v=))([a-zA-Z0-9_-]{11})/
    );
    if (match?.[1]) return match[1];
  }

  return "";
}

function formatVideoDate(dateValue) {
  if (!dateValue) return "Featured Video";

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

function normalizeVideoItem(raw, index) {
  const youtubeInput =
    raw.youtubeUrl ||
    raw.youtubeId ||
    raw.videoId ||
    raw.url ||
    raw.link ||
    "";
  const videoId = extractYouTubeId(youtubeInput);

  return {
    id: raw.id || raw._id || videoId || `video-${index + 1}`,
    videoId,
    youtubeUrl: videoId
      ? `https://www.youtube.com/watch?v=${videoId}`
      : YOUTUBE_CHANNEL_URL,
    title: raw.title || "Fishtech BD Field Demonstration",
    category:
      typeof raw.category === "object"
        ? raw.category?.name || "Field Story"
        : raw.category || "Field Story",
    duration: raw.duration || "",
    publishedAt:
      raw.publishedAt || raw.published_at || raw.createdAt || raw.date || "",
    caption:
      raw.caption ||
      raw.description ||
      raw.summary ||
      "Watch practical aquaculture insights from Fishtech BD Limited.",
    customThumbnail: raw.thumbnail || raw.coverImage || "",
    fallbackImage: raw.fallbackImage || "/images/about-1.jpg",
  };
}

/**
 * Facade thumbnail component: renders optimized static image + animated Play overlay
 * without loading any YouTube iframe until clicked.
 */
function VideoThumbnailFacade({
  videoId,
  customThumbnail,
  fallbackImage,
  title,
  category,
  duration,
}) {
  const [stage, setStage] = useState(
    customThumbnail ? "custom" : videoId ? "maxres" : "local"
  );

  const imgSrc =
    stage === "custom"
      ? customThumbnail
      : stage === "maxres" && videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : stage === "hq" && videoId
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : fallbackImage || "/images/about-1.jpg";

  const advanceFallback = () => {
    setStage((prev) => {
      if (prev === "custom") return videoId ? "maxres" : "local";
      if (prev === "maxres") return "hq";
      return "local";
    });
  };

  return (
    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-900">
      <Image
        src={imgSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        onLoad={(e) => {
          // YouTube returns a 120px placeholder when maxresdefault does not exist
          if (stage === "maxres" && e.currentTarget.naturalWidth <= 120) {
            setStage("hq");
          }
        }}
        onError={advanceFallback}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
      />

      {/* Contrast Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-slate-950/25 transition-opacity duration-300 group-hover:opacity-90"
      />

      {/* Category Badge */}
      {category && (
        <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full border border-white/25 bg-[#004494]/90 px-3 py-1 text-[11px] font-bold tracking-wide text-white backdrop-blur-xs shadow-sm">
          {category}
        </span>
      )}

      {/* Duration Badge */}
      {duration && (
        <span className="absolute bottom-3.5 right-3.5 z-10 inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-xs tabular-nums">
          <Clock className="h-3 w-3 text-sky-300" aria-hidden="true" />
          <span>{duration}</span>
        </span>
      )}

      {/* Centered Glassmorphic Play Trigger Visual */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#004494] shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-4 ring-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#004494] group-hover:text-white group-hover:ring-[#0084d6]/45 motion-reduce:transition-none sm:h-16 sm:w-16">
          <Play className="ml-0.5 h-6 w-6 fill-current" />
        </span>
      </span>
    </div>
  );
}

function VideoSkeletonCard() {
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
            <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="mt-2.5 h-3.5 w-5/6 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default function VideosSection({
  eyebrow = "Media & Field Stories",
  headingStart = "Watch Our",
  headingHighlight = "Latest Videos",
  subtitle = "Field demonstrations, farmer success stories, and practical aquaculture insights from across Bangladesh.",
  channelLabel = "Visit our YouTube Channel",
  channelUrl = YOUTUBE_CHANNEL_URL,
  apiEndpoint,
}) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const dialogRef = useRef(null);

  // Fetch latest 3 published videos with graceful dev fallback
  useEffect(() => {
    const controller = new AbortController();

    async function fetchLatestVideos() {
      const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
      const targetUrl =
        apiEndpoint ||
        (apiBase ? `${apiBase}/videos?limit=3` : "/api/videos?limit=3");

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
          : payload?.data || payload?.videos || [];

        const normalized = rawList
          .filter((item) =>
            item?.status
              ? String(item.status).toLowerCase() === "published"
              : item?.isPublished ?? true
          )
          .slice(0, 3)
          .map(normalizeVideoItem);

        setVideos(normalized);
      } catch (err) {
        if (err.name === "AbortError") return;
        setVideos(FALLBACK_VIDEOS.map(normalizeVideoItem));
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchLatestVideos();
    return () => controller.abort();
  }, [apiEndpoint]);

  // Synchronize native top-layer <dialog> open/close state with selected video
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeVideo) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeVideo]);

  // Light-dismiss fallback for browsers without native dialog closedby="any" (e.g. Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

    let pressedOutside = false;
    const isOutside = (e) => {
      const rect = dialog.getBoundingClientRect();
      return (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      );
    };

    const handlePointerDown = (e) => {
      pressedOutside = isOutside(e);
    };

    const handlePointerUp = (e) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener("pointerdown", handlePointerDown);
    dialog.addEventListener("pointerup", handlePointerUp);

    return () => {
      dialog.removeEventListener("pointerdown", handlePointerDown);
      dialog.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const handleCloseModal = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
    setActiveVideo(null);
  };

  return (
    <section
      aria-labelledby="latest-videos-heading"
      className="relative bg-[#F8FAFC] py-8 sm:py-12 lg:py-12 overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* SECTION HEADER (Left Title + Right YouTube Channel CTA)  */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80  px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494] shadow-2xs">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              <span>{eyebrow}</span>
            </div>

            <h2
              id="latest-videos-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
            >
              {headingStart}{" "}
              <span className="text-[#004494]">{headingHighlight}</span>
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Desktop External YouTube Channel CTA */}
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-[#004494] px-5 py-3 text-xs font-bold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#003370] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] active:scale-[0.98] sm:text-sm group"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <Play className="ml-0.5 h-3 w-3 fill-current" aria-hidden="true" />
            </span>
            <span>{channelLabel}</span>
            <ExternalLink
              className="h-4 w-4 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* ======================================================== */}
        {/* VIDEO FACADE GRID (Strict Equal Card Heights)            */}
        {/* ======================================================== */}
        {isLoading ? (
          <div
            aria-busy="true"
            aria-label="Loading latest videos"
            className="mt-10 sm:mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8 items-stretch"
          >
            <VideoSkeletonCard />
            <VideoSkeletonCard />
            <VideoSkeletonCard />
          </div>
        ) : videos.length === 0 ? (
          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#004494]">
              <Video className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Videos Published Yet
            </h3>
            <p className="mt-1.5 max-w-md text-sm text-slate-600">
              Subscribe to our YouTube channel to catch upcoming field stories and technical workshops.
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#004494] hover:text-[#0084d6]"
            >
              <span>{channelLabel}</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ) : (
          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8 items-stretch">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Play video: ${video.title}`}
                className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/85 bg-white text-left shadow-[0_2px_14px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6]/45 hover:shadow-[0_20px_40px_-15px_rgba(0,68,148,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <VideoThumbnailFacade
                  videoId={video.videoId}
                  customThumbnail={video.customThumbnail}
                  fallbackImage={video.fallbackImage}
                  title={video.title}
                  category={video.category}
                  duration={video.duration}
                />

                {/* Equal-Height Card Body */}
                <div className="flex w-full flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Calendar
                        className="h-3.5 w-3.5 shrink-0 text-[#0084d6]"
                        aria-hidden="true"
                      />
                      <time dateTime={video.publishedAt || undefined}>
                        {formatVideoDate(video.publishedAt)}
                      </time>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#004494] sm:text-[19px] line-clamp-2">
                      {video.title}
                    </h3>

                    {video.caption && (
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
                        {video.caption}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold tracking-wide text-[#004494] sm:text-[13px]">
                    <span>Watch Video</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-[#004494] transition-colors duration-200 group-hover:bg-[#004494] group-hover:text-white">
                      <Play className="ml-0.5 h-3 w-3 fill-current" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Bottom YouTube Channel Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-lg bg-[#004494] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#003370] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] active:scale-[0.98]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <Play className="ml-0.5 h-3 w-3 fill-current" aria-hidden="true" />
            </span>
            <span>{channelLabel}</span>
            <ExternalLink className="h-4 w-4 opacity-80" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* NATIVE TOP-LAYER VIDEO LIGHTBOX DIALOG                   */}
      {/* ======================================================== */}
      <dialog
        ref={dialogRef}
        {...{ closedby: "any" }}
        aria-labelledby="video-modal-title"
        onClose={() => setActiveVideo(null)}
        className="m-auto w-[min(94vw,56rem)] max-w-4xl rounded-2xl border border-white/15 bg-slate-950 p-3 sm:p-4 text-white shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {activeVideo && (
          <div className="flex flex-col gap-3.5">
            {/* Top Modal Bar with Close Action */}
            <div className="flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
                <span className="rounded-full bg-[#004494] px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {activeVideo.category}
                </span>
                {activeVideo.publishedAt && (
                  <span className="text-slate-400">
                    {formatVideoDate(activeVideo.publishedAt)}
                  </span>
                )}
              </div>

              <button
                type="button"
                autoFocus
                onClick={handleCloseModal}
                aria-label="Close video player"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Responsive 16:9 YouTube No-Cookie Embed (mounted strictly on demand) */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
              {activeVideo.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                  <p className="text-sm text-slate-300">
                    Unable to load video embed.
                  </p>
                  <a
                    href={activeVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0084d6] px-4 py-2 text-xs font-bold text-white hover:bg-[#0073bc]"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>

            {/* Modal Video Title & Direct YouTube Link */}
            <div className="flex flex-col gap-2 px-1 pb-1 sm:flex-row sm:items-center sm:justify-between">
              <h3
                id="video-modal-title"
                className="text-base font-bold leading-snug text-white sm:text-lg"
              >
                {activeVideo.title}
              </h3>

              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200"
              >
                <span>Open on YouTube</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

