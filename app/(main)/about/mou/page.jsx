import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Memorandum of Understanding (MoU) | Fishtech BD Limited",
  description:
    "Fishtech BD Limited partners with Bangladesh's premier universities—University of Rajshahi (RU), Rangamati Science and Technology University (RMSTU), and Bangladesh Agricultural University (BAU)—to bridge academia and commercial aquaculture.",
};

const MOU_PARTNERS = [
  {
    id: "ru",
    name: "University of Rajshahi (RU)",
    bengaliName: "রাজশাহী বিশ্ববিদ্যালয়",
    shortName: "RU",
    faculty: "Department of Fisheries, Faculty of Agriculture",
    href: "/about/mou/ru",
    image: "/images/about-2.jpg",
    badge: "Native Genetics & Limnology",
    description:
      "Strategic collaboration dedicated to native carp broodstock genetics, climate-resilient fish breeding, pond limnology optimization, and postgraduate research internships in Northern Bangladesh.",
    keyPoints: [
      "Indigenous carp & catfish selective breeding trials",
      "Field water quality audits & sediment microbiome mapping",
      "Postgraduate student internships & thesis sponsorship",
      "Joint technical workshops for commercial carp cultivators",
    ],
  },
  {
    id: "rmstu",
    name: "Rangamati Science and Technology University (RMSTU)",
    bengaliName: "রাঙ্গামাটি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
    shortName: "RMSTU",
    faculty: "Department of Fisheries and Marine Resource Technology",
    href: "/about/mou/rmstu",
    image: "/images/about-3.jpg",
    badge: "Hill Tracts & Lake Aquaculture",
    description:
      "Pioneering research on sustainable cage aquaculture in Kaptai Lake, cold-water fish conservation, aquatic biosecurity in hill terrain, and economic empowerment of indigenous tribal communities.",
    keyPoints: [
      "Kaptai Lake aquatic ecology & bio-monitoring programs",
      "Eco-friendly floating cage farming design and feed protocols",
      "Hands-on hatchery technology transfer to hill tract farmers",
      "Undergraduate student industrial training attachments",
    ],
  },
  {
    id: "bau",
    name: "Bangladesh Agricultural University (BAU)",
    bengaliName: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
    shortName: "BAU",
    faculty: "Faculty of Fisheries, Mymensingh",
    href: "/about/mou/bau",
    image: "/images/service-coe.jpg",
    badge: "National Excellence & Bio-Validation",
    description:
      "Nationwide collaborative framework focusing on scientific clinical validation of aqua-medicines, probiotic protocols, fish nutrition standards, and policy frameworks for Bangladesh aquaculture.",
    keyPoints: [
      "Clinical laboratory trials for probiotics & water sanitizers",
      "Shrimp & finfish nutritional FCR optimization studies",
      "Master's & Doctoral thesis grants and laboratory access",
      "CoE regional aquaculture training & farmer advisory circuits",
    ],
  },
];

export default function MouOverviewPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Memorandum of Understanding (MoU)"
        subtitle="Bridging academic excellence and commercial aquaculture through strategic research partnerships with Bangladesh's leading public universities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "MoU" },
        ]}
        badge="ACADEMIC-INDUSTRY RESEARCH COLLABORATIONS"
        bgImage="/images/service-coe.jpg"
      />

      {/* 2. Main MoU Section */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#004494] border border-sky-100">
              <GraduationCap className="h-4 w-4" />
              <span>Higher Education & Commercial Synergy</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Advancing Aquaculture Through University Alliances
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Fishtech BD Limited actively partners with the country’s premier faculties of fisheries to translate laboratory breakthroughs into pond-level farmer prosperity, while providing young scientists with real-world commercial aquaculture platforms.
            </p>
          </div>

          {/* Partner Universities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MOU_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#0084d6] transition-all duration-300"
              >
                <div>
                  {/* University Image Frame */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 rounded-lg bg-[#004494] px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                      {partner.badge}
                    </span>

                    <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2 py-0.5 text-xs font-black text-[#004494]">
                      {partner.shortName}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#004494] transition-colors leading-snug">
                        {partner.name}
                      </h3>
                      {partner.bengaliName && (
                        <span className="text-xs text-slate-500 block mt-0.5 font-medium">
                          {partner.bengaliName}
                        </span>
                      )}
                      <p className="text-xs font-semibold text-sky-700 mt-1">
                        {partner.faculty}
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-600">
                      {partner.description}
                    </p>

                    {/* Key Collaborative Points */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Focus Areas:
                      </span>
                      {partner.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={partner.href}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-[#004494] text-[#004494] hover:text-white py-2.5 px-4 text-xs font-bold transition-all border border-slate-200/80 hover:border-[#004494]"
                  >
                    <span>Explore {partner.shortName} MoU Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Academic Impact Metrics */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#001738] via-[#00285e] to-[#001c44] text-white p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="space-y-1 pt-3 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-sky-300">3</span>
                <p className="text-xs text-white/80 font-medium">Premier Public Universities</p>
              </div>

              <div className="space-y-1 pt-3 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-sky-300">25+</span>
                <p className="text-xs text-white/80 font-medium">Graduate Interns Placed</p>
              </div>

              <div className="space-y-1 pt-3 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-sky-300">12</span>
                <p className="text-xs text-white/80 font-medium">Joint Research Trials</p>
              </div>

              <div className="space-y-1 pt-3 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-sky-300">100%</span>
                <p className="text-xs text-white/80 font-medium">Field-Validated Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
