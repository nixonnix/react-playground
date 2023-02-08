import React from "react";
import styled from "styled-components";

import Accordian, { Head, Body, Panel } from "./library/Accordian";

const Container = styled("div")``;

const AccordianComponent = ({ onClick, active }) => {
  const handleClick = (item, i) => {
    if (typeof onClick === "function") {
      onClick(item, i);
    }
  };
  return (
    <Container>
      <Accordian onClick={handleClick} active={active}>
        <Panel>
          <Head>
            <button>Ola</button>
          </Head>
          <Body>
            <>This is One!!</>
            <input />
          </Body>
        </Panel>
        <Panel>
          <Head>Two</Head>
          <Body>
            Hey Nitish, extremely glad to hear back from you. Can we have a
            quick discussion on the role and interview process over a call? If
            you are comfortable? Also, would be great if you could share your
            resume as well. Let me know!! Hey Nitish, extremely glad to hear
            back from you. Can we have a quick discussion on the role and
            interview process over a call? If you are comfortable? Also, would
            be great if you could share your resume as well. Let me know
          </Body>
        </Panel>
        <Panel>
          <Head>Three</Head>
          <Body>This is three!!</Body>
        </Panel>
      </Accordian>
    </Container>
  );
};

export default AccordianComponent;
