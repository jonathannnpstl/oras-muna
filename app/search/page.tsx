import ProductsContent from "@/components/products-content";
import React, { Suspense } from "react";
import { sorting, defaultSort } from "@/lib/constants";
import Sort from "@/components/filter/sort";

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
      <Sort />
      <Suspense key={searchValue}>
        <ProductsContent q={q} />
      </Suspense>
    </>
  );
}
