import React from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div>
                <h2 className='expense-item__description'>{props.title}</h2>
                <div className='expense-item__price'>{props.amount.toFixed(2)} CHF</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;