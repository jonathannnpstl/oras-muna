import Banner from "@/components/banner";
import ProductsFeatured from "@/components/products-featured";
import { CardsSkeleton } from "@/components/skeleton";
import { Suspense } from "react";
import { fetchProducts } from "@/lib/api/data";

export default async function Home() {
  const products = await fetchProducts({ query: "" });

  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Banner />
        <ProductsFeatured products={products} />
      </Suspense>
      {/* <CardsSkeleton /> */}
    </>
  );
}
