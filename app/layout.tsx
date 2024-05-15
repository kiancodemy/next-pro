"use client";

import "./globals.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import StoreProvider from "./storeprovider";
const iran = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanXFaNum-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--iran",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iran.variable} font-iran dark:bg-night`}>
        <StoreProvider>
          <div>
            <Header></Header>
            {children}

            <ToastContainer position="bottom-right" limit={1}></ToastContainer>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
