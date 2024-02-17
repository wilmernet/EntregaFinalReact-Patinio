import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeViewOption: true
};

export const viewOption = createSlice({
    name: "activeViewOption",
    initialState,
    reducers: {
      switchViewRow: (state) => {
        state.activeViewOption = false;
      },
      switchViewModule: (state) => {
        state.activeViewOption = true;
      },
    },
  });
  
  // actions + reducer
  export const { switchViewRow, switchViewModule } = viewOption.actions; // actions
  
  export default viewOption.reducer;