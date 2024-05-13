"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/type";

import { cart } from "../cartutils";
const initializeState = () => {
  if (typeof window !== "undefined") {
    const localStorageItem = localStorage.getItem("card");
    return localStorageItem ? JSON.parse(localStorageItem) : { cartItems: [] };
  } else {
    return { cartItems: [] };
  }
};

let initialState = initializeState();

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
    deleteItem: (state: any, action: PayloadAction<ProductType>) => {
      state.cartItems = state.cartItems.filter(
        (item: ProductType, key: number) => item._id !== action.payload._id
      );
      cart(state);
    },
  },
});

export const { deleteItem, addItems } = cardSlice.actions;

export default cardSlice.reducer;
