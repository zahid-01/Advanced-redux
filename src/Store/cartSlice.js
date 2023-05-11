import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
