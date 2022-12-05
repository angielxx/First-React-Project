import ExpenseList from "./components/Expenses/ExpenseList";
import './components/Expenses/ExpenseList.css';
import Card from './components/UI/Card';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (
    <div>
      {/* 하위 컴포넌트에 props를 통해 함수에 대한 포인터를 전달 */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className="expenses">
        <ExpenseList expenses={expenses}/>
      </Card>
    </div>
  );
}

export default App;
