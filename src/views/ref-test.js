import React, { useRef, forwardRef } from "react";
import styled from "styled-components";
import refForwardingHoc from "../hoc/refForwadingHoc";
import useCounterNew from "../hooks/useCounterNew";

const CustomButtonContainer = styled("div")`
  padding: 0.5rem 3rem;
  color: black;
  background: blue;
  border: 1px solid;
  cursor: pointer;
  display: inline-block;
`;

// For refs pointing to components, we need to forward refs
const CustomButton = forwardRef(({ children, onClick, className }, ref) => {
  return (
    <CustomButtonContainer ref={ref} onClick={onClick} className={className}>
      {children}
    </CustomButtonContainer>
  );
});

// We can also pass the refs to dom element without forwardRef use in the component.
// Just pass the ref value to component through some prop and not via the ref e.g, dRef
// and in the componet use this prop value and pass it to DOM element via ref i.e;
// say, <span ref={dRef} />
// Refer Case 4 in below example

// If the Dummycomponet will have further nesting with componets, then the ref can be
// passed down as some custom prop name. and also directly using ref. If ref is directly used
// on custom component, then custom component has to be wrapped inside forwardRef.

const DummyComponent = (props) => {
  const { children: Child, dref } = props;
  return (
    <span {...props} ref={dref} style={{ color: "blue", fontWeight: "Bold" }}>
      Click this Span!!
    </span>
  );
};

const WithHocCustomButton = refForwardingHoc(CustomButton);

const AllRefs = () => {
  const simpleButtonRef = useRef("");
  const refThroughCustomButtonRef = useRef("");
  const refThroughHocCustomButton = useRef("");
  const refViaNestedComponents = useRef("");

  const Counter = useCounterNew();

  const onButtonClick = () => {
    console.log("onButtonClick", simpleButtonRef);
  };
  const onCustomButtonClick = () => {
    console.log("onCustomButtonClick", refThroughCustomButtonRef);
  };
  const onHOCButtonClick = () => {
    console.log("onHOCButtonClick", refThroughHocCustomButton);
  };
  const onNestedButtonClick = () => {
    console.log("onNestedButtonClick", refViaNestedComponents);
  };
  return (
    <div>
      <div>
        <div>Case 1: Simple Refs</div>
        <button
          ref={simpleButtonRef}
          onClick={onButtonClick}
          className="simple-button"
        >
          Click me!!
        </button>
      </div>
      <div>
        <div>Case 2: Refs Through Custom elements!!</div>
        <CustomButton
          ref={refThroughCustomButtonRef}
          onClick={onCustomButtonClick}
        >
          Custom Btn!!
        </CustomButton>
      </div>
      <div>
        <div>Case 3: Refs via HOC</div>
        <div>
          <WithHocCustomButton
            ref={refThroughHocCustomButton}
            onClick={onHOCButtonClick}
            className="through-HOC"
          />
        </div>
      </div>
      <div>
        <div>Case 4: Ref passed to components without using forwardRef</div>
        <div>
          <DummyComponent
            dref={refViaNestedComponents}
            onClick={onNestedButtonClick}
            className="through-nested"
          ></DummyComponent>
        </div>
      </div>
      <div>
        <div>Count: </div>
        {Counter}
      </div>
    </div>
  );
};

export default AllRefs;
