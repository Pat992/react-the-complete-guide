// @ts-check
import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('2022');

    const onUpdateFilterDate = (date) => {
        setFilterDate(date);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterDate);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onUpdateFilterDate={onUpdateFilterDate} currentSelected={filterDate} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;