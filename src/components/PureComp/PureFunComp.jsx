import { useCallback, useMemo, useState } from "react";
import PureFunChildComp from "./PureFunChildComp";

const PureFunComp = () => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("Kishor");

  let complexFun = useMemo(() => {
    // console.log("complexFun called");
    for (let i = 0; i <= 1000000; i++) {}
  }, [name]);

  let demo = useCallback(
    (id) => {
      console.log(id, "id");
    },
    [name]
  );

  return (
    <div>
      <h3>UseMemo Counter : {counter}</h3>
      <button className="btn btn-dark" onClick={() => setCounter((p) => p + 1)}>
        setCounter
      </button>
      <button
        className="btn btn-success"
        onClick={() => setName("Kishor Phawade")}
      >
        setName
      </button>
      {complexFun}
      <PureFunChildComp name={name} demo={demo} />
    </div>
  );
};
export default PureFunComp;
