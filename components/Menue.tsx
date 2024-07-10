import React from "react";
import Loginbutton from "./Buttons/Loginbutton";
import Logoutbutton from "./Buttons/Logoutbutton";
import Mainpage from "./Buttons/Mainpage";
import disableScroll from "disable-scroll";
import Profile from "./Buttons/Profile";
import Nightmode from "./Buttons/Nightmode";
import Cartbutton from "./Buttons/Cartbutton";
import { RxCross1 } from "react-icons/rx";
import { closer } from "@/type";
import Signupbutton from "./Buttons/Signupbutton";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
export default function Menue({ CloseMenue }: closer) {
  const { userinfo } = useSelector((state: RootState) => state.auth);
  return (
    <div
      onClick={() => {
        CloseMenue();
        disableScroll.off();
      }}
      className="fixed z-50 left-0 top-0 right-0 bottom-0  dark:bg-backgray bg-night bg-opacity-80 flex justify-end items-stretch gap-y-3 "
    >
      <div className="flex z-80 bg-night w-[280px] flex-col p-4 gap-y-7">
        <div className="flex mt-3 px-2 items-center justify-end">
          <RxCross1
            onClick={() => {
              CloseMenue();
              disableScroll.off();
            }}
            className="text-white cursor-pointer text-3xl"
          ></RxCross1>
        </div>

        <div className="flex justify-center">
          <Nightmode></Nightmode>
        </div>
        {userinfo && (
          <div className="text-night bg-lightblue flex justify-center rounded-md py-2">
            <Profile></Profile>
          </div>
        )}
        <div className=" text-night">
          <Mainpage></Mainpage>
        </div>

        {!userinfo && <Signupbutton></Signupbutton>}
        {!userinfo && <Loginbutton></Loginbutton>}
        {userinfo && (
          <div className="bg-lightblue flex justify-center py-2 rounded-md cursor-pointer">
            <Logoutbutton></Logoutbutton>
          </div>
        )}
      </div>
    </div>
  );
}
