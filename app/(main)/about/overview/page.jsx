import React from "react";
import PageBanner from "@/components/common/PageBanner";
import OurStorySection from "@/components/about/OurStorySection";
import OverviewStatsSection from "@/components/about/OverviewStatsSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import OurStrategySection from "@/components/about/OurStrategySection";

export const metadata = {
  title: "Overview | About Fishtech BD Limited",
  description:
    "Learn about the history, vision, and scientific aquaculture mission of Fishtech BD Limited in empowering fish and shrimp farmers across Bangladesh.",
};

export default function OverviewPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="About"
        subtitle="A brief history of our aquaculture journey, scientific innovation, and commitment to sustainable farming."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Overview" },
        ]}
      />

      {/* 2. Our Story Section (Left Content, Right Clean Bangladesh Map) */}
      <OurStorySection />

      {/* 3. Dedicated 6-Item Stats Section (Scalable & Dynamic-Ready) */}
      <OverviewStatsSection />

      {/* 4. Vision & Mission Section (Alternating Zigzag Layout) */}
      <MissionVisionSection />

      {/* 5. Core Values Section (Spinning Geometric Icons on Scroll & Hover) */}
      <CoreValuesSection />

      {/* 6. Our Strategy Section (2-Column Editorial Split + Strategy Publication Showcase) */}
      <OurStrategySection />

      {/* Additional sections will be added here step-by-step as requested */}
    </>
  );
}
