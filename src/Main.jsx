import React from "react";
import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [counter, setCounter] = useState(0);

  const addOneHandler = () => {
    setCounter(counter + 1);
  };
  const addFiveHandler = () => {
    setCounter(counter + 5);
  };
  const removeFiveHandler = () => {
    setCounter(counter - 5);
  };
  const removeOneHandler = () => {
    setCounter(counter - 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="container">
      <div>
        <h1 className="counter">{counter}</h1>
      </div>
      <div className="buttons">
        <button onClick={addOneHandler}>Add one</button>
        <button onClick={addFiveHandler}>Add five</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={removeOneHandler}>Remove one</button>
        <button onClick={removeFiveHandler}>Remove five</button>
      </div>
    </div>
  );
};

export default Main;
