import Link from "next/link";
import React from "react";
import { IoEnterOutline } from "react-icons/io5";
export default function Loginbutton() {
  return (
    <>
      <Link
        href="/login"
        className="flex justify-center hover:bg-mainblue hover:text-white duration-300 gap-x-4 items-center px-4 py-2 bg-lightblue rounded-md text-mainblue"
      >
        <IoEnterOutline className="lg:text-2xl text-sm"></IoEnterOutline>
        <span> ورود</span>
      </Link>
    </>
  );
}
