import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('2022');

    const onUpdateFilterDate = (date) => {
        setFilterDate(date);
    }

    return (
        <div>
            <ExpensesFilter onUpdateFilterDate={onUpdateFilterDate} currentSelected={filterDate} />
            <Card className='expenses'>
                {
                    props.expenses.map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                }
            </Card>
        </div>
    );
}

export default Expenses;