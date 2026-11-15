"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  ShieldCheck,
  Briefcase,
  Sparkles,
  X,
  CheckCircle2,
  Layers,
  Eye,
} from "lucide-react";

const DIRECTORS = [
  {
    id: "farhad-hossain",
    name: "MR. KH. FARHAD HOSSAIN",
    designation: "Director",
    designationFull: "Director, Fishtech BD & Growtech Group",
    image: "/images/directors/farhad-hossain.jpg",
    experience: "20+ Years Agribusiness Leadership",
    focus: "Strategic Operations & Corporate Growth",
    description:
      "Guiding long-term institutional expansion, market competitiveness, and corporate compliance across our fisheries and animal health divisions.",
    bio:
      "Mr. Kh. Farhad Hossain is a seasoned director and founding pillar of Growtech and Fishtech Group. With over two decades of transformative leadership in Bangladesh's agricultural, fisheries, and livestock input sectors, he has steered the organization from grassroots trading to a multi-concern agribusiness powerhouse. His visionary approach emphasizes corporate integrity, financial prudence, and building enduring farmer trust nationwide.",
    keyResponsibilities: [
      "Strategic corporate governance, capital planning, and long-term organizational roadmap.",
      "National market positioning and high-level synergies across all sister concerns.",
      "Fostering institutional partnerships, international trade compliance, and enterprise growth.",
      "Promoting customer-centric ethos and fiscal accountability for farmer investments.",
    ],
    accent: "from-amber-500 to-amber-700",
    badgeColor: "bg-amber-500 text-slate-900 border-amber-400",
  },
  {
    id: "ataul-karim",
    name: "MR. MD. ATAUL KARIM BHUIYAN",
    designation: "Director",
    designationFull: "Director, Fishtech BD & Growtech Group",
    image: "/images/directors/ataul-karim.jpg",
    experience: "20+ Years Aquaculture Science & Formulations",
    focus: "Technical R&D, Formulation & Quality Assurance",
    description:
      "Directing science-driven aquaculture inputs, aqua medicine safety, and continuous enhancement of field performance standards.",
    bio:
      "Mr. Md. Ataul Karim Bhuiyan brings profound technical acumen and scientific dedication to the board of Fishtech and Growtech Group. Directing the formulation, safety, and field efficacy of science-backed aqua medicines, probiotics, and water condition inputs, he ensures every product introduced to Bangladeshi farmers meets stringent biological standards. His leadership has pioneered antibiotic-free aquaculture protocols across commercial hatcheries and grow-out ponds.",
    keyResponsibilities: [
      "Leading technical R&D and proprietary formulation of advanced aqua healthcare products.",
      "Enforcing strict biological quarantine and quality assurance across imported and local inputs.",
      "Guiding regional Aquaculture Centres of Excellence (CoE) and PCR diagnostic protocols.",
      "Championing sustainable, antibiotic-free farm management methodologies across Bangladesh.",
    ],
    accent: "from-amber-500 to-amber-700",
    badgeColor: "bg-amber-500 text-slate-900 border-amber-400",
  },
  {
    id: "tarique-sarker",
    name: "MOHAMMED TARIQUE SARKER",
    designation: "Director",
    designationFull: "Director, Fishtech BD & Growtech Group",
    image: "/images/directors/tarique-sarker.jpg",
    experience: "20+ Years Supply Chain & Farmer Welfare",
    focus: "Supply Chain, Farmer Welfare & Field Distribution",
    description:
      "Overseeing nationwide farmer reach, ethical dealer networks, and rapid technical advisory across all farming clusters.",
    bio:
      "Mohammed Tarique Sarker is an accomplished director overseeing national supply chain resilience, dealer network expansion, and grassroots farmer welfare. With hands-on immersion in regional aquaculture clusters spanning Khulna, Satkhira, Mymensingh, and Cox's Bazar, he spearheads the last-mile delivery of high-health seed, oxygenated logistics, and prompt on-pond advisory. He is deeply committed to empowering smallholder farmers through accessible, ethical distribution.",
    keyResponsibilities: [
      "Managing nationwide distribution across 150+ authorized dealer hubs in all 64 districts.",
      "Establishing cold-chain logistics and specialized live seed transportation fleets.",
      "Overseeing on-pond technical advisory officers and rapid farmer support hotlines.",
      "Safeguarding fair pricing, dealer support, and inclusive prosperity for coastal and inland farmers.",
    ],
    accent: "from-amber-500 to-amber-700",
    badgeColor: "bg-amber-500 text-slate-900 border-amber-400",
  },
];

