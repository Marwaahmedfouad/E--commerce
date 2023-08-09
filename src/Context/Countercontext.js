import { createContext, useState } from "react";





 export let counterContext= createContext();
 
 export function CounterContextProvider(props){
    const [counter, setcounter] = useState(0);

    return <counterContext.Provider value={{counter}}>
        {props.childen}
    </counterContext.Provider>

}