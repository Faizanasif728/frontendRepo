import { useEffect, useState } from "react";
import Counter from "../components/Counter";
const Home = () => {
  const [items, setItem] = useState(["Jeans", "Shirt"]);
  const [userInput, setUserInput] = useState("");
  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const addItemHandler = () => {
    if (!userInput) {
      return;
    }
    setItem([...items, userInput]);
    setUserInput("");
  };
  useEffect(() => {
    const newValue = prompt("please enter new value");
    if (!newValue) {
      return;
    }
    setItem([...items, newValue]);
  }, []);

  const deleteItem = (index) => {
    setItem([...items.slice(0, index), ...items.slice(index + 1)]);
  };
  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="enter data"
      />
      <button onClick={addItemHandler}>Add Item</button>
      {items.map((item, index, arr) => {
        return (
          <Counter
            xyz={(n) => {
              console.log("xyz called", n);
            }}
            key={index}
            itemName={item}
            onDelete={() => deleteItem(index)}
          />
        );
      })}
    </>
  );
};

export default Home;
