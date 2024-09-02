import { useState } from "react";
const Counter = (props) => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  );
};
export default Counter;
