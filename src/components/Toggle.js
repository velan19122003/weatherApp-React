import React, { useState } from "react";
import "../assets/css/style.css";
import InputForm from "./InputForm";
function Toggle(props) {
  let [isC, setC] = props.c;

  function handleToggle(e) {
    setC((v) => !v);
  }

  return (
    <>
      <section
        className="toggleBtn"
        onClick={(e) => {
          handleToggle(e);
        }}
      >
        <p className={!isC ? "hide" : "unhide"}>°C</p>
        <p className={isC ? "hide" : "unhide"}>°F</p>
      </section>
    </>
  );
}

export default Toggle;
