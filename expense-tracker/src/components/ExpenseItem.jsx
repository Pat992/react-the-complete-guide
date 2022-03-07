import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const expenseDate = new Date(2022, 2, 7);
    const expenseTitle = 'Rent';
    const amount = 1950.00;

    return (
        <div className='expense-item'>
            <div>{props.date.toDateString()}</div>
            <div>
                <h2 className='expense-item__description'>{props.title}</h2>
                <div className='expense-item__price'>{props.amount.toFixed(2)} CHF</div>
            </div>
        </div>
    );
}

export default ExpenseItem;