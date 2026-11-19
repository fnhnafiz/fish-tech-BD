import React from "react";
import PageBanner from "@/components/common/PageBanner";
import ProductsCatalogSection from "@/components/products/ProductsCatalogSection";

export const metadata = {
  title: "Products & Aquaculture Formulations | Fishtech BD Limited",
  description:
    "Explore Fishtech BD's comprehensive portfolio of aquatic medicines, soil and water probiotics, dissolved oxygen boosters, toxic gas binders, and animal healthcare solutions across Bangladesh.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Top Reusable Page Banner */}
      <PageBanner
        title="Products"
        subtitle="Explore our comprehensive portfolio of scientifically validated aquatic medicines, soil & water probiotics, oxygen donors, and healthcare formulations engineered for maximum farm productivity."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Products" },
        ]}
        badge="AQUACULTURE PRODUCTS & FORMULATIONS"
        bgImage="/images/service-aqua-medicine.jpg"
      />

      {/* Main Responsive Products Catalog (Sidebar Filter + 2-Col Mobile / 3-Col Desktop Grid) */}
      <ProductsCatalogSection />
    </>
  );
}
