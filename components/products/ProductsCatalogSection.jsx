"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronRight,
  Fish,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Package,
  ShieldCheck,
  PhoneCall,
  ArrowUpDown,
  Layers,
  Droplets,
  HeartPulse,
  Eye,
  Info,
} from "lucide-react";
import { CATEGORIES_LIST, PRODUCTS_DATA } from "@/components/Data/productsData";

/**
 * Modern, Highly-Responsive Products Catalog Section
 * Features:
 * - Desktop: Sticky Left Filter Sidebar (Search & Categories with dynamic counts)
 * - Mobile: Responsive 2-Column Product Grid with Slide-Over Filter Drawer
 * - Interactive Quick-View Product Spec Modal
 * - Live Search & Category Filtering
 */
export default function ProductsCatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState("aquaculture");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Prevent background scroll when mobile filter drawer or quick view modal is open
  useEffect(() => {
    if (isMobileFilterOpen || quickViewProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFilterOpen, quickViewProduct]);

  // Compute live category counts based on full products dataset
  const categoryCounts = useMemo(() => {
    const counts = { all: PRODUCTS_DATA.length };
    PRODUCTS_DATA.forEach((prod) => {
      counts[prod.category] = (counts[prod.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS_DATA;

    // Filter by category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.bengaliName && p.bengaliName.includes(q)) ||
          p.type.toLowerCase().includes(q) ||
          p.indication.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Active Category Label
  const activeCategoryObj = useMemo(() => {
    return (
      CATEGORIES_LIST.find((c) => c.id === selectedCategory) || {
        id: "all",
        name: "All Products",
        count: PRODUCTS_DATA.length,
      }
    );
  }, [selectedCategory]);

  const handleResetFilters = () => {
    setSelectedCategory("aquaculture");
    setSearchQuery("");
    setSortBy("default");
  };

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#F9FAFB] min-h-[90vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header / Quick Filter Bar (Visible on mobile & tablet) */}
        <div className="lg:hidden mb-6 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
            {/* Filter Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-3.5 py-2 text-xs font-bold text-[#004494] border border-sky-100 hover:bg-sky-100 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter Categories</span>
              {selectedCategory !== "all" && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004494] text-[10px] text-white font-bold">
                  1
                </span>
              )}
            </button>

            {/* Total Results Count */}
            <span className="text-xs font-bold text-slate-600">
              {filteredProducts.length} Products
            </span>
          </div>

          {/* Quick Search on Mobile */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name or use..."
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-9 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-2xs outline-none focus:border-[#0084d6] focus:ring-2 focus:ring-sky-100"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Desktop Layout: 2-Column Split (Sidebar on Left, Product Grid on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================== */}
          {/* LEFT SIDEBAR: Filter Products (Desktop Sticky Sidebar)      */}
          {/* ========================================================== */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24 space-y-6">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-[#004494]" />
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                    Filter products
                  </h3>
                </div>

                {(selectedCategory !== "aquaculture" || searchQuery) && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-[#004494] transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* SEARCH BOX */}
              <div className="mt-5 space-y-2">
                <span className="block text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Search
                </span>
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Product name..."
                    className="w-full rounded-xl border border-slate-200/90 bg-slate-50/60 pl-10 pr-8 py-2.5 text-xs text-slate-800 placeholder-slate-400 transition-all outline-none focus:bg-white focus:border-[#0084d6] focus:ring-2 focus:ring-sky-100"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                      aria-label="Clear search"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Searches across all categories
                </p>
              </div>

              {/* CATEGORIES LIST */}
              <div className="mt-6 space-y-2">
                <span className="block text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Categories
                </span>
                <div className="space-y-1">
                  {CATEGORIES_LIST.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const count =
                      cat.id === "all"
                        ? PRODUCTS_DATA.length
                        : categoryCounts[cat.id] || cat.count;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`group relative flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-emerald-50/80 text-emerald-900 font-bold shadow-2xs border-l-4 border-emerald-600"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span
                            className={`flex h-5 min-w-[22px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                              isSelected
                                ? "bg-emerald-600 text-white"
                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}
                          >
                            {count}
                          </span>
                          {!isSelected && (
                            <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-500 transition-transform group-hover:translate-x-0.5" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Verified Quality Assurance Seal */}
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/60 p-4 border border-sky-100/80 text-center">
                <ShieldCheck className="h-7 w-7 text-[#004494] mx-auto mb-1.5" />
                <h4 className="text-xs font-bold text-[#004494]">
                  Fishtech Quality Assured
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  100% lab-tested and certified biosecure aquatic medicines & formulations.
                </p>
              </div>
            </div>
          </aside>

          {/* ========================================================== */}
          {/* RIGHT MAIN PANEL: Category Title & Product Grid            */}
          {/* ========================================================== */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-6">
            {/* Category Header Row (Matches reference: "Aquaculture" on left, "51 products" on right) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/90">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight flex items-center gap-2">
                  <span>{activeCategoryObj.name}</span>
                  {searchQuery && (
                    <span className="text-sm font-normal text-slate-400">
                      (filtered by &ldquo;{searchQuery}&rdquo;)
                    </span>
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Scientifically formulated solutions supporting healthy pond ecosystems and animal vitality.
                </p>
              </div>

              {/* Products Count and Sort Dropdown */}
              <div className="flex items-center gap-4">
                <span className="text-xs sm:text-sm font-bold text-slate-600 whitespace-nowrap">
                  {filteredProducts.length} products
                </span>

                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-sky-100 cursor-pointer"
                  >
                    <option value="default">Sort: Featured</option>
                    <option value="name-asc">Alphabetical: A-Z</option>
                    <option value="name-desc">Alphabetical: Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* PRODUCT GRID: 2 COLUMNS ON MOBILE, 3 COLUMNS ON DESKTOP    */}
            {/* (Full Responsive as requested: "product 2 column a dekhabe") */}
            {/* ========================================================== */}
            {filteredProducts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center space-y-3">
                <Search className="h-10 w-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-800">
                  No products matched your criteria
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try searching with different keywords or switch categories to explore our full product range.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-xs font-bold text-[#004494] hover:bg-sky-100 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Show All Aquaculture Products</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/services/aqua-medicine/products/${product.id}`}
                    className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6] hover:shadow-xl hover:shadow-sky-950/10 cursor-pointer"
                  >
                    <div>
                      {/* Product Image Frame */}
                      <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50/70 p-3 flex items-center justify-center transition-colors group-hover:bg-white">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Top-Right Pack Size Pill */}
                        {product.packSize && (
                          <span className="absolute top-2 right-2 rounded-md bg-white/90 border border-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 shadow-2xs backdrop-blur-xs">
                            {product.packSize.split(",")[0]}
                          </span>
                        )}

                        {/* Top-Left Badge (if any) */}
                        {product.badge && (
                          <span className="absolute top-2 left-2 rounded-md bg-[#004494] px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-white shadow-2xs">
                            {product.badge}
                          </span>
                        )}

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setQuickViewProduct(product);
                            }}
                            className="inline-flex items-center gap-1 rounded-xl bg-white/95 px-2.5 py-1.5 text-[11px] font-bold text-[#004494] shadow-md backdrop-blur-xs hover:bg-white"
                          >
                            <Eye className="h-3 w-3" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="mt-3 sm:mt-4 space-y-1">
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#004494] transition-colors line-clamp-1">
                          {product.name}
                        </h3>

                        <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1">
                          {product.type}
                        </p>
                      </div>
                    </div>

                    {/* Category Pill Tag & View Details Link */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-block rounded-md bg-emerald-50 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-700">
                        {product.categoryLabel}
                      </span>

                      <span className="text-[11px] font-bold text-[#004494] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        <span className="hidden sm:inline">Details</span>
                        <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MOBILE FILTER SLIDE-OVER DRAWER                            */}
      {/* ========================================================== */}
      {isMobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden flex"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-[#004494]" />
                <h3 className="text-sm font-extrabold text-slate-900">
                  Filter Products
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Search Inside Drawer */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Search Products
                </span>
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, composition..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-800 outline-none"
                  />
                </div>
              </div>

              {/* Categories Inside Drawer */}
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Select Category
                </span>
                <div className="space-y-1.5">
                  {CATEGORIES_LIST.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const count =
                      cat.id === "all"
                        ? PRODUCTS_DATA.length
                        : categoryCounts[cat.id] || cat.count;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-600"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={`flex h-5 items-center justify-center rounded-full px-2 text-[10px] font-bold ${
                            isSelected
                              ? "bg-emerald-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex-1 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 rounded-xl bg-gradient-to-r from-[#004494] to-[#0084d6] py-2.5 text-xs font-bold text-white shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* QUICK VIEW SPECIFICATION MODAL                             */}
      {/* ========================================================== */}
      {quickViewProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800">
                {quickViewProduct.categoryLabel}
              </span>
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Product Image Frame */}
              <div className="sm:col-span-5 relative aspect-square rounded-2xl bg-slate-50 p-4 border border-slate-100 flex items-center justify-center">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  sizes="240px"
                  className="object-contain p-2"
                />
              </div>

              {/* Product Overview */}
              <div className="sm:col-span-7 space-y-2.5">
                <h3
                  id="product-modal-title"
                  className="text-xl font-extrabold text-slate-900"
                >
                  {quickViewProduct.name}
                  {quickViewProduct.bengaliName && (
                    <span className="block text-sm font-normal text-slate-500 mt-0.5">
                      {quickViewProduct.bengaliName}
                    </span>
                  )}
                </h3>

                <p className="text-xs font-semibold text-[#004494]">
                  {quickViewProduct.type}
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-600 font-medium">
                    Pack: {quickViewProduct.packSize}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-600 font-medium">
                    Form: {quickViewProduct.form}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-600 pt-1">
                  {quickViewProduct.indication}
                </p>
              </div>
            </div>

            {/* Detailed Guidelines Box */}
            <div className="mt-6 rounded-2xl bg-slate-50/80 p-4 border border-slate-100 space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-800 block">
                  Recommended Dosage & Administration:
                </span>
                <p className="text-slate-600 mt-0.5">{quickViewProduct.dosage}</p>
              </div>

              {quickViewProduct.composition && (
                <div className="border-t border-slate-200/60 pt-2.5">
                  <span className="font-bold text-slate-800 block">
                    Active Formulation / Composition:
                  </span>
                  <p className="text-slate-600 mt-0.5">
                    {quickViewProduct.composition}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href={`/services/aqua-medicine/products/${quickViewProduct.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004494] to-[#0084d6] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:from-[#003370] hover:to-[#0070b8]"
              >
                <span>View Full Product Details &rarr;</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <span>Inquire</span>
              </Link>
              <a
                href="tel:+8801700000000"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#004494]" />
                <span className="hidden sm:inline">Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
