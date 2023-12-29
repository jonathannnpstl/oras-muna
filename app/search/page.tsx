import ProductsContent from "@/components/products-content";
import React from "react";
import { fetchProducts } from "@/lib/api/data";
import { sorting, defaultSort } from "@/lib/constants";
import Sort from "@/components/filter/sort";

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

  const products = await fetchProducts({
    query: searchValue ? searchValue : "",
    sortKey,
    reverse,
  });

  const resultsText = products.length > 1 ? "results" : "result";
  return (
    <>
      <div className="flex justify-between items-center">
        {searchValue ? (
          <p className="mb-4 text-gray-600">
            {products.length === 0
              ? "There are no products that match"
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : (
          <p>All products</p>
        )}
        <Sort />
      </div>
      {products.length > 0 ? <ProductsContent products={products} /> : null}
    </>
  );
}
