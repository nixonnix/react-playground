import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  padding: 0.5rem 3rem;
  color: black;
  background: blue;
  border: 1px solid;
  cursor: pointer;
  ${(props) => props.customStyle}
`;
const LabelContainer = styled("span")``;

function Button({ label, onClick, customStyleString }) {
  return (
    <Container onClick={onClick} customStyle={customStyleString}>
      <LabelContainer>{label}</LabelContainer>
    </Container>
  );
}

export default Button;
