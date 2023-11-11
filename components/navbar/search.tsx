import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  return (
    <form className="w-max-[850px] relative w-full xl:w-full">
      <input
        // key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="What do you search about?"
        autoComplete="off"
        // defaultValue={searchParams?.get('q') || ''}
        className="w-full border outline-none bg-white px-4 py-2 text-sm text-black border-gray-800 placeholder:border-gray-600"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
