import React from "react";
import "./Allhooks.scss";
import { NavLink, Outlet } from "react-router-dom";

const Allhooks = () => {
  return (
    <>
      <div className="hook-container">
        <ul>
          <li>
            <NavLink end to="/hooks">useState</NavLink>
          </li>
          <li>
            <NavLink to="/hooks/useEffect">useEffect</NavLink>
          </li>
          <li>
            <NavLink to="/hooks/useReducer">useReducer</NavLink>
          </li>
          <li>
            <NavLink to="/hooks/useMemo">useMemo</NavLink>
          </li>
          <li>
            <NavLink to="/hooks/useCallback">useCallback</NavLink>
          </li>
          <li>
            <NavLink to="/hooks/useContext">useContext</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Allhooks;
