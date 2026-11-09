"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiArrowRight,
  FiHome,
  FiInfo,
  FiAward,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiShield,
  FiSettings,
  FiDroplet,
  FiPackage,
  FiTarget,
  FiActivity,
  FiLayers,
  FiGlobe,
  FiCpu,
  FiBookOpen,
  FiUserCheck,
  FiTrendingUp,
  FiTool,
  FiTruck,
  FiCalendar,
  FiEdit3,
  FiPieChart,
  FiPhone,
  FiMapPin,
  FiMail,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const TOP_BAR_CONFIG = {
  address: "Bangladesh",
  email: "info@fishtechbd.com",
  socials: [
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "X", href: "https://twitter.com", icon: FaXTwitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  ],
};

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    isDirect: true,
  },
  {
    name: "About",
    href: "/about",
    megaMenu: {
      category: "Company Profile & Governance",
      columns: [
        {
          heading: "Corporate Identity",
          items: [
            {
              title: "Overview",
              desc: "Our vision, mission, and legacy in modern aquaculture.",
              href: "/about/overview",
              icon: FiInfo,
            },
            {
              title: "Board of Directors",
              desc: "Distinguished board guiding sustainable fisheries development.",
              href: "/about/board-of-directors",
              icon: FiAward,
            },
            {
              title: "Team (Accounts & Marketing)",
              desc: "Experienced managers, accountants, and marketing specialists.",
              href: "/about/team",
              icon: FiUsers,
            },
          ],
        },
        {
          heading: "Partners & Recognition",
          items: [
            {
              title: "Clients & Farm Network",
              desc: "Trusted by 10,000+ commercial fish and shrimp farmers.",
              href: "/about/clients",
              icon: FiBriefcase,
            },
            {
              title: "MoU & Strategic Alliances",
              desc: "Joint academic and research MoUs with BFRI and universities.",
              href: "/about/mou",
              icon: FiFileText,
            },
            {
              title: "Quality Certifications",
              desc: "Strict adherence to international aquaculture biosecurity.",
              href: "/about/certifications",
              icon: FiShield,
            },
          ],
        },
      ],
      featured: {
        tag: "Our Legacy",
        title: "15+ Years Empowering Bangladesh Fisheries",
        desc: "Transforming the blue economy through smart technology, biosecurity, and farmer-first solutions.",
        linkText: "Read Company Overview",
        href: "/about/overview",
      },
    },
  },
  {
    name: "Services",
    href: "/services",
    megaMenu: {
      category: "Specialized Technical & Lab Solutions",
      columns: [
        {
          heading: "Field & Farm Solutions",
          items: [
            {
              title: "Technical Service",
              desc: "On-site pond assessment, aeration design & water management.",
              href: "/services/technical-service",
              icon: FiSettings,
            },
            {
              title: "Aqua Medicine & Products",
              desc: "Probiotics, disinfectants, oxygen tablets & feed supplements.",
              href: "/services/aqua-medicine",
              icon: FiPackage,
            },
          ],
        },
        {
          heading: "Excellence & Diagnostics",
          items: [
            {
              title: "CoE (Center of Excellence)",
              desc: "Farmer training academy, technology demos & best practices.",
              href: "/services/coe",
              icon: FiTarget,
            },
            {
              title: "Laboratory & Diagnostics",
              desc: "Rapid PCR pathogen screening, microbiological & soil tests.",
              href: "/services/laboratory",
              icon: FiActivity,
            },
          ],
        },
      ],
      featured: {
        tag: "24/7 Diagnostics",
        title: "Pond Health & PCR Water Testing",
        desc: "Send your pond water and shrimp samples to our accredited lab for same-day pathology results.",
        linkText: "Schedule a Test",
        href: "/services/laboratory",
      },
    },
  },
  {
    name: "Sectors",
    href: "/sectors",
    megaMenu: {
      category: "Aquaculture Species & Systems",
      columns: [
        {
          heading: "Commercial Farming",
          items: [
            {
              title: "Shrimp & Prawn Farming",
              desc: "Intensive & semi-intensive Bagda and Vannamei systems.",
              href: "/sectors/shrimp",
              icon: FiDroplet,
            },
            {
              title: "Commercial Whitefish & Carp",
              desc: "High-density Rui, Katla, Pangas & Tilapia pond optimization.",
              href: "/sectors/carp",
              icon: FiLayers,
            },
          ],
        },
        {
          heading: "Modern Systems & Export",
          items: [
            {
              title: "Biofloc & RAS Facilities",
              desc: "Zero-water exchange closed recirculating aquaculture systems.",
              href: "/sectors/biofloc-ras",
              icon: FiCpu,
            },
            {
              title: "Cage & Open-Water Culture",
              desc: "River and lake floating cages, pen setups & reservoir culture.",
              href: "/sectors/cage-culture",
              icon: FiGlobe,
            },
          ],
        },
      ],
      featured: {
        tag: "Industry Focus",
        title: "Modern Shrimp Farming Automation",
        desc: "Implementing smart telemetry and automated acoustic feeding to boost survival rates by 25%.",
        linkText: "Explore Sectors",
        href: "/sectors/shrimp",
      },
    },
  },
  {
    name: "R & D",
    href: "/rd",
    megaMenu: {
      category: "Research, Innovation & Publications",
      columns: [
        {
          heading: "Innovation Teams & Trials",
          items: [
            {
              title: "R & D Team",
              desc: "Aquaculture scientists, microbiologists & IoT engineers.",
              href: "/rd/team",
              icon: FiUsers,
            },
            {
              title: "Active Projects",
              desc: "Field trials on nano-bubble aeration, probiotics & FCR reduction.",
              href: "/rd/projects",
              icon: FiCpu,
            },
          ],
        },
        {
          heading: "Scientific Output",
          items: [
            {
              title: "Technical Articles",
              desc: "Practical knowledge on water balance, disease and pond chemistry.",
              href: "/rd/articles",
              icon: FiBookOpen,
            },
            {
              title: "Research Publications",
              desc: "Peer-reviewed scientific papers in international fisheries journals.",
              href: "/rd/publications",
              icon: FiFileText,
            },
          ],
        },
      ],
      featured: {
        tag: "Breakthrough",
        title: "Indigenous Probiotic Trials",
        desc: "Discover our patented microbial formulations optimized specifically for Bangladesh brackish waters.",
        linkText: "View Publications",
        href: "/rd/publications",
      },
    },
  },
  {
    name: "Career",
    href: "/career",
    megaMenu: {
      category: "Join FishTech BD Talent Network",
      columns: [
        {
          heading: "Open Positions",
          items: [
            {
              title: "Technical Service Officer (TSO)",
              desc: "Regional field advisory, water quality checks & farm audits.",
              href: "/career/technical-service-officer",
              icon: FiUserCheck,
            },
            {
              title: "Marketing Officer",
              desc: "Market expansion, dealer network relations & branding.",
              href: "/career/marketing-officer",
              icon: FiTrendingUp,
            },
            {
              title: "Hatchery Technician",
              desc: "Larval rearing, live feed culture & biosecurity maintenance.",
              href: "/career/hatchery-technician",
              icon: FiTool,
            },
          ],
        },
        {
          heading: "Programs & Operations",
          items: [
            {
              title: "Internship Program",
              desc: "Hands-on industrial training for fisheries & agri students.",
              href: "/career/internship",
              icon: FiBookOpen,
            },
            {
              title: "Delivery & Logistics",
              desc: "Cold-chain medicine distribution & supply management.",
              href: "/career/delivery-logistics",
              icon: FiTruck,
            },
          ],
        },
      ],
      featured: {
        tag: "Hiring Now",
        title: "Shape the Future of Agri-Tech",
        desc: "Work with cutting-edge aquaculture IoT and lead transformative changes in rural farming communities.",
        linkText: "See All Positions",
        href: "/career",
      },
    },
  },
  {
    name: "Insights",
    href: "/insights",
    megaMenu: {
      category: "Aquaculture Knowledge & Market Intelligence",
      columns: [
        {
          heading: "Knowledge & Content",
          items: [
            {
              title: "Blogs & Field Stories",
              desc: "Expert tips, seasonal pond prep and farmer success cases.",
              href: "/insights/blogs",
              icon: FiEdit3,
            },
            {
              title: "Market Price Intelligence",
              desc: "Weekly wholesale fish & shrimp prices across major divisions.",
              href: "/insights/market-price",
              icon: FiPieChart,
            },
          ],
        },
        {
          heading: "Guidelines & Tools",
          items: [
            {
              title: "Technical SOPs & Guides",
              desc: "Standard operating procedures for biosecurity and feeding.",
              href: "/insights/sops",
              icon: FiFileText,
            },
            {
              title: "Video Tutorials",
              desc: "Visual demonstrations of aerator setup and water testing.",
              href: "/insights/videos",
              icon: FiActivity,
            },
          ],
        },
      ],
      featured: {
        tag: "Latest Insight",
        title: "Monsoon Water Quality Protocol",
        desc: "How to avoid dissolved oxygen crashes and sudden pH swings during heavy seasonal rains.",
        linkText: "Read Blog Post",
        href: "/insights/blogs",
      },
    },
  },
  {
    name: "Events",
    href: "/events",
    megaMenu: {
      category: "Conferences, Workshops & Training",
      columns: [
        {
          heading: "Industry Events",
          items: [
            {
              title: "Aqua Expo & Summits",
              desc: "Meet our executive team at national and global aqua expos.",
              href: "/events/expo",
              icon: FiCalendar,
            },
            {
              title: "Webinars & Online Tech Demos",
              desc: "Live digital workshops on IoT automation and water telemetry.",
              href: "/events/webinars",
              icon: FiActivity,
            },
          ],
        },
        {
          heading: "Community Engagements",
          items: [
            {
              title: "Farmer Training Workshops",
              desc: "Grassroots pond-side seminars and hands-on testing clinics.",
              href: "/events/workshops",
              icon: FiUsers,
            },
          ],
        },
      ],
      featured: {
        tag: "Upcoming",
        title: "National Smart Aquaculture Expo 2026",
        desc: "Join us this month at the International Convention City Bashundhara (ICCB) for live tech demos.",
        linkText: "Register for Event",
        href: "/events",
      },
    },
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Monitor scroll position to toggle transparent vs solid ThemeForest header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
        setIsSearchOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Desktop hover delay handlers for smooth user experience
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (name) => {
    setExpandedMobile((prev) => (prev === name ? null : name));
  };

  // Currently active mega-menu item
  const activeMegaItem = NAV_ITEMS.find(
    (item) => item.name === activeDropdown && item.megaMenu
  );

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 w-full select-none transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      {/* ======================================================== */}
      {/* TOP UTILITY BAR (Location, Email & Social Media)         */}
      {/* ======================================================== */}
      <div
        className={`w-full transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none border-b-0"
            : "max-h-12 opacity-100 translate-y-0 bg-black/25 backdrop-blur-xs text-white/90 "
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between text-[11px] sm:text-xs">
          {/* Left: Location & Email */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden text-white/85">
            <div className="flex items-center gap-1.5 truncate">
              <FiMapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate">{TOP_BAR_CONFIG.address}</span>
            </div>

            <span className="text-white/20 hidden sm:inline select-none">|</span>

            <a
              href={`mailto:${TOP_BAR_CONFIG.email}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors shrink-0"
            >
              <FiMail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Email: {TOP_BAR_CONFIG.email}</span>
            </a>
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 pl-2">
            <span className="text-white/60 hidden sm:inline font-normal">We Are Social:</span>
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/80">
              {TOP_BAR_CONFIG.socials.map((social, sIdx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={sIdx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="hover:text-sky-300 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16 lg:h-[72px]" : "h-20"
            }`}
          >
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-lg py-1 shrink-0"
              aria-label="FishTech BD Home"
            >
              <div className="relative h-11 sm:h-12 w-auto aspect-[222/102] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="FishTech BD Logo"
                  width={222}
                  height={102}
                  priority
                  className={`h-full w-auto object-contain transition-all duration-300 ${
                    isScrolled
                      ? "brightness-100"
                      : "brightness-0 invert drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  }`}
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2"
            >
              {NAV_ITEMS.map((item) => {
                const hasMega = Boolean(item.megaMenu);
                const isOpen = activeDropdown === item.name;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasMega && handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasMega ? (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown((prev) =>
                            prev === item.name ? null : item.name
                          )
                        }
                        aria-expanded={isOpen}
                        className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold tracking-normal rounded-md transition-all duration-200 ${
                          isScrolled
                            ? isOpen
                              ? "text-[#004494] bg-blue-50 font-bold"
                              : "text-[#004494] hover:text-[#002d62] hover:bg-blue-50/80"
                            : isOpen
                              ? "text-sky-200 bg-white/15 font-bold"
                              : "text-white/95 hover:text-white hover:bg-white/15"
                        }`}
                      >
                        <span>{item.name}</span>
                        <FiChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          } ${
                            isScrolled
                              ? isOpen
                                ? "text-[#004494]"
                                : "text-[#004494]/70"
                              : isOpen
                                ? "text-sky-300"
                                : "text-white/70"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold tracking-normal rounded-md transition-all duration-200 ${
                          isScrolled
                            ? "text-[#004494] hover:text-[#002d62] hover:bg-blue-50/80"
                            : "text-white/95 hover:text-white hover:bg-white/15"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Items: Search & Get in Touch CTA */}
            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              {/* Search Button and Popover */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSearchOpen((prev) => !prev)}
                  aria-label="Search"
                  aria-expanded={isSearchOpen}
                  className={`w-9 h-9 xl:w-10 xl:h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] ${
                    isScrolled
                      ? "text-[#004494] hover:text-[#002d62] hover:bg-blue-50"
                      : "text-white/95 hover:text-white hover:bg-white/15"
                  }`}
                >
                  <FiSearch className="w-4 h-4 xl:w-5 xl:h-5" />
                </button>

                {/* Search Bar Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-2xl p-2.5 z-50 border border-slate-100">
                    <div className="flex items-center gap-2 bg-slate-50 rounded-md px-3 py-2 border border-slate-200 focus-within:border-[#004494] focus-within:ring-1 focus-within:ring-[#004494]">
                      <FiSearch className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search services, lab, species..."
                        className="w-full text-xs text-slate-800 placeholder-slate-400 bg-transparent outline-none"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="text-slate-400 hover:text-slate-600"
                        >
                          <FiX className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* GET IN TOUCH CTA Button */}
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider px-4 xl:px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap ${
                  isScrolled
                    ? "bg-[#004494] hover:bg-[#003370] text-white shadow-blue-900/15"
                    : "bg-[#0084d6] hover:bg-[#0073bc] text-white shadow-sky-500/20"
                }`}
              >
                Get In Touch
              </Link>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation drawer"
                aria-expanded={mobileOpen}
                className={`lg:hidden w-10 h-10 rounded-md flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] transition-colors ${
                  isScrolled
                    ? "text-[#004494] hover:bg-blue-50"
                    : "text-white hover:bg-white/15"
                }`}
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP FULL-WIDTH MEGA MENU (Container Anchored)        */}
      {/* ======================================================== */}
      {activeMegaItem && (
        <div
          onMouseEnter={() => handleMouseEnter(activeMegaItem.name)}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white shadow-xl border-t border-slate-100 z-50 text-slate-800 animate-fadeIn"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Category Columns */}
              <div className="col-span-8 grid grid-cols-2 gap-8 pr-4 border-r border-slate-100">
                {activeMegaItem.megaMenu.columns.map((col, cIdx) => (
                  <div key={cIdx} className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <span className="w-2 h-2 rounded-full bg-[#004494]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#004494]">
                        {col.heading}
                      </h4>
                    </div>

                    <div className="space-y-2">
                      {col.items.map((sub, sIdx) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3.5 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="mt-0.5 p-2 rounded-md bg-sky-50 text-[#004494] group-hover:bg-[#004494] group-hover:text-white transition-all shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 group-hover:text-[#004494] transition-colors">
                                {sub.title}
                              </div>
                              <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                                {sub.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side Featured Card */}
              <div className="col-span-4 bg-gradient-to-br from-slate-50 to-sky-50/50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-sky-100 text-[#004494]">
                    {activeMegaItem.megaMenu.featured.tag}
                  </span>
                  <h5 className="font-bold text-slate-900 mt-3 text-sm leading-snug">
                    {activeMegaItem.megaMenu.featured.title}
                  </h5>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {activeMegaItem.megaMenu.featured.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={activeMegaItem.megaMenu.featured.href}
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#004494] hover:text-sky-700 group bg-white px-4 py-2.5 rounded-md border border-slate-200/80 shadow-xs hover:shadow-sm transition-all"
                  >
                    <span>{activeMegaItem.megaMenu.featured.linkText}</span>
                    <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE RESPONSIVE DRAWER (Left-to-Right Slide-in)        */}
      {/* ======================================================== */}

      {/* Backdrop overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel */}
      <aside
        aria-label="Mobile Navigation"
        className={`fixed top-0 left-0 bottom-0 w-[88%] max-w-sm bg-[#00387a] text-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-white/10 shrink-0">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center group"
            aria-label="FishTech BD Home"
          >
            <div className="relative h-10 w-auto aspect-[222/102] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="FishTech BD Logo"
                width={222}
                height={102}
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu drawer"
            className="w-9 h-9 rounded-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Search */}
        <div className="p-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-white placeholder-white/50 border border-white/10 focus-within:border-sky-300">
            <FiSearch className="w-4 h-4 text-sky-200/70 shrink-0" />
            <input
              type="text"
              placeholder="Search services, species, R&D..."
              className="w-full text-xs bg-transparent outline-none text-white placeholder-white/60"
            />
          </div>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const hasMega = Boolean(item.megaMenu);
            const isExpanded = expandedMobile === item.name;

            return (
              <div key={item.name} className="border-b border-white/5 last:border-b-0">
                {hasMega ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.name)}
                      aria-expanded={isExpanded}
                      className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.name}</span>
                      </span>
                      <FiChevronDown
                        className={`w-4 h-4 text-sky-300 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion Content */}
                    {isExpanded && (
                      <div className="pl-3 pr-1 pb-3 pt-1 space-y-2">
                        {item.megaMenu.columns.map((col, cIdx) => (
                          <div key={cIdx} className="pt-2 first:pt-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 px-3 block mb-1">
                              {col.heading}
                            </span>
                            <div className="space-y-1">
                              {col.items.map((sub, sIdx) => {
                                const Icon = sub.icon;
                                return (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2.5 px-3 py-2 rounded-md text-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                  >
                                    <Icon className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                                    <span>{sub.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.name === "Home" && (
                      <FiHome className="w-4 h-4 text-sky-300" />
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-white/10 shrink-0 bg-[#002f66] space-y-3">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#0084d6] hover:bg-[#0073bc] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md transition-colors"
          >
            <span>Get In Touch</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center justify-center gap-2 text-xs text-sky-200/80">
            <FiPhone className="w-3.5 h-3.5 text-sky-300" />
            <span>Hotline: +880 1700-000000</span>
          </div>

          {/* Drawer Social & Contact Info */}
          <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] text-sky-100/80">
            <div className="flex items-center gap-2">
              <FiMapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" />
              <span className="truncate">{TOP_BAR_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="w-3.5 h-3.5 text-sky-300 shrink-0" />
              <a href={`mailto:${TOP_BAR_CONFIG.email}`} className="hover:text-white truncate">
                {TOP_BAR_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] uppercase tracking-wider text-sky-300/80 font-semibold">
                Follow Us:
              </span>
              <div className="flex items-center gap-3 text-white/90">
                {TOP_BAR_CONFIG.socials.map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="hover:text-sky-300 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
