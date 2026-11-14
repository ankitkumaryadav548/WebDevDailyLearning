
import React, { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(3, "Invalid Name provided"),
    email: z.string().email("Invalid Email address provided"),
    password: z.string().min(9, "Invalid Password")
});

const ZodVal = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const result = formSchema.safeParse(form);

        if (result.success) {
            setError({});
            alert("Your registration was successfull!");
            console.log("Register Successfully");
        }
        else {
            const newError = {};

            result.error.issues.forEach(issue => {
                newError[issue.path[0]] = issue.message;
            });

            setError(newError);
        }
    };

    return (
        <>
            <h1>This is Zod Validation</h1>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input
                    name ="name"
                    type="text"
                    value={form.name}
                    placeholder=" Enter your name"
                    onChange={handleChange}
                />
                <p>{error.name}</p>

                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder=" Enter your email"
                    onChange={handleChange}
                />
                <p>{error.email}</p>

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    placeholder=" Enter your password"
                    onChange={handleChange}
                />
                <p>{error.password}</p>

                <button type="submit">Submit</button>

            </form>
        </>
    );
};

export default ZodVal;

// get => retrive the data
// post => create the new data
// put => replace the existing data
// patch => update the data in particular field
// delete => delete the data  

// API => https://jsonplaceholder.typicode.com/users