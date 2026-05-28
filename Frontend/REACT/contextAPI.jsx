//props drilling => prop drilling happens when data is passed from a parent component down through multiple nested components using props, even when some intermediate components don’t actually use the data.
// Prop Drilling Can Be a Problem because =>
// magine you have:

// many nested components
// many props
// large applications

// Then:

// components become cluttered
// changing prop names becomes harder
// maintenance gets difficult

// Example problem:
// App → Layout → Sidebar → Menu → Profile → Avatar
// If only Avatar needs the data, every component in between must still pass it.

// To avoid prop drilling => we will use context API
//Context API lets components access shared data directly without passing props through every level.

const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Alice">
      <Parent />
    </UserContext.Provider>
  );
}

function GrandChild() {
  const username = React.useContext(UserContext);

  return <h1>Hello, {username}</h1>;
}