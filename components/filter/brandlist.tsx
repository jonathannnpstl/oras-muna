"use server";

import { getBrands } from "@/lib/api/data";
import { FilterItemList } from "./item";

export default async function BrandsList() {
  //tried to remove the dynamicity?? of the element
  const brands = await getBrands();

  return <FilterItemList brands={brands} />;
}
