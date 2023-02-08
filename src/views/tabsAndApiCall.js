import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "../components/library/Tab";
// import useFetch from "../hooks/useFetch";

const data = [
  { name: "One", dalay: 2000, content: "This Is One" },
  { name: "Two", dalay: 1000, content: "This Is Two" },
  { name: "Three", dalay: 5000, content: "This Is Three" },
];

function fakeApi(index, delay) {
  console.log(" --- delay --- ", delay);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data[index]);
    }, delay);
  });
}

const TabsAndApiCall = () => {
  const [defaultState, setDefaultState] = useState({
    One: "",
    Two: "",
    Three: "",
  });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("One");
  const onClick = (data, i) => {
    setActiveTab(data);
    setActiveTabIndex(i);
  };

  //   const [loading, error, response] = useFetch(
  //     "https://random-data-api.com/api/company/random_company",
  //     activeTab
  //   );

  //   console.log("loading --- ", loading);
  //   console.log("error --- ", error);
  //   console.log("response --- ", response);

  useEffect(() => {
    fakeApi(activeTabIndex, data[activeTabIndex].dalay).then((response) => {
      //   console.log("Response --- " + activeTab, response);
      const temp = { ...response, content: Math.random() + response.content };
      setDefaultState((prev) => {
        return { ...prev, [data[activeTabIndex].name]: temp };
      });
    });
    // let abortController = new AbortController();
    // let signal = abortController.signal;
    // fetch("https://random-data-api.com/api/company/random_company", {
    //   signal,
    // }).then((response) => {
    //   setDefaultState((prev) => {
    //     return { ...prev, [data[activeTabIndex].name]: response };
    //   });
    // });
    return () => {
      console.log(" ------------------------------ component is unmounting");
      //   abortController.abort();
    };
  }, [activeTabIndex]);

  return (
    <>
      <Tabs onClick={onClick} active={activeTabIndex}>
        {data.map((item) => (
          <Tab label={item.name} />
        ))}
      </Tabs>
      <div>{defaultState[activeTab]?.content}</div>
    </>
  );
};

export default TabsAndApiCall;
