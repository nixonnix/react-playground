import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useRef,
  memo,
} from "react";
import styled from "styled-components";
import { ThemedContext } from "./contextProvider";

const Container = styled("div")`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary},
  height: 300px;
  width: 300px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Button = styled("button")`
  width: 100px;
`;
const InputsWrap = styled("div")`
  display: flex;
`;
const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const countdownState = {
  minutes: 0,
  seconds: 0,
  value: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "MINUTES":
      return { ...state, minutes: action.value };

    case "SECONDS":
      return { ...state, seconds: action.value };
    // case "VALUE":
    default:
      return { ...state };
  }
}

// let timeInit;
const CountDown = memo(() => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerValue, setTimerValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const [state, dispatch] = useReducer(reducer, countdownState);

  const toRef = useRef("");
  const toiRef = useRef("");

  console.log("in count-down");

  // const { theme } = useContext(ThemedContext);
  // debugger;

  let setTimeoutControl = useCallback(() => {
    toRef.current = setTimeout(() => {
      setTimerValue((val) => {
        if (val === 0) {
          debugger;
          terminate();
          return;
        }
        val = val - 1;
        return val;
      });
    }, 1000);
  }, []);

  const terminate = () => {
    clearInterval(toiRef.current);
    // clearTimeout(toRef.current);
    // setMinutes(0);
    // setSeconds(0);
    dispatch({ type: "MINUTES", value: 0 });
    dispatch({ type: "SECONDS", value: 0 });
    setTimerValue(0);
  };
  // const onStart = () => {
  //   setHasStarted(true);
  //   clearTimeout(toRef.current);
  //   const totalSeconds = state.minutes * 60 + state.seconds;
  //   setTimerValue(totalSeconds);
  // };

  const onStart = () => {
    setHasStarted(true);
    clearInterval(toiRef.current);
    // const totalSeconds = minutes * 60 + seconds;
    const totalSeconds = state.minutes * 60 + state.seconds;
    // debugger;
    setTimerValue(totalSeconds);

    toiRef.current = setInterval(() => {
      setTimerValue((val) => {
        if (val === 0) {
          terminate();
          return;
        }
        val = val - 1;
        return val;
      });
    }, 1000);
  };

  // useEffect(() => {
  //   if (timerValue > 0) {
  //     setTimeoutControl();
  //   }
  // }, [setTimeoutControl, timerValue]);
  const onStop = () => {
    setHasStarted(false);
    terminate();
  };

  return (
    <ThemedContext.Consumer>
      {({ theme }) => (
        <Container theme={theme}>
          Componnet Name: Count-Down Timer
          <InputsWrap>
            <div>
              <labe>minutes</labe>
              <input
                // value={minutes}
                value={state.minutes}
                type="number"
                onChange={(e) => {
                  console.log("e.target.value---", e.target.value);
                  // setMinutes(e.target.value);
                  dispatch({ type: "MINUTES", value: Number(e.target.value) });
                }}
              />
            </div>

            <div>
              <labe>seconds</labe>
              <input
                // value={seconds}
                value={state.seconds}
                type="number"
                onChange={(e) => {
                  // setSeconds(e.target.value);
                  dispatch({ type: "SECONDS", value: Number(e.target.value) });
                }}
              />
            </div>
          </InputsWrap>
          <div>{timerValue}</div>
          <ButtonContainer>
            {/* {!hasStarted && <Button onClick={onStart}>Start</Button>}
            {hasStarted && <Button onClick={onStop}>Stop</Button>} */}
            <Button onClick={onStart}>Start</Button>
            <Button onClick={onStop}>Stop</Button>
          </ButtonContainer>
        </Container>
      )}
    </ThemedContext.Consumer>
  );
});

export default CountDown;
