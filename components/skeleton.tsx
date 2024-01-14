import React from "react";

export default function CardSkeleton() {
  return (
    <div className="animate-pulse relative overflow-hidden bg-gray-50">
      <div className="w-full">
        <div className="w-full h-[340px]"></div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      {Array(9)
        .fill(0)
        .map((_, i) => {
          return <CardSkeleton key={i} />;
        })}
    </>
  );
}
export function ProductShowcaseSkeleton() {
  return (
    <div className="animate-pulse max-h max-w-6xl">
      <div className="md:flex ">
        <div className="sm:shrink-0 grow shrink basis-0 p-6 self-start">
          <div className="w-full h-48 sm:h-[600px] bg-gray-200"></div>
        </div>
        <div className="grow shrink basis-0 m-6 self-start">
          <div className="bg-gray-300 h-10 w-11/12 "></div>
          <div className="my-2 bg-gray-300 h-6 w-1/4"></div>
          <div className="my-2 bg-gray-200 h-4 w-full"></div>
          <div className="my-2 bg-gray-200 h-4 w-9/12"></div>
          <div className=" flex overflow-hidden my-5 items-center">
            <div className="my-8 h-9 w-[75px] bg-gray-200"></div>
            <div className="bg-gray-100 h-9 mx-[20px] w-[100px] sm:mx-[50px]">
              <div className="ml-auto flex "></div>
            </div>
          </div>
          <div className="sm:flex sm:gap-x-4 text-sm my-4">
            <div className="bg-gray-800 h-11 w-full "></div>
          </div>
          <div className="my-12">
            <div className="h-10 w-full bg-gray-200 my-2"></div>
            <div className="h-10 w-full bg-gray-200 my-2"></div>
            <div className="h-10 w-full bg-gray-200 my-2"></div>
            <div className="h-10 w-full bg-gray-200 my-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
