import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from './store/CartContext.jsx'
import { UserProgressContextProvider } from "./store/UserProgress.Context.jsx";
import Cart from '../src/components/Cart.jsx'

function App() {
  return (
     <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
     </UserProgressContextProvider>
  );
}

export default App;
