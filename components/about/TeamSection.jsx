"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Mail,
  Award,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

const DEFAULT_TEAM = [
  {
    id: "1",
    slug: "dr-m-a-rahman",
    title: "Dr. M. A. Rahman",
    department: "Executive & R&D",
    designation: "Chief Scientific Officer & Head of R&D",
    education: "Ph.D. in Aquaculture Genetics (Auburn Univ.)",
    experience: "22+ Years Research & Genetics",
    location: "Central Research Lab, Dhaka",
    email: "ma.rahman@fishtechbd.com",
    linkedin: "https://linkedin.com",
    featuredImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    shortBio:
      "Leading scientific research, selective breeding programs, and biosecurity protocols for SPF shrimp and commercial finfish varieties across Bangladesh.",
    content:
      "<p>Dr. M. A. Rahman oversees Fishtech BD's scientific vision, spearheading genetic improvements, disease-resilient broodstock multiplication, and antibiotic-free aquaculture protocols. With over two decades of applied research across Southeast Asia and Bangladesh, he bridges global laboratory breakthroughs with practical pond-level applications.</p><p>Prior to joining Fishtech BD, Dr. Rahman served as senior aquaculture advisor to international food security agencies and led national broodstock certification projects. His pioneering research in Specific Pathogen-Free (SPF) crustacean genetics has helped thousands of hatchery operators mitigate catastrophic viral outbreaks.</p><p>At Fishtech, he directs our molecular diagnostic facilities, oversees ongoing collaborative trials with leading public universities, and mentors the next generation of aquatic pathologists and geneticists.</p>",
    initiatives: [
      "Pathogen-free broodstock screening & genetic profiling",
      "Field validation of zero-antibiotic probiotic regimens",
      "Publication of peer-reviewed national aquaculture whitepapers",
      "Technical mentorship across regional diagnostic centres",
    ],
  },
  {
    id: "2",
    slug: "dr-nusrat-jahan",
    title: "Dr. Nusrat Jahan",
    department: "Aquatic Health & Lab",
    designation: "Director of Aquatic Animal Health & Diagnostics",
    education: "DVM, M.Sc. in Aquatic Pathology (BAU)",
    experience: "16+ Years Microbiology & Diagnostics",
    location: "Mymensingh Diagnostic Centre of Excellence",
    email: "nusrat.jahan@fishtechbd.com",
    linkedin: "https://linkedin.com",
    featuredImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    shortBio:
      "Directing regional PCR laboratories, microbiological profiling, and epidemiological pond health surveillance for commercial fish and shrimp farming.",
    content:
      "<p>Dr. Nusrat Jahan leads Fishtech BD's diagnostic network, overseeing rapid PCR testing, bacterial culture profiling, and preventative pathology across our regional Aquaculture Centres of Excellence (CoE). Her dedication ensures that farmers receive actionable diagnostic reports within 24 hours of water or tissue sampling.</p><p>With specialized expertise in bacterial disease management and viral vector containment, she has developed early-warning biosecurity protocols that safeguard high-density shrimp and pangasius ponds against seasonal disease surges.</p><p>She frequently conducts hands-on training seminars for rural feed and seed dealers, equipping grassroots practitioners with microscopic identification tools and ethical treatment guidelines.</p>",
    initiatives: [
      "Sub-24h turnaround for regional PCR pathogen screening",
      "Microbiome & water chemistry balance optimization",
      "Clinical trials on indigenous probiotic strains",
      "Farmer diagnostic awareness & microscope workshops",
    ],
  },
  {
    id: "3",
    slug: "engr-kazi-shamsul-alam",
    title: "Engr. Kazi Shamsul Alam",
    department: "Hatchery & Genetics",
    designation: "Head of Hatchery Operations & Biosecurity",
    education: "B.Sc. in Fisheries Engineering (SUST)",
    experience: "18+ Years Hatchery Systems",
    location: "Cox's Bazar Coastal Marine Complex",
    email: "kazi.alam@fishtechbd.com",
    linkedin: "https://linkedin.com",
    featuredImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    shortBio:
      "Managing closed-recirculating aquatic incubation, larval rearing, and water recirculation systems producing 50M+ biosecure post-larvae annually.",
    content:
      "<p>Engr. Kazi Shamsul Alam is responsible for the precision engineering, water treatment, and operational biosecurity across Fishtech BD's modern coastal and freshwater hatcheries. He is recognized as one of Bangladesh's leading authorities on Recirculating Aquaculture Systems (RAS) and precision thermal conditioning for larval development.</p><p>Under his technical leadership, Fishtech's marine hatchery facilities achieve industry-leading survival rates exceeding 80% from nauplii to post-larvae (PL). He enforces strict physical barriers, UV filtration, and micro-bubble ozone sterilization to keep production pathogen-free.</p><p>He is also leading the development of our automated salinity balancing infrastructure to support freshwater Golda prawn seed multiplication.</p>",
    initiatives: [
      "Zero-effluent Recirculating Aquaculture Systems (RAS)",
      "High-survival larval nutrition and micro-algae culture",
      "Automated sensor monitoring for dissolved oxygen & pH",
      "Standard operating procedures for hatchery quarantine",
    ],
  },
  {
    id: "4",
    slug: "md-tanvir-ahmed",
    title: "Md. Tanvir Ahmed",
    department: "Field Extension & Logistics",
    designation: "Head of Field Advisory & Extension Services",
    education: "M.Sc. in Fisheries Biology & Limnology",
    experience: "15+ Years Extension Management",
    location: "Patuakhali & Coastal Delta Operations",
    email: "tanvir.ahmed@fishtechbd.com",
    linkedin: "https://linkedin.com",
    featuredImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    shortBio:
      "Mobilizing nationwide field technical officers to deliver on-pond consultations, water quality assessments, and farmer empowerment across 64 districts.",
    content:
      "<p>Md. Tanvir Ahmed manages Fishtech BD's nationwide fleet of field advisory officers, bridging corporate research with on-the-ground farmers. He spends extensive time in farming clusters across Satkhira, Khulna, Jessore, and Barishal, working directly with pond managers to optimize stocking densities and feed conversion ratios (FCR).</p><p>Tanvir has designed our flagship 'Farmer First' outreach program, which has trained over 50,000 rural pond owners in biosecurity, pond bottom management, and early symptom recognition.</p><p>His team also operates our 24/7 technical advisory helpline, ensuring emergency pond distress calls receive rapid on-site or telephonic support.</p>",
    initiatives: [
      "Over 50,000 farmers trained in biosecure pond management",
      "Emergency dissolved oxygen & disease response deployment",
      "Field demonstration ponds proving higher yield economics",
      "Establishment of regional farmer advisory circles",
    ],
  },
  {
    id: "5",
    slug: "farhana-yasmin",
    title: "Farhana Yasmin",
    department: "Aquatic Health & Lab",
    designation: "Lead Bio-Nutritionist & Formulation Specialist",
    education: "M.Sc. in Aquaculture Nutrition (Tokyo Univ. of Marine Sci.)",
    experience: "12+ Years Functional Feed & Probiotics",
    location: "Fishtech Nutrition Research Unit, Gazipur",
    email: "farhana.yasmin@fishtechbd.com",
    linkedin: "https://linkedin.com",
    featuredImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    shortBio:
      "Formulating precision aqua medicines, immunostimulants, and biological pond probiotics that eliminate antibiotic reliance in commercial aquaculture.",
    content:
      "<p>Farhana Yasmin leads product development for Fishtech BD's proprietary line of aquatic health inputs, gut probiotics, and environmental conditioning agents. Her research focuses on optimizing gut microbiome resilience and enhancing nutrient absorption in high-stress aquatic environments.</p><p>Before joining Fishtech, she conducted research on marine lipid chemistry and alternative insect-based protein matrices for sustainable feed formulations. Her work has received acclaim from international fisheries conferences.</p><p>She works closely with manufacturing partners to verify batch potency, stability under tropical storage conditions, and absolute freedom from banned antibiotic residues.</p>",
    initiatives: [
      "Formulation of 100% antibiotic-free biological water conditioners",
      "Immune-boosting prebiotics and mineral bio-balancers",
      "Digestibility trials reducing nitrogen waste in farm ponds",
      "Green chemistry standards for aquatic healthcare products",
    ],
  },
  {
    id: "6",
    slug: "s-m-mahfuzul-haque",
    title: "S. M. Mahfuzul Haque",
    department: "Field Extension & Logistics",
    designation: "Head of Supply Chain & Live Seed Logistics",
    education: "MBA in Supply Chain Management (DU)",
    experience: "17+ Years Cold-Chain & Distribution",
    location: "Central Logistics Hub, Dhaka",
    email: "mahfuzul.haque@fishtechbd.com",
    linkedin: "https://linkedin.com",
    featuredImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    shortBio:
      "Supervising specialized oxygenated seed transport fleets, temperature-monitored distribution, and last-mile connectivity to 1,200+ dealers nationwide.",
    content:
      "<p>S. M. Mahfuzul Haque spearheads the logistical heartbeat of Fishtech BD, managing the safe, stress-free transit of millions of fragile fish fry and shrimp post-larvae from coastal breeding grounds to inland farming clusters within critical time windows.</p><p>He pioneered Bangladesh's first commercial GPS-monitored, oxygen-injected seed transportation system, drastically reducing transport mortality from 25% down to under 3%.</p><p>His network seamlessly coordinates supply between our sister hatcheries, 150+ regional distribution hubs, and more than 1,200 authorized dealers spanning all 64 districts of Bangladesh.</p>",
    initiatives: [
      "Nationwide live seed survival rate exceeding 97% during transit",
      "Real-time oxygen and temperature tracking in transport vehicles",
      "1,200+ dealer logistics network across all 64 districts",
      "Zero-delay cold-chain delivery for sensitive biological medicines",
    ],
  },
];

