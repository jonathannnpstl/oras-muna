"use client";
import React, { useEffect } from "react";
import { getBrands } from "@/lib/api/data";
import { BrandItemList } from "./brand";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { getBrandsList } from "@/lib/redux/features/brandSlice";

export default async function BrandsList() {
  //tried to remove the dynamicity?? of the element
  // const brands = await getBrands();
  const dispatch = useAppDispatch();

  const { brands, loading } = useAppSelector((state) => state.brand);

  return <>{!loading ? <BrandItemList brands={brands} /> : null}</>;
}
