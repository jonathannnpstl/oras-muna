import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Banner() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 aspect-square justify-center items-center">
      <div className="md:row-span-3 md:col-span-3 w-full h-full aspect-square object-contain relative">
        <Link
          href="/search/rolex"
          className="relative before:absolute before:bg-gray-800/25 before:inset-0 before:transition before:duration-400 before:hover:bg-gray-800/50"
        >
          <span className="absolute tracking-widest text-slate-50 text-lg uppercase bottom-5 left-5">
            <p>ROLEX</p>
          </span>
          <Image
            height={0}
            width={300}
            src="/img/rolex/cover.webp"
            alt="Rolex watches"
            className=" w-full h-full"
          ></Image>
        </Link>
      </div>
      <div className="md:row-span-3 md:col-span-1 w-full h-full aspect-square object-cover">
        <Link
          href="/search/audemars-piguet"
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
          href="/search/patek-philippe"
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
          href="/search/richard-mille"
          className="relative before:absolute before:bg-gray-800/25 before:inset-0 before:transition before:duration-400 before:hover:bg-gray-800/50"
        >
          <span className="absolute tracking-widest text-slate-50 text-lg uppercase bottom-5 left-5">
            <p>Richard Mille</p>
          </span>
          <Image
            height={0}
            width={300}
            src="/img/richard-mille/cover.jpg"
            alt="Rolex watches"
            className="w-full h-full"
          ></Image>
        </Link>
      </div>
      <div className="text-center text-lg tracking-wide">
        <a href="/search">
          <p>See more watches -</p>
        </a>
      </div>
    </div>
  );
}
