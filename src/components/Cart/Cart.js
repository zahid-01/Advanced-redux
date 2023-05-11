import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItems.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((el) => {
          return (
            <CartItem
              key={el.id}
              item={{
                title: el.name,
                quantity: el.quantity,
                total: 18,
                price: el.price,
                id: el.id,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
