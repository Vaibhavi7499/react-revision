import React, { useEffect, useRef } from "react";

const HookuseRef = () => {
  let inptref = useRef(null);

  //   let accessInputValue = () => {
  //     inptref.current.focus();
  //   };

  useEffect(() => {
    inptref.current.focus();
    console.log(inptref.current.value)
  }, []);

  return (
    <div className="col-md-6 m-auto">
      <h2>useRef Example</h2>
      <input type="text" ref={inptref} />
    </div>
  );
};

export default HookuseRef;
