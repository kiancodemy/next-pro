"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "@/lib/features/productslice";
import Loading from "@/app/loading";
import { Color } from "@/type";
import { toast, Zoom } from "react-toastify";
import Error from "@/app/erro";
import { useGetbyIdQuery, useGetproductsQuery } from "@/lib/api/productslice";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Image from "next/image";

import { FcApproval } from "react-icons/fc";

export default function Product({ id }: { id: string }) {
  const [color, setcolor] = useState("");
  const [qty, setqty] = useState(1);
  const dipatch = useDispatch();
  const { data: find, isLoading, isError } = useGetbyIdQuery(id);
  const additem = () => {
    if (color) {
      dipatch(addItems({ ...find, qty, finalcolor: color }));
      toast.success(
        <span className="font-iran font-bold">
          با موفقیت به سبد کالا اضافه شد
        </span>,
        {
          position: "top-right",
          autoClose: 2000,
          transition: Zoom,
        }
      );
    } else {
      toast.error(
        <span className="font-iran font-bold">
          رنگ مورد نظر را انتخاب کنید
        </span>,
        {
          position: "top-right",
          autoClose: 2000,
          transition: Zoom,
        }
      );
    }
  };
  return isLoading ? (
    <Loading></Loading>
  ) : isError ? (
    <Error></Error>
  ) : (
    <div
      className="dark:bg-night bg-white container  md:max-w-3xl max-w-xs mt-8
  lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-y-6 lg:gap-x-4"
    >
      <div className="lg:grid flex flex-col gap-4 lg:gap-x-8 grid-cols-11">
        <div className=" col-span-4 rounded-md">
          <Image
            className="rounded-md"
            width={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            height={100}
            quality={30}
            src={find.image}
            alt="گوشی موبایل"
          />
        </div>
        <div className="divide-y-[2px] shadow-md dark:divide-white flex flex-col gap-y-6 divide-backgray p-3 col-span-4">
          <h1 className="dark:text-white text-md  lg:text-2xl font-bold text-verydark text-right">
            {find.name}
          </h1>
          <div>
            <div className="flex py-3 dark:text-white text-verydark flex-row-reverse gap-x-1">
              <span>:قیمت</span>
              <span>{find.price.toLocaleString()}</span>
              <span>تومان</span>
            </div>

            <div className="flex dark:text-white justify-end gap-2 items-center">
              <span>گارانتی پس از فروش</span>
              <FcApproval className="text-2xl"></FcApproval>
            </div>
          </div>

          <div>
            <ol className="pl-6 flex flex-col gap-y-3 text-right py-2">
              {find.description.map((item: string) => {
                return (
                  <li
                    key={item}
                    className="flex text-verydark dark:text-white gap-2 justify-end"
                  >
                    <span>{item}</span>
                    <span>●</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="shadow-lg dark:border-white dark:border-2 rounded-md md:self-end lg:self-start p-8 flex flex-col gap-y-8 col-span-3">
          <div className="flex dark:text-white flex-row-reverse justify-between">
            <span>قیمت</span>
            <div className="flex flex-row-reverse gap-x-3">
              <span>{find.price.toLocaleString()}</span>
              <span>تومان</span>
            </div>
          </div>
          <div className="flex dark:text-white  flex-row-reverse justify-between">
            <span>موجودی</span>
            <div>
              {Number(find.countInStock) > 0 ? (
                <span>موجود</span>
              ) : (
                <span>نا موجود</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h1 className="flex flex-row-reverse justify-between">
              <span>رنگ </span>
              <span>{color}</span>
            </h1>
            <div className="flex flex-wrap flex-row-reverse gap-6">
              {find.color.map((items: Color) => (
                <div
                  key={items.code}
                  onClick={() => {
                    setcolor(items.color);
                  }}
                  style={{
                    backgroundColor: items.code,
                  }}
                  className={`w-[30px] border-2 border-solid border-grey-300  ${
                    color === items.color
                      ? "outline-mainblue outline-4 "
                      : "outline-gray-300 outline-2"
                  } outline-offset-4  outline flex justify-center items-center cursor-pointer h-[30px] rounded-full`}
                >
                  {items.color === color && (
                    <FaCheck
                      className={`${
                        items.color === "سفید" ? "text-[#000]" : "text-white"
                      } text-lg`}
                    ></FaCheck>
                  )}
                </div>
              ))}
            </div>
          </div>

          {Number(find.countInStock) > 0 && (
            <div className=" py-6 flex flex-col gap-y-10">
              <div className="flex flex-row-reverse gap-x-3">
                <span>تعداد</span>

                <select
                  value={qty}
                  onChange={(e: any) => setqty(Number(e.target.value))}
                  className="grow dark:bg-night dark:text-white outline outline-2 outline-gray-400 rounded-sm"
                >
                  {[...Array(5)].map((_, item) => {
                    return (
                      <option
                        key={item}
                        className="outline outline-2 outline-gray-400 rounded-sm text-right "
                        value={item + 1}
                      >
                        {item + 1}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                onClick={additem}
                className="bg-mainblue flex items-center py-2 px-2 lg:px-4 dark:bg-gray-500 dark:text-white rounded-md hover:shadow-xl duration-300 flex-row-reverse justify-between text-white"
              >
                <span className="text-sm">اضاف کردن به سبد خرید</span>
                <MdOutlineShoppingCartCheckout className="lg:block hide text-sm lg:text-2xl"></MdOutlineShoppingCartCheckout>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
