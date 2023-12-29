import React from "react";

export default function EditQtyButton({
  operation,
  handleClick,
}: {
  operation: "plus" | "minus";
  handleClick: (operation: "-" | "+") => void;
}) {
  return (
    <button
      onClick={() => handleClick(operation === "plus" ? "+" : "-")}
      className="ease flex h-full min-w-[36px] max-w-[36px]  flex-none items-center justify-center px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
    >
      {operation === "plus" ? <span>+</span> : <span>-</span>}
    </button>
  );
}
