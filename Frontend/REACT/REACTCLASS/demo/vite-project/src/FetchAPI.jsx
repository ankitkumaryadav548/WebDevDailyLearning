
// // import { useEffect, useState } from "react";

// // const FetchAPI = () => {
// //     const [user , setUser] = useState([]);
// //     useEffect(()=>{
// //         fetch("https://jsonplaceholder.typicode.com/users")
// //             .then(response => {
// //                 if(!response.ok)  throw new Error("data is not fetch")
// //                 else return response.json();
// //             })
// //             .then(data => {
// //                 setUser(data);
// //             })
// //             .catch(error => {
// //                 console.log(error.message)
// //             })
// //     },[])  // if here [] arraw will remove then it will run infinite time 
// //     return(
// //         <>
// //         <h1>Fetch data</h1>
// //         <div>
// //             {
// //                 user.map((item) => (
                    
// //                     <div key = {item.id}>
// //                         <h2>{item.name}</h2>
// //                         <h2>{item.email}</h2>
// //                         </div>
                    
// //                 ))
// //             }
// //         </div>
// //         </>
// //     )
// // }

// // export default FetchAPI ; 

// // alternate of fetch is axios 
// // both fetch and axios are used to fetch/retrive data 

// //practise 


// // import { useEffect, useState } from "react";

// // const FetchAPI = () => {
// //     const[user , setUser] = useState([]);
// //     useEffect(()=>{
// //         fetch("https://jsonplaceholder.typicode.com/users")
// //         .then((response)=>{
// //             if(!response.ok) throw new Error("Data is not fetched")
// //             else return response.json();
// //         })
// //         .then(data=>{
// //             setUser(data)   
// //         })
// //         .catch((error)=>{
// //             console.log(error.message);
// //         })
        
// //     },[])
// //     return(
// //         <div>
// //             <h1>This is API fetch</h1>
// //             <div>
// //                 {
// //                     user.map((item)=>(
// //                         <div key = {item.id}>
// //                         <h2>{item.name}</h2>
// //                         <h2>{item.email}</h2>
// //                         </div>
// //                     ))}
// //                     </div>
           
// //         </div>
// //     )
// // }

// // export default FetchAPI


// import { response } from "express";
// import { useEffect, useState } from "react";

// const FetchAPI = () => {
//     const [user , setUser] = useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{
//             if(!response.ok) throw new Error("Data is not able to fetch")
//             else return response.json();
//         })
//         .then((data)=>{
//             setUser(data);
//         })
//         .catch((error)=>{
//             console.log(error.message)
//         })
        
//     })
//     return(
//         <>
//             <h1>This is API Fetching Page</h1>
//             <div>
//                 {
//                     user.map((item)=>(
//                         <div key={item.id}>
//                             <h2>{item.name}</h2>
//                             <h2>{item.email}</h2>
//                             </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default FetchAPI


// // async way to fetch data 


// const  async Fetch = () => {
//     try{
//         const result = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log("error");
//     }
// }


// import { useEffect, useState } from "react";

// function FetchUsers() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         async function getUsers() {
//             try {
//                 const response = await fetch(
//                     "https://jsonplaceholder.typicode.com/users"
//                 );

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch users");
//                 }

//                 const data = await response.json();
//                 setUsers(data);
//             }
//             catch (err) {
//                 console.log(err.message);
//             }
//         }

//         getUsers();
//     }, []);

//     // if (users.length === 0) {
//     //     return <h2>No users found or data is loading...</h2>;
//     // }

//     return (
//         <div>
//             <h1>User List</h1>

//             {users.map((user) => (
//                 <div key={user.id}>
//                     <h3>{user.name}</h3>
//                     <p>{user.email}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default FetchUsers;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { date, set } from "zod";

// function Users() {

//     const [users, setUsers] = useState([]);

//     useEffect(() => {

//         async function getUsers() {

//             try {

//                 const response = await axios.get(
//                     "https://jsonplaceholder.typicode.com/users"
//                 );

//                 setUsers(response.data);

//             }
//             catch(error) {

//                 console.log(error.message);

//             }

//         }

//         getUsers();

//     }, []);

//     return (

//         <div>

//             {users.map((user) => (
//                 <h3 key={user.id}>
//                     {user.name}
//                 </h3>
//             ))}

//         </div>

//     );

// }

// export default Users;


// // basic async code 
// // data fetchong using async 
// // keyword to used  await , fetch , try , catch , response ,  data , json() 

// const async FetchAPI = () => {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if(!response.ok) throw new Error("Data is not fetch")
//         const data = await response.json();
//         console.log(data) ;
//         return data ;
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }

// export default FetchAPI ;


// // map 

// {
//     users.map((item)=>(
//         <div key={item.id}>
//             {item.name} {item.email}
//         </div>
//     ))
// }

// data fetching and storing in useState then to render we will use UseEffect()
// and data fetching will be async way 

// import { useState , useEffect } from "react";

// const FetchAPE = () => {
//     const [user , setUser] = useState([]);
//     useEffect(()=>{
//         const getUser = async () => {

//         try{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users")
//             if(!response.ok) throw new Error("data is not fetched!")
//             const data = await response.json();
//             setUser(data)
//             return data;
//         }
//         catch(err){
//             console.log(err.message);
//         }
//     }
//     getUser();
//         // FetchAPE()
//     },[])
//     return(
//         <>
//         <h1>Data is Fetching</h1>
//         <div>
//             {
//                 user.map((items)=>(
//                     <div key={items.id}>
//                         <h2>{items.name}</h2>
//                         <h2>{items.email}</h2>
//                         </div>
//                 ))
//             }
//         </div>
//         </>
//     )
//     }

// export default FetchAPE ;

// axios => axios is same like fetch but it is not buildin wenhave to install it
// axios is JavaScript library ad in axios we don;t have to parse data inot json , it automatically parsed 

import { useState , useEffect } from "react";
import axios from "axios";
const FetchAPE = () => {
    const [user , setUser] = useState([]);
    useEffect(()=>{
        const getUser = async () => {
            try{
                const response  = await axios.get("https://jsonplaceholder.typicode.com/users")
            // if(!response.ok) throw new Error("data is not fetched!") // not use in axios
                const data = response.data;
                setUser(data);
            }
            catch(err) {console.log(err.message);}

        }
        getUser();
    },[]);

    return(
        <>
        <div>
            {
                user.map((items)=>(
                    <div key={items.id}>
                        <h2>{items.name}</h2>
                        <h2>{items.email}</h2>
                        </div>
                ))
            }
        </div>
        </>
    )
}




export default FetchAPE ; 






