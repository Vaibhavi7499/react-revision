import React, { useState } from "react";
import "./App.css";
import Child from "./Child";
import RoomDetails from "./RoomDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import Allhooks from "./components/Allhooks/Allhooks";
import SideBar from "./pages/sidebar/SideBar";
import HookuseState from "./components/Hookscomp/HookuseState/HookuseState";
import HookuseEffect from "./components/Hookscomp/HookuseEffect/HookuseEffect";
import HookuseReducer from "./components/Hookscomp/HookuseReducer/HookuseReducer";
import HookuseMemo from "./components/Hookscomp/HookuseMemo/HookuseMemo";
import HookuseCallback from "./components/Hookscomp/HookuseCallback/HookuseCallback";
import HookuseContext from "./components/Hookscomp/HookuseContext/HookuseContext";
import LifeCycle from "./components/lifecycle/LifeCycle";
import EmpForm from "./components/Routing/EmpForm/EmpForm";
import EmpList from "./components/Routing/EmpList/EmpList";
import EmpNav from "./components/Routing/EmpNav/EmpNav";

const App = () => {
  let [name, setName] = useState("Hello");

  function changeName(name) {
    setName("Hello World!!");
  }

  return (
    <div className="app">
      {/* <h1>{name}</h1>
      <Child  changeName={changeName}> 
      <span>Add</span> 
      </Child> */}
      {/* <RoomDetails/> */}
      <div className="app-sidebar">
        <SideBar />
      </div>
      <div className="app-hook">
        <Routes>
          <Route path="/" element={<Navigate to="/hooks" />} />
          <Route path="/hooks" element={<Allhooks />} >
          <Route index element={<HookuseState />} />
          <Route path="useEffect" element={<HookuseEffect />} />
          <Route path="useReducer" element={<HookuseReducer />} />
          <Route path="useMemo" element={<HookuseMemo />} />
          <Route path="useCallback" element={<HookuseCallback />} />
          <Route path="useContext" element={<HookuseContext />} />
          </Route>

          <Route path="/lifecycle" element={<LifeCycle/>} />
          <Route path="/routing" element={<EmpNav/>} >
          <Route index element={<EmpForm/>} />
          <Route path="/routing/:id" element={<EmpForm/>} />
          <Route path="emplist" element={<EmpList/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
