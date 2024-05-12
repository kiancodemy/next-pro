"use client";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/type";
import { MdDeleteOutline } from "react-icons/md";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function card() {
  let { cartItems } = useSelector((state: RootState) => state.card);
  return (
    <div
      className="md:max-w-3xl max-w-sm mt-8
  lg:max-w-7xl mx-auto bg-white p-3 lg:p-8 rounded-md"
    >
      <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-12">
        <div className="basis-3/4  flex flex-col gap-y-6">
          {cartItems.length === 0 ? (
            <h1>ایتمی موجود نیست</h1>
          ) : (
            cartItems.map((items: ProductType, index: number) => {
              return (
                <div className="grid-cols-6 lg:p-4 grid gap-x-2">
                  <Image
                    quality={2}
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                      width: "%100",
                    }}
                    width={900}
                    height={100}
                    src={items.image}
                    alt={items.name}
                  ></Image>
                  <div className="col-span-2 text-xs lg:text-lg text-center">
                    <Link
                      className="font-iran text-right"
                      href={`/produt/${items._id}`}
                    >
                      {items.name}
                    </Link>
                  </div>
                  <div className="flex justify-end text-sm gap-x-3 flex-row-reverse">
                    <span>{items.price.toLocaleString()}</span>
                    <span className="hidden lg:block">تومان</span>
                  </div>
                  <select
                    className="rounded-md outline outline-2 outline-offset-2 outline-gray-400 self-start"
                    value={items.qty}
                  >
                    {[...Array(items.countInStock)].map(
                      (value, key: number) => {
                        return <option value={key + 1}>{key + 1}</option>;
                      }
                    )}
                  </select>
                  <div className="flex justify-center">
                    <span className="flex justify-self-center justify-center items-center rounded-md w-8 h-8 bg-gray-100">
                      <MdDeleteOutline className="cursor-pointer text-2xl"></MdDeleteOutline>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="basis-1/4 bg-green-500 self-start">1</div>
      </div>
    </div>
  );
}
