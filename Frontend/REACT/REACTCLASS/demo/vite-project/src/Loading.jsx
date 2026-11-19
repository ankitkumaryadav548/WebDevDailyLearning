import {useEffect, useState } from "react";

const Loading = () => {
    const [ user , setUser] = useState([])
    const [loading , setLoading] = useState(true)
    const[error , setError] = useState("")
    useEffect(()=>{
    const getUser = async() => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok) throw new Error("data is nit detched")
            const data = await response.json();
            setUser(data);
        }
        catch(err) {
            setError(err.message);
            
        }
        finally{
            setLoading(false);
        }

    }
    getUser();
     }, [])
     if(loading){
        return <h2>loading...</h2>
     }
     if(error) {
        return <h2>Error: {error}</h2>
     }
     if(user.length == 0)
        return <h2>No user found!</h2>
    return(
        <>
        <div>
                {
                    user.map((items)=>(
                        <div key={items.id}>
                            <h1>{items.name}</h1>
                            <h1>{items.email}</h1>
                            </div>
                    ))
                }
        </div>
        
        </>
    )
}

export default Loading ; 