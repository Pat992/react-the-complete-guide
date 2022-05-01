// @ts-check
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    const inputNameHandler = (event) => {
        setEnteredName(prevSnapshot => event.target.value);
    }

    const inputAgeHandler = (event) => {
        setEnteredAge(prevSnapshot => event.target.value);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' value={enteredName} onChange={inputNameHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" id='age' name='age' value={enteredAge} onChange={inputAgeHandler} />
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    );
};
export default AddUser;