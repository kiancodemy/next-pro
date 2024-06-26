"use client";
import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import wathc from "@/public/images/watch.jpg";
import del from "@/public/images/del.jpg";
import { useEffect } from "react";
import mac from "@/public/images//imac.jpg";
export default function Carousel() {
  const items = [{ image: wathc }, { image: del }, { image: mac }];
  const [index, setindex] = useState<number>(0);
  useEffect(() => {
    const set = setTimeout(() => {
      if (index < items.length - 1) {
        setindex((prev) => prev + 1);
      } else {
        setindex(0);
      }
    }, 4000);

    return () => {
      clearTimeout(set);
    };
  }, [index]);
  return (
    <div
      className="  my-2 bg-white md:max-w-3xl max-w-[350px]  mt-8
  lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      <div className="w-[300px] relative mx-auto h-[150px] lg:w-[1100px] lg:h-[350px] bg-greyy rounded-md overflow-hidden">
        <FaCircleArrowLeft
          onClick={() => {
            index > items.length - 1
              ? setindex((prev) => prev + 1)
              : setindex(0);
          }}
          className=" h-[30px] w-[30px] lg:w-[40px] z-50 hover:
        shadow-md duration-500 cursor-pointer  lg:h-[40px] rounded-full absolute -translate-y-2/4 left-2 inset-y-1/2 bg-white"
        ></FaCircleArrowLeft>
        <FaArrowCircleRight
          onClick={() => {
            index > 0
              ? setindex((prev) => prev - 1)
              : setindex(items.length - 1);
          }}
          className=" h-[30px] w-[30px] lg:w-[40px] z-50 hover:
        shadow-md duration-500 cursor-pointer lg:h-[40px] rounded-full absolute -translate-y-2/4 right-2 inset-y-1/2 bg-white"
        ></FaArrowCircleRight>

        <Image
          src={items[index].image}
          fill
          style={{ objectFit: "cover" }}
          alt="kian"
        ></Image>
        <div
          className={`absolute gap-x-6 py-2 px-6 flex left-1/2 -translate-x-2/4 
 bottom-2 z-50 `}
        >
          {items.map((_, key: number) => (
            <GoDotFill
              onClick={() => setindex(key)}
              className={`lg:text-2xl text-xl ${
                index === key ? "text-black" : "text-white cursor-pointer"
              }`}
            ></GoDotFill>
          ))}
        </div>
      </div>
    </div>
  );
}
