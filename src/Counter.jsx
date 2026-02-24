import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(() => {
    console.log("Initial state funciton called");
    return 0;
  });
  // currentValue, setterFunction = useState(initialValue||fn)

  console.log("Counter componenet rendered with count:", count);

  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count: {count}</button>;
};
