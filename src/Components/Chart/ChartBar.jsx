import React from "react";
import styled from "styled-components";

const ChartBar = ({ value, maxValue, label }) => {
  let barHight = "0%";
  if (maxValue > 0) {
    barHight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <ChartBarDiv>
      <ChartBarInnerDiv>
        <ChartBarFillDiv style={{ height: barHight }}></ChartBarFillDiv>
      </ChartBarInnerDiv>
      <ChartBarLabelDiv>{label}</ChartBarLabelDiv>
    </ChartBarDiv>
  );
};

const ChartBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const ChartBarInnerDiv = styled.div`
  height: 100%;
  border: 1px solid #313131;
  border-radius: 25px;
  width: 1rem;
  background-color: #c3b4f3;
  display: flex;
  align-items: end;
`;
const ChartBarFillDiv = styled.div`
  background-color: #4826b9;
  border-radius: 25px;
  width: 100%;
  transition: all 0.3s ease-out;
`;
const ChartBarLabelDiv = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
  text-align: center;
`;

export default ChartBar;
