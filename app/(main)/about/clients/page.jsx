import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/common/PageBanner";
import ClientsSection from "@/components/home/ClientsSection";
import { ALL_CLIENTS } from "@/components/Data/clientsData";
import { Handshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Our Clients & Partners | Fishtech BD Limited",
  description:
    "Explore our institutional clients, bilateral development partners, and research forums collaborating with Fishtech BD to advance sustainable aquaculture across Bangladesh.",
};

export default function ClientsPage() {
  return (
    <>
      {/* 1. Reusable Top Page Banner */}
      <PageBanner
        title="Our Clients & Partners"
        subtitle="Collaborating with multilateral development agencies, bilateral commissions, fisheries research forums, and grassroots NGOs to advance food security and sustainable aquaculture nationwide."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/overview" },
          { label: "Clients & Partners" },
        ]}
        badge="GLOBAL & NATIONAL ALLIANCES"
      />

      {/* 2. Dual-Row Infinite Marquee Section */}
      <ClientsSection
        eyebrow="Infinite Partner Showcase"
        headingStart="Strategic Alliances Powering"
        headingHighlight="Aquaculture Transformation"
        subtitle="Continuous collaboration with leading international institutions, development banks, and scientific research networks."
        showCta={false}
      />

      {/* 3. Partner Directory Grid for In-depth Exploration */}
      <section className="py-16 sm:py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#004494] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Institutional Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 16 Institutional Alliances
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Browse our institutional partners and client organizations working together with Fishtech BD across research, sustainability, and rural market development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_CLIENTS.map((partner) => (
              <div
                key={partner.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6] hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div>
                  <div className="flex h-24 w-full items-center justify-center rounded-xl bg-slate-50/70 p-4 border border-slate-100 group-hover:bg-white group-hover:border-sky-100 transition-colors">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={90}
                      className="max-h-16 w-auto object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>

                  <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-[#004494] bg-sky-50 px-2.5 py-0.5 rounded">
                    {partner.category}
                  </span>

                  <h3 className="mt-2 text-base font-bold text-slate-900 line-clamp-2">
                    {partner.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">Strategic Partner</span>
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Call to Action Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#004494] via-[#003370] to-[#00224d] p-8 sm:p-12 text-white shadow-xl shadow-sky-950/20 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
            />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                Join Our Alliance Network
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Interested in Partnering with Fishtech BD?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                Whether you represent a bilateral development mission, academic research laboratory, commercial hatchery cluster, or farmer cooperative, we invite you to build sustainable aquaculture solutions together.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#004494] shadow-md transition-all hover:bg-slate-100"
                >
                  <Handshake className="h-4 w-4" />
                  <span>Initiate Partnership</span>
                </Link>
                <a
                  href="mailto:fish_tech@yahoo.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white/20"
                >
                  <span>Contact Corporate Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
