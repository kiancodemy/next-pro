import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 25,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value < 200 ? (state.value += 25) : (state.value = 0);
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
