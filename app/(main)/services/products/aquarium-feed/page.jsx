import React from "react";
import PageBanner from "@/components/common/PageBanner";
import AquariumFeedSection from "@/components/products/AquariumFeedSection";

export const metadata = {
  title: "Aquarium Feed & Ornamental Fish Nutrition | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's scientific portfolio of 12 premium ornamental aquarium feeds, micro-pellets, spirulina flakes, and specialized diets for goldfish, discus, cichlids, arowanas, and nano species.",
};

export default function AquariumFeedPage() {
  return (
    <>
      {/* 1. Executive Top Page Banner */}
      <PageBanner
        title="Aquarium Feed"
        subtitle="Premium scientifically formulated nutrition, vibrant color enhancers, and micro-pellets engineered for exotic freshwater and marine ornamental fish."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Products", href: "/services/products" },
          { label: "Aquarium Feed" },
        ]}
        badge="ORNAMENTAL AQUATICS & NUTRITION"
        bgImage="/images/service-aqua-medicine.jpg"
      />

      {/* 2. Interactive 12-Card Catalog with Hover Image Slide Effect */}
      <AquariumFeedSection />
    </>
  );
}
