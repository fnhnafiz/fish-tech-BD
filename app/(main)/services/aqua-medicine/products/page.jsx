import React from "react";
import PageBanner from "@/components/common/PageBanner";
import ProductsCatalogSection from "@/components/products/ProductsCatalogSection";

export const metadata = {
  title: "Aqua Medicine Products & Formulations | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's comprehensive portfolio of aquatic medicines, soil and water probiotics, dissolved oxygen boosters, toxic gas binders, and animal healthcare solutions across Bangladesh.",
};

export default function AquaMedicineProductsPage() {
  return (
    <>
      {/* Top Reusable Page Banner */}
      <PageBanner
        title="Aqua Medicine Products"
        subtitle="Scientifically validated pond disinfectants, soil & water probiotics, oxygen boosters, toxic gas binders, and animal healthcare formulations engineered for maximum farm productivity."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Products", href: "/services/products" },
          { label: "Aqua Medicine" },
        ]}
        badge="BIOMEDICAL FORMULATIONS • QUALITY ASSURED"
        bgImage="/images/service-aqua-medicine.jpg"
      />

      {/* Main Responsive Products Catalog (Sidebar Filter + 2-Col Mobile / 3-Col Desktop Grid) */}
      <ProductsCatalogSection />
    </>
  );
}
