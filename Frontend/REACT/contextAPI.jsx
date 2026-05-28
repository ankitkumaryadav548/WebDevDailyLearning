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