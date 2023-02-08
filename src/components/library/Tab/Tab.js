import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  padding: 5px 10px;
  border: 1px solid;
  background: ${(props) => (props.active ? "red" : "initial")};
`;

const Tab = ({ label, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Tab;
