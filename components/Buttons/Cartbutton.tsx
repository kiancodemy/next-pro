import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RootState } from "@/lib/store";
export default function Cartbutton() {
  let { cartItems } = useSelector((state: RootState) => state.card);

  return (
    <>
      <Link
        href="/card"
        className="relative hover:shadow-md duration-300 lg:flex  items-center p-2 rounded-full text-2xl bg-backgray text-darkblue  mx-4  justify-center "
      >
        <MdOutlineShoppingCartCheckout></MdOutlineShoppingCartCheckout>
        <span className="absolute  text-sm bg-mainblue text-white p-1 flex justify-center w-6 h-6 lg:w-8 lg:h-8 items-center -top-[10px] lg:-top-[25px] -right-[15px] lg:-right-[25px] text-md rounded-md">
          {cartItems.reduce((acc: number, item: any) => acc + item.qty, 0)}
        </span>
      </Link>
    </>
  );
}
