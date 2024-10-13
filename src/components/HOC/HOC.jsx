import React, { useState } from "react";
import HigherOrderComp from "./HigherOrderComp";

const HOC = ({ counter, increment }) => {
  // let [counter1, setCounter1] = useState(0);
  // let [counter2, setCounter2] = useState(0);

  // let increase = () => {
  //   setCounter1((prevcount) => prevcount + 1);
  // };

  // let hover = () => {
  //   setCounter2((prevcount) => prevcount + 1);
  // };

  return (
    <div className="col-md-4 m-auto mt-4">
      <div>
        <button onClick={increment}>Counter increase {counter} times</button>
      </div>
      <div>
        <h2 onMouseOver={increment}>Counter hover {counter} times</h2>
      </div>
    </div>
  );
};

export default HigherOrderComp(HOC);
