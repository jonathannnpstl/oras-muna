import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./hero-section";

export default async function Banner() {
  return (
    <>
      <HeroSection />
      <div className="my-36">
        <p className="text-xl sm:text-3xl tracking-widest my-6 px-2">BRANDS</p>
        <div className="w-full grid grid-cols grid-rows-auto md:grid-cols-4 md:grid-rows-2 gap-2 aspect-square justify-center items-center p-6  sm:p-32 bg-black">
          <div className="md:row-span-3 md:col-span-3 w-full h-full aspect-square object-contain relative">
            <Link
              href="/search?brand=kross-studio"
              className="relative before:absolute before:bg-gray-800/25 before:inset-0 before:transition before:duration-400 before:hover:bg-gray-800/50"
            >
              <span className="absolute tracking-widest text-slate-50 text-lg uppercase bottom-5 left-5">
                <p>Kross Studio</p>
              </span>
              <Image
                height={0}
                width={300}
                src="/img/kross-studio/cover.jpg"
                alt="Rolex watches"
                className=" w-full h-full"
              ></Image>
            </Link>
          </div>
          <div className="md:row-span-3 md:col-span-1 w-full h-full aspect-square object-cover">
            <Link
              href="/search?brand=audemars-piguet"
              className="relative before:absolute before:bg-gray-800/25 before:inset-0 before:transition before:duration-400 before:hover:bg-gray-800/50"
            >
              <span className="absolute tracking-widest text-slate-50 text-lg uppercase bottom-5 left-5">
                <p>Audemars Piguet</p>
              </span>
              <Image
                height={0}
                width={300}
                src="/img/audemars-piguet/cover.webp"
                alt="Rolex watches"
                className=" w-full h-full"
              ></Image>
            </Link>
          </div>
          <div className="md:row-span-1 md:col-span-2 w-full h-full object-contain">
            <Link
              href="/search?brand=patek-philippe"
              className="relative before:absolute before:bg-gray-800/25 before:inset-0 before:transition before:duration-400 before:hover:bg-gray-800/50"
            >
              <span className="absolute tracking-widest text-slate-50 text-lg uppercase bottom-5 left-5">
                <p>Patek Philippe</p>
              </span>
              <Image
                height={0}
                width={300}
                src="/img/patek-philippe/cover.jpg"
                alt="Rolex watches"
                className=" w-full h-full"
              ></Image>
            </Link>
          </div>
          <div className="md:row-span-1 md:col-span-1 w-full h-full aspect-square object-cover">
            <Link
              href="/search?brand=de-bethune"
              className="relative before:absolute before:bg-gray-800/25 before:inset-0 before:transition before:duration-400 before:hover:bg-gray-800/50"
            >
              <span className="absolute tracking-widest text-slate-50 text-lg uppercase bottom-5 left-5">
                <p>De Bethune</p>
              </span>
              <Image
                height={0}
                width={300}
                src="/img/de-bethune/cover.jpg"
                alt="Rolex watches"
                className="w-full h-full"
              ></Image>
            </Link>
          </div>
          <div className="text-center text-lg tracking-wide sm:block hidden">
            <a href="/search">
              <p>See more watches -</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
