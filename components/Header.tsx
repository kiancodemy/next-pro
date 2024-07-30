"use client";
import React from "react";
import disableScroll from "disable-scroll";
import Loginbutton from "./Buttons/Loginbutton";
import Signupbutton from "./Buttons/Signupbutton";
import Dropdown from "./Dropdown";

import Nightmode from "./Buttons/Nightmode";
import { TiThMenu } from "react-icons/ti";
import Cartbutton from "./Buttons/Cartbutton";
import Mainpage from "./Buttons/Mainpage";
import { IoIosSearch } from "react-icons/io";
import { RootState } from "@/lib/store";

import { useState } from "react";
import { useSelector } from "react-redux";
import Menue from "./Menue";

export default function Header() {
  let { userinfo }: any = useSelector((state: RootState) => state.auth);

  const [open, setopen] = useState<boolean>(false);
  const CloseMenue = () => {
    setopen(false);
  };

  return (
    <div id="kian" className="lg:mt-8 mt-6 ">
      <main className="bg-white dark:shadow-sm dark:shadow-white  container md:max-w-3xl max-w-[330px] lg:max-w-7xl dark:bg-night dark:text-white rounded-md px-2 py-3 lg:p-8 mx-auto flex items-center lg:justify-normal justify-end">
        <div className="hidden lg:flex justify-center gap-2 items-center">
          {userinfo ? (
            <Dropdown>{userinfo?.name}</Dropdown>
          ) : (
            <>
              <Signupbutton></Signupbutton>
              <Loginbutton></Loginbutton>
            </>
          )}

          <Mainpage></Mainpage>
        </div>

        <span className="hidden lg:block">
          <Nightmode></Nightmode>
        </span>

        <div className="lg:flex hidden lg:grow mx-5 gap-2 bg-backgray rounded-[14px] py-2 px-4 text-verydark items-center">
          <input
            type="text"
            className="bg-backgray text-darkblue text-right grow focus:border-transparent focus:outline-none"
            placeholder="دنبال چی میگردی؟"
          />
          <IoIosSearch className="text-2xl"></IoIosSearch>
        </div>

        <Cartbutton></Cartbutton>
        <h1 className="font-boldblock font-bold hidden lg:block dark:text-white text-verydark font-iran text-4xl">
          فروشگاه من
        </h1>
        <div
          onClick={() => {
            setopen(true);
            disableScroll.on();
          }}
          className="lg:hidden"
        >
          <TiThMenu className="text-verydark dark:text-white cursor-pointer text-2xl"></TiThMenu>
        </div>
      </main>
      {open && <Menue CloseMenue={CloseMenue}></Menue>}
    </div>
  );
}
