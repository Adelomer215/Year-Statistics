import styled from "styled-components";

const Card = ({ children, className }) => {
  return <CardDiv className={`card ${className}`}>{children}</CardDiv>;
};

const CardDiv = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export default Card;
