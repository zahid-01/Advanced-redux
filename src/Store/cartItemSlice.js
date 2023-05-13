import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { cartActions } from "./cartSlice";

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
    fillItems(state, actions) {
      actions.payload.forEach((el) => state.items.push(el));
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.notification({
        status: "Sending",
        title: "Request",
        message: "Adding to cart",
      })
    );

    const addedItems = async () => {
      const data = await axios({
        method: "PUT",
        url: "https://redux-async-60631-default-rtdb.asia-southeast1.firebasedatabase.app/items.json",
        data: cart,
      });
      console.log(data.statusText);
      if (data.statusText !== "OK") throw new Error("SCREWED");
    };

    await addedItems().catch((e) => {
      console.log(e);
      dispatch(
        cartActions.notification({
          status: "error",
          title: "Response",
          message: "Something went wrong",
        })
      );
      return;
    });

    dispatch(
      cartActions.notification({
        status: "success",
        title: "Response",
        message: "Added to cart",
      })
    );
  };
};

// export const ddd =

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice;
