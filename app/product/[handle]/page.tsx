import ProductShowcase from "@/components/product-showcase";
import { ProductShowcaseSkeleton } from "@/components/skeleton";
import React, { Suspense } from "react";
import { fetchProducts } from "@/lib/api/data";
export default async function Page({ params }: { params: { handle: string } }) {
  const product = await fetchProducts();

  return (
    <>
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <ProductShowcase product={product} />
        <p>{params.handle}</p>
      </Suspense>
      <ProductShowcaseSkeleton />
    </>
  );
}
