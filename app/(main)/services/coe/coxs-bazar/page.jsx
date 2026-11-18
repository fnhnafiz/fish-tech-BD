import React from "react";
import PageBanner from "@/components/common/PageBanner";
import CoEDetailSection from "@/components/services/CoEDetailSection";

export const metadata = {
  title:
    "CoE Cox's Bazar | Aquaculture Centre of Excellence | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's Cox's Bazar Aquaculture Centre of Excellence (CoE) — dedicated to marine shrimp management, SPF Monodon protocols, and molecular pathogen diagnostics along the Bay of Bengal.",
};

export default function CoECoxsBazarPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="CoE Cox's Bazar"
        subtitle="Marine & Coastal Aquaculture Centre of Excellence in Cox’s Bazar — premier SPF shrimp management, marine water filtration, and advanced pathogen diagnostics along the Bay of Bengal."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "CoE (Centre of Excellence)", href: "/services/coe" },
          { label: "Cox’s Bazar" },
        ]}
        badge="AQUACULTURE CENTRE OF EXCELLENCE • COX’S BAZAR HUB"
        bgImage="/images/about-2.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Rich Editorial Content & Hub Info, Right: High-Impact 3-Image UI) */}
      <CoEDetailSection
        eyebrow="MARINE & COASTAL SHRIMP HUB"
        title="Cox's Bazar Aquaculture Centre of Excellence (CoE)"
        leadText="Pioneering certified SPF shrimp genetics, high-salinity oceanic water conditioning, and molecular diagnostics to safeguard Bangladesh's valuable shrimp export industry."
        paragraphs={[
          "Fronting the Bay of Bengal, the Cox's Bazar Aquaculture Centre of Excellence (CoE) anchors Fishtech BD's marine aquaculture and shrimp genetics initiatives. In this specialized coastal zone, rigorous biosecurity and marine water purification are critical. The centre operates as a model training and diagnostic facility for commercial hatcheries and coastal shrimp growers, standardizing Specific Pathogen-Free (SPF) Penaeus monodon (Bagda) culture across Bangladesh.",
          "The facility demonstrates multi-stage marine water intake systems featuring deep-bed sand filtration, biological settling reservoirs, ozone injection, and UV sterilization. Visiting hatchery operators and farm managers observe closed-system water recycling, live feed culture (Artemia and microalgae), and biosecure larval rearing protocols engineered to eliminate external viral contamination.",
          "CoE Cox's Bazar houses a dedicated PCR diagnostic desk offering real-time screening for critical crustacean pathogens including White Spot Syndrome Virus (WSSV), Enterocytozoon hepatopenaei (EHP), and IHHNV. Our marine technical officers provide round-the-clock advisory, seed health certification, and biosecurity audits to commercial hatcheries across Teknaf, Moheshkhali, Ukhia, and Chakaria.",
        ]}
        images={[
          {
            id: "coxsbazar-coe-main",
            src: "/images/about-2.jpg",
            alt: "Cox's Bazar Aquaculture Centre of Excellence marine diagnostics and PCR laboratory",
          },
          {
            id: "coxsbazar-training-hub",
            src: "/images/service-coe.jpg",
            alt: "Marine shrimp hatchery operators and coastal farmers in a training clinic at CoE Cox's Bazar",
          },
          {
            id: "coxsbazar-biosecure-rearing",
            src: "/images/about-1.jpg",
            alt: "Biosecure coastal shrimp rearing ponds with aeration systems in Cox's Bazar",
          },
        ]}
        locationText="Kolatoli Marine Drive, Cox's Bazar, Bangladesh"
        phone="+880 1700-000000"
        ctaLabel="Explore Technical Service"
        ctaHref="/services/technical-service"
      />
    </>
  );
}
