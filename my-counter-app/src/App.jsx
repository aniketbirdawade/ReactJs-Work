import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
    console.log("Plus");
  };

  const handleMinus = () => {
    if (count >0) {
      setCount(count - 1);
      console.log("Minus");
    }
  };

  const handleReset = () => {
    setCount(0);
    console.log("Reset");
  };

  return (
    <>
      <h1>Welcome to counter app</h1>

      <button onClick={handlePlus}>Plus Me</button>
      <button onClick={handleMinus}>Minus Me</button>
      <button onClick={handleReset}>Reset Me</button>

      <h2>Count : {count}</h2>


    </>
  );
}

export default App;
