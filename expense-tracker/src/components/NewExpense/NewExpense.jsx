import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {

    const onExpenseSaveDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }

        props.onExpenseSaveDataHandler(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onExpenseSaveDataHandler} />
        </div>
    );
}

export default NewExpense;