"use client";
import React from "react";
import { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function Accordian({ item }: any) {
  const [open, setopen] = useState<boolean>(false);
  const click = () => {
    setopen((prev) => !prev);
  };

  return (
    <div className="dark:bg-night text-black dark:text-white container shadow-md shadow-mainblue  lg:basis-[45%]  rounded-md">
      <div className="text-right px-4 py-2 rounded-md flex flex-col gap-y-3">
        <div
          onClick={click}
          className="py-2 cursor-pointer flex font-bold justify-end iems-center gap-x-2"
        >
          <h1 className="text-sm lg:text-base">{item?.name}</h1>
          <button>{open ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}</button>
        </div>
        <h2
          className={` leading-8 lg:leading-loose ${
            open ? "opacity-100 h-[250px] lg:h-[150px]" : "opacity-0 h-0"
          } 
                  
                 duration-300 transition-all ease-in-out text-sm lg:text-base`}
        >
          {item?.answer}
        </h2>
      </div>
    </div>
  );
}
