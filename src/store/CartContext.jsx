import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: () => {}
});

const cartReducer = (state, action) => {
    // ...
    return {}
}

export const CartContextProvider = ({children}) => {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items:[]});

    const addItem = (item) => {
        // ...
    }

    const cartContext = {
        items: cart.items,
        addItem,
    };

    return(
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    );
}

export default CartContext;
