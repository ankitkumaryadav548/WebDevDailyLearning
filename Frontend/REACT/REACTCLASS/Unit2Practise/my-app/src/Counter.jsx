// When you click the button:
// - count becomes 1.
// - Console prints 1.
// - But React does not know that it needs to update the UI.
// This is why React provides useState.

// import { useState } from "react";
// const Counter = () => {
//     let count = 0;
//     const handleClick = () =>{
//         count = count+1 ;
//         console.log(count);
//     }
//     return(
//         <>
//         <div>
//             <h2>+</h2>
//             <button onClick={handleClick}>Submit</button>
//             <h2>-</h2>
//         </div>
//         </>
//     )
// }

// export default Counter ; 

import { useState } from "react";
const Counter = () => {
    const [count , setCount] = useState(0);
    const handleClick = () =>{
       setCount(count+1);
    }
    return(
        <>
        <div>
            <button onClick={handleClick}>Submit</button>
            <h2>{count}</h2>
        </div>
        </>
    )
}

export default Counter ; 