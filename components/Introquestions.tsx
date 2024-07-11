import React from "react";
import { FaQuestion } from "react-icons/fa";
import Link from "next/link";
import { FiCornerLeftDown } from "react-icons/fi";

import { FaExclamation } from "react-icons/fa";
export default function Introquestions() {
  return (
    <div className="dark:bg-night text-night shadow-sm  dark:text-white gap-y-3 container my-4  flex flex-col px-6 py-20 rounded-md mx-auto lg:max-w-7xl md:max-w-4xl max-w-[340px]">
      <div className="flex flex-row-reverse font-bold justify-center items-center gap-x-2 text-3xl  lg:text-4xl">
        <h1>سوالات متداول</h1>
        <FaQuestion></FaQuestion>
        <FaExclamation></FaExclamation>
      </div>
      <div>
        <h1 className=" leading-10 lg:px-6 text-center mt-5">
          در این بخش، می‌توانید پاسخ‌های مربوط به پرسش‌های متداول کاربران را
          مشاهده کنید با کلیک بر روی هر سوال، به پاسخ‌های کامل و دقیق دسترسی
          پیدا خواهید کرد تلاش ما بر این است که شما را به بهترین شکل ممکن
          راهنمایی کنیم و به سوالاتتان پاسخ دهیم اگر پاسخ سوال خود را پیدا
          نکردید، می‌توانید با تیم پشتیبانی ما تماس بگیرید
        </h1>
      </div>
      <FiCornerLeftDown className="text-5xl self-center mt-4 text-mainblue"></FiCornerLeftDown>
      <div className=" mt-6 flex justify-center items-start">
        <Link
          className="py-2 rounded-md px-6 hover:shadow-md duration-300  bg-mainblue text-white "
          href="/questions"
        >
          سوالات متداول
        </Link>
      </div>
    </div>
  );
}
