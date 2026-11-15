import React from "react";
import PageBanner from "@/components/common/PageBanner";
import BoardOfDirectorsSection from "@/components/about/BoardOfDirectorsSection";

export const metadata = {
  title: "Board of Directors | About Fishtech BD Limited",
  description:
    "Meet the Board of Directors of Fishtech BD & Growtech Group, leading sustainable aquaculture, animal health, and fisheries inputs across Bangladesh for over 20 years.",
};

export default function BoardOfDirectorsPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Board of Directors"
        subtitle="Meet the visionary leadership guiding our scientific innovation, farmer welfare, and sustainable aquaculture in Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Board of Directors" },
        ]}
        badge="LEADERSHIP & GOVERNANCE"
      />

      {/* 2. Executive Board of Directors Section (Reference-Inspired UI) */}
      <BoardOfDirectorsSection />
    </>
  );
}
