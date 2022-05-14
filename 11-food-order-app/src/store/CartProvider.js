import { useReducer } from "react";
import CartContext from "./cart-context";

// Outside of component to not recreate functions
const defaultCartState = {
    items: [],
    amount: 0
}

// Never change old snapshot, only create new states
const cartReducer = (stateSnapshot, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotal = stateSnapshot.amount + action.item.price * action.item.amount;

        const existingItemIndex = stateSnapshot.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = stateSnapshot.items[existingItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...stateSnapshot.items];
            updatedItems[existingCartItem] = updatedItem;
        } else {
            updatedItems = stateSnapshot.items.concat(action.item);
        }

        return {
            items: updatedItems,
            amount: updatedTotal
        };
    } else if (action.type === 'REMOVE_ITEM') {

    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, setCartState] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        setCartState({ type: 'ADD_ITEM', item: item });
    };
    const removeItemHandler = (id) => {
        setCartState({ type: 'REMOVE_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.amount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;