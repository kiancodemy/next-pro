"use client";
import React from "react";
import { useLoginMutation } from "@/lib/api/authslice";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { IoReturnUpBack } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { toast, Zoom } from "react-toastify";

import { useRef, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { credential } from "@/lib/features/auth";
import { useSelector, useDispatch } from "react-redux";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
//input type
type Inputs = {
  email: string;
  password: string;
};
export default function Login() {
  const { userinfo } = useSelector((state: RootState) => state.auth);
  const [showpassword, setshowpassword] = useState<Boolean>(false);
  const [info] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  let search: any = searchParams.get("redirect")
    ? searchParams.get("redirect")
    : "/";

  const ref = useRef(false);
  useEffect(() => {
    if (userinfo) {
      router.push(`${search}`);
    }
  }, [userinfo, router, search]);

  //react-hhok-from//
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const all = await info({ ...data }).unwrap();

      await dispatch(credential({ ...all }));

      toast.success(
        <span className="font-iran font-bold">ورود موفقیت آمیز بود</span>,
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
      reset();
    }
  };

  //main code//
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg dark:bg-night  outline outline-white outline-2  shadow-lg hover:shadow-2xl duration-300 lg:max-w-sm p-6 bg-white   max-w-xs mx-auto container mt-8"
    >
      <Link href="/">
        <IoReturnUpBack className="text-mainblue text-2xl"></IoReturnUpBack>
      </Link>
      <h1 className="dark:text-white text-center font-bold text-2xl text-verydark">
        !سلام خوش آمدید
      </h1>

      <div className="flex my-6 gap-y-2 lg:gap-y-4 flex-col gap-x-3">
        <div className="flex flex-col text-sm gap-y-2">
          <h1 className="text-right">ایمیل</h1>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "! پر کردن این فیلد الزامی است ",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "ایمیل معتبر نیست",
              },
            })}
            className="bg-backgray dark:text-black focus:outline-mainblue focus:outline-1 rounded-md py-2 text-right px-2"
            type="text"
          />
          <h1 className="text-red-500 text-sm text-right py-1 ">
            {errors.email?.message}
          </h1>
        </div>
        <div className="flex flex-col text-sm gap-y-2">
          <div className="text-right flex justify-between flex-row-reverse text-verydark">
            <span className="dark:text-white">پسورد</span>
            <Link href="/sigup" className="text-xs text-mainblue">
              فراموش کرده‌اید؟
            </Link>
          </div>
          <div className=" rounded-lg relative flex flex-col ">
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "! پر کردن این فیلد الزامی است ",
                },
              })}
              className="dark:text-black focus:outline-mainblue bg-backgray py-2 px-2 focus:outline-1 rounded-md  text-right "
              type={showpassword ? "text" : "password"}
            />
            {showpassword ? (
              <IoEyeOffOutline
                onClick={() => setshowpassword((prev) => !prev)}
                className="text-gray-400 cursor-pointer text-2xl absolute top-2 left-[10px]"
              ></IoEyeOffOutline>
            ) : (
              <MdOutlineRemoveRedEye
                onClick={() => setshowpassword((prev) => !prev)}
                className="text-gray-400 cursor-pointer text-2xl absolute top-[6px] left-[10px]"
              ></MdOutlineRemoveRedEye>
            )}
            <h1 className="text-red-500  text-sm text-right py-1 ">
              {errors.password?.message}
            </h1>
          </div>
        </div>
        <button
          type="submit"
          className="bg-mainblue hover:bg-darkblue duration-300  text-white py-2 px-6 rounded-lg"
        >
          وارد شوید
        </button>
        <div className="flex text-sm justify-start gap-x-2 flex-row-reverse">
          <span>حساب ندارید؟</span>
          <Link
            href={`${
              search !== "/" ? `/signin?redirect=${search}` : "/signin"
            }`}
            className="text-mainblue "
          >
            ثبت نام
          </Link>
        </div>
      </div>
    </form>
  );
}
