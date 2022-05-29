import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="Expense-item">
      <ExpenseDate date={date} />
      <div className="Expense-item_description">
        <h2>{title}</h2>
        <div className="Expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
