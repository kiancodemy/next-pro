"use client";

import Link from "next/link";
export default function Error() {
  return (
    <div
      className="h-svh md:max-w-3xl 
        max-w-xs
        mx-auto
        flex
        gap-4
        lg:flex-row-reverse
       
        flex-col
        justify-center
    
        items-center 
      
        lg:max-w-7xl "
    >
      <h1 className="text-md lg:text-2xl text-center">
        صفحه مورد نظر یافت نشد
      </h1>

      <Link
        className="flex justify-center hover:bg-mainblue hover:text-white duration-300 p-2 gap-4 items-center px-2 bg-lightblue rounded-md text-mainblue"
        href="/"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
