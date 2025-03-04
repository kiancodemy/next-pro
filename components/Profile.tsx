"use client";
import React from "react";
import Profileorder from "./Profileorder";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useUpdateprofileMutation } from "@/lib/api/authslice";
import { useState } from "react";
import { useGeAllOrdersQuery } from "@/lib/api/orders";
import { Protect } from "@/lib/protect/protext";
import { toast, Zoom } from "react-toastify";

import { IoEyeOffOutline } from "react-icons/io5";


import { credential } from "@/lib/features/auth";
import { useSelector, useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Profile() {
  Protect();
  const dispatch = useDispatch();
  const { data: info } = useGeAllOrdersQuery("");

  const { userinfo } = useSelector((state: any) => state.auth);

  type Inputs = {
    name: string;
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const [data] = useUpdateprofileMutation();
  const submit: SubmitHandler<Inputs> = async (info) => {
    try {
      const get = await data({ ...info }).unwrap();
      await dispatch(credential(get));
      toast.success(
        <span className="font-iran font-bold">با موفقیت به روز رسانی شد</span>,
        {
          position: "top-right",
          autoClose: 2000,
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
  const [showpassword, setshowpassword] = useState<Boolean>(false);
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" dark:bg-night container bg-white md:max-w-3xl max-w-xs mt-6 mb-20 
  lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      <div className="flex lg:flex-row flex-col lg:gap-x-8 gap-y-4">
        <div className="basis-3/4 lg:overflow-x-visible overflow-x-scroll flex flex-col grow">
          {info?.map((items: any) => {
            return (
              <div key={items._id}>
                <Profileorder data={items}></Profileorder>
              </div>
            );
          })}
        </div>
        <div className="basis-1/4 lg:self-start shadow-md px-3 py-8 rounded-md">
          <div className="flex  gap-y-1 flex-col gap-x-3">
            <h1 className="text-right font-bold text-xs lg:text-lg p-2">
              به روز رسانی اطلاعات
            </h1>
            <div className="flex flex-col text-sm gap-y-6">
              <h1 className="text-right text-xs lg:text-base">نام</h1>

              <input
                defaultValue={userinfo?.name || ""}
                {...register("name", {
                  required: {
                    value: true,
                    message: "! پر کردن این فیلد الزامی است ",
                  },
                })}
                className="bg-backgray dark:text-black focus:outline-mainblue focus:outline-1 rounded-md py-2 text-right px-2"
                type="text"
              />
              <h1 className="text-red-500 text-xs lg:text-base text-right py-1 ">
                {errors.name?.message}
              </h1>
            </div>
            <div className="flex flex-col lg:text-base text-sm gap-y-2">
              <h1 className="text-right">ایمیل</h1>
              <input
                defaultValue={userinfo?.email || ""}
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
                className="bg-backgray dark:text-black text-xs lg:text-base focus:outline-mainblue focus:outline-1 rounded-md py-2 text-right px-2"
                type="text"
              />
              <h1 className="text-red-500 lg:text-base text-sm text-right py-1 ">
                {errors.email?.message}
              </h1>
            </div>
            <div className="flex flex-col  lg:text-base text-sm gap-y-2">
              <h1 className="text-right">پسورد</h1>

              <div className=" rounded-lg relative flex flex-col ">
                <input
                  {...register("password")}
                  className="text-xs dark:text-black lg:text-base focus:outline-mainblue bg-backgray py-2 px-2 focus:outline-1 rounded-md  text-right "
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
                <h1 className="text-red-500 text-sm text-right py-1 ">
                  {errors.password?.message}
                </h1>
              </div>
            </div>
            <button
              type="submit"
              className="bg-mainblue text-xs lg:text-base mt-4 hover:bg-darkblue duration-300  text-white py-2 px-6 rounded-lg"
            >
              اعمال تغییرات
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
