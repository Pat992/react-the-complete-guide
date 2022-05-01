// @ts-check
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' />
                <label htmlFor="age">Age</label>
                <input type="number" id='age' name='age' />
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    );
};
export default AddUser;