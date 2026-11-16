import React from "react";
import PageBanner from "@/components/common/PageBanner";
import SisterConcernDetailSection from "@/components/about/SisterConcernDetailSection";

export const metadata = {
  title: "Fishtech SPF Monodon | Sister Concerns | Fishtech BD Limited",
  description:
    "Fishtech SPF Monodon is a certified Specific Pathogen Free (SPF) Black Tiger Shrimp (Penaeus monodon / Bagda) breeding facility delivering disease-screened post-larvae to coastal farms in Bangladesh.",
};

export default function FishtechSPFMonodonPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Fishtech SPF Monodon"
        subtitle="Certified Specific Pathogen Free (SPF) Black Tiger Shrimp (Penaeus monodon) breeding facility delivering virus-screened post-larvae to protect coastal aquaculture yields."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns", href: "/about/sister-concerns" },
          { label: "Fishtech SPF Monodon" },
        ]}
        badge="SPF SHRIMP GENETICS • SISTER CONCERN"
        bgImage="/images/concerns/fishtech-spf-monodon.jpg"
      />

      {/* 2. Main 2-Column Section (Left: Brief Information, Right: Related Image) */}
      <SisterConcernDetailSection
        eyebrow="SPF SHRIMP GENETICS • FISHTECH GROUP"
        title="Fishtech SPF Monodon"
        leadText="Fishtech SPF Monodon is Bangladesh's pioneering biosecure breeding center dedicated to producing certified Specific Pathogen Free (SPF) Black Tiger Shrimp (Penaeus monodon / Bagda) post-larvae, safeguarding coastal aquaculture from devastating viral and microsporidian pathogens."
        paragraphs={[
          "For decades, Bangladesh's coastal shrimp sector faced severe crop losses due to White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS/AHPND), and Enterocytozoon hepatopenaei (EHP). Fishtech SPF Monodon was established with a bio-secure quarantine and maturation infrastructure to break this disease cycle by supplying certified pathogen-free seed stock.",
          "Our facility utilizes multi-stage oceanic seawater filtration, ozone treatment, and ultra-high-dose UV disinfection. Broodstock are quarantined under strict barrier biosecurity, nourished on pathogen-screened polychaete and squid diets, and bred in an isolated environment with zero contact with wild vectors or untreated seawater.",
          "Every production batch undergoes multi-stage Real-Time PCR pathogen diagnostics, formalin stress tests, and morphological vigor grading before dispatch. Delivered in specialized oxygenated, temperature-controlled containers to shrimp farming clusters across Cox's Bazar, Khulna, Satkhira, and Paikgachha, our SPF seed delivers higher harvest survival, faster growth cycles, and superior export-grade sizing.",
        ]}
        image="/images/concerns/fishtech-spf-monodon.jpg"
        fallbackImage="/images/about-2.jpg"
        imageAlt="Fishtech SPF Monodon certified biosecure black tiger shrimp breeding facility in Bangladesh"
      />
    </>
  );
}
