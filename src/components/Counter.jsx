import { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   console.log("USE EFFECT after count value: ", count);
  //   const inter = setInterval(() => {
  //     console.log("hello");
  //   }, 1000);
  //   return () => {
  //     console.log("Cleanup function: ", count);
  //     clearInterval(inter);
  //   };
  // }, [count]);

  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={props.onDelete}>Delete</button>
    </>
  );
};

export default Counter;
