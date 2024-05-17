"use client";
import React from "react";
import { logout } from "@/lib/features/auth";
import { IoPersonOutline } from "react-icons/io5";
import { toast, Zoom } from "react-toastify";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "@/lib/api/authslice";
export default function Dropdown({ children }: { children: string }) {
  const router = useRouter();
  const [open, setopen] = useState<boolean>(false);
  const [data, { isLoading: isUpdating }] = useLogoutMutation();
  const diapatch = useDispatch();
  const exit = async () => {
    const a = await data(1);
    await diapatch(logout());
    router.push("/");
    toast.success(
      <span className="font-iran font-bold">خروج با موفقیت انجام شد</span>,
      {
        position: "top-right",
        autoClose: 2000,
        transition: Zoom,
      }
    );
  };
  return (
    <div
      onClick={() => setopen((prev) => !prev)}
      className="px-6 relative cursor-pointer flex-row-reverse  hidden py-2 lg:flex items-center gap-x-8 bg-mainblue rounded-md text-white"
    >
      <span>{children}</span>
      <IoPersonOutline className="text-xl  text-white"></IoPersonOutline>
      {open && (
        <div className="absolute divide-y p-2 bg-mainblue text-white flex flex-col gap-y-3 right-0 left-0 rounded-md  top-11 w-full">
          <button
            onClick={() => router.push("/profile")}
            className="hover:text-black text-sm py-1 duration-300 text-nowrap"
          >
            اطلاعات شخصی
          </button>
          <button
            onClick={exit}
            className="hover:text-black text-sm py-1 duration-300"
          >
            خروج
          </button>
        </div>
      )}
    </div>
  );
}
