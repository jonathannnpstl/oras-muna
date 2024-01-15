import Banner from "@/components/banner";
import { CardsSkeleton, ProductShowcaseSkeleton } from "@/components/skeleton";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: "Oras muna",
  };
}

export default async function Home() {
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Banner />
      </Suspense>
    </>
  );
}
