import Banner from "@/components/banner";
import ProductsContent from "@/components/products-content";
import ProductsFetured from "@/components/products-featured";
import { CardsSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Banner />
        <ProductsFetured />
      </Suspense>
      {/* <CardsSkeleton /> */}
    </>
  );
}
