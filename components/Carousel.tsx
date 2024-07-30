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
import { useMemo } from "react";
import { item } from "@/type";
import mac from "@/public/images//imac.jpg";
export default function Carousel() {
  const items = useMemo(
    () => [
      { id: "1", image: wathc },
      { id: "2", image: del },
      { id: "3", image: mac },
    ],
    []
  );
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
  }, [index, items]);
  return (
    <div
      className="z-10 my-2 container md:max-w-3xl max-w-[350px] mt-8
      lg:max-w-7xl mx-auto p-5 items-center lg:p-8 rounded-md flex flex-col gap-4"
    >
      <div className="w-[330px]  bg-red-400  relative h-[160px] lg:w-[950px] lg:h-[500px] rounded-md overflow-hidden">
        <FaCircleArrowLeft
          onClick={() => {
            index > 0
              ? setindex((prev) => prev - 1)
              : setindex(items.length - 1);
          }}
          className="h-[30px] dark:text-black w-[30px] lg:w-[40px] hover:
        shadow-md duration-500 cursor-pointer  lg:h-[40px] rounded-full absolute -translate-y-2/4 left-2 inset-y-1/2 bg-white"
        ></FaCircleArrowLeft>
        <FaArrowCircleRight
          onClick={() => {
            index < items.length - 1
              ? setindex((prev) => prev + 1)
              : setindex(0);
          }}
          className=" bg-red h-[30px] w-[30px] lg:w-[40px] hover:
        shadow-md duration-500 dark:text-black cursor-pointer lg:h-[40px] rounded-full absolute -translate-y-2/4 right-2 inset-y-1/2 bg-white"
        ></FaArrowCircleRight>

        <Image
          src={items[index].image}
          priority
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="kian"
        ></Image>
        <div
          className={`absolute gap-x-6 py-2 px-6 flex left-1/2 -translate-x-2/4 
          bottom-2 z-10`}
        >
          {items.map((itemm: item, key: number) => (
            <GoDotFill
              key={itemm.id}
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
