import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
    const expenses = props.expenses
    let list = []
    for (let expense of expenses) {
        list.push(
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    }
    return list
}

export default ExpenseList;