import { XMarkIcon } from "@heroicons/react/24/outline";

import React from "react";

export default function DeleteItemButton() {
  return (
    <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-gray-800">
      <button>
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white " />
      </button>
    </div>
  );
}
