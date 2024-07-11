"use client";
import React from "react";

import Accordian from "@/components/Accordian";
import { FaQuestion } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { useGetquestionsQuery } from "@/lib/api/productslice";

type main = { name: string; answer: string };
export default function Questions() {
  const { data } = useGetquestionsQuery("");
  return (
    <div className="dark:bg-night bg-white  dark:text-white lg:shadow-md lg:text-white shadow-mainblue gap-y-3 my-6 container  flex flex-col lg:px-6 py-16 rounded-md mx-auto lg:max-w-7xl md:max-w-4xl max-w-[340px]">
      <div className="flex  text-night flex-row-reverse font-bold justify-center mb-8 items-center gap-x-1 text-3xl lg:text-4xl">
        <h1>سوالات </h1>
        <FaQuestion></FaQuestion>
        <FaExclamation></FaExclamation>
      </div>
      <div className="flex dark:text-white dark:bg-night flex-col lg:justify-center lg:flex-row gap-y-8 lg:gap-x-4 ">
        <div className="lg:basis-1/2   dark:bg-night   flex flex-col gap-y-8 self-start lg:gap-y-4 grow">
          {data?.slice(0, 3).map((item: main) => (
            <Accordian key={item.name} item={item}></Accordian>
          ))}
        </div>
        <div className="lg:basis-1/2 flex  self-start lg:gap-y-4 gap-y-8 flex-col dark:bg-night  grow">
          {data?.slice(3, 6).map((item: { name: string; answer: string }) => (
            <Accordian key={item.name} item={item}></Accordian>
          ))}
        </div>
      </div>
    </div>
  );
}
