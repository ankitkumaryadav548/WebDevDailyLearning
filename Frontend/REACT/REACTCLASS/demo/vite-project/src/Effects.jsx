
import { useEffect, useState } from "react";

const Effects = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(21);

  // useEffect runs after the initial render
  // and whenever count changes
  useEffect(() => {
    console.log("Effect happens");
  }, [count]);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleIncreaseAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount =>
      prevCount > 0 ? prevCount - 1 : 0
    );
  };

  return (
    <div>
      <h1>This is a State Component</h1>

      <h2>Counter</h2>
      <button onClick={handleIncrease}>+</button>
      <h2>{count}</h2>
      <button onClick={handleDecrease}>-</button>

      <h2>Age</h2>
      <button onClick={handleIncreaseAge}>+</button>
      <h2>{age}</h2>
    </div>
  );
};

export default Effects;
