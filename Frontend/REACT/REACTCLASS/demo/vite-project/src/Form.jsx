
// Controlled Component
import React, { useState } from "react";

const Form = () => {
    const [name , setName] = useState("");

    const handleSubmit = (e) => {
        e.prevent.Default()
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }
    console.log(name);
    return(
        <>
            <h1>Forms</h1>
            {
                !submited ? 
            
            <form onSubmit={handleSubmit}> 
                <input value={name} onChange={handleChange}
                placeholder="Name"/>
                <input placeholder="email"/>

            <button type="submit">Submit</button>
            <h1>My name is : {name}</h1>
            </form>

        </>
    )
}

export default Form;

// Two types of components in React Forms:

// 1. Controlled Components
//    - Managed using useState.
//    - React controls the input values.
//    - Handle input changes using onChange.

// 2. Uncontrolled Components
//    - Do not use useState to manage input values.
//    - DOM handles the input values.
//    - Access input values using useRef.



//Uncontrolled Component
// import React, { useRef } from "react";


// const Form = () => {
//     const nameRef = useRef(null)
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         alert(nameRef.current.value);
//     }
//     return(
//         <>
//             <h1>Forms</h1>
//             <form onSubmit={handleSubmit}> 
//                 <input type="text" ref={nameRef}
//                 placeholder="Name"/>


//                 <input placeholder="email"/>
//              <button type="submit">Submit</button>
//             {/* <h1>My name is : {useRef}</h1>  */}
//             </form>

//         </>
//     )
// }

// export default Form;



