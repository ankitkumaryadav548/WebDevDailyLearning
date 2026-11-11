import React, { useState } from "react";
import FormUse from "./FormUse";

const FormHandle = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState(" ");

    return(
        <>
            <h1>This is Form Handle Component</h1>
            <FormUse
                type="text" value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name" />
        </>
    )
}
export default FormHandle;