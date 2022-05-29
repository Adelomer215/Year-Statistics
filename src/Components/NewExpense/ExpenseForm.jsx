import { useState } from "react";
import styled from "styled-components";

const ExpenseForm = ({ handleNewItems, changeExpenseState }) => {
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: ""
  //   });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handelTitle = (e) => {
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value
    // });

    setTitle((prev) => (prev = e.target.value));
  };

  const handelAmount = (e) => {
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value
    // });
    setAmount((prev) => (prev = e.target.value));
  };

  const handelDate = (e) => {
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value
    // });
    setDate((prev) => (prev = e.target.value));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const expenseDate = {
      title,
      amount: +amount,
      date: new Date(date),
      id: Math.random()
    };
    handleNewItems(expenseDate);

    setTitle((prev) => (prev = ""));
    setAmount((prev) => (prev = ""));
    setDate((prev) => (prev = ""));
  };

  return (
    <form onSubmit={(e) => handelSubmit(e)}>
      <NewExpenseControls>
        <NewExpenseControl>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handelTitle(e)}
            required
          />
        </NewExpenseControl>
        <NewExpenseControl>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => handelAmount(e)}
            required
          />
        </NewExpenseControl>
        <NewExpenseControl>
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => handelDate(e)}
            required
          />
        </NewExpenseControl>
      </NewExpenseControls>
      <NewExpenseActions>
        <button
          type="button"
          style={{ marginRight: "0.8rem" }}
          onClick={changeExpenseState}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </NewExpenseActions>
    </form>
  );
};
const NewExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;
const NewExpenseControl = styled.div`
  label {
    display: block;
    font-size: 1.5rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  input {
    width: 20rem;
    max-width: 90%;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    padding: 0.5rem;
    font-size: 1.1rem;
  }
`;
const NewExpenseActions = styled.div`
  text-align: right;
`;
export default ExpenseForm;
