import React from "react";
import styled from "styled-components";

const Row = styled("div")`
  color: #fff;
  padding: 0.5rem 0;
  border-bottom: 1px solid #fff;
  &:last-child {
    border-bottom: none;
  }
  text-align: left;
  ${(props) => props.customStyles}
`;

const Option = ({ option, onSelect, customStyles }) => {
  return (
    <Row customStyles={customStyles} onClick={() => onSelect(option)}>
      {option.label}
    </Row>
  );
};

export default Option;
