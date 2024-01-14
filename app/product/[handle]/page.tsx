import ProductShowcase from "@/components/product-showcase";
import { ProductShowcaseSkeleton } from "@/components/skeleton";
import { fetchProduct, getRandomProducts } from "@/lib/api/data";
import React, { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {
  const product = await fetchProduct(params.handle);
  const suggestedProducts = await getRandomProducts(params.handle);
  return (
    <>
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <div className="mt-[72px]">
          <ProductShowcase
            product={product}
            suggestedProducts={suggestedProducts}
          />
        </div>
      </Suspense>
    </>
  );
}
