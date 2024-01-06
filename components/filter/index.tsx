import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { grey } from "@mui/material/colors";
import { FilterItemList } from "./item";
import { getBrands } from "@/lib/api/data";
import Dropdowns from "./dropdowns";

async function BrandsList() {
  //tried to remove the dynamicity?? of the element
  const brands = await getBrands();

  return <FilterItemList brands={brands} />;
}

async function checkBoxes() {}
export default function Filter() {
  const color = grey[900];
  function valuetext(value: number) {
    return `${value}$`;
  }
  // const [value, setValue] = useState<number[]>([1500000, 4000000]);
  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  // };

  return (
    <div className="sticky top-[72px] overflow-hidden">
      <div
        className="w-[250px] text-gray-500 p-2 h-screen overflow-y-scroll text-sm flex flex-col gap-3"
        id="filter-scrollbar"
      >
        <div className="my-2">
          <p className="">Brands</p>
          <BrandsList />
        </div>
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
  );
}
