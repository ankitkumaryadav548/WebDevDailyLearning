// //controlled components

// import React, { useState } from "react";

// const FormHandle = () => {
//     const [name , setName] = useState("");
//     const [email , setEmail] = useState("");
//     return(
//         <>
//         <h1>This is form handling </h1>
//         <form>
//             <input 
//             type="name"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             placeholder=" Enter your name: "
//             />
//             <input 
//             type="email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             placeholder=" Enter your email: "
//             />
           
//         </form>
//         <h2>Your name: {name}</h2>
//         <h2>Your email is: {email}</h2>

//         </>
//     )
// }

// export default FormHandle ;

//Uncontrolled components
// it is handle with useRef 

import { useRef } from "react";

const FormHandle = () => {
    const nameRef = useRef(null);
    const handleSubmit = () => {
        alert("Your name is :" + nameRef.current.value)
    }
    return(
        <div>
        <h1>This is Uncontrolled form handling</h1>
        <form>

            <input
            type="name"
            ref={nameRef}
            placeholder="Enter your name">
            </input>
        </form>
        <button onClick={handleSubmit}>Submit</button>
        
        </div>
    )

}
// export default FormHandle ;