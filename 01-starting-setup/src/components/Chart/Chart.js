import ChartBar from './ChartBar';
import './Chart.css';


const Chart = props => {
    // 객체를 숫자로 변환
    const vals = props.data.map(data => data.value);
    // 배열을 모든 요소를 메소드의 인자로 전달
    const totalMaximum = Math.max(...vals);

    return <div className="chart">
        {props.data.map(data => (
            <ChartBar
                key={data.label}
                value={data.value}
                maxValue={totalMaximum}
                label={data.label}/>
            )
        )}
    </div>
}

export default Chart;