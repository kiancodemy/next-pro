"use client";
import React from "react";
import Error from "@/app/erro";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";
import { ProductType } from "@/type";

import { useGetproductsQuery } from "@/lib/api/productslice";
export default function Home() {
  const { data: item, isLoading, isError } = useGetproductsQuery("products");

  return isLoading ? (
    <Loading></Loading>
  ) : isError ? (
    <Error></Error>
  ) : (
    <div
      id="kian"
      className=" dark:bg-night container bg-white md:max-w-3xl max-w-[350px]  mt-8
      lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      <h1 className="text-right dark:text-white font-bold lg:text-4xl text-2xl text-verydark">
        آخرین محصولات
      </h1>
      <div className=" dark:text-white mt-4 dark:bg-night grid md:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-4  md:max-w-3xl  rounded-md max-w-xs  lg:max-w-7xl mx-auto">
        {item.map((item: ProductType) => {
          return (
            <div
              key={item._id}
              className="hover:shadow-xl dark:bg-night dark:text-white bg-white duration-300 hover:-translate-y-1 p-4 justify-between flex gap-6 flex-col shadow-lg border-inherit border-2 rounded-[16px] "
            >
              <Image
                className="rounded-md"
                quality={1}
                width={900}
                height={100}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={item.image}
                alt="موبایل"
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
