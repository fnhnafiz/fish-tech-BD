import React from "react";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ClientsSection from "@/components/home/ClientsSection";
import SisterConcernsSection from "@/components/home/SisterConcernsSection";
import BlogsSection from "@/components/home/BlogsSection";
import VideosSection from "@/components/home/VideosSection";
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
      <ClientsSection />
      <GetInTouchSection />
    </>
  );
}
