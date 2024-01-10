import Banner from "@/components/banner";
import ProductsFeatured from "@/components/products-featured";
import { CardsSkeleton, ProductShowcaseSkeleton } from "@/components/skeleton";
import { getFiltersList } from "@/lib/redux/features/filterSlice";
import { useAppStore } from "@/lib/redux/hooks";
import { Suspense, useEffect } from "react";

export default async function Home() {
  const store = useAppStore();
  useEffect(() => {
    store.dispatch(getFiltersList());
  }, []);
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Banner />
        {/* <ProductsFeatured /> */}
      </Suspense>
      {/* <CardsSkeleton /> */}
    </>
  );
}
