import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const isBrowser = typeof window !== "undefined";

let initialState = { cartItems: [] };

if (isBrowser && localStorage.getItem("card")) {
  const get = JSON.parse(localStorage.getItem("card"));
  initialState = get;
}

export const cardSlice = createSlice({
  name: "cardslice",
  initialState,
  reducers: {
    additem: (state, action: PayloadAction<any>) => {
      const item = action.payload;
      const find = state.cartItems.find((items) => items._id === item._id);
      if (find) {
        state.cartItems = state.cartItems.map((items) =>
          items._id === find._id ? find : items
        );
      }
      state.cartItems = [...state.cartItems, item];
      JSON.stringify(localStorage.setItem("card", {}));
    },
  },
});

export default cardSlice.reducer;
