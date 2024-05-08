"use client";
import React from "react";
import Error from "@/app/erro";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";
import { ProductType } from "@/type";

import { useGetproductsQuery } from "@/lib/api/productslice";
export default function Home() {
  const {
    data: item,
    isLoading,
    isError,
    error,
  } = useGetproductsQuery("products");

  return isLoading ? (
    <Loading></Loading>
  ) : isError ? (
    <Error></Error>
  ) : (
    <div
      className=" dark:bg-night md:max-w-3xl max-w-xs mt-8
      lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      <h1 className="text-right dark:text-white font-bold lg:text-4xl text-2xl text-verydark">
        آخرین محصولات
      </h1>
      <div className="p-4 dark:text-white dark:bg-night grid md:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-4  md:max-w-3xl  rounded-md max-w-xs  lg:max-w-7xl mx-auto">
        {item?.map((item: ProductType) => {
          return (
            <div
              key={item._id}
              className="hover:shadow-xl dark:bg-night dark:text-white bg-white duration-300 hover:-translate-y-1 p-4 justify-between flex gap-6 flex-col shadow-lg border-inherit border-2 rounded-[16px] "
            >
              <Image
                priority
                className="rounded-md"
                width={900}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                height={100}
                quality={1}
                src={item.image}
                alt="گوشی موبایل"
              />
              <Link className=" text-right" href={`/product/${item._id}`}>
                {item.name}
              </Link>

              <h2 className=" flex flex-row-reverse gap-2 text-right">
                <span> {item.price.toLocaleString()}</span>
                <span>تومان</span>
              </h2>
            </div>
          );
        })}
      </div>
      <h1 className="text-right"></h1>
    </div>
  );
}
