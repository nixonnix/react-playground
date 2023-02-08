import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  border: 1px solid green;
  box-shadow: 0 0px 5px 3px rgb(0 0 0 / 50%) inset
  color: red;
  overflow: ${(props) => (props.active ? "auto" : "hidden")};
  height: ${(props) => (props.active ? "auto" : 0)};
  max-height: 300px;
`;

const AccordianBody = ({ children, active }) => {
  return <Container active={active}>{children}</Container>;
};

export default AccordianBody;
