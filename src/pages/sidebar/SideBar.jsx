import React from "react";
import "./SideBar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import avatar from "../../assets/images/avatar.png";

const SideBar = () => {
  let token = sessionStorage.getItem("token");
  let navigate = useNavigate();

  let login = () => {
    navigate("/login");
  };

  let deleteToken = () => {
    sessionStorage.removeItem("token");
    toast.warn("Logout successfully");
    navigate("/login");
    // token = sessionStorage.getItem("token");
  };

  let profile=()=>{
navigate("/profile")
  }

  return (
    <div className="sidebar">
      <div>
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
        </ul>
      </div>
      <ul>
        {token ? (
        <>
            <li className="">
              <button className="rounded-circle" style={{position : "relative", left:"60px"}} onClick={profile} >
                <img src={avatar} style={{width:"80px",height:"80px"}} />
              </button>
            </li>
            <li end className="login">
              <button className="btn btn-danger w-100" onClick={deleteToken}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="login">
            <button className="btn btn-primary w-100" onClick={login}>
              Login
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
