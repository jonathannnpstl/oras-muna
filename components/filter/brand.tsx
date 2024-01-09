"use client";
import { createUrl, transformStringLower } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export function BrandItem({ item }: { item: { name: string; path: string } }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete("page");

  const DynamicTag = active ? "p" : Link;
  return (
    <>
      <li
        className={clsx(
          "flex text-black dark:text-white hover:text-gray-900",
          {}
        )}
        key={item.name}
      >
        <DynamicTag
          href={createUrl(item.path, newParams)}
          className={clsx(
            "w-full underline-offset-4 text-base m-2 text-gray-800 hover:underline ",
            { "underline felx": active }
          )}
        >
          {item.name}
        </DynamicTag>
      </li>
    </>
  );
}

export function BrandItemList({ brands }: { brands: string[] }) {
  return (
    <>
      <BrandItem item={{ name: "All", path: "/search" }} />
      {brands.map((brand, index) => {
        return (
          <BrandItem
            key={index}
            item={{
              name: brand,
              path: `/search/${transformStringLower(brand)}`,
            }}
          />
        );
      })}
    </>
  );
}
