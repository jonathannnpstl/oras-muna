"use client";
import ProductCard from "../product-card";
import PageItem from "./pagination";
import { useAppStore, useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useRef, useEffect } from "react";
import { fetchProductsList } from "@/lib/redux/features/productSlice";
import { CardsSkeleton } from "../skeleton";

export default function ProductsContent({ q }: any) {
  const store = useAppStore();
  const initialized = useRef(false);

  useEffect(() => {
    store.dispatch(fetchProductsList(q));
  }, [q]);

  console.log("rendered", q);

  const { filteredProducts, numberOfPages, loading } = useAppSelector(
    (state) => state.product
  );

  const resultsText =
    filteredProducts && filteredProducts?.length > 1 ? "results" : "result";
  return (
    <>
      <div className="flex justify-between items-center">
        {q.query ? (
          <p className="mb-4 text-gray-600">
            {filteredProducts?.length === 0
              ? "There are no products that match"
              : `Showing ${filteredProducts?.length} ${resultsText} for `}
            <span className="font-bold">&quot;{q.query}&quot;</span>
          </p>
        ) : (
          <p>All products</p>
        )}
      </div>
      <div className="grid w-full grid-cols-auto gap-4">
        {filteredProducts && !loading ? (
          filteredProducts.map((product: any, index: number) => (
            <ProductCard product={product} key={index} />
          ))
        ) : (
          <CardsSkeleton />
        )}
      </div>
      <div className="flex justify-center gap-2 relative m-12">
        {numberOfPages && !loading
          ? Array(numberOfPages)
              .fill(0)
              .map((_, i) => {
                return (
                  <PageItem
                    key={i}
                    number={i + 1}
                    len={numberOfPages ? numberOfPages : 0}
                  />
                );
              })
          : null}
      </div>
    </>
  );
}
