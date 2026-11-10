"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiArrowRight,
  FiHome,
  FiInfo,
  FiAward,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiSettings,
  FiPackage,
  FiBox,
  FiTarget,
  FiActivity,
  FiCpu,
  FiBookOpen,
  FiUserCheck,
  FiCalendar,
  FiEdit3,
  FiVideo,
  FiImage,
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
    icon: FiHome,
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      {
        title: "Overview",
        href: "/about/overview",
        icon: FiInfo,
      },
      {
        title: "Board of Directors",
        href: "/about/board-of-directors",
        icon: FiAward,
      },
      {
        title: "Team",
        href: "/about/team",
        icon: FiUsers,
      },
      {
        title: "Clients",
        href: "/about/clients",
        icon: FiBriefcase,
      },
      {
        title: "MoU (Memorandum of Understanding)",
        href: "/about/mou",
        icon: FiFileText,
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Aqua Medicine",
        href: "/services/aqua-medicine",
        icon: FiPackage,
        subItems: [
          {
            title: "Products",
            href: "/services/aqua-medicine/products",
            icon: FiBox,
          },
        ],
      },
      {
        title: "Technical Service",
        href: "/services/technical-service",
        icon: FiSettings,
      },
      {
        title: "CoE (Aquaculture Centre of Excellence)",
        href: "/services/coe",
        icon: FiTarget,
        subItems: [
          {
            title: "Mymensingh",
            href: "/services/coe/mymensingh",
            icon: FiMapPin,
          },
          {
            title: "Patuakhali",
            href: "/services/coe/patuakhali",
            icon: FiMapPin,
          },
          {
            title: "Cox’s Bazar",
            href: "/services/coe/coxs-bazar",
            icon: FiMapPin,
          },
        ],
      },
      {
        title: "Fishtech Laboratory",
        href: "/services/laboratory",
        icon: FiActivity,
      },
    ],
  },
  {
    name: "R & D",
    href: "/rd",
    dropdown: [
      {
        title: "Team",
        href: "/rd/team",
        icon: FiUsers,
      },
      {
        title: "Training & Seminars",
        href: "/rd/training-seminars",
        icon: FiCalendar,
      },
      {
        title: "Projects",
        href: "/rd/projects",
        icon: FiCpu,
      },
      {
        title: "Articles",
        href: "/rd/articles",
        icon: FiBookOpen,
      },
      {
        title: "Research Publications",
        href: "/rd/publications",
        icon: FiFileText,
      },
    ],
  },
  {
    name: "Career",
    href: "/career",
    icon: FiUserCheck,
  },
  {
    name: "Insights",
    href: "/insights",
    dropdown: [
      {
        title: "Blogs",
        href: "/insights/blogs",
        icon: FiEdit3,
      },
      {
        title: "Videos",
        href: "/insights/videos",
        icon: FiVideo,
      },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: FiImage,
  },
];

