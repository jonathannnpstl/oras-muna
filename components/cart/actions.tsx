"use server";

import { getCart } from "@/lib/api/data";
import { addToCart } from "@/lib/api/actions";

export async function addItem(productId: string | undefined, quantity: number) {
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
    await addToCart("658d6bf5b5bccf8e45639059", productId, quantity);
    // revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error adding item to cart";
  }
}

// export async function updateItemQuantity(
//   prevState: any,
//   payload: {
//     lineId: string;
//     variantId: string;
//     quantity: number;
//   }
// ) {
//   const cartId = cookies().get("cartId")?.value;

//   if (!cartId) {
//     return "Missing cart ID";
//   }

//   const { lineId, variantId, quantity } = payload;

//   try {
//     if (quantity === 0) {
//       await removeFromCart(cartId, [lineId]);
//       revalidateTag(TAGS.cart);
//       return;
//     }

//     await updateCart(cartId, [
//       {
//         id: lineId,
//         merchandiseId: variantId,
//         quantity,
//       },
//     ]);
//     revalidateTag(TAGS.cart);
//   } catch (e) {
//     return "Error updating item quantity";
//   }
// }
