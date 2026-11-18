import React from "react";
import PageBanner from "@/components/common/PageBanner";
import TechnicalServiceDetailSection from "@/components/services/TechnicalServiceDetailSection";

export const metadata = {
  title: "Technical Service & Field Advisory | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's nationwide aquaculture technical services, on-site water quality analysis, pathogen diagnostics, and expert pond management across Bangladesh.",
};

export default function TechnicalServicePage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Technical Service"
        subtitle="Dedicated on-site field advisory, water quality testing, pathogen diagnostics, and hands-on pond management across Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Technical Service" },
        ]}
        badge="NATIONWIDE EXTENSION & FIELD DIAGNOSTICS"
        bgImage="/images/about-3.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Rich Editorial Content & Pillars, Right: 3/4 Image Grid with Preview) */}
      <TechnicalServiceDetailSection />
    </>
  );
}
