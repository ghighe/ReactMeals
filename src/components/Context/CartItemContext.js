import React from 'react';

const CartItemContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: item => { },
    removeItem: id => { }
})


export default CartItemContext;