import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Fishtech Hatchery | Sister Concerns | Fishtech BD Limited",
  description:
    "Fishtech Hatchery is the flagship breeding and seed production venture of Fishtech Group, delivering 50M+ biosecure, pathogen-screened fish seed and fingerlings across Bangladesh.",
};

export default function FishtechHatcheryPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Fishtech Hatchery"
        subtitle="Flagship fish seed breeding and incubation venture producing high-health, pathogen-screened fingerlings with nationwide oxygenated delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Fishtech Hatchery" },
        ]}
        badge="FLAGSHIP SISTER CONCERN • SEED GENETICS"
        bgImage="/images/concerns/fishtech-hatchery.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="FLAGSHIP SISTER CONCERN • FISHTECH GROUP"
        title="Fishtech Hatchery"
        leadText="Established as the foundational seed production and breeding wing of Fishtech Group, Fishtech Hatchery leads Bangladesh's commercial aquaculture sector in biosecure incubation, scientific broodstock development, and nationwide live seed logistics."
        paragraphs={[
          "Our modern facility operates with specialized recirculating aquaculture systems (RAS), micro-screened water conditioning, multi-stage sediment filtration, and 24/7 dissolved oxygen monitoring. Every batch of fish seed is reared in pathogen-controlled indoor nursery tanks under the direct care of experienced fisheries biologists and aquatic veterinary technicians.",
          "By sourcing certified, disease-screened broodstock and enforcing selective breeding protocols, Fishtech Hatchery produces fish fry with superior Feed Conversion Ratios (FCR), uniform growth traits, and high natural resilience against bacterial and viral freshwater infections.",
          "Ensuring farmer profitability extends beyond hatching. We provide temperature-stabilized, high-density oxygenated packing and express logistics to commercial farming clusters across Mymensingh, Bogura, Rajshahi, Jashore, and Khulna, complemented by on-site pond acclimatization guidance.",
        ]}
        image="/images/concerns/fishtech-hatchery.jpg"
        fallbackImage="/images/client-2.jpg"
        imageAlt="Fishtech Hatchery modern incubation and nursery facility in Bangladesh"
      />
    </>
  );
}
