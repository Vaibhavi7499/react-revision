import React, { useState } from "react";
import "./HookuseState.scss";

const HookuseState = () => {
  let [num1] = useState(10);
  let [num2] = useState(20);
  let [sum, setSum] = useState("?");

  let add = () => {
    setSum(num1 + num2);
  };

  return (
    <div className="add-container">
      <div>
      <h2>Addition of num1 and num2 is : {sum}</h2>
      </div>
      <div>
      <button onClick={add}>Addition</button>
      </div>
    </div>
  );
};

export default HookuseState;
