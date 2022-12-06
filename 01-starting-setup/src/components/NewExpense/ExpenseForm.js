import { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate),
        }
        // props로 전달받은 상위 컴포넌트의 함수를 실행
        // 하위 컴포넌트의 데이터를 함수의 인자로 전달하여 상위 컴포넌트에서 받음
        props.onSaveExpenseData(expenseData);

        // 양방향 바인딩된 값을 초기화
        setNewTitle('');
        setNewAmount('');
        setNewDate('');

        setContent(<button onClick={onButtonClickHandler}>Add New Expense</button>)
    };

    const [content, setContent] = useState(<button onClick={onButtonClickHandler}>Add New Expense</button>)

    function onButtonClickHandler() {
        setContent((
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={titleChangeHandler} 
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type="number" min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={newDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </form>
        ))
    }

    return (
        <div>
            {content}
        </div>
    )
};

export default ExpenseForm;