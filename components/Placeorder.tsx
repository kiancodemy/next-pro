"use client";

import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Protect } from "@/lib/protect/protext";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "@/type";
import { addresstype } from "@/type";
import { clearCard } from "@/lib/features/productslice";
import Image from "next/image";
import { useEffect } from "react";

import Link from "next/link";
import { useCreateorderMutation } from "@/lib/api/orders";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { toast, Zoom } from "react-toastify";
import Process from "./Process";
export default function Placeorder() {
  const { address }: { address: any } = useSelector(
    (state: RootState) => state.card
  );
  let { cartItems } = useSelector((state: RootState) => state.card);
  let card = useSelector((state: RootState) => state.card);
  const [data] = useCreateorderMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  ///final order command//

  const confirmOrder = async () => {
    try {
      const { data: info } = await data({
        orderItems: card.cartItems,
        shippingAddress: card.address,
        shippingPrice: card.shipping,
        totalPrice: card.totalprice,
        itemPrice: card.itemprice,
        taxPrice: card.tax,
      }).unwrap();

      router.push(`/orders/${info._id}`);

      dispatch(clearCard());

      toast.success(
        <span className="font-iran font-bold">با موفقیت انجنام شد</span>,
        {
          position: "top-right",
          autoClose: 1500,
          transition: Zoom,
        }
      );
    } catch (err: any) {
      toast.error(
        <span className="font-iran font-bold">{err.data.message}</span>,
        {
          position: "top-right",
          autoClose: 2000,
          transition: Zoom,
        }
      );
    }
  };

  Protect();
  useEffect(() => {
    if (!address) {
      router.push("/shipping");
    }
  }, [address, router]);

  return (
    <div
      className="md:max-w-3xl dark:bg-night dark:text-white container max-w-sm mt-8
      mb-10
      
  lg:max-w-7xl mx-auto bg-white p-3 lg:p-8 rounded-md"
    >
      <div>
        <Process numbers={2}></Process>
      </div>
      <div className="mb-8">
        <Link href="/shipping">
          <IoReturnUpBack className="text-mainblue text-2xl"></IoReturnUpBack>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-12">
        <div className="basis-3/4 divide-y flex flex-col gap-y-6">
          <div className="font-bold flex justify-between flex-row-reverse">
            <h1>آدرس</h1>
            <div className="flex flex-row-reverse gap-x-1">
              <span>,{address?.cityt}</span>
              <span>,{address?.address}</span>
              <span>{address?.postalcode}</span>
            </div>
          </div>
          {cartItems.map((items: ProductType) => {
            return (
              <div
                key={items.image}
                className="lg:grid-cols-6 grid-cols-4 p-2  lg:p-4 grid gap-x-2"
              >
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
                <div className="col-span-2 lg:col-span-3text-xs text-center">
                  <Link
                    className="font-iran text-xs lg:text-base"
                    href={`/produt/${items._id}`}
                  >
                    {items.name}
                  </Link>
                </div>
                <div className="flex lg:col-span-2 justify-end  lg:gap-x-6 ">
                  <div className="lg:flex text-xs lg:text-base hidden gap-x-2">
                    <span>تومان</span>
                    <span>{(items.qty * items.price).toLocaleString()}</span>
                  </div>
                  <div className="flex text-xs lg:text-base gap-x-1 lg:gap-x-2">
                    <span>{items?.qty}</span>

                    <span>*</span>
                    <span>{items?.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="basis-1/4 text-xs lg:text-base divide-y-2 px-6 py-4 gap-y-2 flex flex-col border-2 rounded-md shadow-lg border-backgray lg:self-start">
          <div className="gap-x-3 py-2 flex justify-end">
            <span>
              {cartItems.reduce(
                (acc: number, value: ProductType) => acc + value.qty,
                0
              )}
            </span>
            <span>تعداد کل اجناس</span>
          </div>
          <div className="flex py-2 flex-row-reverse justify-start items-center gap-x-3 ">
            <span>قیمت کل</span>
            <span>{card?.itemprice}</span>
          </div>
          <div className="flex py-2  flex-row-reverse justify-start items-center gap-x-3 ">
            <span>مالیات</span>
            <span>{card?.tax}</span>
          </div>
          <div className="flex py-2 flex-row-reverse justify-start items-center gap-x-3 ">
            <span className="text-nowrap">قیمت کل بااحتساب مالیات</span>
            <span>{card?.totalprice}</span>
          </div>

          <button
            onClick={confirmOrder}
            className="text-white bg-mainblue hover:bg-darkblue duration-300 py-2 px-6 text-center rounded-md"
          >
            ادامه
          </button>
        </div>
      </div>
    </div>
  );
}
