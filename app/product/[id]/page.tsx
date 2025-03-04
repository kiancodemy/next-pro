import React from "react";
import { ProductType } from "@/type";
import { Id } from "@/type";
import { notFound } from "next/navigation";

import MyProduct from "@/components/ProductByid";

export async function generateStaticParams() {
  const getall = await fetch(`${process.env.BACKEND_URL as string}/products`);
  if (!getall.ok) {
    notFound();
  }
  const data = await getall.json();

  return data.map((post: ProductType) => ({
    id: post._id,
  }));
}
export default function page({ params }: Id) {
  const { id } = params;
  if (!id) {
    notFound();
  }
  return (
    <div>
      <MyProduct id={id}></MyProduct>
    </div>
  );
}
