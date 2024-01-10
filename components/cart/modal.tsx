"use client";
import React, { useState, useRef, Fragment, useEffect } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import EditQtyButton from "./edit-qty-button";
import CloseButton from "./close-cart-button";
import OpenCart from "./open-cart-button";
import DeleteItemButton from "./delete-item-button";

export default function CartModal({ cart }: any) {
  const [quantity, setQuantity] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  const handleQuantity = (operation: "-" | "+") => {
    if (operation === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (operation === "+") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart totalQuantity={cart?.totalQuantity} />
      </button>

      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50 ">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 overflow-auto top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white p-6 text-black backdrop-blur-xl dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between text-gray-800 text-gray-800">
                <p className="text-lg font-semibold">My Cart</p>
                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseButton />
                </button>
              </div>
              <div className="flex h-full flex-col justify-between overflow-hidden p-1 text-gray-800">
                <ul className="flex-grow overflow-auto py-4">
                  {cart && cart.products
                    ? cart.products.map((product: any) => {
                        return (
                          <li
                            key={product.item._id}
                            className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                          >
                            <div className="relative flex w-full flex-row justify-between px-1 py-4 text-gray-800">
                              <div className="absolute z-40 -mt-2 ml-[55px]">
                                <DeleteItemButton id={product.item._id} />
                              </div>
                              {/* <Link
                              href={merchandiseUrl}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            > */}
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
                                  $
                                  {parseFloat(product.item.price) *
                                    parseFloat(product.qty)}{" "}
                                  USD
                                </p>
                                <div className="ml-auto flex h-9 flex-row items-center  border">
                                  <EditQtyButton
                                    operation={"minus"}
                                    item={{
                                      productId: product.item._id,
                                      quantity: product.qty,
                                    }}
                                  />
                                  <p className="w-6 text-center">
                                    <span className="w-full text-sm">
                                      {product.qty}
                                    </span>
                                  </p>
                                  <EditQtyButton
                                    operation={"plus"}
                                    item={{
                                      productId: product.item._id,
                                      quantity: product.qty,
                                    }}
                                  />
                                </div>
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
                      ${cart?.total ? 14 : 0}.00 USD
                    </p>
                    {/* <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                    /> */}
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                    <p>Shipping</p>
                    <p className="text-right">Calculated at checkout</p>
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                    <p>Total</p>
                    <p className="text-right text-base">
                      ${cart?.total ? cart?.total + 14 : 0}.00 USD
                    </p>
                    {/* <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                    /> */}
                  </div>
                </div>
                <a
                  // href={cart.checkoutUrl}
                  className="block w-full  bg-black p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                >
                  Proceed to Checkout
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
