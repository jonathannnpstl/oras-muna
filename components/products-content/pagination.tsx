"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";

export default function PageItem({
  number,
  len,
}: {
  number: number;
  len: number;
}) {
  const pageNumber = number.toString();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let currentPage: string | null = searchParams.get("page");
  currentPage = currentPage ? currentPage : "1";
  const active = currentPage === pageNumber;
  const greaterThanOne = len > 1;

  const query = searchParams.get("query");
  let urlObj = {
    query,
  };

  //idk, gonna solve this tommorrow. brain hurts aloooooooottttttttt!!!!
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(query && { query }),
      ...(pageNumber && { page: pageNumber }),
    })
  );

  const DynamicTag = active ? "p" : Link;
  return (
    <>
      <DynamicTag
        className={clsx(
          "w-[40px] h-[40px] flex content-center flex-wrap justify-center border-grey-600 border-[1px] border-solid ",
          {
            "border-black": active,
          }
        )}
        href={href}
      >
        <span className="text-center">{pageNumber}</span>
      </DynamicTag>
    </>
  );
}
