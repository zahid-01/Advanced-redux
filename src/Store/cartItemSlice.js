import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "CartItem",
  initialState: {
    numberOfCartItems: 0,
    items: [],
  },
  reducers: {
    addItem(state, actions) {
      state.numberOfCartItems++;
      const newElement = actions.payload;

      const existingItem = state.items.find((el) => el.id === newElement.id);

      if (!existingItem) {
        state.items.push({
          id: newElement.id,
          price: newElement.price,
          quantity: 1,
          name: newElement.title,
        });
      } else {
        existingItem.quantity++;
      }
    },
    deleteItem(state, actions) {
      state.numberOfCartItems--;
      const itemToBeDeleted = state.items.find(
        (el) => el.id === actions.payload.id
      );
      if (itemToBeDeleted.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== actions.payload.id);
      } else {
        itemToBeDeleted.quantity--;
      }
    },
  },
});

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice;
