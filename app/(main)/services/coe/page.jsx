import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Centres of Excellence (CoE) | Fishtech BD Limited",
  description:
    "Discover Fishtech BD's regional Aquaculture Centres of Excellence across Mymensingh, Patuakhali, and Cox's Bazar — dedicated to modern demonstration ponds, farmer training, and diagnostic support.",
};

const COE_CENTRES = [
  {
    id: "mymensingh",
    name: "CoE Mymensingh",
    region: "Northern Inland Hub",
    district: "Mymensingh",
    href: "/services/coe/mymensingh",
    image: "/images/service-coe.jpg",
    badge: "Flagship Inland Hub",
    description:
      "Premier demonstration ponds, automated feeding systems, and hands-on farmer training clinics serving the freshwater aquaculture capital of Bangladesh.",
    focus: [
      "High-density pangas, tilapia & carp demonstration ponds",
      "Field water quality & micro-pathogen testing desk",
      "Regular farmer capacity-building workshops with BAU",
      "Regional fingerling acclimatization and distribution",
    ],
  },
  {
    id: "patuakhali",
    name: "CoE Patuakhali",
    region: "Southern Coastal Estuary",
    district: "Patuakhali",
    href: "/services/coe/patuakhali",
    image: "/images/about-1.jpg",
    badge: "Estuarine & Semi-Saline",
    description:
      "Dedicated to coastal and estuarine aquaculture innovation, salinity management, and sustainable polyculture for southern farming communities.",
    focus: [
      "Salinity variation and tidal water conditioning",
      "Freshwater prawn (Golda) & carp polyculture demos",
      "Mangrove-friendly sustainable farming practices",
      "Grassroots farmer extension and technical field days",
    ],
  },
  {
    id: "coxs-bazar",
    name: "CoE Cox's Bazar",
    region: "Marine & Coastal Belt",
    district: "Cox's Bazar",
    href: "/services/coe/coxs-bazar",
    image: "/images/about-2.jpg",
    badge: "Marine & SPF Shrimp Hub",
    description:
      "Advanced marine shrimp diagnostics, SPF Monodon (Bagda) management, and coastal biosecurity protocols along the Bay of Bengal coastline.",
    focus: [
      "Specific Pathogen-Free (SPF) shrimp culture protocols",
      "PCR-verified disease screening and biosecure zoning",
      "High-salinity ocean water filtration and aeration systems",
      "Commercial hatchery and coastal farm technical advisory",
    ],
  },
];

export default function CoEHubPage() {
  return (
    <>
      {/* 1. Page Banner */}
      <PageBanner
        title="Centres of Excellence (CoE)"
        subtitle="Regional technology transfer and demonstration hubs in Mymensingh, Patuakhali, and Cox’s Bazar — bridging scientific innovation with grassroots pond management."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "CoE" },
        ]}
        badge="REGIONAL DEMONSTRATION & TRAINING HUBS"
        bgImage="/images/service-coe.jpg"
      />

      {/* 2. CoE Overview Section */}
      <section
        aria-labelledby="coe-overview-heading"
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/90 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#004494]">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
              <span>NATIONWIDE KNOWLEDGE TRANSFER</span>
            </div>

            <h2
              id="coe-overview-heading"
              className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-[1.18]"
            >
              Our Regional <span className="text-[#004494]">Centres of Excellence</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Fishtech BD has established specialized demonstration and training hubs across three distinct ecological zones in Bangladesh, offering hands-on education, diagnostic support, and biosecure farming protocols.
            </p>

            <div
              aria-hidden="true"
              className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
            />
          </div>

          {/* 3 Regional CoE Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {COE_CENTRES.map((hub) => (
              <div
                key={hub.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#004494]/30"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={hub.image}
                    alt={hub.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#004494] shadow-xs">
                    {hub.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-[#004494]" aria-hidden="true" />
                      <span>{hub.district}, Bangladesh</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#004494] transition-colors">
                      {hub.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    {hub.description}
                  </p>

                  {/* Bullet highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {hub.focus.map((item, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div className="pt-2">
                    <Link
                      href={hub.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004494]/10 py-2.5 px-4 text-xs font-bold text-[#004494] transition-all duration-200 group-hover:bg-[#004494] group-hover:text-white"
                    >
                      <span>Explore {hub.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
