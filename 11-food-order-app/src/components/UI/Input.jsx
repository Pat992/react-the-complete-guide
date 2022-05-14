// @ts-check
import React from 'react';

// @ts-ignore
import styles from './Input.module.css';

// @ts-ignore
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.
                // @ts-ignore
                input.id}>{props.label}</label>
            {/* Use spread operator to get key-value pairs */}
            <input ref={ref} {...props.
                // @ts-ignore
                input} />
        </div>
    );
});

export default Input;