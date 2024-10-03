import React, { memo } from "react";

const ChildCallback = (props) => {
  console.log("child called");
  return (
    <div>
      <button onClick={() => props?.demo()}>Counter</button>
    </div>
  );
};

export default memo(ChildCallback);
