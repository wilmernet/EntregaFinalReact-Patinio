import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modeDark: true,
};

export const modeDarkSlice = createSlice({
  name: "modeDark",
  initialState,
  reducers: {
      modeDarkToggle: (state) => {
      state.modeDark = !state.modeDark;
    },
  },
});

export const { modeDarkToggle } = modeDarkSlice.actions; // action

export default modeDarkSlice.reducer; // reducer