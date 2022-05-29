import React from "react";
import styled from "styled-components";

import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <ChartDiv>
      {dataPoints.map((ele, idx) => {
        return (
          <ChartBar
            value={ele.value}
            maxValue={totalMaximum}
            label={ele.label}
            key={idx}
          />
        );
      })}
    </ChartDiv>
  );
};

const ChartDiv = styled.div`
  background-color: #f8dfff;
  color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.3rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  height: 15rem;
`;

export default Chart;
