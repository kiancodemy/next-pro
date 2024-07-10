"use client";

import React from "react";
type OrderType = {
  id: String;
};

import OrderItem from "@/components/OrderItem";
import Loading from "@/app/loading";
import { useGetorderbyidQuery } from "@/lib/api/orders";
export default function page({ params }: { params: OrderType }) {
  const { data, isLoading } = useGetorderbyidQuery(params.id);

  return (
    <div
      className=" dark:bg-night bg-white md:max-w-3xl max-w-[350px]  mt-8
  lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="flex lg:flex-row flex-col gap-y-6 gap-x-2 ">
          <div className="grow flex flex-col basis-[60%]">
            <OrderItem data={data}></OrderItem>
          </div>
          <div className="basis-[30%] py-6 px-2 shadow-md flex flex-col gap-y-6 rounded-md">
            <div className="flex justify-between px-2">
              <h1 className="flex flex-row-reverse gap-x-1">
                <span>{data.itemPrice.toLocaleString()}</span>تومان
                <span></span>
              </h1>
              <h1>هرینه اجناس</h1>
            </div>
            <div className="flex justify-between px-2">
              <h1 className="flex flex-row-reverse gap-x-1">
                <span>{data.shippingPrice.toLocaleString()}</span>
                تومان<span></span>
              </h1>
              <h1>هزینه ارسال</h1>
            </div>
            <div className="flex justify-between px-2">
              <h1 className="flex flex-row-reverse gap-x-1">
                <span>{data.taxPrice.toLocaleString()}</span>
                <span>تومان</span>
              </h1>
              <h1>مالیات</h1>
            </div>
            <div className="flex justify-between px-2">
              <h1 className="flex flex-row-reverse gap-x-1">
                <span>{data.totalPrice.toLocaleString()}</span>
                <span>تومان</span>
              </h1>
              <h1>هرینه کل</h1>
            </div>
            <button className="bg-mainblue hover:bg-verydark duration-500 text-white rounded-md py-2 px-6">
              پرداخت
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
