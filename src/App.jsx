import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart.jsx";
import { CartContextProvider } from './store/CartContext.jsx';
import { UserPorgressContextProvider } from "./store/UserProgressContext.jsx";
import Checkout from "./components/UI/Checkout.jsx";

function App() {
  return (
    <UserPorgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserPorgressContextProvider>
  );
}

export default App;
