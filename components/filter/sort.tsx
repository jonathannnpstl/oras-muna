"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";
import { sorting } from "@/lib/constants";

export function SortItem({
  item,
}: {
  item: { name: string; slug: string | null };
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = searchParams.get("sort") === item.slug;
  const query = searchParams.get("query");
  let newParams = new URLSearchParams(searchParams.toString());
  if (item.slug) {
    newParams.set("sort", item.slug);
  } else {
    newParams.delete("sort");
  }
  const href = createUrl(pathname, newParams);

  const DynamicTag = active ? "p" : Link;
  return (
    <>
      <li
        className={clsx(
          "w-full p-2 px-3 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900",
          {
            "bg-gray-200": active,
          }
        )}
      >
        <DynamicTag href={href}>{item.name}</DynamicTag>
      </li>
    </>
  );
}

export default function Sort() {
  return (
    <div className="sort w-[150px] float-right hover:underline">
      <label htmlFor="touch">
        <span>Sort By:</span>
      </label>
      <input type="checkbox" id="touch" />

      <ul className="slide bg-white shadow">
        {sorting.map((sort, i) => {
          return (
            <SortItem key={i} item={{ name: sort.title, slug: sort.slug }} />
          );
        })}
      </ul>
    </div>
  );
}
