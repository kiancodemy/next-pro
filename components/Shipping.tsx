"use client";
import React from "react";

import { Protect } from "@/lib/protect/protext";
import { IoReturnUpBack } from "react-icons/io5";
import { Adress } from "@/lib/features/productslice";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { toast, Zoom } from "react-toastify";
import { useRef, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import Process from "./Process";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
//input type
type Inputs = {
  address:string
  city: string;
  postalcode: string;
};
export default function Shipping() {
  const { address } = useSelector((state: RootState) => state.card);

  const dispatch = useDispatch();
  const router = useRouter();
  const smooth = useRef<HTMLFormElement>(null);
  useEffect(() => {
    setTimeout(() => {
      const smoothElement = smooth.current;
      if (smoothElement) {
        smoothElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, []);

  //useEffect(() => {}, []);//

  //react-hhok-from//
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const g = await dispatch(Adress({ ...data }));

      toast.success(
        <span className="font-iran font-bold">با موفقیت افزوده شد</span>,
        {
          position: "top-right",
          autoClose: 2000,
          transition: Zoom,
        }
      );
      router.push("/placeorder");
    } catch (err: any) {
      toast.error(
        <span className="font-iran font-bold">{err.data.message}</span>,
        {
          position: "top-right",
          autoClose: 1500,
          transition: Zoom,
        }
      );
    }
  };
  Protect();
  //main code//
  return (
    <form
      ref={smooth}
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg dark:border-2 dark:border-white shadow-lg hover:shadow-2xl duration-300 lg:max-w-md p-6 bg-white dark:bg-night dark:text-white max-w-xs mx-auto container my-10 lg:my-20"
    >
      <Process numbers={1}></Process>
      <Link href="/card">
        <IoReturnUpBack className="text-mainblue text-2xl"></IoReturnUpBack>
      </Link>
      <h1 className="dark:text-white text-center font-bold text-2xl text-verydark">
        آدرس
      </h1>

      <div className="flex my-6 gap-y-2 lg:gap-y-4 flex-col gap-x-3">
        <div className="flex flex-col text-sm gap-y-2">
          <h1 className="text-right">آدرس</h1>
          <input
            defaultValue={address?.address || ""}
            {...register("address", {
              required: {
                value: true,
                message: "! پر کردن این فیلد الزامی است ",
              },
            })}
            className="bg-backgray dark:text-night focus:outline-mainblue focus:outline-1 rounded-md py-2 text-right px-2"
            type="text"
          />
          <h1 className="text-red-500 text-sm text-right py-1 ">
            {errors.address?.message}
          </h1>
        </div>
        <div className="flex flex-col text-sm gap-y-2">
          <h1 className="text-right">شهر</h1>
          <input
            defaultValue={address?.city || ""}
            {...register("city", {
              required: {
                value: true,
                message: "! پر کردن این فیلد الزامی است ",
              },
            })}
            className=" focus:outline-mainblue dark:text-night bg-backgray py-2 px-2 focus:outline-1 rounded-md  text-right "
            type="text"
          />

          <h1 className="text-red-500  text-sm text-right py-1 ">
            {errors.city?.message}
          </h1>
        </div>
        <div className="flex flex-col text-sm gap-y-2">
          <h1 className="text-right">کد پستی</h1>
          <input
            defaultValue={address?.postalcode || ""}
            {...register("postalcode", {
              required: {
                value: true,
                message: "! پر کردن این فیلد الزامی است ",
              },
            })}
            className=" focus:outline-mainblue dark:text-night bg-backgray py-2 px-2 focus:outline-1 rounded-md  text-right "
            type="text"
          />

          <h1 className="text-red-500  text-sm text-right py-1 ">
            {errors.postalcode?.message}
          </h1>
        </div>
        <button
          type="submit"
          className="bg-mainblue text-center hover:bg-darkblue duration-300  text-white py-2 px-6 rounded-lg"
        >
          ادامه
        </button>
      </div>
    </form>
  );
}
