import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        // props로 전달받은 상위 컴포넌트의 함수를 실행하며 데이터를 인자로 전달
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            {/* props의 값으로 함수를 전달하고 있음 */}
            {/* props를 통해 해당 함수에 대한 포인터를 전달하기 때문에 하위 컴포넌트에서도 함수 실행이 가능하다 */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;