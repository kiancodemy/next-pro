import React from "react";
import { Id } from "@/type";

import Product from "@/components/Product";

export default function page({ params }: Id) {
  return (
    <div>
      <Product id={params.id}></Product>
    </div>
  );
}
