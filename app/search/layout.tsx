import Filter from "@/components/filter";
import Sort from "@/components/filter/sort";

import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-row gap-8 px-4 pb-4 text-black md:flex-row ">
        <div className="order-first bg-gray-100 w-full md:w-fit">
          <Filter />
        </div>
        <div className="order-last min-h-screen w-full md:order-none my-24">
          {children}
        </div>
      </div>
    </Suspense>
  );
}
