import * as React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <div className="counter-container">
        <p>{count}</p>
        <button onClick={clickHandler}>up</button>
      </div>
    </div>
  );
};

export default Counter;
