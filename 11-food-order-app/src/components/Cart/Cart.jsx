// @ts-check
import Modal from '../UI/Modal';

// @ts-ignore
import styles from './Cart.module.css';

const Cart = (props) => {
    const CART_ITEMS = <ul className={styles['cart-items']}>{
        [
            {
                id: 'c1',
                name: 'Sushi',
                amount: 2,
                price: 12.99
            }
        ].map(item => <li>{item.name}</li>)
    }</ul>;

    return (
        <Modal onBackdropClickHandler={props.onHideCart}>
            {CART_ITEMS}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>35.69</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart} className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;