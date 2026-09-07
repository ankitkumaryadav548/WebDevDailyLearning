//CSR
//useRouter =>

"use client"

import { useState } from "react"
import { useRouter } from "next/router"
export default function Login(){
    const router = useRouter()
    const [username, setUsername] = useState("")
    function handleLogin(){
        if(username == ""){
            alert("Please login with username: ")
            return
        }
    }
    return(
        <>
        <h1>Login Page</h1>
        <input type="text" placeholder="Enter userName" 
        value={username} 
        onChange={(e)=>{e.target.value}}>
        </input>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}