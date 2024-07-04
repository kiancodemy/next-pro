import React from "react";
import axios from "axios";
import { Id } from "@/type";

import Product from "@/components/Product";

export async function generateStaticParams() {
  const { data } = await axios.get("http://localhost:4000/products");

  return data.map((post: any) => ({
    id: post._id,
  }));
}
export default function page({ params }: Id) {
  const { id } = params;
  return (
    <div>
      <Product id={id}></Product>
    </div>
  );
}
