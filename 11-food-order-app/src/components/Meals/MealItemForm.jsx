// @ts-check
import { useRef, useState } from 'react';
import Input from '../UI/Input';


// @ts-ignore
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [isValid, setIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        // @ts-ignore
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setIsValid(_ => false);
            return;
        }
        setIsValid(_ => true);
        props.onAddToCart(enteredAmountNum);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                // @ts-ignore
                label='Amount'
                // Use JS-object to then get key-value by spread operator in child.
                input={{
                    id: `amountInput_${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+</button>
            {!isValid && <p>Please enter a amount between 1 and 5</p>}
        </form>
    );
};

export default MealItemForm;