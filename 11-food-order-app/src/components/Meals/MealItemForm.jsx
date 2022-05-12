// @ts-check
import Input from '../UI/Input';


// @ts-ignore
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return (
        <form className={styles.form}>
            <Input
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
        </form>
    );
};

export default MealItemForm;