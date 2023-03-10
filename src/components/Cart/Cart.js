/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartModalContext from "../Context/CartModalContext";
import CartItemContext from "../Context/CartItemContext";
import CartItem from "./CartItem";

const Cart = (props) => {

  const cartModalContext = useContext(CartModalContext);

  const cartItemCtx = useContext(CartItemContext);

  const totalAmount = `$${cartItemCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartItemCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartItemCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartItemCtx.addItem({ ...item, amount: 1 })
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={cartModalContext.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={cartModalContext.hideCart}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
