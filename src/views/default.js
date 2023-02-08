import React from "react";
import CountDown from "../count-down";
import Counter from "../counter";
import ThemeSwitch from "../themeChanger";
import { ThemeProvider, StoreProvider } from "../contextProvider";
import styled from "styled-components";
import useCounter from "../hooks/useCounter";
import AppForm from "../appForm";
import AppInput from "../components/appInput";
import "./default.css";

const CustomCounter = styled("div")`
  width: 300px;
  background: purple;
  height: 200px;
  border: 1px solid;
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Container = styled("div")`
  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
  }
  h1 {
    text-align: center;
    color: $fontColor;
    margin: 0 0 100px;
    font-size: 34px;
    font-weight: 100;
    text-transform: uppercase;
    background-color: darken(#ff0000, 5);
    padding: 20px 0;
    b {
      font-weight: 700;
    }
  }

  //follow me template
  .made-with-love {
    margin-top: 20px;
    padding: 10px;
    font-size: 10px;
    font-family: arial;
    color: #fff;
    i {
      font-style: normal;
      color: #f50057;
      font-size: 14px;
      position: relative;
      top: 2px;
    }
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const Left = styled("div")``;
const Right = styled("div")``;

function DefaultView() {
  const count = useCounter({ start: 100, end: 300 });
  return (
    <div className="iam-default-css">
      <Wrapper>
        <Left>
          <StoreProvider>
            <ThemeProvider>
              <ThemeSwitch />
              <CountDown />
            </ThemeProvider>

            <Counter />
          </StoreProvider>
          <CustomCounter>{count}</CustomCounter>
        </Left>
        <Right>
          <AppInput />
          <AppForm />
        </Right>
      </Wrapper>
    </div>
  );
}

export default DefaultView;
