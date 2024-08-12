import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
});

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => (
            item => item.id === action.item.id
        ));

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const updatedItem = {
                ...state.items[existingCartItemIndex], 
                quantity: state.items[existingCartItemIndex].quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }

}

export function CartContextProvider ({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});
    function addItem(item) {
        dispatchCartAction({type: 'ADD_ITEM', item});
    }

    const cartContext = {
        items: cart.items,
        addItem
    };

    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartContext;