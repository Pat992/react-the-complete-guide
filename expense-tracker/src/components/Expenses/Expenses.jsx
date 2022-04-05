import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('2022');
    let expensesContent = <p>No expenses found</p>

    const onUpdateFilterDate = (date) => {
        setFilterDate(date);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterDate);

    expensesContent = filteredExpenses.length === 0 ?
        <p>No expenses found</p> :
        filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onUpdateFilterDate={onUpdateFilterDate} currentSelected={filterDate} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;