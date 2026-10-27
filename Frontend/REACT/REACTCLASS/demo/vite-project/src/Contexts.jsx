import { createContext,  useState } from "react";
import A from './A';
import B from './B'
const Contexts = () => {
    const [count , setCount] = useState(0);
    const UserContext  = createContext();
    return(
        <>
        <h1>This is Contexts Component</h1>
        <div>
            <UserContext.Provider value={{count}}>
                <A/>
                <B/>
            </UserContext.Provider>
        </div>
        </>
    )
}

export default Contexts ;