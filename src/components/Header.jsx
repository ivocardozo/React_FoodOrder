import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import { useContext } from 'react';

export default function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=> {
        return totalNumberOfItems + item.quantity;
    }, 0);
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A restaurant"/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly>({totalCartItems})</Button>
        </nav>
    </header>
}