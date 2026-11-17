import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "University of Rajshahi (RU) MoU | Fishtech BD Limited",
  description:
    "Explore the strategic research Memorandum of Understanding (MoU) between Fishtech BD Limited and the Department of Fisheries, University of Rajshahi (RU) for native aquaculture genetics and field trials.",
};

export default function RuMouPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="University of Rajshahi (RU)"
        subtitle="Strategic research partnership with the Department of Fisheries, University of Rajshahi, advancing native carp genetics, intensive pond limnology, and graduate biotechnology internships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "MoU", href: "/about/mou" },
          { label: "University of Rajshahi (RU)" },
        ]}
        badge="ACADEMIC COLLABORATION • DEPARTMENT OF FISHERIES, RU"
        bgImage="/images/about-2.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Editorial Details, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="ACADEMIC-INDUSTRY RESEARCH ALLIANCE"
        title="University of Rajshahi (RU) & Fishtech BD Collaboration"
        leadText="Signed between Fishtech BD Limited and the prestigious Department of Fisheries at the University of Rajshahi, this Memorandum of Understanding formalizes a joint commitment to scientific innovation, student development, and sustainable aquaculture intensification across Northern and Western Bangladesh."
        paragraphs={[
          "Under this bilateral framework, researchers from the University of Rajshahi collaborate directly with Fishtech's Aquaculture Centre of Excellence (CoE) on indigenous finfish genetic enhancement—focusing on Rui (Labeo rohita), Catla (Gibelion catla), Mrigal, and high-value native catfish species (Shing, Magur). Joint trials evaluate fingerling survival rates, FCR improvements, and disease resistance under diverse pond microclimates.",
          "The partnership guarantees structured annual internship placements and laboratory attachments for undergraduate and postgraduate fisheries students. Interns gain invaluable practical experience across Fishtech commercial hatcheries, diagnostic PCR laboratories, and water-chemistry monitoring circuits, bridging the critical gap between university theory and industrial execution.",
          "Furthermore, Fishtech field agronomists and RU faculty members regularly conduct collaborative regional training workshops for commercial farmers across Rajshahi, Natore, and Bogura districts, promoting bio-secure pond management, prudent aqua-medicine application, and sustainable harvest economics.",
        ]}
        image="/images/about-2.jpg"
        fallbackImage="/images/service-coe.jpg"
        imageAlt="University of Rajshahi and Fishtech BD scientific aquaculture research collaboration"
      />
    </>
  );
}
