"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";

export function SortItem({
  item,
}: {
  item: { name: string; slug: string | null };
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = searchParams.get("sort") === item.slug;

  const query = searchParams.get("query");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(query && { query }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div className="sort w-[150px] float-right hover:underline">
      <label htmlFor="touch">
        <span>Sort By:</span>
      </label>
      <input type="checkbox" id="touch" />

      <ul className="slide bg-white shadow">
        <SortItem item={{ name: "Relevance", slug: null }} />
        <SortItem item={{ name: "Price: Low to High", slug: "price-asc" }} />
        <SortItem item={{ name: "Price: High to Low", slug: "price-desc" }} />
        <SortItem item={{ name: "Rating", slug: "rating" }} />
        <SortItem item={{ name: "Popularity", slug: "popularity" }} />
      </ul>
    </div>
  );
}
