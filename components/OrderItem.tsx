"use client";
import React from "react";
import { ITEM } from "@/type";
import Image from "next/image";
export default function OrderItem({ data }: { data: any }) {
  return (
    <div className="flex-col gap-y-3 gap-x-3">
      {data.orderItems.map((item: ITEM) => {
        return (
          <div
            key={`${item.product}`}
            className="flex items-center container py-4  justify-around gap-x-3 flex-row"
          >
            <div className="lg:h-[120px]  shrink-0 h-[60px]">
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

            <h1 className="text-nowrap ">{item.name}</h1>
            <h1 className="flex flex-row gap-x-1">
              <span>تومان</span>
              <span>{item.price.toString()}</span>
            </h1>
            <h1 className="flex gap-x-1">
              <span>{item.qty.toString()}</span>
              <span>*</span>

              <span> {item.price.toString()}</span>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
