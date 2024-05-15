import { configureStore } from "@reduxjs/toolkit";
import userinfo from "./features/auth";
import cardSlice from "./features/productslice";
import { api } from "./api/apislice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    card: cardSlice,
    auth: userinfo,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
