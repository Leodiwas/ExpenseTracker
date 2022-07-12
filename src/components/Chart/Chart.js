import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dpoint) => dpoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="Chart">
      {props.dataPoints.map((dt) => (
        <ChartBar
          key={dt.label}
          value={dt.value}
          maxValue={totalMaximum}
          label={dt.label}
        />
      ))}
    </div>
  );
};

export default Chart;
