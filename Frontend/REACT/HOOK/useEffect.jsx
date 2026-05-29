// useEffect is a React Hook used to perform side effects in functional components.
// Side effects include:

// Fetching API data
// Updating the DOM
// Setting timers
// Adding event listeners
// Running code after component renders

import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Rendered");
  });

  return (
    <h1>Hello React</h1>
  );
}

export default App;