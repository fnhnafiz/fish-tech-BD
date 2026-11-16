import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Growtech Animal Health | Sister Concerns | Fishtech BD Limited",
  description:
    "Growtech Animal Health delivers trusted veterinary medicines, nutritional premixes, immune stimulants, and healthcare formulations for aquaculture, poultry, and livestock in Bangladesh.",
};

export default function GrowtechAnimalHealthPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Growtech Animal Health"
        subtitle="Delivering trusted veterinary medicines, nutritional premixes, immune stimulants, and therapeutic healthcare formulations across Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Growtech Animal Health" },
        ]}
        badge="VETERINARY PHARMACEUTICALS • SISTER CONCERN"
        bgImage="/images/concerns/growtech-animal-health.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="VETERINARY MEDICINE & SCIENCE • FISHTECH GROUP"
        title="Growtech Animal Health"
        leadText="Growtech Animal Health is Fishtech Group's specialized veterinary pharmaceutical and animal wellness division, formulating advanced therapeutic medicines, nutritional feed supplements, and immune modulators for commercial aquaculture, poultry, and livestock."
        paragraphs={[
          "Livestock and commercial aquaculture farming require targeted, bio-safe healthcare to prevent infectious outbreaks and enhance feed assimilation without contributing to antimicrobial resistance. Growtech Animal Health develops scientifically standardized veterinary medicines and preventive formulations designed for rapid recovery and optimal biosecurity.",
          "Our GMP-aligned manufacturing and testing facility produces a comprehensive portfolio of broad-spectrum therapeutic agents, metabolic stimulants, vitamin-mineral premixes, liver tonics, and natural herbal immune boosters. Every formulation complies with rigorous pharmacovigilance standards to ensure zero toxic residues and complete safety across food animals.",
          "Supported by an extensive technical field advisory network of veterinary surgeons and livestock specialists, Growtech Animal Health works closely with farmers and commercial feed mills across all 64 districts. We provide responsive diagnostic consultations, seasonal vaccination schedules, and disease management protocols that safeguard national animal protein production.",
        ]}
        image="/images/concerns/growtech-animal-health.jpg"
        fallbackImage="/images/service-aqua-medicine.jpg"
        imageAlt="Growtech Animal Health modern veterinary pharmaceuticals and manufacturing facility"
      />
    </>
  );
}
