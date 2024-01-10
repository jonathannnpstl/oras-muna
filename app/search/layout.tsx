import Filter from "@/components/filter";
import { CardsSkeleton } from "@/components/skeleton";
import { Suspense } from "react";
import { getFilters } from "@/lib/api/data";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-row gap-8 px-4 pb-4 text-black md:flex-row ">
        <div className="order-first w-full md:w-fit">
          <Suspense fallback={<CardsSkeleton />}>
            <Filter />
          </Suspense>
        </div>
        <div className="order-last min-h-screen w-full md:order-none my-24">
          {children}
        </div>
      </div>
    </Suspense>
  );
}
