"use client";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export const protect = () => {
  const { userinfo } = useSelector((state: any) => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  if (userinfo) {
    return;
  } else {
    router.push(`/login?redirect=${pathname}`);
  }
};
