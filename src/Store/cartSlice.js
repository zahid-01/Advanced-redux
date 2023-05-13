import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    notification(state, actions) {
      if (!actions.payload) {
        console.log(actions.payload);
        state.notification = false;
        return;
      }
      state.notification = {
        status: actions.payload.status,
        title: actions.payload.title,
        message: actions.payload.message,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
