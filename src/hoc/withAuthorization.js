import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";

const ErrorContainer = styled("div")`
  color: red;
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Wrapper = styled("div")`
  opacity: 1;
  animation: example 500ms linear 0ms infinite;
`;
const withAuthorization = function (Component, message) {
  return function Authorized() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const toggeleAuthorization = () => {
      setIsAuthorized((prev) => !prev);
    };
    return (
      <div>
        <div>
          {isAuthorized ? (
            <Component />
          ) : (
            <ErrorContainer>
              <Wrapper>{`${message || "User is not authorised"}`}</Wrapper>
            </ErrorContainer>
          )}
        </div>
        <div style={{ display: "inline-block" }}>
          <Button
            label={`${isAuthorized ? "Un-Authorize" : "Authorize"}`}
            onClick={toggeleAuthorization}
          />
        </div>
      </div>
    );
  };
};

export default withAuthorization;
