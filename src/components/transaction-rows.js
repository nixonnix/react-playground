import React from "react";
import styled from "styled-components";
import { transactionColor } from "../defaults";

const Row = styled("div")`
  padding: 0.25rem 2rem;
  color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  > div {
    margin: 0 1rem;
  }
  animation: example 500ms ease;
`;

const Units = styled("div")``;
const Amount = styled("div")``;

function Transactions({ units, amount, type }) {
  return (
    <Row color={transactionColor[type]}>
      <Units>{units.toFixed(4)}</Units>
      <Amount>{amount.toFixed(2)}</Amount>
    </Row>
  );
}

export default Transactions;
