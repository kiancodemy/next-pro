import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/type";
import { useEffect } from "react";

import { cart } from "../cartutils";
let initialState;
if (typeof window !== "undefined") {
  initialState = localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card"))
    : { cartItems: [] };
}

export const cardSlice = createSlice({
  name: "cardslice",
  initialState,
  reducers: {
    addItems: (state: any, action: PayloadAction<ProductType>) => {
      const item = action.payload;
      const find = state.cartItems.find((items: any) => items._id === item._id);
      if (find) {
        state.cartItems = state.cartItems.map((itemss: any) =>
          itemss._id === find._id ? item : itemss
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      cart(state);
    },
  },
});

export const { addItems } = cardSlice.actions;

export default cardSlice.reducer;
