import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartShown, setCartShown] = useState(false);

  const showcartHandler = () => {
    setCartShown(_ => true);
  }

  const hideCartHandler = () => {
    setCartShown(_ => false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
