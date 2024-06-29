"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Logs = () => {
  const userinfo = useSelector((state: any) => state.auth.userinfo);
  const router = useRouter();
  if (!userinfo) {
    return true;
  } else {
    router.push(`/`);
  }
};
