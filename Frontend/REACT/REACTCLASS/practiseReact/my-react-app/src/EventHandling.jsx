//what is event
//Event is process where user pwerform some action like onclick , dblclick , onhover etc 
// what is event handling in react.js
// event handling is the process in which user perform action and in response execute some specific tasks

{/* <button onClick={handleClick}></button> */}

// here onClick is react event handler
// but  here handleClick is custom function where i have to define and write code to perform what i want to do on button 

// onClick
// import React from "react";

// const EventHandle = () => {
//     const handleClick = (name) => {
//         alert("Name: " + name);

//     }
//     return(
//         <>
//         <h1>This is event handling page</h1>
//         <button onClick={()=>handleClick("Ankit")}>Submit</button>
//         </>
//     )
// }

// //create a counter with Increment and Decrement buttons 
// const EventHandle = () => {
//     let count = 0;
//     const handleIncrement = () => {
//         count++;
//         console.log(count);
//     }
//     const handleDecrement = () => {
//         count--;
//         console.log(count);
//     }
//     return(
//         <>
//         <button onClick={handleIncrement}>Add</button>
//         <button onClick={handleDecrement}>Sub</button>
//         </>
//     )
// }

// //onChange
// import React, { useState } from "react";

// const App = () => {

//     const [name, setName] = useState("");

//     const handleChange = (e) => {
//         setName(e.target.value);
//     };

//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="Enter your name"
//                 onChange={handleChange}
//             />

//             <h2>Your name: {name}</h2>
//         </>
//     );
// };

// // onSubmit
// import React, { useState } from "react";

// const App = () => {

//     const [name, setName] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         alert("Welcome " + name);
//     };

//     return (
//         <form onSubmit={handleSubmit}>

//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//             />

//             <button type="submit">Submit</button>

//         </form>
//     );
// };

// export default EventHandle ;



//controlled component

// import React, { useState } from "react";

// const EventHandle = () => {
//     const [name , setName] = useState("");
//     const [email , setEmail] =  useState("");
//     const [password , setPassword] = useState("")
//     const handleChange = (e) => {
//         setName(e.target.value);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Button is about to click!")
//         alert("Your form is submitted successfully");
//         console.log("Button is clicked!")
//     }
//      return(
//         <>
//         <h1>This is controlled component</h1>
//         <form onSubmit={handleSubmit}>
//         <input 
//         type="text"
//         value={name}
//         placeholder="Enter your name"
//         onChange={handleChange} />
//         <input 
//         type="email"
//         value={email}
//         placeholder="Enter your email"
//         onChange={(e)=>setEmail(e.target.value)} />
//         <input
//         type="password"
//         value={password}
//         placeholder="Enter password"
//         onChange={(e)=>setPassword(e.target.value)} />

//       <button type="submit">Submit</button>
//         </form>
//       <h2>Your name: {name}</h2>
//       <h2>Your email : {email}</h2>
//       <h2>Your password : {password}</h2>
//         </>
//     )
// }



//Controlled Components with Multiple Input Fields
// Imagine a form containing 15 input fields. You would need 15 different state variables and 15 setters.


// import React, { useState } from "react";

// const EventHandle = () => {
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//    const handleChange = (e) => {  // 3 steps/ methos used here 
//     const { name, value } = e.target;  // object destructuring 

//     setData((prevData) => ({
//         ...prevData,                // spread operator 
//         [name]: value               // using square bracket 
//     }));
// };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         alert("Your registration is successful!");
//         console.log(data);
//     };

//     return (
//         <>
//             <h1>This is multiple Input management</h1>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={data.name}
//                     placeholder="Enter your name"
//                     onChange={handleChange}
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     value={data.email}
//                     placeholder="Enter your email"
//                     onChange={handleChange}
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     value={data.password}
//                     placeholder="Enter your password"
//                     onChange={handleChange}
//                 />

//                 <button type="submit">Submit</button>
//             </form>

//             <h2>Your name: {data.name}</h2>
//             <h2>Your email: {data.email}</h2>
//             <h2>Your password: {data.password}</h2>
//         </>
//     );
// };

// export default EventHandle;

// practise of multiple input 

import React, { useState } from "react";

const EventHandle = () => {
    const [data , setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const {name , value} = e.target ;

        setData((prevData)=>({
            ...prevData , 
            [name] : value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Your form is sumiteed successfully")
        console.log("Your form sumiteed")
    }
    return(
        <>
        <h1>This is multiple input management</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={data.name}
           placeholder="Enter your name"
            onChange={handleChange}
            />
            <input
            type="email"
            name="email"
            value={data.email}
           placeholder="Enter your email"
            onChange={handleChange}
            />
            <input
            type="text"
            name="password"
            value={data.password}
           placeholder="Enter your password"
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        <h2>Your name: {data.name}</h2>
        <h2>Your email: {data.email}</h2>
        <h2>Your password: {data.password}</h2>
        </>
    )
}

export default EventHandle