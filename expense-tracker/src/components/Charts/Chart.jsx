// @ts-check
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
    // get array of value
    const valArr = props.dataPoints.map(dp => dp.value);
    // pull out values with spread operator
    const maxVal = Math.max(...valArr);

    return (
        <div className="chart">
            {props.dataPoints.map(dp => <ChartBar
                key={dp.label}
                value={dp.value}
                maxValue={maxVal}
                label={dp.label}
            />)}
        </div>
    );
}

export default Chart;