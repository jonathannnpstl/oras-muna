import React, { Suspense } from "react";
import MobileNav from "./mobile-nav";
import Search from "./search";
import Cart from "../cart";
import OpenCart from "../cart/open-cart-button";

export default function Navbar() {
  return (
    <nav className=" z-10 w-full top-0 left-0 fixed flex items-center bg-white shadow justisfy-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileNav />
      </div>
      <div className="flex md:w-1/3 items-center justify-around">
        <div className="flex w-full md:w-1/3">
          <div className="ml-2 flex-none text-xl font-medium uppercase md:hidden lg:block">
            <a href="/">Oras-Muna</a>
          </div>
        </div>
        <ul className="hidden gap-8 text-sm md:flex md:items-center">
          <li>Brand</li>
          <li>Style</li>
          <li>Info</li>
        </ul>
      </div>
      <div className="hidden justify-end md:flex md:w-1/3">
        <Search />
      </div>
      <div className="hidden justify-end md:flex md:w-1/3">
        <Suspense fallback={<OpenCart totalQuantity={0} />}>
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
