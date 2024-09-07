import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={props.onDelete}>Delete</button>
    </>
  );
};

export default Counter;
