import { NavLink, Outlet, useParams } from "react-router-dom";
import "./EmpNav.scss";

const EmpNav=()=>{
   let {id} = useParams();
    return(
        <div className="list-container">
            <ul>
                <li><NavLink end className={id ? 'active' : ''} to="/routing">EmpForm</NavLink></li>
                <li><NavLink to="/routing/emplist">EmpList</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default EmpNav;
