import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  border: 1px solid yellow;
`;

const Panel = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Panel;
