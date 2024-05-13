"use client";
import React from "react";
import Image from "next/image";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductType } from "@/type";
import { MdDeleteOutline } from "react-icons/md";
import { RootState } from "@/lib/store";

import { useSelector, useDispatch } from "react-redux";
import { deleteItem, addItems } from "@/lib/features/productslice";
import Link from "next/link";

export default function card() {
  let { cartItems } = useSelector((state: RootState) => state.card);

  const dispatch = useDispatch();
  return (
    <div
      className="md:max-w-3xl max-w-sm mt-8
  lg:max-w-7xl mx-auto bg-white p-3 lg:p-8 rounded-md"
    >
      <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-12">
        <div className="basis-3/4  flex flex-col gap-y-6">
          {cartItems.length === 0 ? (
            <h1 className="p-6 text-center lg:text-4xl font-iran font-bold text-2xl">
              هنوز محصولی انتخاب نکردید
            </h1>
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
                    onChange={(e) => {
                      dispatch(
                        addItems({ ...items, qty: Number(e.target.value) })
                      );
                      toast.success(
                        <span className="font-iran font-bold">
                          با موفقیت تغییر کرد
                        </span>,
                        {
                          position: "top-right",
                          autoClose: 2000,
                          transition: Zoom,
                        }
                      );
                    }}
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
                      <MdDeleteOutline
                        onClick={() => {
                          dispatch(deleteItem(items));
                          toast.success(
                            <span className="font-iran font-bold">
                              با موفقیت حذف شد
                            </span>,
                            {
                              position: "top-right",
                              autoClose: 2000,
                              transition: Zoom,
                            }
                          );
                        }}
                        className="cursor-pointer text-2xl"
                      ></MdDeleteOutline>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="basis-1/4 py-6 gap-y-4 px-3 flex flex-col border-2 rounded-md shadow-lg border-backgray lg:self-start">
          <div className="gap-x-3 flex justify-end">
            <span>
              {cartItems.reduce(
                (acc: number, value: ProductType) => acc + value.qty,
                0
              )}
            </span>
            <span>تعداد کل اجناس</span>
          </div>
          <div className="flex flex-row-reverse justify-start items-center gap-x-3 ">
            <span>قیمت</span>
            <span>
              {cartItems
                .reduce(
                  (acc: number, item: ProductType) =>
                    acc + item.price * item.qty,
                  0
                )
                .toLocaleString()}
            </span>
          </div>
          <Link
            className="text-white bg-mainblue hover:bg-darkblue duration-300 py-2 px-6 text-center rounded-md"
            href="/checkout"
          >
            ادامه
          </Link>
        </div>
      </div>
    </div>
  );
}
