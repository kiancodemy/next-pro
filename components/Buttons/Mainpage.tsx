import React from "react";
import Link from "next/link";
export default function Mainpage() {
  return (
    <>
      <Link
        href="/"
        className="flex justify-center hover:bg-mainblue hover:text-white duration-300 items-center px-4 py-2 bg-lightblue rounded-md text-mainblue"
      >
        <span className="text-sm lg:text-md">صفحه اصلی</span>
      </Link>
    </>
  );
}
