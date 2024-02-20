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
        state.details.push([action.payload.details[index],action.payload.petsShooping]);
      }      
    },
    deleteItem: (state, action) => {            
      state.details.splice(action.payload, 1);      
    },

    clear: (state) => {            
      state.petsShooping=0;
      state.details=[];      
    },
    // incrementByAmount: (state, action) => {
    //   state.petsShooping += action.payload;
    // },
  },
});

// actions + reducer

// export const { increment, decrement, incrementByAmount } = shoppingCartSlice.actions; // actions
export const { increment, decrement, addShop, deleteItem, clear } = shoppingCartSlice.actions; // actions

export default shoppingCartSlice.reducer;