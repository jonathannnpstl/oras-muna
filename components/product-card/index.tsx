import { Product } from "@/lib/definition";
import Image from "next/image";
import Link from "next/link";
import { transformStringLower } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const { brand, name, img, price, _id } = product;

  return (
    <div className="card w-full max-h-fit relative overflow-hidden cursor-pointer text-center">
      <Link href={`/product/${_id}`}>
        <div className="w-full px-10 pt-2 ">
          <Image
            src={`/img/${img}`}
            width={150}
            height={0}
            style={{ width: "100%", height: "auto" }}
            className="mx-auto my-4 sm:my-10 aspect-auto "
            alt="An audemars piguet watch"
          />
        </div>
        <div className="px-2 py-2 card-child relative before:absolute before:bg-gray-700 before:h-[4px] before:w-2/6  before:top-[-4px] before:m-auto before:left-0 before:right-0">
          <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
            {name}
          </p>
        </div>
        <div className="px-2 pb-2">
          <p className="text-stone-950 text-sm sm:text-base">${price}</p>
        </div>
      </Link>
    </div>
  );
}
