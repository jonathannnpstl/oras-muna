import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { grey } from "@mui/material/colors";
import { FilterItemList } from "./item";
import { getBrands } from "@/lib/api/data";
import Dropdowns from "./dropdowns";

async function BrandsList() {
  //tried to remove the dynamicity?? of the element
  const collections = await getBrands();
  return <FilterItemList />;
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
    <div className="p-3 sticky top-[72px] overflow-hidden">
      <div className="w-[250px]  h-full text-gray-600  text-base  flex flex-col gap-3">
        <div className="my-2">
          <p className="font-bold ">Brand</p>
          <BrandsList />
        </div>
        Color
      </div>
    </div>
  );
}
