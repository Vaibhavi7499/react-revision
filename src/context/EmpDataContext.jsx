import { createContext, useState } from "react";

export const EmpDataContext = createContext();

let EmpContainer = ({ children }) => {
  let [empData, setEmpData] = useState([]);

  function getEmpData(obj) {
    setEmpData([...empData, obj]);
  }

  function deleteEmp(id){
    let newEmp=empData.filter((e)=>{
        return e?.id !== id
    })
    setEmpData(newEmp)
  }

  function updateEmp(obj){
    let updatedEmp=empData.map((e)=>{

})
setEmpData(updateEmp)
  }

  let contextValue={
empData,
getEmpData,
deleteEmp,
updateEmp
  }

  return <EmpDataContext.Provider value={contextValue}>
    {children}
    </EmpDataContext.Provider>;
};

export default EmpContainer;
