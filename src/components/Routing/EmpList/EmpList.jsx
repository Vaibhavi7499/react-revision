import React, { useContext } from "react";
import { EmpDataContext } from "../../../context/EmpDataContext";
import "./EmpList.scss";
import {useNavigate } from "react-router-dom";
const EmpList = () => {
  let { empData, deleteEmp } = useContext(EmpDataContext);
  const Navigate = useNavigate();

  let deleteData = (id) => {
    deleteEmp(id);
  };

  let updateData=(obj)=>{
Navigate("/routing/"+obj?.id)
  }

  return (
    <div className="col-md-10 m-auto">
      <h1 className="text-center">Employee List</h1>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col" className="action">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {empData.map((e) => (
            <tr key={e?.id}>
              <th scope="row">{e?.name}</th>
              <td>{e?.email}</td>
              <td>{e?.phoneNumber}</td>
              <td>
                <button className="btn btn-success" onClick={()=>updateData(e)}>Update</button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteData(e?.id)}
                >
                  Delete
                </button>{" "}
                <button className="btn btn-secondary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpList;
