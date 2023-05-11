import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: 0,
};

const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItems(state) {
      state.items = state.items + 1;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
