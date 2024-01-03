import ProductsContent from "@/components/products-content";
import React, { Suspense } from "react";
import { transformStringUpper } from "@/lib/utils";
import Sort from "@/components/filter/sort";
import { defaultSort, sorting } from "@/lib/constants";
import { ProductShowcaseSkeleton } from "@/components/skeleton";

export default async function BrandPage({
  params,
  searchParams,
}: {
  params: { brand: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, query: searchValue } = searchParams as {
    [key: string]: string;
  };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const q = {
    query: searchValue ? searchValue : "",
    sortKey,
    reverse,
    brand: transformStringUpper(params.brand),
  };
  console.log(q);

  return (
    <>
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <ProductsContent q={q} />
      </Suspense>
    </>
  );
}
