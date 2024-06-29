"use client";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function Toastify() {
  return (
    <>
      <ToastContainer position="bottom-right" limit={1}></ToastContainer>
    </>
  );
}
