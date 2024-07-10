"use client";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const Protect = () => {
  const { userinfo } = useSelector((state: any) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  if (userinfo) {
    return;
  } else {
    router.push(`/login?redirect=${pathname}`);
  }
};
