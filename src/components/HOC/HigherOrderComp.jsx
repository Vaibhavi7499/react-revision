import React, { useState } from "react";

const HigherOrderComp = (ObjectComp) => {
  const newComponent = () => {
    let [counter, setCounter] = useState(0);

    let increment = () => {
      setCounter((prevcount) => prevcount + 1);
    };

    return <ObjectComp counter={counter} increment={increment} />;
  };

  return newComponent;
};

export default HigherOrderComp;
