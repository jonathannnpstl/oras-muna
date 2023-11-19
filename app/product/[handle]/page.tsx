import ProductShowcase from "@/components/product-showcase";
import { ProductShowcaseSkeleton } from "@/components/skeleton";
import React, { Suspense } from "react";
export default async function Page({ params }: { params: { handle: string } }) {
  return (
    <>
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <ProductShowcase />
        <p>{params.handle}</p>
      </Suspense>
      <ProductShowcaseSkeleton />
    </>
  );
}
