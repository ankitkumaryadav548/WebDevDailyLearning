import { useEffect, useState } from "react";
import axios from "axios"

const AXIOS = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                const data =  await response.data;
                setUser(data);
            }
            catch (error) { console.log(error.message) };
        }
        getUser();
    }, [])
    return(
        <>
        <div>
            {
                user.map((items)=>(
                    <div key={items.id}>
                        <h2>{items.name}</h2>
                        <h2>{items.email}</h2>
                        </div>

                ))}
        </div>
        </>
        
    )

}

export default AXIOS