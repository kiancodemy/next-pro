"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/lib/features/productslice";
export default function A() {
  const dipatch = useDispatch();
  const { value } = useSelector((state: any) => state.counter);
  return <div onClick={() => dipatch(increment())}>it is {value}</div>;
}
