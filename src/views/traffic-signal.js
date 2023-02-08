import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { LightContextProvider, LightContext } from "../contextProvider";

import TrafficLight from "../components/traffic-light";

const Circle = styled("div")`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid;
  margin: 5px;
  background: ${(props) => props.color};
`;
const Container = styled("div")`
  height: 100px;
  width: 40px;
  display: flex;
  flex-direction: column;
  background: grey;
`;

const config = [
  {
    color: "green",
    duration: 3000,
  },
  {
    color: "yellow",
    duration: 1000,
  },
  {
    color: "red",
    duration: 5000,
  },
];

const getColor = (color, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(color);
    }, delay);
  });
};

const TrafficLightContainer = () => {
  return (
    <LightContextProvider>
      <TrafficLight />
    </LightContextProvider>
  );
};
export default TrafficLightContainer;
