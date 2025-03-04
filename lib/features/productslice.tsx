"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/type";

import { cart } from "../cartutils";
import { CartState } from "@/type";
const initialState: CartState = {
  cartItems: [],
  address: null,
  shipping: null,
  totalprice: null,
  itemprice: null,
  tax: null,
};

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
    Adress: (state: any, action: PayloadAction<any>) => {
      state.address = action.payload;
      cart(state);
    },
    clearCard: (state: any) => {
      state.cartItems = [];
      cart(state);
    },
  },
});

export const { deleteItem, addItems, Adress, clearCard } = cardSlice.actions;

export default cardSlice.reducer;
