import Button from '../UI/Button';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalAmountItems = cartCtx.items.reduce((amountItems, item) => (
        amountItems + item.quantity
    ), 0);
    return (
        <header id="main-header">
            <div id='title'>
                <img src={logoImg} alt="A restaurant"/>
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly>({totalAmountItems})</Button>
            </nav>
        </header>
    );
}
