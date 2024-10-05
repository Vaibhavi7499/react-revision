import React from "react";
import "./SideBar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideBar = () => {
  let token = sessionStorage.getItem("token");
  let navigate = useNavigate();

  let deleteToken = () => {
    sessionStorage.removeItem("token");
    toast.warn("Logout successfully");
    navigate("/login");
    // token = sessionStorage.getItem("token");
  };
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <NavLink to="/hooks">All Hooks</NavLink>
        </li>
        <li>
          <NavLink to="/lifecycle">Lifecycle</NavLink>
        </li>
        <li>
          <NavLink to="/routing">Routing</NavLink>
        </li>
        {token ? (
          <li end className="login">
            <button className="btn btn-danger" onClick={deleteToken}>
              Logout
            </button>
          </li>
        ) : (
          <li className="login">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
