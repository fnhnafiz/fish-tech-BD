import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title:
    "Rangamati Science and Technology University (RMSTU) MoU | Fishtech BD Limited",
  description:
    "Discover the groundbreaking Memorandum of Understanding (MoU) between Fishtech BD Limited and Rangamati Science and Technology University (RMSTU) for Kaptai Lake aquaculture and hill tract ecology.",
};

export default function RmstuMouPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Rangamati Science and Technology University (RMSTU)"
        subtitle="Pioneering collaboration with the Department of Fisheries and Marine Resource Technology, RMSTU, advancing sustainable cage farming in Kaptai Lake, hill tracts aquatic ecology, and indigenous capacity development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "MoU", href: "/about/mou" },
          { label: "RMSTU" },
        ]}
        badge="HILL TRACTS AQUACULTURE ALLIANCE • RMSTU"
        bgImage="/images/about-3.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Editorial Details, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="HILL TRACTS AQUACULTURE PARTNERSHIP"
        title="RMSTU & Fishtech BD: Sustainable Inland Lake Farming"
        leadText="The Memorandum of Understanding between Fishtech BD Limited and Rangamati Science and Technology University (RMSTU) marks a transformative step toward harnessing the vast aquatic potential of Kaptai Lake and the Chittagong Hill Tracts through environmentally balanced, scientifically monitored aquaculture practices."
        paragraphs={[
          "Focused on the pristine aquatic ecosystem of Kaptai Lake—the largest man-made reservoir in Bangladesh—this partnership explores low-impact floating cage aquaculture architectures, species acclimatization protocols for indigenous carp and tilapia strains, and continuous water parameter bio-monitoring to preserve aquatic biodiversity.",
          "Through this initiative, RMSTU students and faculty gain direct access to Fishtech's commercial aquaculture inputs, disease screening protocols, and expert technical advisors. Students participate in hands-on field research modules, assessing nutrient loading, carrying capacity models, and non-chemical water management techniques suitable for hilly watershed environments.",
          "A core pillar of the MoU is community livelihood enhancement. Joint outreach teams provide technical vocational training and certified seed inputs to local tribal smallholders and lake-dependent fishing communities, fostering eco-tourism-friendly aquaculture enterprises that generate sustainable local incomes while safeguarding aquatic habitats.",
        ]}
        image="/images/about-3.jpg"
        fallbackImage="/images/service-coe.jpg"
        imageAlt="RMSTU and Fishtech BD sustainable lake aquaculture and ecological research partnership"
      />
    </>
  );
}
