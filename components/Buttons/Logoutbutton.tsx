import React from "react";
import { logout } from "@/lib/features/auth";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLogoutMutation } from "@/lib/api/authslice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Logoutbutton() {
  const router = useRouter();
  const [data] = useLogoutMutation();
  const diapatch = useDispatch();
  const exit = async () => {
    await data(1);
    await diapatch(logout());
    router.push("/");
    toast.success(
      <span className="font-iran font-bold">خروج با موفقیت انجام شد</span>,
      {
        position: "top-right",
        autoClose: 2000,
        transition: Zoom,
      }
    );
  };
  return (
    <>
      <button
        onClick={exit}
        className="hover:text-black text-sm py-1 duration-300"
      >
        خروج
      </button>
    </>
  );
}
