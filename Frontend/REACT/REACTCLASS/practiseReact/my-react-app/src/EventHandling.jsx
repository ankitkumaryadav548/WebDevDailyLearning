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

//create a counter with Increment and Decrement buttons 
const EventHandle = () => {
    let count = 0;
    const handleIncrement = () => {
        count++;
        console.log(count);
    }
    const handleDecrement = () => {
        count--;
        console.log(count);
    }
    return(
        <>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Sub</button>
        </>
    )
}

//onChange
import React, { useState } from "react";

const App = () => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
            />

            <h2>Your name: {name}</h2>
        </>
    );
};

// onSubmit
import React, { useState } from "react";

const App = () => {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Welcome " + name);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <button type="submit">Submit</button>

        </form>
    );
};

export default EventHandle ;