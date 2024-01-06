"use client";
import React, { useState } from "react";
import Image from "next/image";
import Details from "./details";
import AddToCartButton, {
  AddToWishlistButton,
} from "../cart/add-to-cart-button";
import EditQtyButton from "../cart/edit-qty-button";
import "simple-line-icons";
import clsx from "clsx";

export default function ProductShowcase({ product }: any) {
  const imageArray: string[] = product.images;
  const details = [
    {
      id: 1,
      name: "Description",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sollicitudin sem. Vestibulum diam leo, efficitur sed ante sed, mattis pulvinar risus. Pellentesque a nulla justo. Nullam nec sodales massa. Vestibulum a varius nibh, imperdiet rhoncus ligula.",
    },
    {
      id: 2,
      name: "Size & fit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sollicitudin sem. Vestibulum diam leo, efficitur sed ante sed, mattis pulvinar risus. Pellentesque a nulla justo. Nullam nec sodales massa. Vestibulum a varius nibh, imperdiet rhoncus ligula.",
    },
    {
      id: 3,
      name: "Details & care",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sollicitudin sem. Vestibulum diam leo, efficitur sed ante sed, mattis pulvinar risus. Pellentesque a nulla justo. Nullam nec sodales massa. Vestibulum a varius nibh, imperdiet rhoncus ligula.",
    },
    {
      id: 4,
      name: "Delivery & returns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sollicitudin sem. Vestibulum diam leo, efficitur sed ante sed, mattis pulvinar risus. Pellentesque a nulla justo. Nullam nec sodales massa. Vestibulum a varius nibh, imperdiet rhoncus ligula.",
    },
  ];
  const [quantity, setQuantity] = useState<number>(1);
  const [openDetailId, setOpenDetailId] = useState<number | string>("");
  const [img, setImage] = useState<string>(product.images[0]);
  const [pastIndex, setPastIndex] = useState<number>(0);
  const active = true;
  const handleDetailOpen = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setOpenDetailId(id !== openDetailId ? id : "");
  };
  const handleQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const type = e.currentTarget.getAttribute("data-type");

    if (type && type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (type && type === "plus") {
      setQuantity(quantity + 1);
    }
  };

  const handleImage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const imagePath = e.currentTarget.getAttribute("data-image-index");
    let index = parseInt(imagePath ? imagePath : "0");

    if (index < 0) {
      index = pastIndex - 1 < 0 ? imageArray.length - 1 : pastIndex - 1;
    }
    if (index > imageArray.length - 1) {
      index = pastIndex + 1 > imageArray.length - 1 ? 0 : pastIndex + 1;
    }
    setPastIndex(index);
    setImage(imageArray[index]);
  };

  return (
    <div className="max-h max-full">
      <div className="md:flex">
        <div className="sm:shrink-0 grow shrink basis-0 p-6 self-start">
          <div className="relative">
            <i
              data-image-index={"-1"}
              className="icon-arrow-left scale-[2] absolute top-[50%] left-[15px] cursor-pointer hover:left-[10px]"
              onClick={(e) => handleImage(e)}
            ></i>
            <Image
              src={img}
              width={500}
              height={600}
              className="h-48 w-full object-contain sm:h-[350px] sm:max-w-xs m-auto aspect-auto"
              alt="An audemars piguet watch"
            />
            <i
              data-image-index={imageArray.length}
              className="icon-arrow-right scale-[2] absolute top-[50%] right-[15px] cursor-pointer hover:right-[10px]"
              onClick={(e) => handleImage(e)}
            ></i>
          </div>
          <div className="flex gap-5 justify-center mt-6">
            {imageArray &&
              imageArray.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(
                      "w-[75px] h-[75px] border-[1px] border-solid cursor-pointer",
                      {
                        "border-black": index == pastIndex,
                      }
                    )}
                    onClick={(e) => handleImage(e)}
                    data-image-index={index}
                  >
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt="Some image"
                      className="aspect-auto object-contain h-full"
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="grow shrink basis-0 p-6 self-start">
          <p className="text-lg font-light text-gray-500 tracking-widest">
            {product.brand}
          </p>
          <p className="text-3xl font-semibold tracking-tight">
            {product.name}
          </p>
          <p className="text-xl font-semibold text-gray-800 tracking-wide ">
            ${product.price}
          </p>
          <div className="flex overflow-hidden items-center text-base">
            {/**
             * need to create new compnent for quantity
             */}
            <p className="text-gray-800 my-12">Quantity</p>
            <div className="qty-input items-center mx-[20px] sm:mx-[50px]">
              <div className="ml-auto flex h-9 flex-row items-center ">
                {/* <EditQtyButton
                  operation={"minus"}
                  handleClick={handleQuantity}
                /> */}
                <button
                  data-type="minus"
                  className="ease flex h-full min-w-[36px] max-w-[36px]  flex-none items-center justify-center px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                  onClick={(e) => handleQuantity(e)}
                >
                  {" "}
                  -{" "}
                </button>
                <p className="w-6 text-center">
                  <span className="w-full text-sm">{quantity}</span>
                </p>
                <button
                  data-type="plus"
                  className="ease flex h-full min-w-[36px] max-w-[36px]  flex-none items-center justify-center px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                  onClick={(e) => handleQuantity(e)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          {/**create a button component??? */}
          <div className="sm:flex sm:gap-x-4 text-sm sm:text-base">
            <AddToCartButton id={product._id} quantity={quantity} />
            <AddToWishlistButton id={product._id} />
          </div>
          <div className="my-12">
            {details.map((detail) => {
              return (
                <Details
                  name={detail.name}
                  text={detail.text}
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
