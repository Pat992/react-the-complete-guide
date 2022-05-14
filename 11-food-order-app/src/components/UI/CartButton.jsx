// @ts-check
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from './CartIcon';

// @ts-ignore
import styles from './CartButton.module.css';

const CartButton = (props) => {
    const [animate, setAnimate] = useState(false);
    const cartContext = useContext(CartContext);

    const { items } = cartContext;

    const buttonClasses = `${styles.button} ${animate ? styles.bump : ''}`;

    useEffect(() => {
        // add and remove bump class
        if (cartContext.items.length <= 0) {
            return;
        }
        setAnimate(_ => true);
        const timer = setTimeout(() => {
            setAnimate(_ => false);
        }, 100);

        // cleanup
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    const numOfCartItems = cartContext.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    return (
        <button onClick={props.onShowCart} className={buttonClasses}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numOfCartItems}</span>
        </button>
    );
};

export default CartButton;