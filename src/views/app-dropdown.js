import React from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import "./app-dropdown.css";

const Container = styled("div")`
  width: 20rem;
`;

const options = [
  { label: "A1", value: "1" },
  {
    label: "cinderellapuram's neighbourhoodamexisting what a place",
    value: "2",
  },
  { label: "C1", value: "3" },
  { label: "D1", value: "4" },
  { label: "E1", value: "5" },
];

const initiaValue = { label: "Wohoo", value: "wohoo" };

const AppDDContiner = () => {
  const onSelection = (value) => {
    console.log("selected", value);
  };
  return (
    <Container>
      <div className="iam-app-dd-css iam-default-css">Some good Thoughts!!</div>
      <DropDown
        options={options}
        //   onClick
        onSelect={onSelection}
        selected={initiaValue}
        placeholderText="Ok, Select it.."
        cutomDroprDownStyle="box-shadow: 1px 1px 5px 0px rgaba(143, 143, 143, 0.5)"
        //   customListStyle,
      />
    </Container>
  );
};

export default AppDDContiner;
