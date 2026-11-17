import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title:
    "Bangladesh Agricultural University (BAU) MoU | Fishtech BD Limited",
  description:
    "Explore the strategic partnership between Fishtech BD Limited and the Faculty of Fisheries, Bangladesh Agricultural University (BAU) Mymensingh for advanced aqua-medicine validation and research.",
};

export default function BauMouPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Bangladesh Agricultural University (BAU)"
        subtitle="Premier academic-industry alliance with the Faculty of Fisheries, BAU Mymensingh, driving clinical aqua-medicine validation, probiotic trials, and high-health seed standards nationwide."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "MoU", href: "/about/mou" },
          { label: "BAU Mymensingh" },
        ]}
        badge="NATIONAL EXCELLENCE PARTNERSHIP • BAU MYMENSINGH"
        bgImage="/images/service-coe.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Editorial Details, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="NATIONAL AQUACULTURE RESEARCH ALLIANCE"
        title="BAU Mymensingh & Fishtech BD: Leading Scientific Fisheries"
        leadText="As the mother institution of modern fisheries sciences in Bangladesh, the Faculty of Fisheries at Bangladesh Agricultural University (BAU) joins hands with Fishtech BD Limited under a flagship Memorandum of Understanding aimed at standardizing aquatic biotechnology, veterinary validation, and sustainable farming policies."
        paragraphs={[
          "This cornerstone collaboration focuses on the rigorous clinical testing and efficacy validation of bio-secure aqua-medicines, multi-strain soil probiotics, oxygen donors, and biological water sanitizers. BAU's state-of-the-art microbiology and nutritional laboratories work in tandem with Fishtech's Aquaculture Centre of Excellence (CoE) in Mymensingh to ensure all commercial formulas meet international environmental and residue-free safety standards.",
          "Through the MoU, Fishtech supports undergraduate, Master's, and Doctoral researchers with funded research grants, commercial farm data access, and access to modern analytical equipment. Students gain immersive field exposure within commercial shrimp and finfish operations, creating a talent pipeline of certified aquaculture professionals who drive Bangladesh's blue economy forward.",
          "Together, BAU scientists and Fishtech technical leaders formulate national best-management practices (BMP) for biosecure pond preparation, water chemistry management, and disease prevention, disseminating these findings through national conferences, farmer field days, and published research papers.",
        ]}
        image="/images/about-1.jpg"
        fallbackImage="/images/service-coe.jpg"
        imageAlt="Bangladesh Agricultural University BAU and Fishtech BD strategic fisheries research alliance"
      />
    </>
  );
}
