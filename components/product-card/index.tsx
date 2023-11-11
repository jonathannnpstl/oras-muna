import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  const product = "audemars-piguet";
  return (
    <div className="max-w-[150px] sm:max-w-[200px] max-h-fit overflow-hidden shadow-md cursor-pointer hover:shadow-xl">
      <Link href={`/product/${product}`}>
        <Image
          src="/img/audemars-piguet/audemars-piguet-1.webp"
          width={100}
          height={200}
          className="mx-auto my-4 sm:my-10 aspect-auto"
          alt="An audemars piguet watch"
        />
        <div className="px-2 py-2">
          <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
            Audemars Piguet Product 1 asas
          </p>
        </div>
        <div className="px-2 pb-2">
          <p className="text-stone-950 text-sm sm:text-base">$14,000</p>
        </div>
      </Link>
    </div>
  );
}
