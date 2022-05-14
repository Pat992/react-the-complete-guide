// @ts-check
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

// @ts-ignore
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const cartAddHandler = (item) => { };

    const cartRemoveHandler = (id) => { };

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0;

    const CART_ITEMS = <ul className={styles['cart-items']}>{
        cartContext.items.map(
            item => <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                // Bind preconfigures the function and already adds the arguments
                onRemove={cartRemoveHandler.bind(null, item.id)}
                onAdd={cartAddHandler.bind(null, item)}
            />
        )
    }</ul>;

    return (
        <Modal onBackdropClickHandler={props.onHideCart}>
            {CART_ITEMS}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart} className={styles['button--alt']}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;