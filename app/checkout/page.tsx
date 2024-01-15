import CheckoutUI from "@/components/checkout";
import OrderSummary from "@/components/checkout/order-summary";
import { cookies } from "next/headers";
import { getCart } from "@/lib/api/data";

export default async function Checkout() {
  const cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }
  //Shipping Address

  return (
    <>
      <div className="flex flex flex-col-reverse md:flex-row gap-6 my-36 bg-gray-100 py-6 px-8 ">
        <CheckoutUI />
        <OrderSummary cart={cart} />
      </div>
    </>
  );
}
