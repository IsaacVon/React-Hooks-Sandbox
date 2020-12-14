import React, { useState } from "react";
import "./App.css";
import UseStateExample from "../src/components/useState";
import UseEffectExample from "../src/components/useEffect";

function App() {
  return (
    <div className="container">
      {/* <UseStateExample /> */}
      <UseEffectExample />
    </div>
  );
}

export default App;
