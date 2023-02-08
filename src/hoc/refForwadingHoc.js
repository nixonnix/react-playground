import React, { forwardRef } from "react";

const refForwardingHoc = (Component) => {
  function RefForwarding(props) {
    const HocScopeValue = "HOC Scope";
    const { forwardedRef } = props;
    return (
      <Component {...props} ref={forwardedRef}>
        {HocScopeValue}
      </Component>
    );
  }

  // HOC return component must be wrapped inside forwardRef and the ref value should be passes
  // via some custom props, here forwardedRef, so that the value of forwardedRef prop can be
  // passed further down to the component which is being wrapped inside the HOC.
  // This way the ref then should be passesed to actual element and associated with it.
  return forwardRef((props, ref) => (
    <RefForwarding {...props} forwardedRef={ref} />
  ));
};

export default refForwardingHoc;
