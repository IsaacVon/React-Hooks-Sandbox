import React, { useState } from "react";

export default function UseEffectExample() {
  const [resourceType, setResourceType] = useState("posts");
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
