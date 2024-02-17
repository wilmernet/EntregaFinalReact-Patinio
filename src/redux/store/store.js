import { configureStore } from "@reduxjs/toolkit";

import shoppingCartSlice  from "../features/shoppingCart/shoppingCartSlice";
import modeDarkReducer    from "../features/modeDark/modeDarkSlice";
import viewOptionSlice from "../features/viewOption/viewOptionSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    modeDark: modeDarkReducer,
    activeViewOption: viewOptionSlice,
  },
});