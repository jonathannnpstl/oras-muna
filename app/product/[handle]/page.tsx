import ProductShowcase from "@/components/product-showcase";
import { ProductShowcaseSkeleton } from "@/components/skeleton";
import { fetchProduct } from "@/lib/api/data";
import React, { Suspense } from "react";
export default async function Page({ params }: { params: { handle: string } }) {
  console.log(params.handle);

  const product = await fetchProduct(params.handle);
  return (
    <>
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <div className="mt-[72px]">
          <ProductShowcase product={product} />
        </div>
      </Suspense>
    </>
  );
}
