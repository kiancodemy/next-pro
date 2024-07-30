"use client";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { MdArrowUpward } from "react-icons/md";
import { useState } from "react";
import { toast, Zoom } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiAparat } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { useEmailsernderMutation } from "@/lib/api/orders";
const list = [
  { name: "امکان تحویل اکسپرس", logo: <FaShippingFast></FaShippingFast> },
  { name: "امکان پرداخت در محل ", logo: <FaRegCreditCard></FaRegCreditCard> },
  { name: "ضمانت بازگشت کالا", logo: <FaCalendarDay></FaCalendarDay> },
  { name: "ضمانت اصل بودن کالا", logo: <IoBagCheckSharp></IoBagCheckSharp> },
];
export default function Footer() {
  const [email, setemail] = useState("");
  const [data] = useEmailsernderMutation();

  const submit = async () => {
    try {
      if (!email) {
        toast.error(
          <span className="font-iran font-bold">ایمیل خود را وارد کنید</span>,
          {
            position: "top-right",
            autoClose: 1500,
            transition: Zoom,
          }
        );
        return true;
      }

      await data({ email: email }).unwrap();
      toast.success(
        <span className="font-iran font-bold">با موفقیت ثبت شد</span>,
        {
          position: "top-right",
          autoClose: 1500,
          transition: Zoom,
        }
      );
      setemail("");
    } catch (err: any) {
      toast.error(
        <span className="font-iran font-bold">{err.data.message}</span>,
        {
          position: "top-right",
          autoClose: 1500,
          transition: Zoom,
        }
      );
      setemail("");
    }
  };
  return (
    <div
      className=" dark:bg-night container bg-white md:max-w-3xl max-w-[340px]  mt-8
      lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      <div className="flex justify-between flex-row-reverse  py-1 px-2 items-center">
        <h1 className="text-red-500 dark:text-white font-bold text-xl lg:text-4xl">
          فروشگاه من
        </h1>

        <button
          onClick={() => {
            const a = document.getElementById("kian");
            if (a) {
              a.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hover:shadow-md flex-row-reverse duration-500 flex justify-center py-1 px-2 rounded-md items-center gap-x-3 bg-backgray text-black"
        >
          <h1>بازگشت به بالا</h1>
          <MdArrowUpward></MdArrowUpward>
        </button>
      </div>
      <div className="grid rounded-md py-4 gap-y-6 mt-6 grid-cols-2 lg:grid-cols-4 ">
        {list.map((item: any) => {
          return (
            <div
              className="flex flex-col gap-y-3 justify-center items-center"
              key={item.name}
            >
              <span className=" dark:text-white text-2xl lg:text-2xl text-night">
                {item.logo}
              </span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-8 lg:flex-row mt-6 justify-between">
        <div className="flex  dark:bg-white dark:text-night flex-col rounded-md shadow-lg px-3 py-5 gap-y-6 ">
          <h1 className="lg:text-lg text-right text-sm font-bold text-night">
            ! با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید
          </h1>
          <div className="flex text-white gap-x-2">
            <button
              onClick={submit}
              className="py-2 rounded-md px-3 dark:bg-gray-600 bg-greyy text-white hover:shadow-md duration-500 "
            >
              ثبت
            </button>

            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="bg-greyy  dark:bg-gray-600  focus:outline-none hover:shadow-md duration-500 rounded-md placeholder:text-white text-night text-right px-2"
              placeholder="ایمیل شما"
            />
          </div>
        </div>
        <div className="flex dark:bg-white dark:text-night shadow-md rounded-md px-8 py-4 flex-col gap-y-6">
          <h1 className="text-night lg:text-xl text-sm  font-bold">
            ! با ما در شبکه های اجتماعی همراه باشید
          </h1>
          <div className="[&>*]:cursor-pointer flex gap-x-2 justify-evenly text-2xl text-night">
            <FaInstagram></FaInstagram>
            <IoLogoYoutube></IoLogoYoutube>
            <SiAparat></SiAparat>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
}
