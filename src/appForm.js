import React, { useState, useCallback, memo } from "react";
import AppInput from "./components/appInput";
import AutoSuggest from "./components/auto-suggest";
import { debounce, fakePromise } from "./utils";
import styled from "styled-components";

const Container = styled("div")`
  background: green;
`;

const ACContainer = styled("div")`
  background: purple;
`;

const AppForm = memo(() => {
  const [state, setState] = useState("");
  const [suggestions, setSuggestions] = useState([
    { label: "One", value: "One" },
    { label: "Two", value: "Two" },
    { label: "Three", value: "Three" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (value) => {
    console.log("The value is - ", value);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onInputChange = useCallback(debounce(handleInputChange, 500), []);
  const inputChange = (value) => {
    setState(value);
    onInputChange(value);
  };

  /*  Memoised callback is needed below or else, on parent re-render the child was also 
getting rerendered irresepective of using React.memo. This was because in the parent, for 
every render, a new onChange function was getting created and passed. Hence onChange has been
memoised using the hook useCallback. */
  const onChange = useCallback(inputChange, []);

  console.log("In app form");

  const onAsyncInputChange = (val) => {
    console.log("Inside");
    setIsLoading(true);
    fakePromise([
      { label: val, value: val },
      { label: "One", value: "One" },
      { label: "Two", value: "Two" },
      { label: "Three", value: "Three" },
    ])
      .then((res) => {
        if (val) {
          setSuggestions(res);
        } else {
          setSuggestions("");
        }
      })
      .catch()
      .finally(() => setIsLoading(false));
  };

  const onSyncInputChange = (val) => {};

  const onOptionSelect = () => "";

  return (
    <Container>
      <ACContainer>
        <span>This is Async AutoSuggest</span>
        <AutoSuggest
          suggestions={suggestions} // Expects an array of object {label: '', value: ''}
          onInputChange={onAsyncInputChange} // Triggers on input change
          onOptionSelect={onOptionSelect} // Triggers on selection from the suggestions
          inputValue="woooohooo" // expects a string and sets the initial value of input
          isFetching={isLoading} // Controls the rendering of suggestions TODO: Find Alternative
        />
      </ACContainer>
      <div>
        <AppInput label="name" onChange={onChange} state={state} />
      </div>
    </Container>
  );
});

export default AppForm;