const toSlugId = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [expandedMobileSub, setExpandedMobileSub] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Monitor scroll position to toggle transparent vs solid ThemeForest header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
        setActiveSubDropdown(null);
        setIsSearchOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAllDesktopMenus = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Desktop hover delay handlers for smooth user experience
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (activeDropdown !== name) {
      setActiveSubDropdown(null);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (name) => {
    setExpandedMobile((prev) => (prev === name ? null : name));
    setExpandedMobileSub(null);
  };

  const toggleMobileSubAccordion = (title) => {
    setExpandedMobileSub((prev) => (prev === title ? null : title));
  };

  const isRouteActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
            : "max-h-12 opacity-100 translate-y-0 bg-black/25 backdrop-blur-xs text-white/90 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between text-[11px] sm:text-xs">
          {/* Left: Location & Email */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden text-white/85">
            <div className="flex items-center gap-1.5 truncate">
              <FiMapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{TOP_BAR_CONFIG.address}</span>
            </div>

            <span className="text-white/20 hidden sm:inline select-none" aria-hidden="true">
              |
            </span>

            <a
              href={`mailto:${TOP_BAR_CONFIG.email}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors shrink-0"
            >
              <FiMail className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
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
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
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

            {/* Desktop Navigation Links (Dropdowns with Nested Submenus) */}
            <nav aria-label="Main Navigation" className="hidden lg:block">
              <ul className="flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2">
                {NAV_ITEMS.map((item) => {
                  const hasDropdown = Boolean(item.dropdown?.length);
                  const isOpen = activeDropdown === item.name;
                  const isActive = isRouteActive(item.href);
                  const dropdownId = `nav-dropdown-${toSlugId(item.name)}`;

                  return (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                      onMouseLeave={() => hasDropdown && handleMouseLeave()}
                      onBlur={(e) => {
                        if (
                          e.relatedTarget &&
                          !e.currentTarget.contains(e.relatedTarget)
                        ) {
                          setActiveDropdown((prev) =>
                            prev === item.name ? null : prev
                          );
                          setActiveSubDropdown(null);
                        }
                      }}
                    >
                      {hasDropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveDropdown((prev) =>
                                prev === item.name ? null : item.name
                              );
                              setActiveSubDropdown(null);
                            }}
                            aria-expanded={isOpen}
                            aria-controls={dropdownId}
                            className={`relative flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold tracking-normal rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084d6] ${
                              isScrolled
                                ? isOpen || isActive
                                  ? "text-[#004494] bg-blue-50 font-bold"
                                  : "text-[#004494] hover:text-[#002d62] hover:bg-blue-50/80"
                                : isOpen || isActive
                                  ? "text-sky-200 bg-white/15 font-bold"
                                  : "text-white/95 hover:text-white hover:bg-white/15"
                            }`}
                          >
                            <span>{item.name}</span>
                            <FiChevronDown
                              aria-hidden="true"
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              } ${
                                isScrolled
                                  ? isOpen || isActive
                                    ? "text-[#004494]"
                                    : "text-[#004494]/70"
                                  : isOpen || isActive
                                    ? "text-sky-300"
                                    : "text-white/75"
                              }`}
                            />
                            {isActive && (
                              <span
                                aria-hidden="true"
                                className={`absolute left-3 right-3 bottom-0.5 h-0.5 rounded-full ${
                                  isScrolled ? "bg-[#004494]" : "bg-sky-300"
                                }`}
                              />
                            )}
                          </button>

                          {/* Compact ThemeForest-Style Dropdown Panel */}
                          <div
                            id={dropdownId}
                            className={`absolute top-full left-0 pt-2.5 z-50 transition-all duration-150 ease-out motion-reduce:transition-none ${
                              isOpen
                                ? "opacity-100 translate-y-0 visible pointer-events-auto"
                                : "opacity-0 translate-y-2 invisible pointer-events-none"
                            }`}
                          >
                            <ul className="min-w-[260px] w-max max-w-[330px] bg-white rounded-xl shadow-[0_18px_45px_-12px_rgba(0,28,68,0.22)] border border-slate-100 border-t-2 border-t-[#004494] py-2 text-slate-800">
                              {item.dropdown.map((sub) => {
                                const SubIcon = sub.icon;
                                const hasSubItems = Boolean(sub.subItems?.length);
                                const isSubOpen = activeSubDropdown === sub.title;
                                const isSubActive = isRouteActive(sub.href);
                                const subMenuId = `nav-submenu-${toSlugId(sub.title)}`;

                                return (
                                  <li
                                    key={sub.title}
                                    className="relative px-1.5"
                                    onMouseEnter={() => {
                                      if (hasSubItems) {
                                        setActiveSubDropdown(sub.title);
                                      } else {
                                        setActiveSubDropdown(null);
                                      }
                                    }}
                                  >
                                    {hasSubItems ? (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            setActiveSubDropdown((prev) =>
                                              prev === sub.title ? null : sub.title
                                            )
                                          }
                                          aria-expanded={isSubOpen}
                                          aria-controls={subMenuId}
                                          className={`group/item w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left text-[13px] font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] ${
                                            isSubOpen || isSubActive
                                              ? "bg-blue-50/90 text-[#004494]"
                                              : "text-slate-700 hover:bg-blue-50/80 hover:text-[#004494]"
                                          }`}
                                        >
                                          <span className="flex items-center gap-2.5">
                                            <span
                                              className={`p-1.5 rounded-md transition-colors shrink-0 ${
                                                isSubOpen || isSubActive
                                                  ? "bg-[#004494] text-white"
                                                  : "bg-sky-50 text-[#004494] group-hover/item:bg-[#004494] group-hover/item:text-white"
                                              }`}
                                            >
                                              <SubIcon
                                                className="w-3.5 h-3.5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                            <span>{sub.title}</span>
                                          </span>
                                          <FiChevronRight
                                            aria-hidden="true"
                                            className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                                              isSubOpen
                                                ? "translate-x-0.5 text-[#004494]"
                                                : "text-slate-400 group-hover/item:text-[#004494]"
                                            }`}
                                          />
                                        </button>

                                        {/* Level-2 Nested Flyout Submenu */}
                                        <div
                                          id={subMenuId}
                                          className={`absolute left-full top-0 pl-2 z-50 transition-all duration-150 ease-out motion-reduce:transition-none ${
                                            isSubOpen
                                              ? "opacity-100 translate-x-0 visible pointer-events-auto"
                                              : "opacity-0 -translate-x-1 invisible pointer-events-none"
                                          }`}
                                        >
                                          <ul className="min-w-[205px] w-max bg-white rounded-xl shadow-[0_18px_45px_-12px_rgba(0,28,68,0.22)] border border-slate-100 border-l-2 border-l-[#0084d6] py-2">
                                            {sub.subItems.map((nested) => {
                                              const NestedIcon = nested.icon;
                                              const isNestedActive =
                                                pathname === nested.href;

                                              return (
                                                <li key={nested.title} className="px-1.5">
                                                  <Link
                                                    href={nested.href}
                                                    onClick={closeAllDesktopMenus}
                                                    aria-current={
                                                      isNestedActive ? "page" : undefined
                                                    }
                                                    className={`group/nested flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] ${
                                                      isNestedActive
                                                        ? "bg-blue-50 text-[#004494] font-semibold border-l-2 border-[#004494]"
                                                        : "text-slate-700 hover:bg-blue-50/80 hover:text-[#004494]"
                                                    }`}
                                                  >
                                                    <NestedIcon
                                                      aria-hidden="true"
                                                      className={`w-3.5 h-3.5 shrink-0 ${
                                                        isNestedActive
                                                          ? "text-[#004494]"
                                                          : "text-[#0084d6] group-hover/nested:text-[#004494]"
                                                      }`}
                                                    />
                                                    <span>{nested.title}</span>
                                                  </Link>
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        </div>
                                      </>
                                    ) : (
                                      <Link
                                        href={sub.href}
                                        onClick={closeAllDesktopMenus}
                                        aria-current={
                                          pathname === sub.href ? "page" : undefined
                                        }
                                        className={`group/item flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004494] ${
                                          pathname === sub.href
                                            ? "bg-blue-50 text-[#004494] border-l-2 border-[#004494]"
                                            : "text-slate-700 hover:bg-blue-50/80 hover:text-[#004494]"
                                        }`}
                                      >
                                        <span
                                          className={`p-1.5 rounded-md transition-colors shrink-0 ${
                                            pathname === sub.href
                                              ? "bg-[#004494] text-white"
                                              : "bg-sky-50 text-[#004494] group-hover/item:bg-[#004494] group-hover/item:text-white"
                                          }`}
                                        >
                                          <SubIcon
                                            className="w-3.5 h-3.5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                        <span>{sub.title}</span>
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={`relative inline-flex items-center px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold tracking-normal rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084d6] ${
                            isScrolled
                              ? isActive
                                ? "text-[#004494] bg-blue-50 font-bold"
                                : "text-[#004494] hover:text-[#002d62] hover:bg-blue-50/80"
                              : isActive
                                ? "text-sky-200 bg-white/15 font-bold"
                                : "text-white/95 hover:text-white hover:bg-white/15"
                          }`}
                        >
                          <span>{item.name}</span>
                          {isActive && (
                            <span
                              aria-hidden="true"
                              className={`absolute left-3 right-3 bottom-0.5 h-0.5 rounded-full ${
                                isScrolled ? "bg-[#004494]" : "bg-sky-300"
                              }`}
                            />
                          )}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
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
                  <FiSearch className="w-4 h-4 xl:w-5 xl:h-5" aria-hidden="true" />
                </button>

                {/* Search Bar Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-2xl p-2.5 z-50 border border-slate-100">
                    <div className="flex items-center gap-2 bg-slate-50 rounded-md px-3 py-2 border border-slate-200 focus-within:border-[#004494] focus-within:ring-1 focus-within:ring-[#004494]">
                      <FiSearch className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
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
                          aria-label="Clear search"
                          className="text-slate-400 hover:text-slate-600"
                        >
                          <FiX className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Get in Touch CTA Button */}
              <Link
                href="/contact"
                aria-current={pathname === "/contact" ? "page" : undefined}
                className={`hidden sm:inline-flex items-center justify-center font-bold text-xs tracking-wider uppercase px-4 xl:px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap ${
                  isScrolled
                    ? "bg-[#004494] hover:bg-[#003370] text-white shadow-blue-900/15"
                    : "bg-[#0084d6] hover:bg-[#0073bc] text-white shadow-sky-500/20"
                }`}
              >
                Get in Touch
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
                <FiMenu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

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
            <FiX className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Search */}
        <div className="p-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-white placeholder-white/50 border border-white/10 focus-within:border-sky-300">
            <FiSearch className="w-4 h-4 text-sky-200/70 shrink-0" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search services, species, R&D..."
              className="w-full text-xs bg-transparent outline-none text-white placeholder-white/60"
            />
          </div>
        </div>

        {/* Drawer Navigation Links */}
        <nav aria-label="Mobile Navigation Links" className="flex-1 overflow-y-auto px-4 py-3">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.dropdown?.length);
              const isExpanded = expandedMobile === item.name;
              const isActive = isRouteActive(item.href);
              const DirectIcon = item.icon;

              return (
                <li
                  key={item.name}
                  className="border-b border-white/5 last:border-b-0"
                >
                  {hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.name)}
                        aria-expanded={isExpanded}
                        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold transition-colors ${
                          isExpanded || isActive
                            ? "text-white bg-white/10"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <span>{item.name}</span>
                        <FiChevronDown
                          aria-hidden="true"
                          className={`w-4 h-4 text-sky-300 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Level-1 Accordion Content */}
                      {isExpanded && (
                        <ul className="pl-2 pr-1 pb-3 pt-1.5 space-y-1">
                          {item.dropdown.map((sub) => {
                            const SubIcon = sub.icon;
                            const hasSubItems = Boolean(sub.subItems?.length);
                            const isSubExpanded = expandedMobileSub === sub.title;

                            return (
                              <li key={sub.title}>
                                {hasSubItems ? (
                                  <div>
                                    <button
                                      type="button"
                                      onClick={() => toggleMobileSubAccordion(sub.title)}
                                      aria-expanded={isSubExpanded}
                                      className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-xs font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                      <span className="flex items-center gap-2.5 text-left">
                                        <SubIcon
                                          aria-hidden="true"
                                          className="w-3.5 h-3.5 text-sky-300 shrink-0"
                                        />
                                        <span>{sub.title}</span>
                                      </span>
                                      <FiChevronDown
                                        aria-hidden="true"
                                        className={`w-3.5 h-3.5 text-sky-300 shrink-0 transition-transform duration-200 ${
                                          isSubExpanded ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>

                                    {/* Level-2 Nested Accordion Content */}
                                    {isSubExpanded && (
                                      <ul className="ml-5 pl-3 border-l border-sky-300/25 py-1 space-y-1">
                                        {sub.subItems.map((nested) => {
                                          const NestedIcon = nested.icon;
                                          const isNestedActive = pathname === nested.href;

                                          return (
                                            <li key={nested.title}>
                                              <Link
                                                href={nested.href}
                                                onClick={() => setMobileOpen(false)}
                                                aria-current={
                                                  isNestedActive ? "page" : undefined
                                                }
                                                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                                                  isNestedActive
                                                    ? "text-white bg-white/15 font-semibold"
                                                    : "text-sky-100/80 hover:text-white hover:bg-white/10"
                                                }`}
                                              >
                                                <NestedIcon
                                                  aria-hidden="true"
                                                  className="w-3 h-3 text-sky-300 shrink-0"
                                                />
                                                <span>{nested.title}</span>
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    aria-current={
                                      pathname === sub.href ? "page" : undefined
                                    }
                                    className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs transition-colors ${
                                      pathname === sub.href
                                        ? "text-white bg-white/15 font-semibold"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`}
                                  >
                                    <SubIcon
                                      aria-hidden="true"
                                      className="w-3.5 h-3.5 text-sky-300 shrink-0"
                                    />
                                    <span>{sub.title}</span>
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-white bg-white/15 border-l-2 border-sky-300"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      {DirectIcon && (
                        <DirectIcon
                          aria-hidden="true"
                          className="w-4 h-4 text-sky-300"
                        />
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-white/10 shrink-0 bg-[#002f66] space-y-3">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#0084d6] hover:bg-[#0073bc] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md transition-colors"
          >
            <span>Get in Touch</span>
            <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <div className="flex items-center justify-center gap-2 text-xs text-sky-200/80">
            <FiPhone className="w-3.5 h-3.5 text-sky-300" aria-hidden="true" />
            <span>Hotline: +880 1700-000000</span>
          </div>

          {/* Drawer Social & Contact Info */}
          <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] text-sky-100/80">
            <div className="flex items-center gap-2">
              <FiMapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" aria-hidden="true" />
              <span className="truncate">{TOP_BAR_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="w-3.5 h-3.5 text-sky-300 shrink-0" aria-hidden="true" />
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
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
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
