import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: {
    template: "%s | فروشگاه انلاین من ",
    default: '"فروشگاه انلاین من ',
  },
  description: "فروشنگاه انلانین اجناس مرغوب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iran.variable} font-iran dark:bg-night`}>
        <StoreProvider>
          <Header></Header>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
