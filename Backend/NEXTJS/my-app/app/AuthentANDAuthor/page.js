//authentication and authorisation 

import { useState } from "react"

export  default function LoginPage(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [message , setMessage] = useState("");
    return(
        <main>
            <h1>University Portal</h1>
            <form>
                <input
                type="email" 
                id = "email" value={email}
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                type="password"
                id="password"
                onChange={(e)=>se}
                ></input>
            </form>
        </main>
    )
}