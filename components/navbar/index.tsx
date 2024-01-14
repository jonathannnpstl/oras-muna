import React, { Suspense } from "react";
import MobileNav from "./mobile-nav";
import Search from "./search";
import Cart from "../cart";
import OpenCart from "../cart/open-cart-button";

export default function Navbar() {
  return (
    <nav className="z-10 w-full top-0 left-0 fixed flex items-center bg-white border solid border-gray-200 justify-between px-4 py-6 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileNav />
      </div>
      <div className="w-full md:w-1/3">
        <div className="ml-2 flex-none text-xl font-medium uppercase md:hidden lg:block">
          <a href="/">Oras-Muna</a>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/3">
        <Search />
        <Suspense fallback={<OpenCart totalQuantity={0} />}>
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
