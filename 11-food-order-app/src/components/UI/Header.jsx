// @ts-check
import { Fragment } from 'react';


// @ts-ignore
import styles from './Header.module.css';

// @ts-ignore
import image from '../../assets/meals.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={image} alt="A table full of delicious food" />
            </div>
        </Fragment>
    );
};

export default Header;