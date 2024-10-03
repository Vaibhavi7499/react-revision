import React, { useMemo, useState } from "react";

const HookuseMemo = () => {
  let [name, setName] = useState("COCSIT");

  // function Demo(){
  //       console.log("This is simple function")
  // }

  let Demo = useMemo(() => {
    console.log("This is simple function");
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <button
        className="btn btn-success"
        onClick={() => setName("I am studying in COCSIT College.....")}
      >
        Change Name
      </button>
      {Demo}
    </div>
  );
};

export default HookuseMemo;
