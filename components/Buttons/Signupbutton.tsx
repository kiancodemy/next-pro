import React from "react";
import Link from "next/link";
import { GoPersonAdd } from "react-icons/go";
export default function Signupbutton() {
  return (
    <>
      <Link
        href="/signin"
        className="px-4 justify-center py-2 flex items-center gap-2 bg-mainblue rounded-md text-white"
      >
        <GoPersonAdd className="text-xl text-white"></GoPersonAdd>
        <span>عضویت</span>
      </Link>
    </>
  );
}
