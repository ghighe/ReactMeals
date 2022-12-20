import { useReducer } from "react";
import CartItemContext from "./CartItemContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cardReducer = (state, action) => {
    // console.log("state", state);
    // console.log("action", action);
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        //check if existingCardItem exist
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingCardItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCardItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCardItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultCartState;
};


const CartItemProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState);

    const addItemToCartHandler = item => {
        console.log("asd", item);
        dispatchCartAction({ type: 'ADD', item: item });
    };


    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartItemContext.Provider value={cartContext}>
        {props.children}
    </CartItemContext.Provider>
}

export default CartItemProvider;