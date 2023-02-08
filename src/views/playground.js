import React from "react";
import AccordianComponent from "../components/AccordianComponent";
import TableComponent from "../components/TableComponent";
import TabsAndApiCall from "./tabsAndApiCall";

const Playground = () => {
  return (
    <>
      {/* <AccordianComponent
        onClick={(item, i) => console.log("clicked!!", item, i)}
        active="1"
      />
      <TableComponent /> */}
      <TabsAndApiCall />
    </>
  );
};

export default Playground;
