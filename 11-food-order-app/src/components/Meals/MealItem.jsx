// @ts-check
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

// @ts-ignore
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (num) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: num,
            price: props.price
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    );
};

export default MealItem;