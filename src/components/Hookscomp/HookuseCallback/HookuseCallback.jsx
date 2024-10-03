import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

const HookuseCallback = () => {
  let [name, setName] = useState("Hello");
  let [counter, setCounter] = useState(0);

  //   function demo(){
  // setCounter(prevcount=>prevcount+1)
  // console.log("Counter state");
  //   }

  let demo = useCallback(() => {
    setCounter((prevcount) => prevcount + 1);
    console.log("Counter state");
  }, []);

  return (
    <div>
      <h2> {name}</h2>
      <h3>{counter}</h3>
      <button
        className="btn btn-primary"
        onClick={() => setName("Hello World!!!")}
      >
        changeName
      </button>

      <ChildCallback demo={demo} />
    </div>
  );
};

export default HookuseCallback;
