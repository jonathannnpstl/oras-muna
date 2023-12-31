import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import React from "react";

export default function OpenCart({totalQuantity}: {totalQuantity: number}) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center ">
      <ShoppingCartIcon
        className={clsx("h-5 transition-all ease-in-out hover:scale-110")}
      />

      {totalQuantity ? (
        <div className="absolute right-2 top-2 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {totalQuantity}
        </div>
      ) : null}
    </div>
  );
}
