"use client";
import React, { useState } from "react";
import Image from "next/image";
import Details from "./details";
import AddToCartButton from "../cart/add-to-cart-button";
import EditQtyButton from "../cart/edit-qty-button";

export default function ProductShowcase({ product }: any) {
  const details = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [quantity, setQuantity] = useState<number>(1);
  const [openDetailId, setOpenDetailId] = useState<number | string>("");
  const handleDetailOpen = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setOpenDetailId(id !== openDetailId ? id : "");
  };

  const handleQuantity = (operation: "-" | "+") => {
    if (operation === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (operation === "+") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="max-h max-full">
      <div className="md:flex ">
        <div className="sm:shrink-0 grow shrink basis-0 p-6 self-start">
          <Image
            src="/img/audemars-piguet/audemars-piguet-1.webp"
            width={500}
            height={600}
            className="h-48 w-full object-contain sm:h-full sm:max-w-xs m-auto aspect-auto"
            alt="An audemars piguet watch"
          />
        </div>
        <div className="grow shrink basis-0 p-6 self-start">
          <p className="text-3xl font-semibold tracking-tight">
            Audemars Piguet Product 1 asas
          </p>
          <p className="text-xl font-semibold text-gray-800 ">$14,000</p>
          <p className="text-base text-gray-800 ">
            An audemars piguet watch watch me naenae
          </p>
          <div className="flex overflow-hidden items-center text-base">
            {/**
             * need to create new compnent for quantity
             */}
            <p className="text-gray-800 my-12">Quantity</p>
            <div className="qty-input items-center mx-[20px] sm:mx-[50px]">
              <div className="ml-auto flex h-9 flex-row items-center ">
                <EditQtyButton operation="minus" />
                <p className="w-6 text-center">
                  <span className="w-full text-sm">4</span>
                </p>
                <EditQtyButton operation={"plus"} />
              </div>
            </div>
          </div>
          {/**create a button component??? */}
          <div className="sm:flex sm:gap-x-4 text-sm sm:text-base">
            <AddToCartButton />
            <button className="showcase-btn text-gray-800 w-full my-4 sm:m-0">
              ADD TO WISHLIST
            </button>
          </div>
          <div className="my-12">
            {details.map((detail) => {
              return (
                <Details
                  key={detail.id}
                  id={detail.id}
                  onClick={handleDetailOpen}
                  openId={openDetailId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
