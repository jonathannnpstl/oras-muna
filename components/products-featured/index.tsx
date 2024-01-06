import React, { Suspense, useEffect } from "react";
import ProductsContent from "../products-content";
import { Antic_Didone } from "next/font/google";
import { CardsSkeleton } from "../skeleton";

const antic_didone = Antic_Didone({ subsets: ["latin"], weight: "400" });

export default async function ProductsFeatured() {
  const q = {
    query: "",
    sortKey: undefined,
    reverse: false,
    brand: undefined,
  };
  return (
    <>
      <div className="text-8xl antialiased tracking-wide my-40">
        <h2 className="m-auto text-right font-thin">
          Experience the elite{" "}
          <span className={antic_didone.className + " text-9xl"}>elegance</span>
        </h2>
      </div>
      <p className="text-lg">Featured</p>
      <Suspense fallback={<CardsSkeleton />}>
        {<ProductsContent q={q} />}
      </Suspense>
    </>
  );
}
