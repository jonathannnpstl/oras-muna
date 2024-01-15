"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Details from "./details";
import AddToCartButton from "../cart/add-item";
import "simple-line-icons";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./thumb";
import ProductCard from "../product-card";
import { Product } from "@/lib/definition";

export default function ProductShowcase({ product, suggestedProducts }: any) {
  const slides = Array.from(Array(product.images.length).keys());
  const options: EmblaOptionsType = {};
  const [emblaRef] = useEmblaCarousel(options);
  const imageArray: string[] = product.images;
  const imageByIndex = (index: number): string =>
    imageArray[index % imageArray.length];
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

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
    if (type && type === "plus" && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="max-h max-full my-12">
      <div className="md:flex">
        <div className="sm:shrink-0 grow shrink basis-0 p-6 self-start">
          <div className="embla">
            <div className="embla__viewport" ref={emblaMainRef}>
              <div className="embla__container">
                {slides.map((index) => (
                  <div className="embla__slide" key={index}>
                    <Image
                      priority={true}
                      src={imageByIndex(index)}
                      alt="Your alt text"
                      width={500}
                      className="embla__slide__img"
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="embla-thumbs">
              <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                <div className="embla-thumbs__container">
                  {slides.map((index) => (
                    <Thumb
                      onClick={() => onThumbClick(index)}
                      selected={index === selectedIndex}
                      index={index}
                      imgSrc={imageByIndex(index)}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
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
            Php {product.price}
          </p>
          <div className="flex overflow-hidden items-center text-base">
            {/**
             * need to create new compnent for quantity
             */}
            <p className="text-gray-800 my-12">Quantity</p>
            <div className="qty-input items-center mx-[20px] sm:mx-[50px]">
              <div className="ml-auto flex h-9 flex-row items-center ">
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
            <AddToCartButton
              id={product._id}
              quantity={quantity}
              stock={product.stock}
            />
            {/* <AddToWishlistButton id={product._id} /> */}
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
      {/* <ProductCard product={suggestedProducts[0]} /> */}
      <div className="my-28">
        <p className="text-xl">SEE MORE LIKE THIS</p>
        <div className="flex flex-wrap sm:flex-nowrap justify-center mb-[200px]">
          {suggestedProducts.map((product: Product, i: number) => {
            return (
              <div className="w-[200px] sm:w-full" key={i}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
