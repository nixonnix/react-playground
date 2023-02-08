import React from "react";
import withAuthorization from "../hoc/withAuthorization";
import TrafficLight from "../components/traffic-light";
import { LightContextProvider } from "../contextProvider";

const TrafficSingnalWrappedInContext = () => {
  return (
    <LightContextProvider>
      <TrafficLight />
    </LightContextProvider>
  );
};

const TrafficLightWithAuthorization = withAuthorization(
  TrafficSingnalWrappedInContext,
  "You Can't view the lights."
);

const AllHocCalls = () => {
  return (
    <div>
      <div>Traffic Light wrapped in Authorization HOC</div>
      <TrafficLightWithAuthorization />
    </div>
  );
};

export default AllHocCalls;
