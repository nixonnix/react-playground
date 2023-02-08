import React, { memo, useState } from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;
const Elements = styled("div")`
  display: flex;
`;
const OutputContainer = styled("div")`
  padding: 20px;
  color: Green;
`;
const InputContainer = styled("div")`
  position: relative;
  padding-bottom: 20px;
`;
const InputError = styled("div")`
  position: absolute;
  left: 0;
  bottom: 0;
  color: red;
`;

const ButtonContainer = styled("button")``;

// Input component
const Input = ({ value, onChange, type, hasError, errorMessage }) => {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} type={type} />
      {hasError && <InputError>{errorMessage || "error!!"}</InputError>}
    </InputContainer>
  );
};
// Button component
const Button = ({ onClick, type, children }) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};

// Inout validation functions
// Name Validation
function validateName(name) {
  const regEx = /^[a-zA-Z]+$/;
  return regEx.test(name);
}
// Email validation
function validateEmail(email) {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
}
const Playground = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onFormSubmit = () => {
    if (!validateName(name)) {
      setIsNameError(true);
    } else {
      setIsNameError(false);
    }

    if (!validateEmail(email)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };
  return (
    <Container>
      <Elements>
        <div>Name</div>
        <Input
          value={name}
          type="text"
          onChange={onNameChange}
          hasError={isNameError}
          errorMessage="Enter a valid name!"
        />
      </Elements>
      <Elements>
        <div>Email</div>
        <Input
          value={email}
          type="email"
          onChange={onEmailChange}
          hasError={isEmailError}
          errorMessage="Enter a valid email!"
        />
      </Elements>
      <Elements>
        <Button onClick={onFormSubmit} type="submit">
          Click Me!!
        </Button>
      </Elements>
      {name && email && !isNameError && !isEmailError && (
        <OutputContainer>{`Name: ${name}, Email: ${email}`}</OutputContainer>
      )}
    </Container>
  );
};

export default Playground;
