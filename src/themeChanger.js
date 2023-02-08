import React, { useContext, memo } from "react";
import { ThemedContext } from "./contextProvider";

const ThemeSwitch = memo(() => {
  const { theme, toggleTheme } = useContext(ThemedContext);
  console.log("in theme changer!");
  return (
    <button style={{ background: theme.primary }} onClick={toggleTheme}>
      Change Theme
    </button>
  );
});

export default ThemeSwitch;
