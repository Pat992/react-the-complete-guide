import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";

const App = () => {
  const [cartShown, setCartShown] = useState(false);

  const showcartHandler = () => {
    setCartShown(_ => true);
  }

  const hideCartHandler = () => {
    setCartShown(_ => false);
  }

  return (
    <Fragment>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
