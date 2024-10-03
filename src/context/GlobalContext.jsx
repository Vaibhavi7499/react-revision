import { createContext } from "react";

export let GlobalContext = createContext();

function GlobalContainer(props){
let contextValue = {
    name:"Mayuri",
    age:20,
    city:"latur"
}

    return(
<GlobalContext.Provider value={contextValue}>
    {props.children}
</GlobalContext.Provider>
    )
}

export default GlobalContainer;