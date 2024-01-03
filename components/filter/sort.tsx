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

  const newParams = new URLSearchParams(searchParams.toString());
  // newParams.delete("query");
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
          "w-full p-2 px-3 text-sm text-gray-600 hover:bg-gray-200 dark:hover:text-gray-900",
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
    <div className="sort">
      <label htmlFor="touch">
        <span>Sort By:</span>
      </label>
      <input type="checkbox" id="touch" />

      <ul className="slide bg-white">
        {/* <li>
          <a href={createUrl(pathname, new URLSearchParams(""))}>Relevance</a>
        </li> */}
        <SortItem item={{ name: "Relevance", slug: null }} />
        <SortItem item={{ name: "Price: Low to High", slug: "price-asc" }} />
        <SortItem item={{ name: "Price: High to Low", slug: "price-desc" }} />
        <SortItem item={{ name: "Rating", slug: "rating" }} />
        <SortItem item={{ name: "Popularity", slug: "popularity" }} />
        {/* <li>
          <a href={createUrl(pathname, new URLSearchParams("sort=price-desc"))}>
            <p>Price: High to Low</p>
          </a>
        </li>
        <li>
          <a href={createUrl(pathname, new URLSearchParams("sort=rating"))}>
            Rating
          </a>
        </li>
        <li>
          <a href={createUrl(pathname, new URLSearchParams("sort=popularity"))}>
            Popularity
          </a>
        </li> */}
      </ul>
    </div>
  );
}
