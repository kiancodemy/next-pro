import { Metadata } from "next";
import React from "react";
import Home from "@/components/Home";
import Introquestions from "@/components/Introquestions";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: {
    template: "%s | فروشگاه انلاین من ",
    default: '"فروشگاه انلاین من ',
  },
  description: "فروشنگاه انلانین اجناس مرغوب",
};
export default function page() {
  return (
    <div>
      <Carousel></Carousel>
      <Suspense
        fallback={
          <div className="relative">
            <Loading />
          </div>
        }
      >
        <Home></Home>
      </Suspense>

      <Introquestions></Introquestions>
    </div>
  );
}
