import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { updateItemQuantity } from "./actions";
import { Product } from "@/lib/definition";
import clsx from "clsx";

function Submit(prop: { type: "plus" | "minus" }) {
  const { pending } = useFormStatus();
  const operator = prop.type === "plus" ? "+" : "-";
  return (
    <button
      disabled={pending}
      type="submit"
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px]  flex-none items-center justify-center px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "cursor-not-allowed": pending,
        }
      )}
    >
      {pending ? (
        <div className="loading-container cart w-[15px] h-[15px]">
          <div className="loading w-[15px] h-[15px]"></div>
        </div>
      ) : (
        <span>{operator}</span>
      )}
    </button>
  );
}

export default function EditQtyButton({
  operation,
  item,
}: {
  operation: "plus" | "minus";
  item: { productId: string; quantity: number };
}) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const actionWithId = formAction.bind(null, {
    id: item?.productId,
    quantity: operation === "plus" ? item?.quantity + 1 : item?.quantity - 1,
  });

  /**
   * Evry click should update the database
   */
  return (
    <form action={actionWithId}>
      <Submit type={operation} />
      <p aria-live="polite" className="sr-only" role="status"></p>
    </form>
  );
}
