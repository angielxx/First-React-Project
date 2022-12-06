import ExpenseItem from "./ExpenseItem";
// import './ExpenseList.css'

function ExpenseList(props) {
    const expenses = props.expenses
    const filtered_expenses = expenses.filter(expense => {
        return expense.date.getFullYear() == props.filter;
    })
    return (filtered_expenses.map(expense => 
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />))
}

export default ExpenseList;