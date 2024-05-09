"use client";
import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "./features/productslice";
import { api } from "./api/apislice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    card: cardSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
