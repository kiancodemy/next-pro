import React from "react";
import axios from "axios";
import { Id } from "@/type";
//import dynamic from "next/dynamic";

/*const MyComponent = dynamic(() => import("@/components/Product"), {
  ssr: false, // This ensures the component is not SSR'd
});*/

import Product from "@/components/Product";

export async function generateStaticParams() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_ANALYTICS_ID}/products`
  );

  // Assuming you want to return an array of params
  return data.map((product: any) => ({
    id: product.id, // Adjust according to your data structure
  }));
}
export default function Page({ params }: Id) {
  const { id } = params;
  return (
    <div>
      <Product id={id}></Product>
    </div>
  );
}
