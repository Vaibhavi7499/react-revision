import React, { useContext } from "react";
import { EmpDataContext } from "../../../context/EmpDataContext";
import { useParams } from "react-router-dom";

const ViewEmp = () => {

    let {empData} = useContext(EmpDataContext);
    let {id} = useParams();

let viewObj = empData.find((e)=>{
return e?.id === id
})

return (
    <div className="col-md-4 m-auto mt-5">
      <div className="card">
        <div className="card-header text-center">{viewObj?.name}</div>
        <div className="card-body">
          <h5 className="card-title text-center">{viewObj?.email}</h5>
          <p className="card-text text-center">
           {viewObj?.phoneNumber}
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
