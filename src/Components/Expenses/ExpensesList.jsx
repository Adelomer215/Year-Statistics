import styled from "styled-components";

const ExpensesList = ({ ExpenseItems, filterYear }) => {
  const list =
    ExpenseItems.length > 0 ? (
      ExpenseItems
    ) : (
      <EmptyYear>There is now items for this Year {filterYear} </EmptyYear>
    );
  return <>{list}</>;
};
const EmptyYear = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
  font-weight: bold;
  margin: 2rem;
`;
export default ExpensesList;
