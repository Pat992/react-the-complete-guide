import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/UI/Header";

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
