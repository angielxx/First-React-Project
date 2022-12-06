import { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import './components/Expenses/Expenses.css';
import './components/Expenses/ExpenseFilter.css';
import Card from './components/UI/Card';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    // 기존의 expenses를 스프레드 연산자로 붙여넣기
    setExpenses(prev => {
      return [expense, ...prev]
    })
  }

  // state는 그 값을 사용할 컴포넌트에서 정의
  const [newFilter, setNewFilter] = useState('2022');

  const changeFilterHandler = (newFilter) => {
    setNewFilter(newFilter);
    }

  return (
    <div>
      {/* 하위 컴포넌트에 props를 통해 함수에 대한 포인터를 전달 */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className="expenses">
        <div>
          <ExpenseFilter selected={newFilter} onChangeFilter={changeFilterHandler} />
        </div>
        <Expenses expenses={expenses} filter={newFilter}/>
      </Card>
    </div>
  );
}

export default App;
