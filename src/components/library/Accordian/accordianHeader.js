import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  border: 1px solid black;
  background: ${(props) => (props.active ? "yellow" : "#ddd")};
  font-weight: bold;
  color: ${(props) => (props.active ? "green" : "#000")};
  display: flex;
`;
const Left = styled("div")`
  width: 90%;
`;
const Right = styled("div")`
  background: #fff;
  width: 10%;
  padding: 1rem;
  box-sizing: border-box;
`;

const AccordianHeader = ({ children, Icon, onClick, active }) => {
  return (
    <Container onClick={onClick} active={active}>
      <Left>{children}</Left>
      <Right>{`${Icon || "+"}`}</Right>
    </Container>
  );
};

export default AccordianHeader;
