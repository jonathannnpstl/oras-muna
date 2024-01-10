"use client";

import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { grey } from "@mui/material/colors";
import { BrandItemList } from "./brand";
import { getBrands } from "@/lib/api/data";
import Dropdowns from "./dropdowns";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useDispatch } from "react-redux";
import BrandsList from "./brandlist";
import CheckboxFilter from "./checkboxfilter";
import { getFiltersList } from "@/lib/redux/features/filterSlice";
export default function Filter() {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getFiltersList());
  // }, []);
  const { filters, loading } = useAppSelector((state) => state.filter);

  const color = grey[900];
  function valuetext(value: number) {
    return `${value}$`;
  }
  // const [value, setValue] = useState<number[]>([1500000, 4000000]);
  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  // };

  return (
    <>
      <div className="sticky top-[72px] overflow-hidden">
        <div
          className="w-[250px] text-gray-500 p-2 h-screen overflow-y-scroll text-sm flex flex-col gap-3"
          id="filter-scrollbar"
        >
          <div className="mb-20">
            {filters && !loading
              ? filters.map((filter, i) => (
                  <CheckboxFilter
                    key={i}
                    filterCategory={filter.filterType}
                    filterItems={filter.filterItems}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
