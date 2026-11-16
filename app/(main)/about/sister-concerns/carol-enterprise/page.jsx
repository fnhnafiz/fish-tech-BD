import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Carol Enterprise | Sister Concerns | Fishtech BD Limited",
  description:
    "Carol Enterprise is the strategic commercial trading, raw material sourcing, and nationwide agro-industrial logistics wing of Fishtech Group in Bangladesh.",
};

export default function CarolEnterprisePage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Carol Enterprise"
        subtitle="Managing nationwide agro-industrial distribution, strategic raw material sourcing, and commercial supply chain logistics across Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Carol Enterprise" },
        ]}
        badge="TRADING & SUPPLY CHAIN • SISTER CONCERN"
        bgImage="/images/concerns/carol-enterprise.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="AGRO-INDUSTRIAL SUPPLY CHAIN • FISHTECH GROUP"
        title="Carol Enterprise"
        leadText="Carol Enterprise serves as the strategic trading, bulk raw material procurement, and nationwide commercial logistics backbone of Fishtech Group, ensuring uninterrupted supply chain continuity for Bangladesh's agribusiness and aquaculture industries."
        paragraphs={[
          "Reliable access to premium raw materials and timely input delivery are essential for modern commercial farms and feed manufacturing plants. Carol Enterprise bridges global manufacturers with local producers through established import channels, stringent quality assurance audits, and streamlined port-to-warehouse customs clearance.",
          "Our operations manage high-volume trading of pharmaceutical-grade active ingredients, feed additives, specialized minerals, packaging solutions, and agro-chemicals. Utilizing centralized climate-controlled storage hubs and real-time inventory management, we guarantee material integrity, traceability, and batch consistency.",
          "With a dedicated logistics fleet and regional transit depots across strategic commercial transit corridors in Dhaka, Chattogram, Khulna, and Rajshahi, Carol Enterprise executes rapid dispatch schedules. By optimizing supply chain velocity and maintaining strategic buffer stocks, we empower sister concerns, commercial feed millers, and agro-enterprises to operate with maximum reliability.",
        ]}
        image="/images/concerns/carol-enterprise.jpg"
        fallbackImage="/images/about-1.jpg"
        imageAlt="Carol Enterprise modern agro-industrial supply chain and distribution center"
      />
    </>
  );
}
