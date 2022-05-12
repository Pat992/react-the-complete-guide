// @ts-check


// @ts-ignore
import styles from './Input.module.css';

// @ts-ignore
const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* Use spread operator to get key-value pairs */}
            <input {...props.input} />
        </div>
    );
};

export default Input;