import React, { useState, memo, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import Option from "./Options";
import useOutSideClick from "../hooks/useDetectOutsideClick";

const Container = styled("div")`
  background: black;
  border: 1px solid #ff0000;
  padding: 0.5rem 1rem;
  text-align: left;
  cursor: pointer;
  position: relative;
  @keyframes animateDropDown {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ${(props) => props.customStyles}
`;
const OptionsWrapper = styled("div")`
  display: flex;
  color: #fff;
  flex-direction: column;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 2.2rem;
  background: inherit;
  animation: animateDropDown 500ms ease-in;
`;
const SelectionView = styled("div")`
  display: flex;
  align-items: center;
  color: #fff;
`;
const SelectedValiue = styled("div")`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
`;
const SelectHandler = styled("div")`
  //   width: 10%;
`;

const UpArrow = styled("div")``;
const DownArrow = styled("div")`
  transform: rotate(180deg);
`;

const DropDown = memo(
  ({
    options,
    onClick,
    onSelect,
    selected,
    cutomDroprDownStyle,
    customListStyle,
    placeholderText,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(selected);
    const ddRef = useRef("");

    if (typeof cutomDroprDownStyle !== "string") {
      console.error(
        "prop cutomDroprDownStyle should be of type string, passed value is an - ",
        typeof cutomDroprDownStyle
      );
    }

    const onDropDownClick = () => {
      setIsOpen((prev) => !prev);
      if (typeof onClick === "function") {
        onClick();
      }
    };
    const onDropDownSelect = (value) => {
      setSelectedValue(value);
      setIsOpen(false);
      if (typeof onSelect === "function") {
        onSelect(value);
      }
    };

    // const handleOutsideClick = useCallback((e) => {
    //   console.log("clicked outside");
    //   if (ddRef.current && !ddRef.current.contains(e.target)) {
    //     setIsOpen(false);
    //   }
    // }, []);

    const handleOusideClickWithHook = useCallback(() => {
      console.log("Clicked Outside!!");
      setIsOpen(false);
    }, []);

    useOutSideClick(ddRef, handleOusideClickWithHook);

    // useEffect(() => {
    //   document.addEventListener("click", handleOutsideClick);
    //   return () => document.removeEventListener("click", handleOutsideClick);
    // }, [handleOutsideClick]);

    return (
      <Container customStyles={cutomDroprDownStyle} ref={ddRef}>
        <SelectionView onClick={() => onDropDownClick()}>
          <SelectedValiue>
            {selectedValue && typeof selectedValue === "object"
              ? selectedValue.label
              : placeholderText || "Please Select"}
          </SelectedValiue>
          <SelectHandler>
            {!isOpen && <DownArrow>^</DownArrow>}
            {isOpen && <UpArrow>^</UpArrow>}
          </SelectHandler>
        </SelectionView>
        {isOpen && (
          <OptionsWrapper>
            {options.map((item) => (
              <Option
                onSelect={onDropDownSelect}
                option={item}
                key={item.label}
                customStyle={customListStyle}
              ></Option>
            ))}
          </OptionsWrapper>
        )}
      </Container>
    );
  }
);

export default DropDown;

// Missing - Position: Absolute => background: inherit
// Global event handler
// Addition of event parameters in the event handler to preventDefault - NOT NEEDED if using ref
// Registering global event handler in useEffect intial load case - TODO: Better Approach??
// Rotation of arrow size
// Missing ellipsis in the content
// Missing title in the options
// using a custom hook to listen to outside click
