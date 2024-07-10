"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";



export const AdminProtect = () => {
  const { userinfo } = useSelector((state: any) => state.auth);
  const router = useRouter();
  if (userinfo.isAdmin) {
    return;
  } else {
    router.push("/login");
  }
};
