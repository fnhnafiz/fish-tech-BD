import React from "react";
import { notFound } from "next/navigation";
import {
  PRODUCTS_DATA,
  getProductById,
  getRelatedProducts,
} from "@/components/Data/productsData";
import ProductDetailView from "@/components/products/ProductDetailView";

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | Fishtech BD Limited",
      description: "Requested aquatic medicine product could not be found.",
    };
  }

  return {
    title: `${product.name} (${product.bengaliName || ""}) | Aqua Medicine | Fishtech BD Limited`,
    description: product.indication,
    openGraph: {
      title: `${product.name} | Fishtech BD Limited`,
      description: product.indication,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, product.category, 4);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
