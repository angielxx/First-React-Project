import ExpenseItem from "./ExpenseItem";


function ExpenseList(props) {
    const expenses = props.expenses
    const filtered_expenses = expenses.filter(expense => {
        return expense.date.getFullYear() == props.filter;
    })

    let content = <p>No Expenses found</p>;
    if (filtered_expenses.length > 0) {
        content = filtered_expenses.map(expense => 
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
    }
    return (
        <div>
            {content}
        </div>
        )
}

export default ExpenseList;