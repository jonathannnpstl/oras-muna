import { Product } from "@/lib/definition";
import Image from "next/image";

export default function OrderSummary({ cart }: any) {
  return (
    <>
      <div className="w-full md:w-5/12 my-12">
        Order Summary
        <ul className="flex-grow overflow-auto py-4">
          {cart && cart.products && cart.products.length > 0
            ? cart.products.map((product: any) => {
                return (
                  <li
                    key={product.item._id}
                    className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                  >
                    <div className="relative flex w-full flex-row justify-between px-1 py-4 text-gray-800">
                      <div className="relative h-16 w-16 cursor-pointer rounded-md border overflow-hidde">
                        <Image
                          className="h-full w-full object-contain"
                          width={64}
                          height={64}
                          alt="asdasds"
                          src={product.item.images[0]}
                        />
                      </div>
                      <div className="text-base flex flex-1 flex-col text-base ml-2">
                        <span className="leading-tight">
                          {product.item.name}
                        </span>
                      </div>
                      <div className="">
                        <p className="text-right text-base">
                          Php
                          {parseFloat(product.item.price) *
                            parseFloat(product.qty)}{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })
            : "No products in the cart."}
        </ul>
        <div className="py-4 text-sm text-grey-800">
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
            <p>Taxes</p>
            <p className="text-right text-base">
              Php {cart?.total ? 14 : 0}.00
            </p>
          </div>
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
            <p>Shipping</p>
            <p className="text-right">Calculated at checkout</p>
          </div>
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
            <p>Total</p>
            <p className="text-right text-base">
              Php {cart?.total ? cart?.total + 14 : 0}.00
            </p>
          </div>
        </div>
        <a
          href={"/"}
          className="block w-full  bg-black p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
        >
          Confirm order
        </a>
      </div>
    </>
  );
}
