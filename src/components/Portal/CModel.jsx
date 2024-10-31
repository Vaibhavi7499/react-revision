import React from 'react';
import ReactDOM from "react-dom";

const CModel = () => {
  return ReactDOM.createPortal (
    <div>CModel</div>
    ,
    document.getElementById("child-root")
  )
}

export default CModel