import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Growtech Agro | Sister Concerns | Fishtech BD Limited",
  description:
    "Growtech Agro pioneers eco-friendly crop nutrition, organic soil conditioners, micronutrient solutions, and agricultural productivity inputs across Bangladesh.",
};

export default function GrowtechAgroPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Growtech Agro"
        subtitle="Pioneering eco-friendly crop nutrition, organic soil conditioners, micronutrient formulations, and modern agricultural bio-inputs across Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Growtech Agro" },
        ]}
        badge="SUSTAINABLE AGRI-TECH • SISTER CONCERN"
        bgImage="/images/concerns/growtech-agro.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="SUSTAINABLE AGRI-TECH • FISHTECH GROUP"
        title="Growtech Agro"
        leadText="Growtech Agro is Fishtech Group's modern agricultural biotechnology and crop nutrition division, dedicated to engineering eco-friendly bio-fertilizers, organic soil conditioners, and targeted plant micronutrients that maximize crop yields while restoring soil ecology across Bangladesh."
        paragraphs={[
          "Intensive commercial agriculture has depleted organic matter in arable soils nationwide, leading to nutrient lockup and chemical fertilizer dependency. Growtech Agro addresses these soil degradation challenges through advanced microbial inoculants, humic and fulvic acid conditioners, and chelated micronutrient complexes that revive natural soil microbiology.",
          "Our agronomy research and formulation facility manufactures specialized crop enhancers, including amino acid-based foliar sprays, seaweed bio-stimulants, bio-fungal soil inoculants (Trichoderma), and bio-balanced NPK fortifiers. Designed for high absorption and environmental safety, our products improve crop vigor, root architecture, and climatic stress tolerance across vegetables, fruits, and grain crops.",
          "Through nationwide dealer partnerships, farmer field schools, and soil health testing caravans, Growtech Agro brings precision agronomic advisory directly to rural cultivators. By promoting balanced plant nutrition and regenerative farming techniques, we help thousands of farmers achieve higher yields, superior market produce quality, and lasting soil fertility.",
        ]}
        image="/images/concerns/growtech-agro.jpg"
        fallbackImage="/images/about-3.jpg"
        imageAlt="Growtech Agro modern agricultural biotechnology and crop nutrition research facility"
      />
    </>
  );
}
