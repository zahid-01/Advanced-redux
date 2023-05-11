import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const items = useSelector((state) => state.cartItems.numberOfCartItems);

  return (
    <button className={classes.button} onClick={props.toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;
