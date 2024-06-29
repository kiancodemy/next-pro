import React from "react";
import { CiLight } from "react-icons/ci";
export default function Nightmode() {
  return (
    <div className="w-[50px] dark:bg-night  dark:hover:bg-backgray flex   hover:bg-verydark hover:text-backgray duration-300 bg-backgray mr-10 mx-3 justify-center  lg:flex items-center text-verydark h-[50px] rounded-full">
      <CiLight className="text-3xl dark:hover:text-verydark  dark:text-white"></CiLight>
    </div>
  );
}
