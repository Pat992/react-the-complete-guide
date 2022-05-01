// @ts-check
import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    // ref for input -> currentProb = current value
    // ref is used mostly if the value is readonly
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredName, setEnteredName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [errorState, setErrorState] = useState({ hasError: false, errorTitle: '', errorText: '' });

    const addUserHandler = (event) => {
        event.preventDefault();

        // You could do everything with ref and therefore remove the useState for both inputs
        // @ts-ignore
        const enteredUName = nameInputRef.current.value;
        // @ts-ignore
        const enteredUAge = ageInputRef.current.value;

        if (enteredUName.trim().length === 0 || enteredUAge.trim().length === 0) {
            setError('Invalid input', 'Please enter a name and age');
            return;
        }

        if (+enteredUAge < 1) {
            setError('Invalid input', 'Age must be bigger then 0');
            return;
        }
        setError('', '');

        props.addUserHandler(enteredUName, enteredUAge);

        // should not manipulate DOM like this, but in this case it is okeish...
        // @ts-ignore
        nameInputRef.current.value = '';
        // @ts-ignore
        ageInputRef.current.value = '';

        // No need to useState -> useRef is working
        // setEnteredName(_ => '');
        // setEnteredAge(_ => '');
    }

    const setError = (title, msg) => {
        setErrorState(_ => {
            return {
                hasError: title.trim().length === 0 ? false : true,
                errorTitle: title,
                errorText: msg
            };
        });
    }

    // Once again, not necessary if useRef() is being used
    // const inputNameHandler = (event) => {
    //     setEnteredName(_ => event.target.value);
    // }

    // const inputAgeHandler = (event) => {
    //     setEnteredAge(_ => event.target.value);
    // }

    return (
        <React.Fragment>
            {errorState.hasError && <ErrorModal title={errorState.errorTitle} msg={errorState.errorText} closeModal={() => setError('', '')} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name='username'
                        id='username'
                        // Not necessary if ref is set
                        // value={enteredName}
                        // onChange={inputNameHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id='age'
                        name='age'
                        // Not necessary if ref is set
                        // value={enteredAge}
                        // onChange={inputAgeHandler}
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};
export default AddUser;