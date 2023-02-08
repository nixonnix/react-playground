import { useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ONE_A":
      return { ...state, one: action.value };
    case "TWO_A":
      return { ...state, two: action.value };
    default:
      return { ...state };
  }
}

const useCustomReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
};

export default useCustomReducer;
