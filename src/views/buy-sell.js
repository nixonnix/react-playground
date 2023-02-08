import React, { useState, memo, useCallback } from "react";
import styled from "styled-components";
import Modal from "../components/modal";
import Button from "../components/Button";
import TransactioRows from "../components/transaction-rows";
import "./buy-sell.css";

const Container = styled("div")``;
const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
`;
const Transactions = styled("div")`
  color: #fff;
  height: calc(100vh - 20vh);
  overflow: auto;

  @keyframes example {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function createPurchaseOrder() {
  return {
    id: "order-" + new Date() + Math.random(),
    units: Math.random(),
    amount: 10000 * Math.random() + 4000,
    type: "purchase",
  };
}

function createSellOrder() {
  return {
    id: "order-" + new Date() + Math.random(),
    units: Math.random(),
    amount: 10000 * Math.random() + 4000,
    type: "sell",
  };
}

const BuySell = memo(() => {
  const [orders, setOrders] = useState([]);
  const onSellClick = useCallback(() => {
    setOrders((state) => {
      return [createSellOrder(), ...state];
    });
  }, []);

  const onPurchaseClick = useCallback(() => {
    setOrders((state) => {
      return [createPurchaseOrder(), ...state];
    });
  }, []);
  return (
    <Modal>
      <Container className="iam-buysell-css">
        <ButtonsContainer>
          <Button
            label="Buy"
            customStyleString="background: green; color: white"
            onClick={onPurchaseClick}
          ></Button>
          <Button
            label="Sell"
            customStyleString="background: red; color: white"
            onClick={onSellClick}
          ></Button>
        </ButtonsContainer>
        <Transactions>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <TransactioRows
                key={order.id}
                units={order.units}
                amount={order.amount}
                type={order.type}
              ></TransactioRows>
            ))}
        </Transactions>
      </Container>
    </Modal>
  );
});
export default BuySell;
