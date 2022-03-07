import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [title, setTitle] = useState('');
    // const [date, setDate] = useState('');
    // const [amount, setAmount] = useState(0.01);

    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0.01,
        date: '',
    });

    const onTitleChangeHandler = (e) => {
        // setTitle(e.target.value);

        // not like this, could be problematic, and use an older snapshot
        // setUserInput({ ...userInput, title: e.target.value });

        // Use this to make sure to get always the latest snapshot
        setUserInput((prevSnapshot) => {
            return { ...prevSnapshot, title: e.target.value };
        });
    }
    const onDateChangeHandler = (e) => {
        // setDate(e.target.value);
        // setUserInput({ ...userInput, cDate: e.target.value });
        setUserInput((prevSnapshot) => {
            return { ...prevSnapshot, date: e.target.value };
        });
    }
    const onAmountChangeHandler = (e) => {
        // setUserInput({ ...userInput, amount: e.target.value });
        // setAmount(e.target.value);
        setUserInput((prevSnapshot) => {
            return { ...prevSnapshot, amount: e.target.value };
        });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const expenseDataObj = { ...userInput, date: new Date(userInput.date) };

        setUserInput((prevSnapshot) => {
            return {
                title: '',
                date: '',
                amount: 0.01
            };
        });

        console.log(expenseDataObj);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' onChange={onTitleChangeHandler} value={userInput.title} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name='amount' min='0.01' step='0.01' onChange={onAmountChangeHandler} value={userInput.amount} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' min='2019-01-01' onChange={onDateChangeHandler} value={userInput.date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;