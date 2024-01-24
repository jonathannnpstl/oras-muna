"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { sorting } from "@/lib/constants";
import { useAppDispatch } from "@/lib/redux/hooks";
import { openModal } from "@/lib/redux/features/modalSlice";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function SortItem({
  item,
}: {
  item: { name: string; slug: string | null };
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = searchParams.get("sort") === item.slug;
  let newParams = new URLSearchParams(searchParams.toString());

  if (item.slug) {
    newParams.set("sort", item.slug);
  } else {
    newParams.delete("sort");
  }
  const href = createUrl(pathname, newParams);
  const DynamicTag = active ? "span" : Link;
  return (
    <>
      <DynamicTag href={href}>
        <p
          className={clsx(
            "w-full p-2 px-3 text-xs sm:text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900",
            {
              "bg-gray-200": active,
            }
          )}
        >
          {item.name}
        </p>
      </DynamicTag>
    </>
  );
}

export default function Sort() {
  const dispatch = useAppDispatch();
  const openFilters = () => {
    document.body.style.overflow = "hidden";
    dispatch(openModal());
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <AdjustmentsVerticalIcon
          className="md:hidden block h-8 w-8 p-1"
          onClick={(e) => openFilters()}
        />
        <div className=" top-16 w-28 text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-base font-medium text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                Sort by
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5 text-gray-800 hover:text-black"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-[999] right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {sorting.map((sort, i) => {
                    return (
                      <Menu.Item key={i}>
                        <SortItem
                          key={i}
                          item={{ name: sort.title, slug: sort.slug }}
                        />
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}
