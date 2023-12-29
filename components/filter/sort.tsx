"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { createUrl } from "@/lib/utils";

export default function Sort() {
  const pathname = usePathname();

  return (
    <div className="sort">
      <label htmlFor="touch">
        <span>Sort By:</span>
      </label>
      <input type="checkbox" id="touch" />

      <ul className="slide">
        <li>
          <a href={createUrl(pathname, new URLSearchParams(""))}>Relevance</a>
        </li>
        <li>
          <a href={createUrl(pathname, new URLSearchParams("sort=price-asc"))}>
            Price: Low to High
          </a>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  );
}
