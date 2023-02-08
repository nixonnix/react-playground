import React, { useState, useEffect } from "react";

const Counter = ({ start = 0, end = 100 }) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    setTimeout(() => {
      if (count === end) {
        return;
      }
      setCount(count + 1);
    }, 100);
  }, [count, end]);
  return <div>{count}</div>;
};

export default Counter;
