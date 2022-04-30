// @ts-check
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
    return (
        <div className="Chart">
            {props.dataPoints.map(dp => <ChartBar
                key={dp.label}
                value={dp.value}
                maxValue={null}
                label={dp.label}
            />)}
        </div>
    );
}

export default Chart;