const CORPORATE_OFFICES = [
  {
    title: "Corporate Office",
    subtitle: "Central Administrative Headquarters",
    address: "House #09, Road #08, Sector #09, Uttara, Dhaka-1230, Bangladesh",
    phones: ["+88-02-8932714", "+88 01958-515524"],
    icon: Building2,
  },
  {
    title: "Registered Office",
    subtitle: "Regional & Legal Secretariat",
    address: "Khandaker Market Complex, A-158, Horogram Bazar, Rajshahi, Bangladesh",
    email: "fishtech_bd@yahoo.com",
    web: "www.growtechgroup.net",
    icon: MapPin,
  },
];

export default function BoardOfDirectorsSection({
  corporateIntro = "Growtech & Fishtech Group, a prominent provider of Fisheries, Livestock and Agriculture inputs in Bangladesh, leads over 20 years of experience with a highly skilled team. Being committed to market competitiveness, we prioritize the welfare of our customers. Quality is our ethos, and we take full accountability for every cent of our customers invest.",
  directors = DIRECTORS,
  offices = CORPORATE_OFFICES,
}) {
  const [selectedDirector, setSelectedDirector] = useState(null);
  const lenis = useLenis();

  // Thoroughly lock both native document scroll and Lenis smooth scroll while modal is active
  useEffect(() => {
    if (selectedDirector) {
      // 1. Halt Lenis smooth scroll engine
      lenis?.stop();

      // 2. Lock standard DOM overflow on both body and html to prevent background movement
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      // 3. Escape key listener
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedDirector(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        // Resume Lenis smooth scroll
        lenis?.start();

        // Restore DOM overflow and padding
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedDirector, lenis]);

  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Architectural Dot Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />

      {/* Ambient Lighting Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* ======================================================== */}
        {/* 1. CORPORATE INTRO & MISSION STATEMENT                     */}
        {/* ======================================================== */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#004494] text-xs font-black uppercase tracking-[0.16em]">
            <Award className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            <span>20+ Years of Industry Leadership</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            Committed to Customer Welfare &amp; <span className="text-[#004494]">Aquaculture Excellence</span>
          </h2>

          {/* Intro Statement Card */}
          <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_25px_-5px_rgba(0,68,148,0.06)]">
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-700 leading-relaxed font-medium">
              &ldquo;{corporateIntro}&rdquo;
            </p>

            {/* Core Values / Commitments Pillars */}
            <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#004494] shrink-0 font-black text-xs">
                  20+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Years Experience</div>
                  <div className="text-[11px] text-slate-500">Fisheries &amp; Livestock</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Quality Ethos</div>
                  <div className="text-[11px] text-slate-500">Accountability First</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Customer Welfare</div>
                  <div className="text-[11px] text-slate-500">Nationwide Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. BOARD OF DIRECTORS SHOWCASE (Core Interactive Cards)    */}
        {/* ======================================================== */}
        <div className="space-y-8 sm:space-y-10">
          
          {/* Section Title Ribbon */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="relative inline-flex items-center">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#004494] to-[#0084d6] opacity-30 blur-sm"
              />

              <div className="relative flex items-center gap-3 rounded-lg bg-[#004494] px-8 sm:px-12 py-3 text-white shadow-xl border border-sky-300/30">
                <Briefcase className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <h3 className="text-base sm:text-lg lg:text-xl font-black uppercase tracking-[0.18em]">
                  BOARD OF DIRECTORS
                </h3>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 font-medium text-center">
              Click on any card to view detailed executive profile &amp; portfolio
            </p>
          </div>

          {/* 3 Directors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 container mx-auto items-stretch">
            {directors.map((director, idx) => (
              <div
                key={director.id || idx}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedDirector(director)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedDirector(director);
                  }
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-6px_rgba(0,68,148,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#0084d6]/60 hover:shadow-[0_22px_50px_-10px_rgba(0,68,148,0.22)] cursor-pointer text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494]"
              >
                {/* Top Subtle Amber / Navy Reveal Line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber-500 via-[#0084d6] to-[#004494] transition-transform duration-300 group-hover:scale-x-100"
                />

                <div className="space-y-5">
                  {/* Portrait Image Frame with Bespoke Gold/Amber Border */}
                  <div className="relative mx-auto w-full max-w-[240px] aspect-[1/1.16] rounded-xl overflow-hidden p-1.5 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 shadow-md">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        sizes="(max-width: 768px) 80vw, 30vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Interactive "Click to View Profile" Overlay Badge */}
                    <div className="absolute inset-0 bg-[#004494]/60 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-[#004494] shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-3.5 h-3.5 text-amber-500" />
                        <span>View Profile</span>
                      </span>
                    </div>
                  </div>

                  {/* Nameplate (Golden Amber Banner from Reference, Elevated) */}
                  <div className="text-center space-y-1">
                    <div className="rounded-md bg-gradient-to-r from-[#e69500] via-[#f59e0b] to-[#d97706] py-2 px-3 text-slate-950 font-black text-xs sm:text-[13px] tracking-wider uppercase shadow-xs group-hover:brightness-105 transition-all">
                      {director.name}
                    </div>

                    <div className="pt-1.5 flex items-center justify-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#004494]" />
                      <span className="text-xs font-bold text-[#004494] uppercase tracking-widest">
                        {director.designation}
                      </span>
                    </div>
                  </div>

                  {/* Executive Role & Portfolio Description */}
                  <div className="pt-3 border-t border-slate-100 text-center space-y-2">
                    <div className="text-xs font-extrabold text-slate-800 group-hover:text-[#004494] transition-colors">
                      {director.focus}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {director.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Trigger Note */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Board Member</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[#004494] font-bold text-[11px] group-hover:underline">
                    <span>Details</span>
                    <Sparkles className="w-3 h-3 text-amber-500" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. CORPORATE & REGISTERED OFFICES (From Reference Footer) */}
        {/* ======================================================== */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-[#001738] via-[#00285e] to-[#001c44] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Header Column */}
            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300 block">
                OFFICIAL DIRECTORY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Corporate Secretariat &amp; Registered Offices
              </h3>
              <p className="text-xs text-sky-100/75 leading-relaxed">
                Connect directly with our headquarters and regional administrative centres.
              </p>
            </div>

            {/* Offices Details Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Corporate Office */}
              <div className="rounded-xl bg-white/10 backdrop-blur-xs p-5 border border-white/15 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-400/20 flex items-center justify-center text-sky-300 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Corporate Office</h4>
                    <span className="text-[10px] text-sky-200">Central Administrative Headquarters</span>
                  </div>
                </div>

                <p className="text-xs text-sky-100/90 leading-relaxed">
                  House #09, Road #08, Sector #09, Uttara, Dhaka-1230, Bangladesh
                </p>

                <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-sky-200">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>+88-02-8932714, +88 01958-515524</span>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="rounded-xl bg-white/10 backdrop-blur-xs p-5 border border-white/15 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Registered Office</h4>
                    <span className="text-[10px] text-emerald-200">Regional &amp; Legal Secretariat</span>
                  </div>
                </div>

                <p className="text-xs text-sky-100/90 leading-relaxed">
                  Khandaker Market Complex, A-158, Horogram Bazar, Rajshahi, Bangladesh
                </p>

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-sky-200">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                    <span>fishtech_bd@yahoo.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>www.growtechgroup.net</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 4. EXECUTIVE DIRECTOR DETAILS MODAL (Smooth & Responsive)  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedDirector && (
          <div
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-labelledby="director-modal-title"
          >
            {/* Backdrop: Smooth fade-in, click outside closes modal */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedDirector(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Dialog Card: Smooth scale-in & slide-up */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden"
            >
              {/* Modal Top Decorative Accent Bar */}
              <div
                aria-hidden="true"
                className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-[#0084d6] to-[#004494] shrink-0"
              />

              {/* Modal Floating Close Button (Top-Right) */}
              <button
                type="button"
                onClick={() => setSelectedDirector(null)}
                aria-label="Close director details"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Scrollable Content Container (Smooth internal scroll isolated with data-lenis-prevent) */}
              <div
                data-lenis-prevent
                className="overflow-y-auto overscroll-contain p-6 sm:p-8 space-y-6"
              >
                
                {/* Director Header: Photo + Name + Designation Banner */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 pb-6 border-b border-slate-100">
                  {/* Portrait with Golden Border Frame */}
                  <div className="relative w-36 h-44 sm:w-40 sm:h-48 shrink-0 rounded-xl overflow-hidden p-1.5 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 shadow-md">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src={selectedDirector.image}
                        alt={selectedDirector.name}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Name and Designation Information */}
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#004494] text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{selectedDirector.designationFull}</span>
                    </div>

                    <h3
                      id="director-modal-title"
                      className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight"
                    >
                      {selectedDirector.name}
                    </h3>

                    <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>{selectedDirector.experience}</span>
                      </span>

                      <span className="flex items-center gap-1 font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span>{selectedDirector.focus}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Executive Bio */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#004494] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Executive Profile &amp; Biography</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify font-normal">
                    {selectedDirector.bio}
                  </p>
                </div>

                {/* Key Strategic Responsibilities */}
                {selectedDirector.keyResponsibilities && (
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#004494]" />
                      <span>Key Leadership Portfolios &amp; Governance</span>
                    </h4>

                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedDirector.keyResponsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-3 rounded-lg bg-slate-50/80 p-3 border border-slate-200/70 text-xs sm:text-[13px] text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Note */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-500">
                    Fishtech BD &amp; Growtech Group
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedDirector(null)}
                    className="font-bold text-[#004494] hover:underline cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
