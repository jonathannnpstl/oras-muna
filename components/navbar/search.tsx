"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { ReadonlyURLSearchParams } from "next/navigation";

const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // const handleSearch = useDebouncedCallback((term) => {
  //   const params = new URLSearchParams(searchParams);
  //   if (term) {
  //     params.set("query", term);
  //   } else {
  //     params.delete("query");
  //   }

  //   replace(`search?${params.toString()}`);
  // }, 500);
  const pathName = usePathname();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("query", search.value);
    } else {
      newParams.delete("query");
    }
    if (pathName.includes("search")) {
      router.push(createUrl(pathName, newParams));
    } else {
      router.push(createUrl("/search", newParams));
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-max-[850px] relative w-full xl:w-full"
    >
      <input
        key={searchParams?.get("query")}
        type="text"
        name="search"
        placeholder="Search products..."
        autoComplete="off"
        defaultValue={searchParams.get("query")?.toString()}
        className="w-full border-b outline-none bg-white px-4 py-2 text-sm text-black border-gray-900 placeholder:border-gray-600"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
