"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <section>
      <div
        className="fixed top-8 right-8 cursor-pointer p-1.5"
        onClick={() => setToggleMenu(true)}
      >
        <div className="bg-greenColor w-8 h-1 rounded-full mb-2"></div>
        <div className="bg-greenColor w-8 h-1 rounded-full"></div>
      </div>

      <div
        className={`bg-whiteElementColor fixed right-0 top-0 h-screen mobile:w-full tablet:w-1/2 laptop:w-1/4 ${
          toggleMenu ? "openMenu" : "closeMenu"
        }`}
      >
        <div className="flex flex-col items-center pt-10">
          <div
            className="relative flex justify-center items-center mb-16 cursor-pointer w-9 h-9"
            onClick={() => setToggleMenu(false)}
          >
            <div className="absolute bg-greenColor w-8 h-1 rounded-full rotate-45"></div>
            <div className="absolute bg-greenColor w-8 h-1 rounded-full -rotate-45"></div>
          </div>
          <Link
            href="/"
            shallow={true}
            className="w-full flex justify-center py-3 hover:bg-darkBlueColor hover:text-whiteTextColor cursor-pointer"
          >
            <p className="text-darkBlue text-xl font-mono">Home</p>
          </Link>
          <Link
            href="/astronomy"
            shallow={true}
            className="w-full flex justify-center py-3 hover:bg-darkBlueColor hover:text-whiteTextColor cursor-pointer"
          >
            <p className="text-darkBlue text-xl font-mono">Astronomy</p>
          </Link>
          <div className="w-full flex justify-center py-3 hover:bg-darkBlueColor hover:text-whiteTextColor cursor-pointer">
            <p className="text-darkBlue text-xl font-mono">Menu1</p>
          </div>
          <div className="w-full flex justify-center py-3 hover:bg-darkBlueColor hover:text-whiteTextColor cursor-pointer">
            <p className="text-darkBlue text-xl font-mono">Menu1</p>
          </div>
          <div className="w-full flex justify-center py-3 hover:bg-darkBlueColor hover:text-whiteTextColor cursor-pointer">
            <p className="text-darkBlue text-xl font-mono">Menu1</p>
          </div>
          <div className="w-full flex justify-center py-3 hover:bg-darkBlueColor hover:text-whiteTextColor cursor-pointer">
            <p className="text-darkBlue text-xl font-mono">Menu1</p>
          </div>
        </div>
      </div>
    </section>
  );
}
