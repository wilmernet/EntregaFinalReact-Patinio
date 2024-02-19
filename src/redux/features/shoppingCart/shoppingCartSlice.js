import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  petsShooping: 0,
  details:[]
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
    addShop: (state, action) => {
      state.petsShooping += action.payload.petsShooping;
      for(let index=0; index< action.payload.details.length; index++){
        state.details.push(action.payload.details[index]);
      }
      
    },
    add: (state, action) => {
      state.petsShooping += action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.petsShooping += action.payload;
    // },
  },
});

// actions + reducer

// export const { increment, decrement, incrementByAmount } = shoppingCartSlice.actions; // actions
export const { increment, decrement, addShop, add } = shoppingCartSlice.actions; // actions

export default shoppingCartSlice.reducer;