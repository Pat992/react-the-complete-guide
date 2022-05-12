// @ts-check

import CartIcon from './CartIcon';
// @ts-ignore
import styles from './CartButton.module.css';


const CartButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>2</span>
        </button>
    );
};

export default CartButton;