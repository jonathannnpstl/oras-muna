"use server";

import { getCart } from "@/lib/api/data";
import { addToCart } from "@/lib/api/actions";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateCart, removeFromCart } from "@/lib/api/actions";

export async function addItem(
  previousState: any,
  product: { id: string; quantity: number }
) {
  let cartId = true; //should be session cookie na
  let cart;

  if (cartId) {
    //   cart = await getCart(cartId);
    // cart = await getCart("658d6bf5b5bccf8e45639059");
  }

  if (!cartId || !cart) {
    //   cart = await createCart();
    //   cartId = cart.id;
    //   cookies().set("cartId", cartId);
  }

  try {
    await addToCart("658d6bf5b5bccf8e45639059", product.id, product.quantity);
    revalidateTag("cart");
  } catch (e) {
    return "Error adding item to cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  product: {
    id: string;
    quantity: number;
  }
) {
  // const cartId = cookies().get("cartId")?.value;

  // if (!cartId) {
  //   return "Missing cart ID";
  // }
  console.log(product.quantity === 0);

  try {
    if (product.quantity === 0) {
      await removeFromCart("658d6bf5b5bccf8e45639059", product.id);
      console.log("Removed");

      revalidateTag("cart");
      return;
    }

    await updateCart("658d6bf5b5bccf8e45639059", product.id, product.quantity);
    revalidateTag("cart");
  } catch (e) {
    return "Error updating item quantity";
  }
}
