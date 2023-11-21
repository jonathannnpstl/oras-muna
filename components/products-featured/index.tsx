import React from "react";
import ProductsContent from "../products-content";
import { Antic_Didone } from "next/font/google";

const antic_didone = Antic_Didone({ subsets: ["latin"], weight: "400" });

export default function ProductsFetured() {
  return (
    <>
      <div className="text-8xl antialiased tracking-wide my-40">
        <h2 className="m-auto text-right font-thin">
          Experience the elite{" "}
          <span className={antic_didone.className + " text-9xl"}>elegance</span>
        </h2>
      </div>
      <p className="text-lg">Featured</p>
      <ProductsContent />
    </>
  );
}
