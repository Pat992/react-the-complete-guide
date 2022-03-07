import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <section className='expense-item'>
            <div>Date</div>
            <div>
                <h2 className='expense-item__description'>Title</h2>
                <div className='expense-item__price'>Amount</div>
            </div>
        </section>
    );
}

export default ExpenseItem;