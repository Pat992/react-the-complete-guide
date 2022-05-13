// @ts-check

import CartIcon from './CartIcon';
// @ts-ignore
import styles from './CartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
    const cartContext = useContext(CartContext);

    const numOfCartItems = cartContext.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    return (
        <button onClick={props.onShowCart} className={styles.button}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numOfCartItems}</span>
        </button>
    );
};

export default CartButton;