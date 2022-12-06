import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    // 데이터 초기값
    const chartData =[
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    // 월마다 비용 합산
    for (let expense of props.expenses) {
        const month = expense.date.getMonth();
        chartData[month].value += expense.amount;
    }

    return <Chart data={chartData}/>
};

export default ExpensesChart;