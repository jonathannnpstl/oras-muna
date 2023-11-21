"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`search?${params.toString()}`);
  }, 500);
  return (
    <form className="w-max-[850px] relative w-full xl:w-full">
      <input
        // key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="Search products..."
        autoComplete="off"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // defaultValue={searchParams?.get('q') || ''}
        defaultValue={searchParams.get("query")?.toString()}
        className="w-full border-b outline-none bg-white px-4 py-2 text-sm text-black border-gray-900 placeholder:border-gray-600"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
