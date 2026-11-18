import React from "react";
import PageBanner from "@/components/common/PageBanner";
import CoEDetailSection from "@/components/services/CoEDetailSection";

export const metadata = {
  title:
    "CoE Patuakhali | Aquaculture Centre of Excellence | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's Patuakhali Aquaculture Centre of Excellence (CoE) — dedicated to southern coastal aquaculture, Golda prawn polyculture, and salinity management.",
};

export default function CoEPatuakhaliPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="CoE Patuakhali"
        subtitle="Southern Coastal Aquaculture Centre of Excellence in Patuakhali — specialized estuarine water management, Golda prawn polyculture, and climate-resilient farming techniques."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "CoE (Centre of Excellence)", href: "/services/coe" },
          { label: "Patuakhali" },
        ]}
        badge="AQUACULTURE CENTRE OF EXCELLENCE • PATUAKHALI HUB"
        bgImage="/images/about-1.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Rich Editorial Content & Hub Info, Right: High-Impact 3-Image UI) */}
      <CoEDetailSection
        eyebrow="SOUTHERN COASTAL & ESTUARINE HUB"
        title="Patuakhali Aquaculture Centre of Excellence (CoE)"
        leadText="Empowering southern coastal farmers with scientific salinity management, biosecure prawn polyculture demonstration, and climate-adaptive aquaculture practices across the coastal delta."
        paragraphs={[
          "Located in the southern coastal delta, the Patuakhali Aquaculture Centre of Excellence (CoE) focuses on the distinct environmental dynamics of coastal farming. In this region, fluctuating salinity, seasonal tidal shifts, and acid-sulfate soils require specialized management protocols. CoE Patuakhali provides farmers with practical, proven methods for stabilizing water chemistry and benthic soil conditions.",
          "The centre features dedicated demonstration ponds optimized for freshwater giant prawn (Macrobrachium rosenbergii / Golda) nursery rearing, Carp-Prawn polyculture, and low-salinity finfish management. Visiting farmers observe first-hand the impact of bio-nutrition inputs, multi-strain probiotics, and natural water conditioning in preventing shell disease and maximizing post-larval survival rates.",
          "As part of Fishtech's commitment to climate-vulnerable coastal farming communities, CoE Patuakhali conducts regular field extension clinics across Patuakhali, Barguna, Barishal, and Bhola. Our technical teams provide on-pond salinity and dissolved oxygen checks, advice on storm-resilient dyke preparation, and biosecure farming schedules that safeguard farmer investments against coastal climatic shocks.",
        ]}
        images={[
          {
            id: "patuakhali-coe-main",
            src: "/images/about-1.jpg",
            alt: "Patuakhali Aquaculture Centre of Excellence coastal and estuarine demonstration ponds",
          },
          {
            id: "patuakhali-salinity-advisory",
            src: "/images/about-3.jpg",
            alt: "Technical officer conducting pond-side water salinity and quality testing in Patuakhali",
          },
          {
            id: "patuakhali-training-session",
            src: "/images/service-coe.jpg",
            alt: "Coastal farmers attending aquaculture training session at CoE Patuakhali",
          },
        ]}
        locationText="Patuakhali Coastal Cluster, Barishal Division, Bangladesh"
        phone="+880 1700-000000"
        ctaLabel="Explore Technical Service"
        ctaHref="/services/technical-service"
      />
    </>
  );
}
