/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import './App.css';
import MainHeader from './components/Layout/MainHeader';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartModalProvider from './components/Context/CartModalProvider';
import CartItemProvider from './components/Context/CartItemProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }

  const hideCart = () => {
    setCartIsShown(false);
  }

  const changeCartModal = {
    cartIsShown,
    showCart,
    hideCart
  }

  return (
    <CartItemProvider>
      <CartModalProvider value={changeCartModal}>
        {cartIsShown && <Cart />}
        <MainHeader />
      </CartModalProvider>
      <main>
        <Meals />
      </main>
    </CartItemProvider>
  );
}


export default App;
