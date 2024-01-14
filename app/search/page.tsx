import ProductsContent from "@/components/products-content";
import React, { Suspense } from "react";
import { sorting, defaultSort } from "@/lib/constants";
import Sort from "@/components/filter/sort";
import { transformStringUpper } from "@/lib/utils";
import { getFilters } from "@/lib/api/data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const {
    sort,
    query: searchValue,
    page,
    caseMaterial,
    bandColor,
    dialColor,
    brand,
  } = searchParams as {
    [key: string]: string;
  };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const q = {
    query: searchValue ? searchValue : "",
    sortKey,
    reverse,
    brand,
    page,
    caseMaterial,
    bandColor,
    dialColor,
  };

  return (
    <>
      <div className="w-full order-last min-h-screen md:order-none my-24 px-6">
        <Suspense key={searchValue}>
          <ProductsContent q={q} />
        </Suspense>
      </div>
    </>
  );
}
