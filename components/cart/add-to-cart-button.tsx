import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addItem } from "./actions";

export default function AddToCartButton({ id }: { id: string }) {
  //want to make the cart modal to open when add to cart button is clicked
  //rn, i dont know how to do that

  //so this is how it works:
  //Make a cart for the unknown user, create a generated 'user id'
  //Store it in the local storage, the 'user id' and if unknown user
  //signed up, the user id will be replaced by the email of the user

  const handleSubmit = () => {
    addItem(id, 1);
  };

  return (
    <button
      onClick={handleSubmit}
      className="showcase-btn bg-green-500 text-white w-full"
    >
      ADD TO CART
    </button>
  );
}
