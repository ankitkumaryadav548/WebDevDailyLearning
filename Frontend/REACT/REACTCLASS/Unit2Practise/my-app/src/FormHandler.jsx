import { useState } from "react";


const FormHandler = () => {
    const [data , setData] = useState({
        name: "",
        email: ""
    }) 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form is sumitted!");
    }
    const handleChange = (e) => {
        const {name , value} = e.target 
        setData((prevData)=>({
            ...prevData , 
            [name] : value 
        }))
        
    }
    return(
        <>
        <h1>FormHandler</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Enter name"
                onChange={handleChange} /> 
                </div>

                <div>
                <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Enter email"
                onChange={handleChange} />
                </div>
                <button type="submit">Submit </button>
            </form>
            <h2>name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
        
        </>
    )
}

export default FormHandler ; 