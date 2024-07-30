import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import Toastify from "@/components/Toastify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "./storeprovider";
import Providers from "@/lib/features/Providers";
const iran = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanXFaNum-regular.woff2",
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
    <html lang="en">
      <body
        className={`${iran.variable}  flex flex-col justify-between font-iran dark:bg-night`}
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
