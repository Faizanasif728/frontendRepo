import Counter from "./components/Counter";
const App = () => {
  const items = ["jeans", "shirts", "jacket", "caps"];
  return (
    <>
      {items.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
    </>
  );
};

export default App;
