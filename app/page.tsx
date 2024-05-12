import { Metadata } from "next";
import React from "react";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: {
    template: "%s | فروشگاه انلاین من ",
    default: '"فروشگاه انلاین من ',
  },
  description: "فروشنگاه انلانین اجناس مرغوب",
};
export default function page() {
  return (
    <>
      <Home></Home>
    </>
  );
}
