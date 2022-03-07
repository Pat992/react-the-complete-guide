import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const onClickHandler = () => {
        setTitle('Updated');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div>
                <h2 className='expense-item__description'>{title}</h2>
                <div className='expense-item__price'>{props.amount} CHF</div>
            </div>
            <button onClick={onClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;