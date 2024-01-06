"use client";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export function FilterItem({ item }: { item: { name: string; path: string } }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  // newParams.delete("query");

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

export function FilterItemList() {
  return (
    <>
      <FilterItem item={{ name: "All", path: "/search" }} />
      <FilterItem
        item={{ name: "Audemars Piguet", path: "/search/audemars-piguet" }}
      />
      <FilterItem
        item={{ name: "Patek Philippe", path: "/search/patek-philippe" }}
      />
      <FilterItem
        item={{ name: "Richard Mille", path: "/search/richard-mille" }}
      />
      <FilterItem item={{ name: "Rolex", path: "/search/rolex" }} />
    </>
  );
}
