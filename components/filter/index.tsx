"use client";

import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { grey } from "@mui/material/colors";
import { FilterItemList } from "./item";
import { getBrands } from "@/lib/api/data";
import Dropdowns from "./dropdowns";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useDispatch } from "react-redux";
import { filterProducts } from "@/lib/redux/features/productSlice";
import BrandsList from "./brandlist";

export default function Filter() {
  const dispatch = useAppDispatch();
  const { products, numberOfPages, loading } = useAppSelector(
    (state) => state.product
  );
  const color = grey[900];
  function valuetext(value: number) {
    return `${value}$`;
  }
  // const [value, setValue] = useState<number[]>([1500000, 4000000]);
  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  // };
  const data = {
    caseMaterial: ["rose gold"],
    bandColor: ["brown"],
    dialColor: ["brown"],
  };
  const handleClick = () => {
    dispatch(filterProducts(data));
  };
  return (
    <>
      <div className="sticky top-[72px] overflow-hidden">
        <div
          className="w-[250px] text-gray-500 p-2 h-screen overflow-y-scroll text-sm flex flex-col gap-3"
          id="filter-scrollbar"
        >
          <div className="my-2">
            <p className="">Brands</p>
            {/* <BrandsList /> */}
          </div>
          <button onClick={(e) => handleClick()}>Filter work</button>
          <div className="my-2">
            <p className="">Band Color</p>
            <label>
              <input
                type="checkbox"
                // value={label}
                // checked={isChecked}
                // onChange={this.toggleCheckboxChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="checkbox"
                // value={label}
                // checked={isChecked}
                // onChange={this.toggleCheckboxChange}
              />
              Option 2
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
