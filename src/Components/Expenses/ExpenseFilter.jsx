import styled from "styled-components";

const ExpenseFilter = ({ filterChangeHandler, selected }) => {
  const handleChanges = (e) => {
    filterChangeHandler(e.target.value);
  };
  return (
    <ExpenseFilterStyles>
      <p>Filter By Year</p>
      <select onChange={(e) => handleChanges(e)} value={selected}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </ExpenseFilterStyles>
  );
};

const ExpenseFilterStyles = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  select {
    width: 7rem;
    text-align: center;
    height: 2rem;
    border-radius: 15px;
    padding: 0 0.8rem;
    font-size: 1.5rem;
  }
`;
export default ExpenseFilter;
