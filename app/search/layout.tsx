import Filter from "@/components/filter";
import { CardsSkeleton } from "@/components/skeleton";
import StoreProvider from "./StoreProvider";

import { Suspense } from "react";
import { getFilters } from "@/lib/api/data";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <Suspense>
        <div className="mx-auto flex max-w-screen-2xl flex-row gap-8 pb-4 text-black md:flex-row ">
          <Suspense fallback={<CardsSkeleton />}>
            <Filter />
          </Suspense>
          {children}
        </div>
      </Suspense>
    </StoreProvider>
  );
}
