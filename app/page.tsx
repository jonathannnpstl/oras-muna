import Banner from "@/components/banner";
import ProductsContent from "@/components/products-content";
import { CardsSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Banner />
        <ProductsContent />
      </Suspense>
      {/* <CardsSkeleton /> */}
    </>
  );
}
