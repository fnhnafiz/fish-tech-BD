import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Fishtech Golda Hatchery | Sister Concerns | Fishtech BD Limited",
  description:
    "Fishtech Golda Hatchery specializes in precision breeding and disease-free post-larvae (PL) production of Giant Freshwater Prawn (Macrobrachium rosenbergii / Golda) in Bangladesh.",
};

export default function FishtechGoldaHatcheryPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Fishtech Golda Hatchery"
        subtitle="Specialized breeding and post-larvae production facility delivering disease-free Giant Freshwater Prawn (Macrobrachium rosenbergii) seed nationwide."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Fishtech Golda Hatchery" },
        ]}
        badge="SPECIALIZED PRAWN BREEDING • SISTER CONCERN"
        bgImage="/images/concerns/fishtech-golda-hatchery.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="SPECIALIZED PRAWN BREEDING • FISHTECH GROUP"
        title="Fishtech Golda Hatchery"
        leadText="Dedicated to the breeding and seed production of Macrobrachium rosenbergii (Giant Freshwater Prawn / Golda), Fishtech Golda Hatchery delivers certified disease-free post-larvae (PL) to commercial prawn farmers and gher operators across Bangladesh."
        paragraphs={[
          "Freshwater prawn farming in Bangladesh has historically been constrained by seasonal wild seed scarcity, variable seed quality, and disease vulnerability. Fishtech Golda Hatchery overcomes these challenges through state-of-the-art controlled-salinity recirculating aquaculture systems, multi-barrier bio-filtration, and stringent pathogen screening protocols.",
          "Our facility maintains certified disease-free wild and domesticated broodstock conditioned under rigorous dietary and environmental controls. Hatching and larval metamorphosis occur across monitored stages (Zoea I to XI) using live Artemia nauplii and specialized bio-nutritional micro-diets, ensuring high vitality, rapid metamorphosis, and robust post-larval vigor.",
          "Every batch of Golda post-larvae (PL 10–15) undergoes microscopic health evaluation, stress testing (formalin and salinity tolerance), and PCR screening before packaging. Seed is packed in high-density oxygenated polyethylene bags with temperature stabilization and dispatched via dedicated logistics to commercial prawn farming hubs in Khulna, Bagerhat, Satkhira, Barishal, and Gopalganj.",
        ]}
        image="/images/concerns/fishtech-golda-hatchery.jpg"
        fallbackImage="/images/client-1.jpg"
        imageAlt="Fishtech Golda Hatchery modern freshwater prawn breeding and larval rearing facility"
        images={[
          {
            src: "/images/concerns/fishtech-golda-hatchery.jpg",
            alt: "Fishtech Golda Hatchery modern freshwater prawn breeding and larval rearing facility",
          },
          {
            src: "/images/about-2.jpg",
            alt: "Larval health and microscopic screening diagnostics",
          },
          {
            src: "/images/about-1.jpg",
            alt: "Freshwater prawn acclimatization and commercial grow-out ponds",
          },
        ]}
      />
    </>
  );
}
