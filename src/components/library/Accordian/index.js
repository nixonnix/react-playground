import React, { useState } from "react";
import styled from "styled-components";
import AccordianBody from "./accordianBody";
import AccordianPanel from "./panel";
import AccordianHeader from "./accordianHeader";

export const Panel = AccordianPanel;
export const Head = AccordianHeader;
export const Body = AccordianBody;

const Container = styled("div")``;

const Accordian = ({ onClick, active, children }) => {
  const [activeTab, setActiveTab] = useState(Number(active) || 0);
  const dChildren = Array.isArray(children) ? children : [children];
  const onPanelClick = (children, index) => {
    setActiveTab(index);
    if (typeof onClick === "function") {
      onClick(children, index);
    }
  };
  return (
    <Container>
      {dChildren.map((panel, i) => {
        const Dhead = Array.isArray(panel?.props.children)
          ? panel.props.children[0]
          : panel?.props.children;
        const Dbody = Array.isArray(panel?.props.children)
          ? panel.props.children[1]
          : panel?.props.children;
        return (
          <Panel key={Dhead.props.children}>
            <Head
              active={activeTab === i}
              onClick={() => onPanelClick(Dhead.props.children, i)}
            >
              {Dhead.props.children}
            </Head>
            <Body active={activeTab === i}>{Dbody.props.children}</Body>
          </Panel>
        );
      })}
    </Container>
  );
};

export default Accordian;
