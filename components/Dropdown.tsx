"use client";
import React from "react";

import { IoPersonOutline } from "react-icons/io5";

import Logoutbutton from "./Buttons/Logoutbutton";
import { useState } from "react";
import Profile from "./Buttons/Profile";

export default function Dropdown({ children }: { children: string }) {
  const [open, setopen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setopen((prev) => !prev)}
      className="px-6 relative cursor-pointer flex-row-reverse  hidden py-2 lg:flex items-center gap-x-8 bg-mainblue rounded-md text-white"
    >
      <span>{children}</span>
      <IoPersonOutline className="text-xl  text-white"></IoPersonOutline>
      {open && (
        <div className="absolute divide-y p-2 bg-mainblue text-white flex flex-col gap-y-3 right-0 left-0 rounded-md  top-11 w-full">
          <Profile></Profile>
          <Logoutbutton></Logoutbutton>
        </div>
      )}
    </div>
  );
}
