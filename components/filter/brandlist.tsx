"use client";
import React, { useEffect } from "react";
import { getBrands } from "@/lib/api/data";
import { BrandItemList } from "./brand";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export default async function BrandsList() {
  //tried to remove the dynamicity?? of the element
  // const brands = await getBrands();
  const dispatch = useAppDispatch();

  return <></>;
}
