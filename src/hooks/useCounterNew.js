import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import useFindOutsideClick from "./useFindOutsideClick";

const CounterContainer = styled("div")`
  padding: 100px 20px;
  margin-bottom: 50px;
  background: green;
`;

const useCounterNew = (start) => {
  const [count, setCount] = useState(start || 0);
  const [ongoing, setOngoing] = useState(true);
  const counterRef = useRef("");

  const triggerAction = () => {
    setOngoing((prev) => !prev);
  };
  const clearCounter = () => {
    setCount(0);
  };

  const onOutsideClick = useCallback(() => {
    clearCounter();
  }, []);

  useFindOutsideClick(counterRef, onOutsideClick);

  useEffect(() => {
    if (ongoing) {
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 100);
    }
  }, [count, ongoing]);
  return (
    <CounterContainer ref={counterRef}>
      <div>{count}</div>
      <button onClick={triggerAction}>{`${ongoing ? "pause" : "play"}`}</button>
      <button onClick={clearCounter}>Clear</button>
    </CounterContainer>
  );
};

export default useCounterNew;
