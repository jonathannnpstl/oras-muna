import React from "react";

export default function Button({ operation }: { operation: "plus" | "minus" }) {
  return (
    <button
      className=" hover:cursor-pointer w-9 qty-count qty-count--minus h-8"
      data-action="minus"
      type="button"
    >
      -
    </button>
  );
}
