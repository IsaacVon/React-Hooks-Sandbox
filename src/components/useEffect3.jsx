import React, { useState, useEffect } from "react";

// Modify Variable depending on width of window

export default function UseEffectExample() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Removes event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return <div>{windowWidth}</div>;
}
