import axios from "axios";

import { cartItemActions } from "../../Store/cartItemSlice";
import { cartActions } from "../../Store/cartSlice";

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
      if (data.statusText !== "OK") throw new Error("SCREWED");
    };

    await addedItems().catch((e) => {
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

export const fetchItems = () => {
  return async (dispatch) => {
    const data = await axios({
      method: "GET",
      url: "https://redux-async-60631-default-rtdb.asia-southeast1.firebasedatabase.app/items.json",
    });

    dispatch(cartItemActions.fillItems(data.data || []));
  };
};
