import React, { useContext } from "react";
import styled from "styled-components";
import { LightContext } from "../contextProvider";

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

const TrafficLight = () => {
  const { lights, activeColor } = useContext(LightContext);
  console.log("lights -- ", lights);
  console.log("activeColor -- ", activeColor);
  return (
    <Container>
      {lights.map((each) => (
        <Circle
          color={`${activeColor === each.color ? activeColor : ""}`}
          key={each.color}
        />
      ))}
    </Container>
  );
};

export default TrafficLight;
