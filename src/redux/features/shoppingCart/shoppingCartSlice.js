import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  petsShooping: 10,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    increment: (state) => {
      state.petsShooping += 1;
    },
    decrement: (state) => {
      state.petsShooping -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.petsShooping += action.payload;
    // },
  },
});

// actions + reducer

// export const { increment, decrement, incrementByAmount } = shoppingCartSlice.actions; // actions
export const { increment, decrement } = shoppingCartSlice.actions; // actions

export default shoppingCartSlice.reducer;