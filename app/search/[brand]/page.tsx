import ProductsContent from "@/components/products-content";
import React from "react";
import { transformStringUpper } from "@/lib/utils";
import { fetchBrandProducts } from "@/lib/api/data";
import Sort from "@/components/filter/sort";

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
  const products = await fetchBrandProducts({
    brand: transformStringUpper(params.brand),
    query: searchValue ? searchValue : "",
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
      {/* {products.length > 0 ? <ProductsContent /> : null} */}
    </>
  );
}