const DEPARTMENTS = [
  "All Members",
  "Executive & R&D",
  "Aquatic Health & Lab",
  "Hatchery & Genetics",
  "Field Extension & Logistics",
];

export default function TeamSection({
  title = "Built by Scientific Minds, Driven by Farmer Trust",
  description = "A multidisciplinary team of aquaculture geneticists, aquatic veterinarians, formulation scientists, and field extension officers working collaboratively to modernize Bangladesh's blue economy.",
  teams = DEFAULT_TEAM,
}) {
  const [activeDepartment, setActiveDepartment] = useState("All Members");
  const [selectedMember, setSelectedMember] = useState(null);
  const lenis = useLenis();

  // Filter team members based on active tab
  const filteredTeams = useMemo(() => {
    if (activeDepartment === "All Members") return teams;
    return teams.filter((member) => member.department === activeDepartment);
  }, [teams, activeDepartment]);

  // Current index in filtered list
  const currentIndex = useMemo(() => {
    if (!selectedMember) return -1;
    return filteredTeams.findIndex((m) => m.id === selectedMember.id);
  }, [selectedMember, filteredTeams]);

  // Handle previous and next navigation in drawer
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedMember(filteredTeams[currentIndex - 1]);
    } else {
      setSelectedMember(filteredTeams[filteredTeams.length - 1]);
    }
  }, [currentIndex, filteredTeams]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredTeams.length - 1) {
      setSelectedMember(filteredTeams[currentIndex + 1]);
    } else {
      setSelectedMember(filteredTeams[0]);
    }
  }, [currentIndex, filteredTeams]);

  // Lock scroll cleanly and stop Lenis when drawer is open
  useEffect(() => {
    if (selectedMember) {
      lenis?.stop();
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedMember(null);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        lenis?.start();
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedMember, lenis, handlePrev, handleNext]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                            */}
        {/* ======================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#004494] text-xs font-black uppercase tracking-[0.16em]">
            <Users className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span>Fishtech BD Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Built by Scientific Minds, <br className="hidden sm:inline" />
            Driven by <span className="text-[#004494]">Farmer Trust</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* ======================================================== */}
        {/* DEPARTMENT FILTER TABS                                   */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
          {DEPARTMENTS.map((dept) => {
            const isActive = activeDepartment === dept;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveDepartment(dept)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#004494] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* TEAM CARDS GRID (Elevated Hyperiux Interactive Cards)    */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTeams.map((member) => (
            <div
              key={member.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMember(member)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 aspect-[3/4] shadow-[0_10px_30px_-8px_rgba(0,68,148,0.12)] border border-slate-200/90 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(0,68,148,0.25)] hover:border-[#0084d6]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494]"
            >
              {/* Portrait Image */}
              <Image
                src={member.featuredImage}
                alt={`${member.title} portrait`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
              />

              {/* Gradient Vignette Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
              />

              {/* Top Floating Department Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-sky-200 border border-white/10 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{member.department}</span>
                </span>
              </div>

              {/* Top Right Circular Expand Button (Matching Snippet's Interaction) */}
              <div className="absolute top-4 right-4 z-10">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#004494] group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 sm:p-6 space-y-2 text-white">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-sky-300 transition-colors">
                    {member.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-semibold text-sky-200/90 leading-snug">
                    {member.designation}
                  </p>
                </div>

                <p className="text-xs text-white/70 line-clamp-2 font-normal leading-relaxed pt-1">
                  {member.shortBio}
                </p>

                {/* Subtle Hover Callout */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span className="flex items-center gap-1 font-medium text-amber-300">
                    <Sparkles className="w-3 h-3" />
                    <span>{member.experience}</span>
                  </span>
                  <span className="font-bold text-sky-300 group-hover:underline">
                    View Profile &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* SLIDE-OUT INFORMATION DRAWER (Rendered via React Portal)  */}
      {/* Immune to parent stacking & scroll overflow issues        */}
      {/* ======================================================== */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedMember && (
              <div
                data-lenis-prevent
                className="fixed inset-0 z-[9999] overflow-hidden overscroll-contain"
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-member-title"
              >
                {/* Backdrop Overlay */}
                <motion.div
                  data-lenis-prevent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedMember(null)}
                  className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
                  aria-hidden="true"
                />

                {/* Right Slide-in Drawer Panel */}
                <motion.div
                  data-lenis-prevent
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed inset-y-0 right-0 z-[10000] w-full sm:w-[85vw] md:w-[70vw] lg:w-[58vw] xl:w-[48vw] max-w-3xl bg-white shadow-2xl flex flex-col overscroll-contain border-l border-slate-200"
                >
                  {/* Top Decorative Primary Accent Line */}
                  <div
                    aria-hidden="true"
                    className="h-1.5 w-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500 shrink-0"
                  />

                  {/* Drawer Header Controls */}
                  <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 shrink-0 bg-slate-50/70">
                    {/* Member Counter & Nav */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
                        Member
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#004494] text-white font-mono font-black text-xs shadow-xs">
                        {String(currentIndex + 1).padStart(2, "0")} / {String(filteredTeams.length).padStart(2, "0")}
                      </span>

                      {/* Quick Prev / Next Arrows */}
                      <div className="flex items-center gap-1 ml-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          aria-label="Previous member"
                          className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          aria-label="Next member"
                          className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedMember(null)}
                      aria-label="Close details drawer"
                      className="w-9 h-9 rounded-full bg-white hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Scrollable Drawer Content */}
                  <div
                    data-lenis-prevent
                    className="flex-1 overflow-y-auto overscroll-contain p-6 sm:p-8 lg:p-10 space-y-8"
                  >
                    
                    {/* Header: Photo & Title Section */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
                      {/* Portrait Photo Frame */}
                      <div className="relative w-36 h-48 sm:w-44 sm:h-56 shrink-0 rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-[#004494] via-[#0084d6] to-emerald-500 shadow-xl">
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                          <Image
                            src={selectedMember.featuredImage}
                            alt={`${selectedMember.title} portrait`}
                            fill
                            priority
                            className="object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Main Info */}
                      <div className="space-y-2 text-center sm:text-left flex-1">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#004494] text-xs font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{selectedMember.department}</span>
                        </div>

                        <h3
                          id="drawer-member-title"
                          className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight"
                        >
                          {selectedMember.title}
                        </h3>

                        <p className="text-sm sm:text-base font-bold text-[#004494]">
                          {selectedMember.designation}
                        </p>

                        {/* Location & Experience Badges */}
                        <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-slate-600">
                          <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md font-medium">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            <span>{selectedMember.location}</span>
                          </span>

                          <span className="flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200/80 px-3 py-1 rounded-md font-semibold">
                            <Award className="w-3.5 h-3.5 text-amber-600" />
                            <span>{selectedMember.experience}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Academic & Specialty Quick Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#004494] shrink-0">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Academic Foundation
                          </span>
                          <span className="text-xs font-bold text-slate-800 leading-snug">
                            {selectedMember.education}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Direct Department
                          </span>
                          <span className="text-xs font-bold text-slate-800 leading-snug">
                            {selectedMember.department}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Biography & Editorial Content (Rendered as trusted HTML) */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#004494] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>Professional Background &amp; Impact</span>
                      </h4>

                      <div
                        className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed text-justify font-normal [&>p]:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: selectedMember.content }}
                      />
                    </div>

                    {/* Key Strategic Initiatives Bullet Points */}
                    {selectedMember.initiatives && selectedMember.initiatives.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Key Responsibilities &amp; Research Focus</span>
                        </h4>

                        <div className="grid grid-cols-1 gap-2.5">
                          {selectedMember.initiatives.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 rounded-lg bg-slate-50/80 p-3 border border-slate-200/70 text-xs sm:text-[13px] text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Connect & Social Bar */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {selectedMember.linkedin && (
                          <a
                            href={selectedMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${selectedMember.title} on LinkedIn`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#004494] text-white text-xs font-bold hover:bg-[#003370] transition-colors shadow-xs"
                          >
                            <FaLinkedinIn className="w-3.5 h-3.5" />
                            <span>LinkedIn Profile</span>
                          </a>
                        )}

                        {selectedMember.email && (
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                            <span>{selectedMember.email}</span>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedMember(null)}
                        className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                      >
                        Close Panel
                      </button>
                    </div>

                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
