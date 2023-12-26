import ProductsContent from "@/components/products-content";
import React from "react";
import { fetchProducts } from "@/lib/api/data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, query: searchValue } = searchParams as {
    [key: string]: string;
  };
  // const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  // console.log(searchValue);

  const products = await fetchProducts({
    query: searchValue ? searchValue : "",
  });

  const resultsText = products.length > 1 ? "results" : "result";
  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match "
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? <ProductsContent products={products} /> : null}
    </>
  );
}
