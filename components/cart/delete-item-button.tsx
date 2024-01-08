import { XMarkIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { removeItemFromCart } from "./actions";
import clsx from "clsx";

import React from "react";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(" ", {
        "cursor-not-allowed": pending,
      })}
    >
      {pending ? (
        <div className="loading-container w-[15px] h-[15px] flex justify-center items-center">
          <div className="loading w-[10px] h-[10px] border-y-[#fff]"></div>
        </div>
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white" />
      )}
    </button>
  );
}

export default function DeleteItemButton({ id }: { id: string }) {
  const [message, formAction] = useFormState(removeItemFromCart, null);
  const actionWithId = formAction.bind(null, { id });
  console.log(id);

  return (
    <form
      className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-gray-800"
      action={actionWithId}
    >
      <Submit />
    </form>
  );
}
