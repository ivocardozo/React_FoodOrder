import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart.jsx";
import { CartContextProvider } from './store/CartContext.jsx';
import { UserPorgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserPorgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserPorgressContextProvider>
  );
}

export default App;
