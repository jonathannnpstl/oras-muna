import ProductsContent from "@/components/products-content";
import React from "react";
import { transformStringUpper } from "@/lib/utils";
import { fetchBrandProducts } from "@/lib/api/data";

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
  });
  console.log(products);

  return (
    <>{products.length > 0 ? <ProductsContent products={products} /> : null}</>
  );
}
