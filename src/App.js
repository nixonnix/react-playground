import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { Switch } from "react-router";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import DefaultView from "./views/default";
import BuySell from "./views/buy-sell";
import TrafficLight from "./views/traffic-signal";
import AllHocCalls from "./views/hoc-test";
import AllRefs from "./views/ref-test";
import Playground from "./views/playground";
// import AppDD from "./views/app-dropdown";

const AppDD = lazy(() => import("./views/app-dropdown"));

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
const InternalRoute = styled(Link)`
  color: blue;
  font-size: 2rem;
  padding: 0.5rem;
`;

// const Left = styled("div")``;
// const Right = styled("div")``;

function App() {
  // const count = useCounter({ start: 100, end: 300 });
  // const count = 'Wait';
  return (
    <Container className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      {/* <Wrapper>
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
      </Wrapper> */}
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}

      <BrowserRouter>
        <InternalRoute to="/">Home</InternalRoute>
        <InternalRoute to="/trade">Trade</InternalRoute>
        <InternalRoute to="/dd">DD</InternalRoute>
        <InternalRoute to="/typeahead">Type ahead</InternalRoute>
        <InternalRoute to="/traffic-light">Traffic light</InternalRoute>
        <InternalRoute to="/hoc">HOC</InternalRoute>
        <InternalRoute to="/refs">Ref</InternalRoute>
        <InternalRoute to="/playground">Playground</InternalRoute>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<DefaultView />} />
            <Route path="/trade" element={<BuySell />} />
            <Route path="/dd" element={<AppDD />} />
            <Route path="/typeahead" element={<DefaultView />} />
            <Route path="/traffic-light" element={<TrafficLight />} />
            <Route path="/hoc" element={<AllHocCalls />} />
            <Route path="/refs" element={<AllRefs />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Container>
  );
}

export default App;
