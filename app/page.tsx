import Banner from "@/components/banner";
import ProductsFeatured from "@/components/products-featured";
import { CardsSkeleton, ProductShowcaseSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Banner />
        <ProductsFeatured />
      </Suspense>
      {/* <CardsSkeleton /> */}
    </>
  );
}
