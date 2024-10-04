import React from 'react';
import "./SideBar.scss";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
            <h2>Sidebar</h2>
            <ul>
                <li><NavLink to="/hooks">All Hooks</NavLink></li>
                <li><NavLink to="/lifecycle">Lifecycle</NavLink></li>
            </ul>
    </div>
  )
}

export default SideBar