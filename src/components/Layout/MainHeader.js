import { cartActions } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";

import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton toggleCart={toggleCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
