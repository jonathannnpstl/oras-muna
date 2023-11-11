import Filter from "@/components/filter";
import ProductsContent from "@/components/products-content";
import { CardsSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <ProductsContent />
      </Suspense>
    </>
  );
}
