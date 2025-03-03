"use client";
import React from "react";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { IoReturnUpBack } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useRef, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSignupMutation } from "@/lib/api/authslice";
import { useSelector } from "react-redux";

//input type
type Inputs = {
  name: string;
  email: string;

  password: string;
};
export default function Signup() {
  const [showpassword, setshowpassword] = useState<Boolean>(false);
  const smooth = useRef<HTMLFormElement>(null);

  const [datas] = useSignupMutation();
  const { userinfo } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const searchParams = useSearchParams();

  let search: any = searchParams.get("redirect")
    ? searchParams.get("redirect")
    : "/";

  useEffect(() => {
    if (userinfo) {
      router.push(`/`);
    }
  }, [router, userinfo]);

  // handle funcgtion for when already signup//

  useEffect(() => {
    if (userinfo) {
      router.push(`${search}`);
    }
  }, [userinfo, search, router]);
  useEffect(() => {
    setTimeout(() => {
      const smoothElement = smooth.current;
      if (smoothElement) {
        smoothElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, []);

  //react-hhok-from//
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Inputs>();

  ///handle submit form//
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await datas({ ...data }).unwrap();

      toast.success(
        <span className="font-iran font-bold">
          ثبت نام شما با موفقیت انچام شد
        </span>,
        {
          position: "top-right",
          autoClose: 2000,
          transition: Zoom,
        }
      );
      router.push(`${search !== "/" ? `/login?redirect=${search}` : "/login"}`);
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
  //main react code//

  return (
    <form
      ref={smooth}
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg outline outline-white outline-2 contaienr shadow-lg  hover:shadow-2xl duration-300 lg:max-w-sm p-6 bg-white dark:bg-night dark:text-white max-w-xs mx-auto mb-20 lg:mb-36 container mt-20"
    >
      <Link href="/">
        <IoReturnUpBack className="text-mainblue text-2xl"></IoReturnUpBack>
      </Link>
      <h1 className="text-center dark:text-white font-bold text-2xl text-verydark">
        !سلام خوش آمدید
      </h1>

      <div className="flex  my-6 gap-y-1 flex-col gap-x-3">
        <div className="flex flex-col text-sm gap-y-2">
          <h1 className="text-right">اسم</h1>
          <input
            data-cy="reg-name"
            {...register("name", {
              required: {
                value: true,
                message: "! پر کردن این فیلد الزامی است ",
              },
            })}
            className="bg-backgray dark:text-black focus:outline-mainblue focus:outline-1 rounded-md py-2 text-right px-2"
            type="text"
          />
          <h1 className="text-red-500 text-sm text-right py-1 ">
            {errors.name?.message}
          </h1>
        </div>
        <div className="flex flex-col text-sm gap-y-2">
          <h1 className="text-right">ایمیل</h1>
          <input
            data-cy="reg-email"
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
          <h1 className="text-right">پسورد</h1>

          <div className=" rounded-lg relative flex flex-col ">
            <input
              data-cy="reg-pass"
              {...register("password", {
                required: {
                  value: true,
                  message: "! پر کردن این فیلد الزامی است ",
                },
              })}
              className=" focus:outline-mainblue dark:text-black bg-backgray py-2 px-2 focus:outline-1 rounded-md  text-right "
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
          data-cy="reg"
          type="submit"
          className="bg-mainblue mt-4 hover:bg-darkblue duration-300  text-white py-2 px-6 rounded-lg"
        >
          ثبت نام
        </button>
      </div>
    </form>
  );
}
