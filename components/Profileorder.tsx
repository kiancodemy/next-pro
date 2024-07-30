"use client";
import React from "react";
import { ITEM } from "@/type";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import Image from "next/image";
export default function Profileorder({ data }: { data: any }) {
  const router = useRouter();
  return (
    <div className="flex-col py-4 gap-y-3 gap-x-3">
      {data.orderItems.map((item: ITEM) => {
        return (
          <div
            key={`${item.product}`}
            className="flex items-center border-b-black border-b-2 dark:border-white container py-4  justify-around gap-x-4 flex-row"
          >
            <div className="lg:h-[120px] shrink-0 h-[60px]">
              <Image
                alt="kian"
                width={200}
                height={100}
                style={{
                  borderRadius: "5px",
                  objectFit: "cover",
                  width: "auto",
                  height: "100%",
                }}
                src={`${item.image}`}
              ></Image>
            </div>

            <h1 className="text-nowrap border-r-2 px-3 border-gray-300">
              {item.name}
            </h1>
            <h1 className="px-3 border-gray-300 flex flex-row  gap-x-2 border-r-2">
              <span>تومان</span>
              <span>{item.price.toString()}</span>
            </h1>
            <h1 className=" px-3 border-gray-300 flex gap-x-2 border-r-2 ">
              <span>{item.qty.toString()}</span>
              <span>*</span>

              <span> {item.price.toString()}</span>
            </h1>
            <h1
              className={` flex border-r-2 px-3 border-gray-300 ${
                !data.isPaid && "cursor-pointer"
              } justify-center items-center flex-row-reverse gap-x-2`}
              onClick={() => {
                !data.isPaid && router.push(`/orders/${data._id}`);
              }}
            >
              <span className="text-nowrap">
                {data.isPaid ? "پرداخت شده" : "پرداخت نشده"}
              </span>
              <span>
                {data.isPaid ? (
                  <FaCheck className="text-green-500"></FaCheck>
                ) : (
                  <FaXmark className="text-red-500"></FaXmark>
                )}
              </span>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
