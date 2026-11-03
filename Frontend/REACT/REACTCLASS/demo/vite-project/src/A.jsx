import React, { useContext, useState } from "react"
import { UserContext } from "./Contexts";
import  B from'./B'
const A = () => {
    // const [count , setCount] = useState(0);
    // const statehandle = () => {
    //     setCount(count++)
    // }
    const data = useContext(userContext);

    return(
        <>
        <h1>A Component</h1>
        {/* <h2>{count}</h2> */}
         {/* <h2 onClick={statehandle}>Increase</h2> */}
         <h1>This is our A Component</h1>
        <B/> 
        </>
    )
}

export default A;