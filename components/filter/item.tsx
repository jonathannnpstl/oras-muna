"use client";
import { createUrl, transformStringLower } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export function FilterItem({ item }: { item: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const transformedString = transformStringLower(item);
  const active = pathname === `/search/${transformedString}`;

  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete("query");
  const DynamicTag = active ? "p" : Link;
  return (
    <>
      <li className="mt-2 flex text-black dark:text-white" key={item}>
        <DynamicTag
          href={createUrl(transformedString, newParams)}
          className={clsx(
            "w-full underline-offset-4 text-base p-2 px-3 text-gray-600 hover:bg-gray-200 dark:hover:text-gray-900",
            {
              "bg-gray-200": active,
            }
          )}
        >
          {item}
        </DynamicTag>
      </li>
    </>
  );
}

export function FilterItemList({ list, title }: { list: []; title?: string }) {
  return (
    <>
      <FilterItem item={"Rolex"} />
      <FilterItem item={"Audemars Piguet"} />
      <FilterItem item={"Patek Philippe"} />
      <FilterItem item={"Richard Mille"} />
    </>
  );
}
