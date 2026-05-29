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



//API fetch Example
import React, { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;