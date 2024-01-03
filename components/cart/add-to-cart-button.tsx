import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addItem } from "./actions";

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
      className="text-center showcase-btn bg-green-500 text-white w-full"
      action={actionWithId}
    >
      <button type="submit" className="w-full h-full">
        ADD TO CART
      </button>
    </form>
  );
}
