"use client";

import userinfo from "./features/auth";
import cardSlice from "./features/productslice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "./api/apislice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["card","auth"],
  storage,
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  card: cardSlice,
  auth: userinfo,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
