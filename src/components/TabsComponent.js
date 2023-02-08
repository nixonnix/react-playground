import React from "react";
import styled from "styled-components";

import { Tab, Tabs } from "./library/Tab";

const Container = styled("div")``;
const Wrapper = styled("div")``;
const Title = styled("div")`
  font-size: 20px;
  font-weight: bold;
`;

const TabsComponent = ({ handleClick }) => {
  const onClick = (each, i) => {
    if (typeof handleClick === "function") {
      handleClick(each, i);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Tabs Component:</Title>
        <Tabs onClick={onClick} active="1">
          <Tab label="One">Hello! I am One!!</Tab>
          <Tab label="Two">Hello! I am Two!!</Tab>
          <Tab label="Three">Hello! I am Three!!</Tab>
        </Tabs>
      </Wrapper>
    </Container>
  );
};

export default TabsComponent;
