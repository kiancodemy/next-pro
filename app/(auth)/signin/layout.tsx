import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",

  description: "فروشنگاه انلانین اجناس مرغوب",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
