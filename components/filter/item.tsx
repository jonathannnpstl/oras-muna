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
      <li className="mt-2 flex text-black dark:text-white" key={item.name}>
        <DynamicTag
          href={createUrl(item.path, newParams)}
          className={clsx(
            "w-full underline-offset-4 text-base p-2 px-3 text-gray-600 hover:bg-gray-200 dark:hover:text-gray-900",
            {
              "bg-gray-200": active,
            }
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
