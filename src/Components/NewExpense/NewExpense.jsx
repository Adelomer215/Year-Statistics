import { useState } from "react";
import styled from "styled-components";

import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ handleNewItems }) => {
  const [expenseState, setExpense] = useState(true);

  const changeExpenseState = () => {
    setExpense((prev) => !prev);
  };

  return (
    <NewExpenseDiv>
      {expenseState ? (
        <button onClick={changeExpenseState}>Add New Expense</button>
      ) : (
        <ExpenseForm
          handleNewItems={handleNewItems}
          changeExpenseState={changeExpenseState}
        />
      )}
    </NewExpenseDiv>
  );
};
const NewExpenseDiv = styled.div`
  background-color: #9e86ec;
  box-shadow: 0 1px 8px rgb(0 0 0 / 25%);
  padding: 1rem;
  margin: 1rem auto;
  width: 50rem;
  border-radius: 15px;
  max-width: 95%;
  text-align: center;

  button {
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    font-size: 1.5rem;
    color: #fff;
    background-color: #380058;
    border-radius: 15px;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: #510674;
      border-color: #510674;
    }
  }
`;
export default NewExpense;
