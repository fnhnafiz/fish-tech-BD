import React from "react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import {
  ArrowRight,
  Fish,
  Waves,
  ShieldCheck,
  Droplets,
  HeartPulse,
  Sprout,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Sister Concerns | Fishtech BD Limited",
  description:
    "Explore the integrated sister concerns of Fishtech Group spanning fish and prawn hatcheries, SPF shrimp genetics, aqua medicine, animal health, and modern agriculture across Bangladesh.",
};

const SISTER_CONCERNS_LIST = [
  {
    id: "fishtech-hatchery",
    name: "Fishtech Hatchery",
    href: "/about/sister-concerns/fishtech-hatchery",
    category: "Fish Seed & Fingerlings",
    tagline: "Flagship Aquaculture Venture",
    specialization: "Pioneering High-Health Fish Seed & Certified Broodstock",
    description:
      "Modern hatchery technology, precision biosecurity, and selective broodstock management ensuring nationwide farmers receive high-survival, fast-growing fish fry.",
    highlights: ["50M+ Annual Seed", "Certified Broodstock", "Nationwide Logistics"],
    icon: Fish,
    featured: true,
  },
  {
    id: "fishtech-golda-hatchery",
    name: "Fishtech Golda Hatchery",
    href: "/about/sister-concerns/fishtech-golda-hatchery",
    category: "Freshwater Prawn",
    tagline: "Specialized Prawn Breeding",
    specialization: "Premium Post-Larvae for Sustainable Prawn Farming",
    description:
      "Dedicated incubation and nursery facilities producing disease-free Macrobrachium rosenbergii (Golda) post-larvae under precise environmental control.",
    highlights: ["Disease-Free PL", "Precision Salinity", "High Survival Rate"],
    icon: Waves,
  },
  {
    id: "fishtech-spf-monodon",
    name: "Fishtech SPF Monodon",
    href: "/about/sister-concerns/fishtech-spf-monodon",
    category: "Coastal Shrimp",
    tagline: "SPF Shrimp Genetics",
    specialization: "Specific Pathogen-Free Bagda Seed for Coastal Yields",
    description:
      "Certified Specific Pathogen-Free (SPF) Penaeus monodon breeding facility delivering virus-screened, resilient Bagda shrimp seed to coastal farms.",
    highlights: ["SPF Certified", "PCR Multi-Screened", "Coastal Resilience"],
    icon: ShieldCheck,
  },
  {
    id: "growtech-aquaculture",
    name: "Growtech Aquaculture",
    href: "/about/sister-concerns/growtech-aquaculture",
    category: "Aqua Inputs",
    tagline: "Aquatic Farm Solutions",
    specialization: "Bio-Nutrition, Probiotics & Pond Ecosystem Health",
    description:
      "Formulating high-efficiency pond probiotics, mineral balancers, bio-nutrition inputs, and water conditioning agents for commercial aquaculture.",
    highlights: ["Bio-Probiotics", "Water Conditioners", "Field Technical Support"],
    icon: Droplets,
  },
  {
    id: "growtech-animal-health",
    name: "Growtech Animal Health",
    href: "/about/sister-concerns/growtech-animal-health",
    category: "Animal Health",
    tagline: "Veterinary Science & Care",
    specialization: "Therapeutic Medicines & Livestock Supplements",
    description:
      "Delivering trusted veterinary medicines, nutritional premixes, immune stimulants, and healthcare formulations for aquaculture, poultry, and livestock.",
    highlights: ["GMP Compliant", "Therapeutic Range", "Immuno-Boosters"],
    icon: HeartPulse,
  },
  {
    id: "growtech-agro",
    name: "Growtech Agro",
    href: "/about/sister-concerns/growtech-agro",
    category: "Agri-Tech",
    tagline: "Sustainable Agri-Tech",
    specialization: "Bio-Fertilizers, Crop Enhancers & Modern Inputs",
    description:
      "Pioneering eco-friendly crop nutrition, organic soil conditioners, micronutrient solutions, and agricultural productivity inputs across Bangladesh.",
    highlights: ["Bio-Stimulants", "Soil Micronutrients", "Farmer Workshops"],
    icon: Sprout,
  },
  {
    id: "carol-enterprise",
    name: "Carol Enterprise",
    href: "/about/sister-concerns/carol-enterprise",
    category: "Trading & Supply",
    tagline: "Agro-Industrial Distribution",
    specialization: "Strategic Sourcing, Logistics & Bulk Distribution",
    description:
      "Handling nationwide logistics, raw material import sourcing, and high-volume commercial agro-industrial supply chain operations with rapid dispatch.",
    highlights: ["Nationwide Fleet", "Direct Bulk Sourcing", "Fast Distribution"],
    icon: Building2,
  },
];

export default function SisterConcernsHubPage() {
  return (
    <>
      <PageBanner
        title="Sister Concerns"
        subtitle="Explore Fishtech Group's integrated enterprises powering aquaculture genetics, animal healthcare, water biotechnology, and modern agricultural supplies across Bangladesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Sister Concerns" },
        ]}
        badge="FISHTECH GROUP ENTERPRISES"
      />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#004494] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Corporate Synergy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Integrated Value Chain for Bangladesh Agri-Aquaculture
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              From elite pathogen-screened seed to therapeutic formulations and bio-nutrition inputs, our specialized entities drive sustainable farm profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SISTER_CONCERNS_LIST.map((concern) => {
              const Icon = concern.icon;
              return (
                <div
                  key={concern.id}
                  className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    concern.featured
                      ? "border-[#0084d6] ring-1 ring-[#0084d6]/30 hover:border-[#004494]"
                      : "border-slate-200/90 hover:border-[#0084d6]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#004494] group-hover:bg-[#004494] group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#004494] bg-sky-50/80 px-2.5 py-1 rounded-md border border-sky-100/60">
                        {concern.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-slate-900 group-hover:text-[#004494] transition-colors">
                      {concern.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-[#0084d6]">
                      {concern.specialization}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {concern.description}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                      {concern.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={concern.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#004494] group-hover:text-[#0084d6] transition-colors"
                    >
                      <span>Explore Venture Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
