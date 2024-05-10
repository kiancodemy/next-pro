"use client";
import React from "react";

import { GoPersonAdd } from "react-icons/go";
import Link from "next/link";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoEnterOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RootState } from "@/lib/store";
import { CiLight } from "react-icons/ci";
import { useSelector } from "react-redux";
export default function Header() {
  let { cartItems } = useSelector((state: RootState) => state.card);
  return (
    <div className="lg:mt-8 mt-6">
      <main className="bg-white md:max-w-3xl max-w-xs lg:max-w-7xl dark:bg-night dark:text-white rounded-[16px] p-5 lg:p-8 mx-auto flex items-center lg:justify-normal justify-between">
        <div className="flex justify-center gap-2 items-center mr-3">
          <Link
            href="/login"
            className="px-4 py-2 flex items-center gap-2 bg-mainblue rounded-md text-white"
          >
            <GoPersonAdd className="text-xl text-white"></GoPersonAdd>
            <span> عضویت</span>
          </Link>
          <button className="flex justify-center hover:bg-mainblue hover:text-white duration-300 gap-4 items-center px-4 py-2 bg-lightblue rounded-md text-mainblue">
            <IoEnterOutline className="text-2xl"></IoEnterOutline>
            <span> ورود</span>
          </button>
        </div>
        <div className="w-[50px] dark:hover:bg-backgray dark:bg-verydark hover:bg-verydark hover:text-backgray duration-300 bg-backgray mr-10 mx-3 hidden lg:flex justify-center items-center text-verydark h-[50px] rounded-full">
          <CiLight className="text-3xl dark:hover:text-verydark  dark:text-white"></CiLight>
        </div>
        <div className="lg:flex hidden lg:grow mx-5 gap-2 bg-backgray rounded-[14px] py-2 px-4 text-verydark items-center">
          <input
            type="text"
            className="bg-backgray text-darkblue text-right grow focus:border-transparent focus:outline-none"
            placeholder="دنبال چی میگردی؟"
          />
          <IoIosSearch className="text-2xl text-"></IoIosSearch>
        </div>
        <div className="relative lg:flex hidden items-center p-2 rounded-full text-2xl bg-backgray text-darkblue  mx-4  justify-center ">
          <MdOutlineShoppingCartCheckout></MdOutlineShoppingCartCheckout>
          <span className="absolute  text-sm bg-mainblue text-white p-2 flex justify-center w-8 h-8 items-center -top-[25px] -right-[25px] text-md rounded-md">
            {cartItems.reduce((acc: number, item: any) => acc + item.qty, 0)}
          </span>
        </div>
        <h1 className="font-boldblock font-bold hidden lg:block dark:text-white text-verydark font-iran text-4xl">
          فروشگاه من
        </h1>
        <div className="lg:hidden">
          <TiThMenu className="text-verydark text-2xl"></TiThMenu>
        </div>
      </main>
    </div>
  );
}
