// In React, a Hook is a special function that lets you use React features like:
// State
// Lifecycle methods
// Side effects
// Context
// inside functional components.

// useState is used to store and update data in a component.

import React, { useState } from "react";
function App() {
  // Hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;