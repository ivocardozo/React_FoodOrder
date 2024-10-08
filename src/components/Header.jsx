import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgress.Context.jsx';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=> {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A restaurant"/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>({totalCartItems})</Button>
        </nav>
    </header>
}