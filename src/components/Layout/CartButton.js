/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartModalContext from "../Context/CartModalContext";
import CartItemContext from "../Context/CartItemContext";

const CartButton = (props) => {
  const cartModalContext = useContext(CartModalContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartItemContext);

  //use object destructuring to pull out the items array
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((totalAmount, item) => {
    return totalAmount + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    //running the cleanup function to remove the timer...a good practice
    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={cartModalContext.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <div className={classes["badge"]}>{numberOfCartItems}</div>
    </button>
  );
};

export default CartButton;
