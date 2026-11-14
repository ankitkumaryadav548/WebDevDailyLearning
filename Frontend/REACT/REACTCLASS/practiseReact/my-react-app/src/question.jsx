// Scenario: College Student Registration Form
// You are building a registration form for your college portal using React.

// The form has three fields:
// 1. Student Name
// 2. Email
// 3. Password
// Requirements:
// 1. Use useState to store all three input values in a single object.
// 2. Use one common handleChange function to update the state of all inputs.
// 3. Use onChange to capture input changes.
// 4. Use onSubmit to handle form submission.
// 5. Prevent the browser's default form submission behaviour.
// 6. When the user submits:
//    - Name must contain at least 3 characters.
//    - Email must be valid.
//    - Password must contain at least 8 characters.
// 7. If validation fails, display the error message below the relevant input.
// 8. If validation succeeds, display an alert: "Registration Successful!".


import { useState } from "react";
import { z } from "zod";

// 1. Zod Schema
const studentSchema = z.object({
    name: z.string()
        .trim()
        .min(3, "Name must contain at least 3 characters"),

    email: z.string()
        .email("Enter a valid email"),

    password: z.string()
        .min(8, "Password must contain at least 8 characters")
});

function App() {

    // 2. Form data
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // 3. Error state
    const [error, setError] = useState({});

    // 4. Common input handler
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // 5. Form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const result = studentSchema.safeParse(data);

        if (result.success) {
            setError({});
            alert("Registration Successful!");
            console.log("Registered Data:", result.data);

        } else {
            const newError = {};

            result.error.issues.forEach((issue) => {
                newError[issue.path[0]] = issue.message;
            });

            setError(newError);
        }
    };

    return (
        <>
            <h1>Student Registration Form</h1>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={data.name}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {error.name}
                    </p>
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={data.email}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {error.email}
                    </p>
                </div>

                {/* Password */}
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={data.password}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {error.password}
                    </p>
                </div>

                <button type="submit">
                    Register
                </button>

            </form>
        </>
    );
}

export default App;
