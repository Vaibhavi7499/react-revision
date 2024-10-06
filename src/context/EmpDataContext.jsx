import { createContext, useState } from "react";

export const EmpDataContext = createContext();

let EmpContainer = ({ children }) => {
  let [empData, setEmpData] = useState([]);
  let [isClose, setIsClose] = useState(false)

  function getEmpData(obj) {
    setEmpData([...empData, obj]);
  }

  function deleteEmp(id) {
    let newEmp = empData.filter((e) => {
      return e?.id !== id;
    });
    setEmpData(newEmp);
  }

  function sidebarClose() {
    setIsClose(!isClose)
  }

  function updateEmp(obj) {
    let updatedEmp = empData.map((e) => {
      if (e?.id === obj?.id) {
        return {
          ...e,
          name: obj?.name,
          email: obj?.email,
          phoneNumber: obj?.phoneNumber,
        };
      } else {
        return e;
      }
    });    
    setEmpData(updatedEmp);
  }

  let contextValue = {
    empData,
    getEmpData,
    deleteEmp,
    updateEmp,
    isClose,
    setIsClose
  };

  return (
    <EmpDataContext.Provider value={contextValue}>
      {children}
    </EmpDataContext.Provider>
  );
};

export default EmpContainer;
