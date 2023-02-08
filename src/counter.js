import React, { useState, useEffect, useContext, useRef, memo } from "react";
import { ThemedContext, StoreContext } from "./contextProvider";
import styled from "styled-components";

const Container = styled("div")`
  background: ${(props) => props.theme.primary};
`;

const Counter = memo(() => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { theme } = useContext(ThemedContext);
  // const [state, dispatch] = useContext(StoreContext);

  // console.log("in counter");
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);
  // useEffect(() => {
  //   console.log("effect");
  //   setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  // }, []);
  useEffect(() => {
    // console.log("hi");
    // setTimeout(() => {
    //   setCount((val) => {
    //     if (val === 100) {
    //       return 100;
    //     }
    //     val = val + 1;
    //     return val;
    //   });
    // }, 250);
    // setTimeout(() => {
    //   const newCount = state.count + 1;
    //   dispatch({ value: newCount, type: "COUNT" });
    // }, 100);
    // }, [dispatch, state.count]);
    setTimeout(() => {
      if (count === 100) {
        return;
      }
      setCount(count + 1);
    }, 300);
  }, [count]);
  return (
    <Container theme={theme}>
      <div>Component Name: Counter</div>
      <div>{count}</div>
      <div>{time}</div>
    </Container>
  );
});

export default Counter;
