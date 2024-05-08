"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/productslice";
import { api } from "./api/apislice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
