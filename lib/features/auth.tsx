"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

let initialState = { userinfo: null };

export const authSlice = createSlice({
  name: "authslice",
  initialState: initialState,
  reducers: {
    credential: (state: any, action: PayloadAction<any>) => {
      state.userinfo = action.payload;
    },
    logout: (state: any) => {
      state.userinfo = null;
    },
  },
});

export const { credential, logout } = authSlice.actions;

export default authSlice.reducer;
