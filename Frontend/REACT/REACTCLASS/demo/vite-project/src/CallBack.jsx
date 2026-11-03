import { useCallback, useState } from "react"

const CallBack = () =>{
    const [number , setNumber] =  useState(132);
    const result = useCallback(()=>{
        return number*32;
    }, [number])
    return(
        <>
        <h1>This is Callback component</h1>
        <h2>Result is {result()}</h2>
        </>
    )
}
export default CallBack ;
