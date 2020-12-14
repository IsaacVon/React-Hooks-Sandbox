import React, { useState } from "react";

export default function UseStateExample() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme("black");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <div className="container">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
