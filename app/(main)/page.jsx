import React from "react";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import SisterConcernsSection from "@/components/home/SisterConcernsSection";
import BlogsSection from "@/components/home/BlogsSection";
import VideosSection from "@/components/home/VideosSection";
import CustomerReviewSection from "@/components/home/CustomerReviewSection";
import ClientsSection from "@/components/home/ClientsSection";
import GetInTouchSection from "@/components/home/GetInTouchSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <SisterConcernsSection />
      <BlogsSection />
      <VideosSection />
      <CustomerReviewSection />
      <ClientsSection />
      <GetInTouchSection />
    </>
  );
}
