import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // store
  name: "counter",
  initialState: {
    value: 10000,
  },
  //   name: "notes",
  //   initialState: {
  //     id: 10000,
  //   },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    resetAmount: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetAmount } = counterSlice.actions; // connecting with the actions
export const selectCount = (state) => state.counter.value; // showing the value
// export const selectCount1 = (state) => state.notes.id; // notes from store.js
// export const selectCount1 = (state) => state.cart.id; // showing the value

export default counterSlice.reducer; // for store
