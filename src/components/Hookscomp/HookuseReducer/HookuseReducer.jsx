import React, { useReducer, useState } from "react";
import "./HookuseReducer.scss";
import { v4 as uuidv4 } from "uuid";

const HookuseReducer = () => {
  let [emp, setEmp] = useState({
    id: "",
    name: "",
    email: "",
  });
  let [id, setId] = useState("");
  let intialState = [];
  let [empList, dispatch] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch (action?.type) {
      case "ADD_EMP":
        return [
          ...state,
          {
            ...action?.payload,
            id: uuidv4(),
          },
        ];

      case "DEL_EMP":
        return state.filter((e) => {
          return e?.id !== action?.payload;
        });

      case "UPDATE_EMP":
        return state.map((e) => {
          if (action?.payload?.id === e?.id) {
            return {
              ...e,
              name: action?.payload?.name,
              email: action?.payload?.email,
            };
          } else {
            return e;
          }
        });

      default:
        return state;
    }
  }

  let addUpdateEmp = () => {
    if (id) {
      dispatch({ type: "UPDATE_EMP", payload: emp });
      setId("");
      resetState();
    } else {
      dispatch({ type: "ADD_EMP", payload: emp });
      resetState();
    }
  };

  let resetState = () => {
    setEmp({
      name: "",
      email: "",
    });
  };

  let deleteEmp = (id) => {
    dispatch({ type: "DEL_EMP", payload: id });
  };

  let updateEmp = (obj) => {
    setEmp({
      id: obj?.id,
      name: obj?.name,
      email: obj?.email,
    });
    setId(obj?.id);
  };

  return (
    <div className="main">
      <div className="form-container">
        <div>
          <label>Enter Name : </label>
          <input
            type="text"
            value={emp?.name}
            onChange={(e) => setEmp({ ...emp, name: e.target.value })}
          />
        </div>
        <div>
          <label>Enter Email : </label>
          <input
            type="text"
            value={emp?.email}
            onChange={(e) => setEmp({ ...emp, email: e.target.value })}
          />
        </div>
        <div>
          <button onClick={addUpdateEmp}>
            {id ? "Update" : "Add"} Employee
          </button>
        </div>
      </div>
      <hr />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {empList.map((e) => (
              <tr>
                <th scope="row">{e?.id}</th>
                <th scope="row">{e?.name}</th>
                <td>{e?.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateEmp(e)}
                  >
                    Update
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmp(e?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HookuseReducer;
