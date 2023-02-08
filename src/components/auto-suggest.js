import React, { useState, useCallback, useEffect } from "react";
import Input from "./appInput";
import styled from "styled-components";
import { debounce } from "../utils";
import Loader from "./loader";

const SuggestionsWrapper = styled("ul")`
  background: grey;
  border: 1px solid;
`;

const InputWrapper = styled("div")`
  position: relative;
`;
const LoaderWrap = styled("div")`
  position: absolute;
  right: 6px;
  bottom: -4px;
  width: 30px;
  height: 30px;
`;

const AutoSuggest = ({
  suggestions = [],
  onInputChange,
  onOptionSelect,
  inputValue = "",
  isFetching,
}) => {
  const [state, setState] = useState(inputValue);
  const [isOpen, setIsOpen] = useState(false);
  const onOptionClick = (val) => {
    setState(val);
    setIsOpen(false);
    if (typeof onOptionSelect === "function") {
      onOptionSelect();
    }
  };

  const debouncedOnInputChange = useCallback(debounce(onInputChange, 300), []);

  const onChange = (val) => {
    setState(val);
    if (typeof debouncedOnInputChange === "function") {
      debouncedOnInputChange(val);
      setIsOpen(true);
    }
  };

  return (
    <div>
      <InputWrapper>
        <Input label="Input" onChange={onChange} state={state} />
        {isFetching && (
          <LoaderWrap>
            <Loader />
          </LoaderWrap>
        )}
      </InputWrapper>
      {isOpen && (
        <SuggestionsWrapper>
          {suggestions.length > 0 ? (
            suggestions.map((val) => (
              <li
                key={val.value}
                onClick={() => {
                  onOptionClick(val.label);
                }}
              >
                {val.label}
              </li>
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </SuggestionsWrapper>
      )}
    </div>
  );
};

export default AutoSuggest;
