import ProductsContent from "@/components/products-content";
import React, { Suspense } from "react";
import { fetchProducts } from "@/lib/api/data";
import { sorting, defaultSort } from "@/lib/constants";
import Sort from "@/components/filter/sort";
import { CardsSkeleton } from "@/components/skeleton";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, query: searchValue } = searchParams as {
    [key: string]: string;
  };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const data = {
    query: searchValue ? searchValue : "",
    sortKey,
    reverse,
  };

  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <ProductsContent q={data} />
      </Suspense>
    </>
  );
}
