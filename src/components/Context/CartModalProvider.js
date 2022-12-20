import React from "react";
import CartModalContext from "./CartModalContext";

const CartModalProvider = (props) => {


    return <CartModalContext.Provider value={props.value}>
        {props.children}
    </CartModalContext.Provider>
}

export default CartModalProvider;