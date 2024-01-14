import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="my-28 flex md:flex-row basis-0 grow shrink items-center flex-col">
        <Image
          src="/img/hero-cover.png"
          width={500}
          height={0}
          alt="hero section cover picture"
          className="w-full h-full"
        ></Image>
        <div className="h-full my-8 p-8 md:p-0">
          <div className="text-center md:text-right ">
            <p className="text-2xl md:text-4xl lg:text-6xl tracking-wider">
              WEAR YOUR ELITE ELEGANCE
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse dictum augue non sagittis facilisis. Fusce vel ipsum
              lacinia nisi facilisis molestie.{" "}
            </p>
            <Link
              href={"/search"}
              className="bg-black text-white py-3 px-10 my-6"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
