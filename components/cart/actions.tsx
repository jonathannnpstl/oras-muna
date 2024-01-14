"use server";

import { getCart, getWishlist } from "@/lib/api/data";
import { addToCart, addToWishlist } from "@/lib/api/actions";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  updateCart,
  removeFromCart,
  createCart,
  createWishlist,
} from "@/lib/api/actions";
import { cookies } from "next/headers";

export async function addItemToCart(
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

export async function addItemToWishlist(previousState: any, id: string) {
  //the user can only add to wishlist when already signed up
  //therefore, the wishlist will contain the user id
  //Create a collections "wishlist" to store the wishlist of the user
  //store the WISHlist id associated with the user email

  let wishlistId: any = cookies().get("cartId")?.value;
  let wishlist: any;

  if (wishlistId) {
    wishlist = await getWishlist(wishlistId);
  }

  if (!wishlistId || !wishlist) {
    wishlist = await createWishlist();
    wishlistId = wishlist?.insertedId;
    cookies().set("wishlistId", wishlistId);
  }

  try {
    await addToWishlist(wishlistId, id);
    revalidateTag("wishlist");
  } catch (e) {
    return "Error adding item to wishlist";
  }
}

export async function removeItemFromCart(
  prevState: any,
  product: {
    id: string;
  }
) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  try {
    if (product.id) {
      await removeFromCart(cartId, product.id);
      console.log("Removed");
      revalidateTag("cart");
      return;
    }
  } catch (e) {
    return "Error updating item quantity";
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
