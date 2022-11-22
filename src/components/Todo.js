import Nav from "./Nav";
import Form from "./Form";
import React, { useState } from "react";

function Todo() {
  const [mode, setMode] = useState("light");
  const modeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
  };

  return (
    <>
      <Nav title="usertexsile" mode={mode} modeChange={modeChange} />
      <Form heading="Enter the text below" mode={mode} text="Add In List" />
    </>
  );
}

export default Todo;
