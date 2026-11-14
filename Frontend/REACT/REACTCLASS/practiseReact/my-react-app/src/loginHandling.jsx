
// import  { useState } from "react";

// function HandleLogin() {

//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const [message, setMessage] = useState("");

//     function handleChange(e) {

//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     }

//     function handleSubmit(e) {

//         e.preventDefault();

//         if (!formData.email || !formData.password) {
//             setMessage("Please fill all fields");
//             return;
//         }

//         console.log(formData);

//         setMessage("Login form submitted successfully!");
//     }

//     return (
//         <div>
//             <h2>Login Form</h2>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter email"
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter password"
//                 />

//                 <button type="submit">
//                     Login
//                 </button>

//             </form>

//             <p>{message}</p>
//         </div>
//     );
// }

// export default HandleLogin;

// practise login form 

import { useState } from "react";

const HandleLogin = () => {
    const [data , setData] = useState({
        email: "", 
        password: ""
    })
    const[message , setMessage] = useState("");
    const handleChange = (e) => {
        const { name , value} = e.target;

        setData((prevData)=>({
            ...prevData , 
            [name]:value 
    }));
}
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.email || !data.password){
            setMessage("Please fill the form")
            return
        }
        console.log(data);
        setMessage("login successfull");
    }
    return(
        <>
        <h1>Login form</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={data.email}
            onChange={handleChange} />
            <input
            type="text"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <h2>output: {message}</h2>
        </>
    )
}

export default HandleLogin ; 