import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;
const Container = styled("div")`
  min-width: 20rem;
  max-width: 90vh;
  min-height: 50vh;
  max-height: 90vh;
  overflow: auto;
  border: 1px solid;
  background: #000;
  padding: 1rem;
`;
function Modal({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Modal;
