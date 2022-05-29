import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterExpenses = expenses.filter(
    (ele) => ele.date.toLocaleString().includes(filterYear) && ele
  );

  const ExpenseItems = filterExpenses.map((ele, idx) => {
    return (
      <ExpenseItem
        title={ele.title}
        amount={ele.amount}
        date={ele.date}
        key={idx}
      />
    );
  });

  const filterChangeHandler = (year) => {
    setFilterYear((prev) => (prev = year));
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={ExpenseItems} />
      <ExpensesList ExpenseItems={ExpenseItems} filterYear={filterYear} />
    </Card>
  );
};

export default Expenses;
