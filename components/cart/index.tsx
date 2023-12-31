import CartModal from "./modal";
import { cookies } from "next/headers";
import { getCart } from "@/lib/api/data";


export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
  }
  cart = await getCart("658d6bf5b5bccf8e45639059");

  
  return <CartModal cart={cart} />
}
