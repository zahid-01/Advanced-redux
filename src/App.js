import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import { sendCartData } from "./components/Cart/cart-actions";
import { fetchItems } from "./components/Cart/cart-actions";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notifications";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cartItems.items);
  const notif = useSelector((state) => state.cart.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchItems());
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notif && (
        <Notification
          status={notif.status}
          title={notif.title}
          message={notif.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
