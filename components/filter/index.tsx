// "use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { grey } from "@mui/material/colors";
import { FilterItemList } from "./item";
import { getBrands } from "@/lib/api/data";

async function BrandsList() {
  const collections = await getBrands();
  return <FilterItemList list={collections} title="Collections" />;
}

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
    <div className="p-3 overflow-hidden">
      <div className="w-[250px] bg-gray-100 h-full text-gray-600  text-base p-3 flex flex-col gap-3">
        <div className="my-2">
          <p className="font-bold my-2">Brand</p>
          {/* <label
            htmlFor="Audemars Piguet"
            className="flex items-center gap-3 my-4 px-3 p-0.5"
          >
            <input
              id="Audemars Piguet"
              type="checkbox"
              value=""
              name="Audemars Piguet"
              className="w-4 h-4 accent-black"
            />
            Audemars Piguet
          </label>
          <label
            htmlFor="Patek Philippe"
            className="flex items-center gap-3 my-4 px-3 p-0.5"
          >
            <input
              id="Patek Philippe"
              type="checkbox"
              value=""
              name="Patek Philippe"
              className="w-4 h-4 accent-black "
            />
            Patek Philippe
          </label>
          <label
            htmlFor="Richard Mille"
            className="flex items-center gap-3 my-4 px-3 p-0.5"
          >
            <input
              id="Richard Mille"
              type="checkbox"
              value=""
              name="Richard Mille"
              className="w-4 h-4 accent-black "
            />
            Richard Mille
          </label>
          <label
            htmlFor="Rolex"
            className="flex items-center gap-3 my-4 px-3 p-0.5"
          >
            <input
              id="Rolex"
              type="checkbox"
              value=""
              name="Rolex"
              className="w-4 h-4 accent-black "
            />
            Rolex
          </label> */}
          <BrandsList />
        </div>
        <div className="my-2">
          <p className="font-bold my-1">Price</p>
          {/* <div className="flex items-center gap-4 justify-center my-4 relative">
            <label htmlFor="min-range">
              <p className="text-sm">Min.</p>
              <input
                min={500000}
                type="number"
                readOnly
                name="min-range"
                value={value[0]}
                className="outline-none border-black border border-solid p-1 max-w-[6rem] rounded"
              />
            </label>
            <span className="absolute top-6">—</span>
            <label htmlFor="max-range">
              <p className="text-sm">Max.</p>
              <input
                max={5000000}
                type="number"
                name="max-range"
                readOnly
                value={value[1]}
                className="outline-none border-black border border-solid p-1 max-w-[6rem] rounded"
              />
            </label>
          </div>

          <div className="mt-[30px]">
            <Slider
              getAriaLabel={() => "Product price in dollars"}
              min={500000}
              max={5000000}
              step={500000}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{
                color: "black",
                "& .MuiSlider-thumb": {
                  borderRadius: "1px",
                },
              }}
            />
          </div> */}
          <div>
            <label htmlFor="descending">
              <input type="radio" name="price" id="descending" />
              Highest to Lowest
            </label>
            <label htmlFor="ascending">
              <input type="radio" name="price" id="ascending" />
              Lowest to Highest
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
