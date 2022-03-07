import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div>
                <h2 className='expense-item__description'>{props.title}</h2>
                <div className='expense-item__price'>{props.amount.toFixed(2)} CHF</div>
            </div>
        </div>
    );
}

export default ExpenseItem;