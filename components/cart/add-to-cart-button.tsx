import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addItem } from "./actions";
import clsx from "clsx";

function Submit(prop: { type: string }) {
  const { pending } = useFormStatus();

  const type = prop.type === "cart" ? "ADD TO CART" : "ADD TO WISHLIST";

  return (
    <button
      disabled={pending}
      type="submit"
      className={clsx("w-full h-full showcase-btn ", {
        "cursor-not-allowed": pending,
      })}
    >
      {pending ? (
        <div className="loading-container w-[23px] h-[23px]">
          <div
            className={clsx("loading w-[23px] h-[23px]", {
              "border-y-[#fff]": prop.type === "cart",
              "border-y-[#1f2937]": prop.type === "wishlist",
            })}
          ></div>
        </div>
      ) : (
        <span>{type}</span>
      )}
    </button>
  );
}

export function AddToWishlistButton({ id }: { id: string }) {
  // const [message, formAction] = useFormState(addItem, null);
  // const actionWithId = formAction.bind(null, { id: id });
  return (
    <form
      className="text-center text-gray-800 w-full sm:m-0 flex-1"
      // action={actionWithId}
    >
      <Submit type={"wishlist"} />
    </form>
  );
}

export default function AddToCartButton({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) {
  //want to make the cart modal to open when add to cart button is clicked
  //rn, i dont know how to do that

  //so this is how it works:
  //Make a cart for the unknown user, create a generated 'user id'
  //Store it in the local storage, the 'user id' and if unknown user
  //signed up, the user id will be replaced by the email of the user

  const [message, formAction] = useFormState(addItem, null);
  const actionWithId = formAction.bind(null, { id: id, quantity });
  /**
   * include date when the adding item happened
   */
  return (
    <form
      className="text-center flex-1 bg-green-500 text-white w-full"
      action={actionWithId}
    >
      <Submit type={"cart"} />
    </form>
  );
}
