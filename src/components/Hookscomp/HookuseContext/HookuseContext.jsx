import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const HookuseContext = () => {
  let { name, age, city } = useContext(GlobalContext);
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>City : {city}</h1>
    </div>
  );
};

export default HookuseContext;
