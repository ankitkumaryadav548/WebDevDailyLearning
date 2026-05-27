// Props are used to pass data from a parent component to a child component.
import React from "react";

function Welcome(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Welcome;