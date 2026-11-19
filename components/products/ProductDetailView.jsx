"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Truck,
  PhoneCall,
  MessageSquare,
  Sparkles,
  FileText,
  ChevronRight,
  Package,
  Share2,
  Check,
  Send,
  X,
} from "lucide-react";

export default function ProductDetailView({ product, relatedProducts = [] }) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    quantity: "1",
    note: "",
  });

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleDownloadSheet = () => {
    setIsDownloading(true);
    // Simulate generation/download of official technical data sheet
    setTimeout(() => {
      setIsDownloading(false);
      if (typeof window !== "undefined") {
        window.print();
      }
    }, 600);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const galleryImages = [
    { id: "main", src: product.image, label: "Product Pack" },
    { id: "service", src: "/images/service-aqua-medicine.jpg", label: "Lab Diagnostic" },
    { id: "farm", src: "/images/concerns/growtech-aquaculture.jpg", label: "Field Application" },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Fishtech BD Limited, I want to inquire/order ${product.name} for my farm.`
  );

  return (
    <div className="bg-[#F9FAFB] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* BREADCRUMB & BACK NAVIGATION                                    */}
        {/* ============================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#004494] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/services/products" className="hover:text-[#004494] transition-colors">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link
              href="/services/products/aqua-medicine"
              className="hover:text-[#004494] transition-colors"
            >
              Aqua Medicine
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-bold text-slate-800 truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>

          <Link
            href="/services/products/aqua-medicine"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-[#004494] bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* ============================================================== */}
        {/* 2-COLUMN PRODUCT SHOWCASE                                       */}
        {/* Left: Product Images & Trust Assurance                          */}
        {/* Right: Category, Title, Intro Box, Specifications Table & Actions*/}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ========================================================== */}
            {/* LEFT COLUMN: Image Gallery & Quality Badges                */}
            {/* ========================================================== */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
              {/* Main Product Image Container */}
              <div className="relative aspect-square w-full rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80 p-6 sm:p-10 flex items-center justify-center overflow-hidden group">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Left Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  {product.badge && (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[#004494] px-2.5 py-1 text-xs font-bold text-white shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      {product.badge}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-2xs">
                    <CheckCircle2 className="h-3 w-3" />
                    Biosecure Certified
                  </span>
                </div>

                {/* Top Right Share Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share product"
                  className="absolute top-4 right-4 rounded-xl bg-white/90 p-2 text-slate-500 hover:text-[#004494] shadow-xs backdrop-blur-xs transition-colors border border-slate-200/60 cursor-pointer"
                  title="Copy link to clipboard"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Share2 className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Thumbnail Gallery Strip */}
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {galleryImages.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImage(img.src)}
                    className={`relative h-20 w-20 shrink-0 rounded-2xl border-2 p-1.5 bg-slate-50 overflow-hidden transition-all cursor-pointer ${
                      selectedImage === img.src
                        ? "border-[#0084d6] shadow-sm ring-2 ring-sky-100"
                        : "border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>

             
            </div>

            {/* ========================================================== */}
            {/* RIGHT COLUMN: Matching Exact Reference Specifications UI   */}
            {/* ========================================================== */}
            <div className="lg:col-span-7 space-y-5">
              {/* 1. Category Eyebrow (All Caps) */}
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  {product.categoryLabel?.toUpperCase() || "AQUACULTURE"}
                </span>

                {/* 2. Product Title */}
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                  {product.name}
                </h1>
                {product.bengaliName && (
                  <span className="text-sm font-normal text-slate-500 mt-0.5 block">
                    {product.bengaliName}
                  </span>
                )}
              </div>

              {/* 3. Intro Callout Box */}
              <div className="rounded-xl bg-[#004494]/5 border-l-4 border-[#004494] p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-2xs">
                {product.introBox || product.indication}
              </div>

              {/* 4. Section Heading: Specifications */}
              <div className="pt-2 flex items-center gap-2">
                <span className="w-1.5 h-4.5 bg-[#004494] rounded-full inline-block" />
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  Specifications
                </h2>
              </div>

              {/* 5. Specifications Table Card (Exact Rows from Reference Image) */}
              <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden text-xs sm:text-[13px] divide-y divide-slate-100 shadow-2xs">
                {/* COMPOSITION */}
                <div className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-2 sm:gap-4 bg-white">
                  <div className="sm:col-span-4 font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:text-xs">
                    COMPOSITION
                  </div>
                  <div className="sm:col-span-8 text-slate-800 leading-relaxed">
                    {product.composition}
                  </div>
                </div>

                {/* DOSAGE */}
                <div className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-2 sm:gap-4 bg-white">
                  <div className="sm:col-span-4 font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:text-xs">
                    DOSAGE
                  </div>
                  <div className="sm:col-span-8 text-slate-800 leading-relaxed space-y-2">
                    {product.dosageBreakdown && product.dosageBreakdown.length > 0 ? (
                      product.dosageBreakdown.map((item, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <span className="font-bold text-slate-900 block">{item.title}:</span>
                          <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                            {item.instruction}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="whitespace-pre-line text-slate-700 leading-relaxed">
                        {product.dosage}
                      </p>
                    )}
                  </div>
                </div>

                {/* DIRECTIONS FOR USE */}
                <div className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-2 sm:gap-4 bg-white">
                  <div className="sm:col-span-4 font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:text-xs">
                    DIRECTIONS FOR USE
                  </div>
                  <div className="sm:col-span-8 text-slate-800 leading-relaxed">
                    {product.directionsForUse || product.indication}
                  </div>
                </div>

                {/* STORAGE */}
                <div className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-2 sm:gap-4 bg-white">
                  <div className="sm:col-span-4 font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:text-xs">
                    STORAGE
                  </div>
                  <div className="sm:col-span-8 text-slate-800 leading-relaxed">
                    {product.storage || "Store in a cool & dry place, away from direct sunlight."}
                  </div>
                </div>

                {/* PACK SIZE */}
                <div className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-2 sm:gap-4 bg-white">
                  <div className="sm:col-span-4 font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:text-xs">
                    PACK SIZE
                  </div>
                  <div className="sm:col-span-8 text-slate-800 font-medium">
                    {product.packSizeText || product.packSize || "100 ml, 500 ml, 1 liter, 5 liter"}
                  </div>
                </div>
              </div>

              {/* 6. Action Buttons Matching Reference Design */}
              <div className="space-y-3 pt-2">
                {/* Download Product Sheet Button */}
                <button
                  type="button"
                  onClick={handleDownloadSheet}
                  disabled={isDownloading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B192C] hover:bg-[#1B2A41] text-white py-3.5 px-6 text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer active:scale-99"
                >
                  <FileText className="h-4 w-4" />
                  <span>
                    {isDownloading ? "Preparing Product Sheet..." : "Download Product Sheet"}
                  </span>
                </button>

                {/* Booking & WhatsApp Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsInquiryModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004494] to-[#0084d6] py-3 px-4 text-xs font-bold text-white shadow-md hover:from-[#003878] hover:to-[#0070b8] transition-all cursor-pointer"
                  >
                    <Package className="h-4 w-4" />
                    <span>Book / Inquire for Supply</span>
                  </button>

                  <a
                    href={`https://wa.me/8801700000000?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-3 px-4 text-xs font-bold text-white shadow-md transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>

                {/* Questions? Contact support (Matching Reference) */}
                <p className="text-center text-xs text-slate-500 pt-1">
                  Questions?{" "}
                  <Link
                    href="/contact"
                    className="font-bold text-slate-800 hover:text-[#004494] underline underline-offset-2 transition-colors"
                  >
                    Contact support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* RELATED PRODUCTS SECTION ("You May Also Need")                 */}
        {/* ============================================================== */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Formulations & Products
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Complementary solutions for your pond health, biosecurity, and aquaculture vitality.
                </p>
              </div>

              <Link
                href="/services/products/aqua-medicine"
                className="text-xs font-bold text-sky-700 hover:text-[#004494] transition-colors"
              >
                View Catalog &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/products/aqua-medicine/${rel.id}`}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0084d6] hover:shadow-xl hover:shadow-sky-950/10 cursor-pointer"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl bg-slate-50 p-3 flex items-center justify-center overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 640px) 45vw, 240px"
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                      {rel.badge && (
                        <span className="absolute top-2 left-2 rounded-md bg-[#004494] px-1.5 py-0.5 text-[9px] font-bold text-white shadow-2xs">
                          {rel.badge}
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="mt-3 space-y-1">
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#004494] transition-colors line-clamp-1">
                        {rel.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{rel.type}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#004494] bg-[#004494]/10 px-2 py-0.5 rounded-md">
                      {rel.categoryLabel}
                    </span>
                    <span className="text-[11px] font-bold text-sky-600 group-hover:translate-x-0.5 transition-transform">
                      View &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* SUPPLY / BOOKING INQUIRY MODAL                                 */}
      {/* ============================================================== */}
      {isInquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsInquiryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Supply Booking & Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fishtech BD Commercial Delivery Network
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsInquiryModalOpen(false);
                  setInquirySubmitted(false);
                }}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you! Our regional technical officer will contact you within 2 business hours regarding {product.name}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsInquiryModalOpen(false);
                    setInquirySubmitted(false);
                  }}
                  className="rounded-xl bg-[#004494] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#003370] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="mt-5 space-y-4">
                {/* Product Summary Chip */}
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 border border-slate-200/80">
                  <div className="relative h-12 w-12 rounded-xl bg-white p-1 border border-slate-100 shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs flex-1 min-w-0">
                    <strong className="block text-slate-900 font-extrabold truncate">
                      {product.name}
                    </strong>
                    <span className="text-slate-500">
                      {product.type} • {product.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    Your Name / Farm Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Md. Tariqul Islam / Sundarban Agro"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-sky-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XXXXXXXX"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-sky-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      District / Upazila *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="e.g. Khulna, Paikgachha"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-sky-100"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    Farm Type / Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Provide pond area, target delivery date, or inquiry details..."
                    className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-800 outline-none focus:border-[#0084d6] focus:ring-1 focus:ring-sky-100 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004494] to-[#0084d6] py-3 text-xs font-bold text-white shadow-md hover:from-[#003878] hover:to-[#0070b8] transition-all cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Supply Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
