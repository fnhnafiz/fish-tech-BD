import React from "react";
import PageBanner from "@/components/common/PageBanner";
import TeamSection from "@/components/about/TeamSection";

export const metadata = {
  title: "Our Team | Fishtech BD Limited",
  description:
    "Meet the aquaculture scientists, veterinary specialists, hatchery engineers, and field extension officers driving scientific innovation and farmer prosperity across Bangladesh.",
};

export default function TeamPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Our Team"
        subtitle="A multidisciplinary team of aquaculture geneticists, aquatic veterinarians, formulation scientists, and field extension officers pioneering sustainable aquatic food systems in Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Team" },
        ]}
        badge="SCIENTIFIC & FIELD LEADERSHIP"
      />

      {/* 2. Enhanced Team Section with Interactive Slide-Out Information Drawer */}
      <TeamSection />
    </>
  );
}
