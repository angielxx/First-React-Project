import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const expenses = props.expenses
    const filtered_expenses = expenses.filter(expense => {
        return expense.date.getFullYear() == props.filter;
    })

    
    return (
        <div>
            <ExpensesChart expenses={filtered_expenses}/>
            <ExpenseList items={filtered_expenses}/>
        </div>
        )
}

export default Expenses;