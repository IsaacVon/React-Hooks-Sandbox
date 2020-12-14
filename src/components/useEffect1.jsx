import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [resourceType, setResourceType] = useState("posts");

  console.log("rendered");

  // When resourceType changes.. the hook runs
  useEffect(() => {
    console.log("resourceType Changed");
  }, [resourceType]);

  useEffect(() => {
    console.log("onMount");
  }, []);

  return (
    <div className="container">
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
    </div>
  );
}
