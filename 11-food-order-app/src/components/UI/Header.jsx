// @ts-check
import { Fragment } from 'react';


// @ts-ignore
import styles from './Header.module.css';

// @ts-ignore
import image from '../../assets/meals.jpg';
import CartButton from './CartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <CartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={image} alt="A table full of delicious food" />
            </div>
        </Fragment>
    );
};

export default Header;