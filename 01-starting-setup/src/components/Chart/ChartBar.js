import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';

    // max가 0보다 큰게 있는지 확인
    if (props.maxValue > 0) {
        // 퍼센트로 게산
        // 문자열을 더해주므로써 문자열로 변환
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;