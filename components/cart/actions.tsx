"use server";

import { getCart } from "@/lib/api/data";
import { addToCart } from "@/lib/api/actions";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateCart, removeFromCart, createCart } from "@/lib/api/actions";
import { cookies } from "next/headers";

export async function addItem(
  previousState: any,
  product: { id: string; quantity: number }
) {
  let cartId: any = cookies().get("cartId")?.value; //should be session cookie na
  let cart: any;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart?.insertedId;
    cookies().set("cartId", cartId);
  }

  try {
    await addToCart(cartId, product.id, product.quantity);
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
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    if (product.quantity === 0) {
      await removeFromCart(cartId, product.id);
      console.log("Removed");

      revalidateTag("cart");
      return;
    }

    await updateCart(cartId, product.id, product.quantity);
    revalidateTag("cart");
  } catch (e) {
    return "Error updating item quantity";
  }
}
