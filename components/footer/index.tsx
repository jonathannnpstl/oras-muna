import React from "react";

export default function Footer() {
  return (
    <div className="h-full w-full bg-white shadow border-t-[1px]  border-gray-500 border-solid">
      <div className="flex items-center justify-center flex-col p-6">
        <div className="flex justify-center flex-col w-full md:w-1/2 p-4">
          <p className="text-center  p-3 text-xl">ORAS-MUNA</p>
          <p className="text-center  p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id lobortis nunc. Curabitur elementum at metus quis elementum.{" "}
          </p>
        </div>

        <div className="flex  items-center gap-12 p-5">
          <p>Home</p>
          <p>Brands</p>
          <p>Shop</p>
          <p>About</p>
          <p>Help</p>
        </div>
      </div>
      <div className="flex w-full text-sm p-4 border-t-[1px]  border-gray-200 border-solid">
        <div className=" flex-1 flex justify-center">
          <p className="mr-auto">&copy; 2024 ORAS-MUNA</p>
        </div>
        <div className="flex justify-center   flex-1 ">
          <div className="flex gap-7">
            <p>Data setting</p>
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <p className="ml-auto">Socials</p>
        </div>
      </div>
    </div>
  );
}
