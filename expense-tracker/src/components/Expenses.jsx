import React from 'react';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props) => {
    return (
        <section className='expenses'>
            {
                props.expenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    >
                    </ExpenseItem>
                ))
            }
        </section>
    );
}

export default Expenses;