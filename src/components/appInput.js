import React, { memo } from "react";

const AppInput = memo(({ label, onChange = () => "", state }) => {
  //   const inputId = useId();
  const inputId = "testtst";
  console.log("In App Input");
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        id={inputId}
        value={state}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
});

export default AppInput;
