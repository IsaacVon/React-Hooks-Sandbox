import React, { useState } from "react";
import "./App.css";
import UseStateExample from "../src/components/useState";
import UseEffectExample1 from "./components/useEffect1";
// import UseEffectExample2 from "./components/useEffect2";
import UseEffectExample3 from "./components/useEffect3";

function App() {
  return (
    <div className="container">
      {/* <UseStateExample /> */}
      {/* <UseEffectExample1 /> */}
      {/* <UseEffectExample2 /> */}
      <UseEffectExample3 />
    </div>
  );
}

export default App;
