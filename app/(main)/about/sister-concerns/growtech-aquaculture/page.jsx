import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Growtech Aquaculture | Sister Concerns | Fishtech BD Limited",
  description:
    "Growtech Aquaculture is Fishtech Group's specialized bio-nutrition and aqua-input enterprise, formulating high-efficiency pond probiotics, mineral balancers, and water conditioners across Bangladesh.",
};

export default function GrowtechAquaculturePage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Growtech Aquaculture"
        subtitle="Pioneering specialized aquatic probiotics, mineral balancers, bio-nutrition inputs, and water conditioning formulations for commercial aquaculture."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Growtech Aquaculture" },
        ]}
        badge="AQUA INPUTS & BIO-NUTRITION • SISTER CONCERN"
        bgImage="/images/concerns/growtech-aquaculture.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="AQUA INPUTS & BIO-NUTRITION • FISHTECH GROUP"
        title="Growtech Aquaculture"
        leadText="Growtech Aquaculture is Fishtech Group's specialized bio-input and aquatic biotechnology enterprise, dedicated to formulating high-efficiency pond probiotics, water conditioners, and gut health supplements that optimize aquatic ecosystems across Bangladesh."
        paragraphs={[
          "Modern high-density fish and shrimp farming requires precise water quality and sediment management. Growtech Aquaculture addresses toxic ammonia spikes, bottom sludge accumulation, and blue-green algae blooms through science-backed, multi-strain beneficial bacterial consortia and eco-friendly soil biostimulants.",
          "Our ISO-aligned manufacturing and testing facility produces tailored aquatic inputs, including microbial pond bioremediators, bio-chelated mineral supplements, digestive enzyme enhancers, and organic acidifiers. Formulated specifically for Bangladesh's sub-tropical aquaculture conditions, our inputs improve Feed Conversion Ratios (FCR) while reducing mortality.",
          "Beyond product delivery, Growtech Aquaculture deploys field technical advisory teams and portable diagnostic kits directly to farm gates. By educating commercial culturists on parameter monitoring (dissolved oxygen, pH, alkalinity, and nitrite), we empower thousands of farmers across 64 districts to build resilient, chemical-free, and highly profitable harvest cycles.",
        ]}
        image="/images/concerns/growtech-aquaculture.jpg"
        fallbackImage="/images/service-aqua-medicine.jpg"
        imageAlt="Growtech Aquaculture modern biotechnology and probiotic formulation laboratory"
        images={[
          {
            src: "/images/concerns/growtech-aquaculture.jpg",
            alt: "Growtech Aquaculture modern biotechnology and probiotic formulation laboratory",
          },
          {
            src: "/images/service-aqua-medicine.jpg",
            alt: "Pond water conditioning and probiotic inputs",
          },
          {
            src: "/images/about-3.jpg",
            alt: "On-site pond water quality testing and technical consultation",
          },
        ]}
      />
    </>
  );
}
