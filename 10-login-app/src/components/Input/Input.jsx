// @ts-check

import React from 'react';
import { useImperativeHandle, useRef } from 'react';

// @ts-ignore
import classes from './Input.module.css';

// Set ref from outside, that seems a bit hacky
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activte = () => {
        // @ts-ignore
        inputRef.current.focus();
    };

    // make function accesible from outside -> not use too often
    useImperativeHandle(ref, () => {
        return {
            activate: activte
        };
    });

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;