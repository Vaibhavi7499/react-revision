import { useMemo, useState } from "react";

const PureFunComp = () => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("Kishor");

  let complexFun = useMemo(() => {
    console.log("complexFun called");
    for (let i = 0; i <= 1000000; i++) {}
  },[name]);

  return (
    <div>
      <h3>UseMemo Counter : {counter}</h3>
      <button className="btn btn-dark" onClick={() => setCounter((p) => p + 1)}>
        setCounter
      </button>
      <button className="btn btn-success" onClick={()=>setName("Kishor Phawade")}>setName</button>
      {complexFun}
    </div>
  );
};
export default PureFunComp;
