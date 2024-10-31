import React, { useContext, useState } from "react";
import "./SideBar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import avatar from "../../assets/images/avatar.png";
import { EmpDataContext } from "../../context/EmpDataContext";


const SideBar = () => {
  let {setIsClose} =  useContext(EmpDataContext)
  let token = sessionStorage.getItem("token");
  let [arrow, setArrow] = useState(false);
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

  let profile = () => {
    navigate("/profile");
  };

  let closeArrow = () => {
    setArrow(!arrow);
    setIsClose(arrow)
    
  };
  return (
    <div className={arrow ? "sidebar-five" :"sidebar"}>
   
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h2 className={arrow ? "siderbar-none" : ""}>Sidebar</h2>
          {arrow ? (
            <svg
              onClick={closeArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          ) : (
            <svg
              onClick={closeArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          )}
        </div>
        <ul className={arrow ? "siderbar-none" : ""}>
          <li>
            <NavLink to="/hooks">All Hooks</NavLink>
          </li>
          <li>
            <NavLink to="/lifecycle">Lifecycle</NavLink>
          </li>
          <li>
            <NavLink to="/routing">Routing</NavLink>
          </li>
          <li>
            <NavLink to="/hoc">HOC</NavLink>
          </li>
          <li>
            <NavLink to="/pure">Pure Component</NavLink>
          </li>
          <li>
            <NavLink to="/watch">Digital Watch</NavLink>
          </li>
          <li>
            <NavLink to="/redux">React-Redux</NavLink>
          </li>
        </ul>
      </div>
      <ul className={arrow ? "siderbar-none" : ""}>
        {token ? (
          <>
            <li className="">
              <button
                className="rounded-circle"
                style={{ position: "relative", left: "60px" }}
                onClick={profile}
              >
                <img src={avatar} style={{ width: "80px", height: "80px" }} />
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
