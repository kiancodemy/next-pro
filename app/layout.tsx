import "./globals.css";
import { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";
import Toastify from "@/components/Toastify";
import Header from "@/components/Header";

import StoreProvider from "./storeprovider";
import Footer from "@/components/Footer";

import Providers from "@/lib/features/Providers";
const iran = localFont({
  src: [
    {
      path: "../public/fonts/iran.woff",
      weight: "400",
      style: "normal",
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
    <html className="scroll-smooth" lang="fa">
      <body
        className={`${iran.variable} min-h-screen flex flex-col font-iran dark:bg-night`}
      >
        <Providers>
          <StoreProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
          </StoreProvider>
        </Providers>

        <Toastify></Toastify>
      </body>
    </html>
  );
}
