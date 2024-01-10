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
  if (!initialized.current){
  
  }

  useEffect(() => {
    store.dispatch(fetchProductsList(q));
  }, [q]);
  
  console.log("rendered", q);
  
  const { products, numberOfPages, loading, count } = useAppSelector(
    (state) => state.product
  );

  const resultsText = products && products?.length > 1 ? "results" : "result";
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="mb-4 text-gray-600">
          {loading
            ? "Searching for results..."
            : products && products.length != 0 && count
            ? `Showing ${products?.length} ${resultsText} of ${count}`
            : "There are no products that match"}
          {/* <span className="font-bold">&quot;{q.query}&quot;</span> */}
        </p>
      </div>
      <div className="grid w-full grid-cols-auto gap-4">
        {products && !loading ? (
          products.map((product: any, index: number) => (
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
