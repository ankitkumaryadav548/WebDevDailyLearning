// import { useState } from "react";

import { useState } from "react"


// const FormHandler = () => {
//     const [data , setData] = useState({
//         name: "",
//         email: ""
//     }) 
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Form is sumitted!");
//     }
//     const handleChange = (e) => {
//         const {name , value} = e.target 
//         setData((prevData)=>({
//             ...prevData , 
//             [name] : value 
//         }))
        
//     }
//     return(
//         <>
//         <h1>FormHandler</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                 <input
//                 type="text"
//                 name="name"
//                 value={data.name}
//                 placeholder="Enter name"
//                 onChange={handleChange} /> 
//                 </div>

//                 <div>
//                 <input
//                 type="email"
//                 name="email"
//                 value={data.email}
//                 placeholder="Enter email"
//                 onChange={handleChange} />
//                 </div>
//                 <button type="submit">Submit </button>
//             </form>
//             <h2>name: {data.name}</h2>
//             <h2>Email: {data.email}</h2>
        
//         </>
//     )
// }

// export default FormHandler ; 

// const FormHandler = () => {
//     const [name , setName] = useState("")
//     const [email , setEmail] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("form is submitted")
//     }
    
//     return(
//         <>
//         <h1>THis is form handler</h1>
//         <form onSubmit={handleSubmit}>
//             <input
//             type="text"
//             value={name}
//             placeholder="Enter name"
//             onChange={(e)=>setName(e.target.value)} />
//             <input
//             type="email"
//             value={email}
//             placeholder="Enter email"
//             onChange={(e)=>setName(e.target.value)} />
//             <button type="submit">Submit</button>

//         </form>
//         </>
//     )
// }

// export default FormHandler ; 

// const handleChange = (e) => {
//     const {name , value} = e.target ; // destructuring 
// }
// setData((prev)=>({   
//     ...prev , 
//     [name]:value 
// }))

