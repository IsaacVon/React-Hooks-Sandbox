import React, { useState, useEffect } from "react";

// Fetches JSON every time the resource is changed

export default function UseEffectExample() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // When resourceType changes.. the hook runs
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div className="container">
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
