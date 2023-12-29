"use client";
import { useState } from "react";

const options = [
  {
    key: "Default",
    text: "Default",
    value: "Default",
  },
  {
    key: "Price",
    text: "Price",
    value: "Price",
  },
  {
    key: "Rating",
    text: "Rating",
    value: "Rating",
  },
  {
    key: "Popularity",
    text: "Popularity",
    value: "Popularity",
  },
];

export default function Dropdowns() {
  const [value, setValue] = useState<string>("Default");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return <></>;
}
