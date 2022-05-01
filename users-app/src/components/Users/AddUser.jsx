// @ts-check
import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorState, setErrorState] = useState({ hasError: false, errorTitle: '', errorText: '' });

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError('Invalid input', 'Please enter a name and age');
            return;
        }

        if (+enteredAge < 1) {
            setError('Invalid input', 'Age must be bigger then 0');
            return;
        }
        setError('', '');

        props.addUserHandler(enteredName, enteredAge);

        setEnteredName(prevSnapshot => '');
        setEnteredAge(prevSnapshot => '');
    }

    const setError = (title, msg) => {
        setErrorState(prevSnapshot => {
            return {
                hasError: title.trim().length === 0 ? false : true,
                errorTitle: title,
                errorText: msg
            };
        });
    }

    const inputNameHandler = (event) => {
        setEnteredName(prevSnapshot => event.target.value);
    }

    const inputAgeHandler = (event) => {
        setEnteredAge(prevSnapshot => event.target.value);
    }

    return (
        <React.Fragment>
            {errorState.hasError && <ErrorModal title={errorState.errorTitle} msg={errorState.errorText} closeModal={() => setError('', '')} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' value={enteredName} onChange={inputNameHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id='age' name='age' value={enteredAge} onChange={inputAgeHandler} />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};
export default AddUser;