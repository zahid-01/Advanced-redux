import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import { cartActions } from "./Store/cartSlice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notifications";

function App() {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cartItems.items);

  useEffect(() => {
    const addedItems = async () => {
      dispatch(
        cartActions.notification({
          status: "Sending",
          title: "Request",
          message: "Adding to cart",
        })
      );
      const data = await axios({
        method: "PUT",
        url: "https://redux-async-60631-default-rtdb.asia-southeast1.firebasedatabase.app/items.json",
        data: cart,
      });
      if (!data.statusText) throw new Error();
      dispatch(
        cartActions.notification({
          status: "Success",
          title: "Response",
          message: "Added to cart",
        })
      );
    };

    addedItems();
  }, [cart, dispatch]);

  return (
    <Layout>
      <Notification />
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
