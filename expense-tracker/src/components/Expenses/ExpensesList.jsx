// @ts-check
import { useState } from "react";
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props) => {
    let expensesContent = <p>No expenses found</p>

    expensesContent = props.expenses.length === 0 ?
        <p>No expenses found</p> :
        props.expenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;