"use client";
import React from "react";

import { IoPersonOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useLogoutMutation } from "@/lib/api/authslice";
export default function Dropdown() {
  const [open, setopen] = useState<boolean>(false);
  const [data, { isLoading: isUpdating }] = useLogoutMutation();
  const { userinfo } = useSelector((state: any) => state.auth);

  return (
    userinfo.isAdmin && (
      <div
        onClick={() => setopen((prev) => !prev)}
        className="px-6 relative cursor-pointer flex-row-reverse  hidden py-2 lg:flex items-center gap-x-8 bg-mainblue rounded-md text-white"
      >
        <span>پنل مدیریت</span>
        <IoPersonOutline className="text-xl  text-white"></IoPersonOutline>
        {open && (
          <div className="absolute divide-y p-2 bg-mainblue text-white flex flex-col gap-y-3 right-0 left-0 rounded-md  top-11 w-full">
            <button className="hover:text-black text-sm py-1 duration-300 text-nowrap">
              کاربران
            </button>
            <button className="hover:text-black text-sm py-1 duration-300">
              محصولات
            </button>
            <button className="hover:text-black text-sm py-1 duration-300">
              کاربران
            </button>
          </div>
        )}
      </div>
    )
  );
}
