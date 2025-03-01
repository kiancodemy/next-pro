"use client";
import React from "react";

import { toast, Zoom } from "react-toastify";

import { useRouter } from "next/navigation";
import Profileorder from "@/components/Profileorder";
import { OrderType } from "@/type";
import Loading from "@/app/loading";
import { useGetorderbyidQuery, useSetToPaidMutation } from "@/lib/api/orders";

export default function Page({ params }: { params: OrderType }) {
  const router = useRouter();

  const { data, isLoading } = useGetorderbyidQuery(params.id);
  const [updater] = useSetToPaidMutation();

  const update = async () => {
    try {
      await updater(params.id);

      toast.success(
        <span className="font-iran font-bold">پرداخت موفقیت آمیز بود</span>,
        {
          position: "top-right",
          autoClose: 1500,
          transition: Zoom,
        }
      );
      router.push("/profile");
    } catch (err) {
      toast.error(
        <span className="font-iran font-bold">پرداخت موفقیت آمیز نبود</span>,
        {
          position: "top-right",
          autoClose: 1500,
          transition: Zoom,
        }
      );
    }
  };

  return (
    <div
      className=" dark:bg-night container  bg-white md:max-w-3xl max-w-[350px]  mt-8
  lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="flex lg:flex-row flex-col gap-y-6 gap-x-2 ">
          <div className="grow flex flex-col basis-[60%]">
            <Profileorder data={data}></Profileorder>
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
            <button
              onClick={update}
              className="bg-mainblue hover:bg-verydark duration-500 text-white rounded-md py-2 px-6"
            >
              پرداخت
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
