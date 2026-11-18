import React from "react";
import PageBanner from "@/components/common/PageBanner";
import CoEDetailSection from "@/components/services/CoEDetailSection";

export const metadata = {
  title:
    "CoE Mymensingh | Aquaculture Centre of Excellence | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's Mymensingh Aquaculture Centre of Excellence (CoE) — featuring modern demonstration ponds, farmer training clinics, and regional water testing diagnostics.",
};

export default function CoEMymensinghPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="CoE Mymensingh"
        subtitle="Regional Aquaculture Centre of Excellence in Mymensingh — dedicated demonstration ponds, farmer training academy, and diagnostic support for northern Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "CoE (Centre of Excellence)", href: "/services/coe" },
          { label: "Mymensingh" },
        ]}
        badge="AQUACULTURE CENTRE OF EXCELLENCE • MYMENSINGH HUB"
        bgImage="/images/service-coe.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Rich Editorial Content & Hub Info, Right: High-Impact 3-Image UI) */}
      <CoEDetailSection
        eyebrow="FLAGSHIP DEMONSTRATION & TRAINING HUB"
        title="Mymensingh Aquaculture Centre of Excellence (CoE)"
        leadText="Fishtech BD's flagship technology transfer and demonstration facility, bridging academic fisheries science with ground-level pond management for commercial farmers across northern Bangladesh."
        paragraphs={[
          "Situated at the epicentre of Bangladesh's freshwater aquaculture industry, the Mymensingh Aquaculture Centre of Excellence (CoE) serves as our primary demonstration, education, and diagnostic hub. Designed to support commercial pangas, tilapia, carp, and catfish farming clusters, the centre demonstrates how scientific protocols translate into lower mortality, improved Feed Conversion Ratios (FCR), and higher harvest yields.",
          "The facility features specialized biosecure demonstration ponds showcasing modern water management, multi-point paddlewheel and bottom diffusion aeration systems, and automated feeding techniques. Farmers visiting the centre can observe scientific best management practices (BMP) in action, learning directly from qualified fisheries biologists and technical officers.",
          "Beyond field demonstrations, CoE Mymensingh houses an advanced diagnostic testing desk that provides local farmers with rapid analysis for Dissolved Oxygen, pH, Ammonia, and parasite screening. In close collaboration with nearby academic institutions including the Faculty of Fisheries at Bangladesh Agricultural University (BAU), the centre hosts structured workshops, biosecure stocking clinics, and technology transfer sessions throughout the farming calendar.",
        ]}
        images={[
          {
            id: "mymensingh-coe-main",
            src: "/images/service-coe.jpg",
            alt: "Aquaculture Centre of Excellence CoE Mymensingh demonstration hub and training facility",
          },
          {
            id: "mymensingh-field-training",
            src: "/images/about-3.jpg",
            alt: "Farmers receiving hands-on technical demonstration and pond advisory in Mymensingh",
          },
          {
            id: "mymensingh-water-diagnostics",
            src: "/images/about-2.jpg",
            alt: "On-site water testing and microscope diagnostics at Mymensingh CoE",
          },
        ]}
        locationText="Mymensingh Aquaculture Cluster, Bangladesh"
        phone="+880 1700-000000"
        ctaLabel="Explore Technical Service"
        ctaHref="/services/technical-service"
      />
    </>
  );
}
