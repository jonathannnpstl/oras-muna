import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 aspect-square ">
      <div className="md:row-span-3 md:col-span-3 w-full h-full aspect-square object-contain relative">
        <a
          href=""
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
        </a>
      </div>
      <div className="md:row-span-3 md:col-span-1 w-full h-full aspect-square object-cover">
        <a
          href=""
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
        </a>
      </div>
      <div className="md:row-span-1 md:col-span-2 w-full h-full object-contain">
        <a
          href=""
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
        </a>
      </div>
      <div className="md:row-span-1 md:col-span-1 w-full h-full aspect-square object-cover">
        <a
          href=""
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
        </a>
      </div>
      <div>
        <p>See more watches -</p>
      </div>
    </div>
  );
}
