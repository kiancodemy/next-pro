"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initializeState = () => {
  if (typeof window !== "undefined") {
    const localStorageItem = localStorage.getItem("userinfo");
    return { userinfo: localStorageItem ? JSON.parse(localStorageItem) : null };
  } else {
    return { userinfo: null };
  }
};

let initialState = initializeState();

export const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    credential: (state: any, action: PayloadAction<any>) => {
      state.userinfo = action.payload;
      localStorage.setItem("userinfo", JSON.stringify(action.payload));
    },
    logout: (state: any) => {
      state.userinfo = null;
      localStorage.removeItem("userinfo");
    },
  },
});

export const { credential, logout } = authSlice.actions;

export default authSlice.reducer;
