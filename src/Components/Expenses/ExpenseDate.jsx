import styled from "styled-components";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <ExpenseDateDiv>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </ExpenseDateDiv>
  );
};
const ExpenseDateDiv = styled.div`
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .month {
    font-size: 0.75rem;
    font-weight: bold;
  }
  .year {
    font-size: 0.5rem;
  }
  .day {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export default ExpenseDate;
