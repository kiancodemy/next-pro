"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { CiLight } from "react-icons/ci";
export default function Nightmode() {
  const { theme, setTheme } = useTheme();
  const [maute, setmaute] = useState(false);
  useEffect(() => {
    setmaute(true);
  }, []);
  return (
    <div className="w-[50px] dark:bg-night  dark:hover:bg-backgray flex   hover:bg-verydark hover:text-backgray duration-300 bg-backgray mr-10 mx-3 justify-center  lg:flex items-center text-verydark h-[50px] rounded-full">
      {maute && (
        <CiLight
          onClick={() => {
            theme !== "dark" ? setTheme("dark") : setTheme("system");
          }}
          className="text-3xl dark:hover:text-verydark  dark:text-white"
        ></CiLight>
      )}
    </div>
  );
}
