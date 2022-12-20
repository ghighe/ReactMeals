import { createContext } from "react";

const CartModalContext = createContext({
    cartIsShown: false,
    showCart: () => { },
    hideCart: () => { },
})


export default CartModalContext;