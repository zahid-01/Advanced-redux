import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import cartItemSlice from "./cartItemSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartItems: cartItemSlice.reducer },
});

export default store;
