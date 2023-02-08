import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tab from "./Tab";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;
const TabNav = styled("div")`
  display: flex;
`;
const TabPane = styled("div")``;

const Tabs = ({ onClick, active, children }) => {
  const [activeTab, setActiveTab] = useState(Number(active) || 0);
  const [tabsData, setTabsData] = useState([]);
  const handleClick = (each, i) => {
    setActiveTab(i);
    if (typeof onClick === "function") {
      onClick(each, i);
    }
  };

  const Content = tabsData[activeTab]?.props?.children;

  useEffect(() => {
    const DChild = Array.isArray(children) ? children : [children];
    setTabsData(DChild);
  }, [children]);

  return (
    <Container>
      <TabNav>
        {tabsData.map((each, i) => (
          <Tab
            active={activeTab === i}
            onClick={() => handleClick(each.props.label, i)}
            label={each.props.label}
            key={i + each.props.label}
          />
        ))}
      </TabNav>
      <TabPane>{Content}</TabPane>
    </Container>
  );
};

export default Tabs;
