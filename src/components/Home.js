import React, { useState } from "react";
import InputForm from "./InputForm";
import "../assets/css/style.css";
import Toggle from "./Toggle";

function Home() {
  const [isC, setC] = useState(true);
  return (
    <>
      <Toggle c={[isC, setC]} />
      <InputForm c={isC} />
    </>
  );
}

export default Home;
