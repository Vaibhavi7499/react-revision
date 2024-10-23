import React, { memo } from "react";

const PureFunChildComp = (props) => {
  console.log("child called")
  return (
    <div>
      <h3>PureFunChildComp Name : {props.name} </h3>
    </div>
  );
};

export default memo(PureFunChildComp);
