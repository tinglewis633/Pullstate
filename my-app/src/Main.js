import React from "react";
import { Store1 } from "./Store";

function Main() {
    const { isDarkMode, isMobile } = UIStore.useState(s => ({
        isDarkMode: s.isDarkMode,
        isMobile: s.isMobile
      }));
  function toggleMode(s) {
    s.isDarkMode = !s.isDarkMode;
  }
  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h1>Hello Pullstate</h1>
      <button onClick={() => Store1.update(toggleMode)}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Main;
