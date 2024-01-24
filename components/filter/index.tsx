"use client";

import React, { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import CheckboxFilter from "./checkboxfilter";
import { getFiltersList } from "@/lib/redux/features/filterSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { closeModal } from "@/lib/redux/features/modalSlice";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createUrl } from "@/lib/utils";

export default function Filter() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFiltersList());
  }, []);
  const { filters, loading } = useAppSelector((state) => state.filter);
  const { open } = useAppSelector((state) => state.modal);

  const color = grey[900];
  function valuetext(value: number) {
    return `${value}$`;
  }
  // const [value, setValue] = useState<number[]>([1500000, 4000000]);
  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  // };
  const closeFilters = () => {
    dispatch(closeModal());
    document.body.style.overflow = "auto";
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();
  let newParams = new URLSearchParams(searchParams.toString());
  newParams.delete("caseMaterial");
  newParams.delete("dialColor");
  newParams.delete("bandColor");
  const href = createUrl(pathname, newParams);

  return (
    <>
      <div
        className={clsx(
          "md:sticky z-[12] md:block md:z-[5] w-screen h-full w-full top-0 left-0 md:top bg-[#fefefe] order-first md:w-fit",
          {
            "hidden top-0": !open,
            "block fixed": open,
          }
        )}
      >
        <div
          className="md:w-[250px] w-full text-gray-500 md:p-2 h-screen overflow-y-scroll text-sm flex flex-col gap-3"
          id="filter-scrollbar"
        >
          <div
            className="block md:hidden fixed bg-[#fefefe] z-[15] pt-2 w-full"
            onClick={(e) => closeFilters()}
          >
            <XMarkIcon className="h-7 w-7 ml-auto mr-8" />
          </div>
          <div className="my-5 relative h-full md:px-0 px-4">
            {filters && !loading
              ? filters.map((filter, i) => (
                  <CheckboxFilter
                    key={i}
                    filterCategory={filter.filterType}
                    filterItems={filter.filterItems}
                  />
                ))
              : null}
            <div className="block md:hidden text-base flex items-center gap-4 m-y-4">
              <Link
                href={href}
                className="text-black text-center w-full bg-white py-6 border border-black border-solid"
              >
                Remove Filters
              </Link>
              <button
                className="text-white text-center w-full bg-black py-6"
                onClick={() => closeFilters()}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
