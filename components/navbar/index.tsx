import React, { Suspense } from "react";
import MobileNavSearch from "./mobile-nav";
import Search from "./search";
import Cart from "../cart";
import OpenCart from "../cart/open-cart-button";

export default function Navbar() {
  return (
    <nav className="z-10 w-full top-0 left-0 fixed flex items-center bg-white border solid border-gray-200 justify-between px-4 py-6 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileNavSearch />
      </div>
      <div className="md:w-1/3">
        <div className="ml-2 flex-none text-xl font-medium uppercase">
          <a href="/">Oras-Muna</a>
        </div>
      </div>
      <div className="md:flex md:w-1/3 justify-end">
        <div className="hidden md:block">
          <Search />
        </div>
        <Suspense fallback={<OpenCart totalQuantity={0} />}>
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
