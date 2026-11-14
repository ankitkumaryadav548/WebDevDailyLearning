//zod integration in react.js


// import { useState } from "react";
// import { z } from "zod";

// // STEP 1: Create schema

// const studentSchema = z.object({

//     name: z.string()
//         .trim()
//         .min(3, "Name must contain at least 3 characters"),

//     email: z.email("Enter a valid email"),

//     password: z.string()
//         .min(8, "Password must contain at least 8 characters")

// });

// function App() {

//     // STEP 2: Form state

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const [errors, setErrors] = useState({});

//     const [success, setSuccess] = useState("");

//     // STEP 3: Handle input changes

//     function handleChange(e) {

//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     }

//     // STEP 4: Handle submission

//     function handleSubmit(e) {

//         e.preventDefault();

//         const result = studentSchema.safeParse(formData);

//         if (!result.success) {

//             const newErrors = {};

//             result.error.issues.forEach((issue) => {

//                 const field = issue.path[0];

//                 newErrors[field] = issue.message;

//             });

//             setErrors(newErrors);
//             setSuccess("");

//             return;
//         }

//         // STEP 5: Valid data

//         setErrors({});

//         console.log("Valid Data:", result.data);

//         setSuccess("Registration successful!");
//     }

//     return (

//         <div>

//             <h2>Student Registration</h2>

//             <form onSubmit={handleSubmit}>

//                 <div>
//                     <label htmlFor="name">Name</label>

//                     <input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.name}</p>
//                 </div>

//                 <div>
//                     <label htmlFor="email">Email</label>

//                     <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.email}</p>
//                 </div>

//                 <div>
//                     <label htmlFor="password">Password</label>

//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.password}</p>
//                 </div>

//                 <button type="submit">
//                     Register
//                 </button>

//             </form>

//             <h3>{success}</h3>

//         </div>

//     );
// }

// export default App;





import { useState } from "react";
import { z } from "zod";

// Schema
const userSchema = z.object({
    name: z.string()
        .trim()
        .min(3, "Name must be minimum 3 characters"),

    email: z.email("Enter a valid email"),

    password: z.string()
        .min(8, "Password must be at least 8 characters")
});

const ZodVal = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Clear the previous message when user edits
        setMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = userSchema.safeParse(data);

        if (!result.success) {

            const newError = {};

            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                newError[field] = issue.message;
            });

            setError(newError);
            setMessage("");

            return;
        }

        // Valid data
        setError({});

        console.log("Valid Data:", result.data);

        setMessage("Registration successful!");
    };

    return (
        <>
            <h1>Validation using Zod</h1>

            <form onSubmit={handleSubmit} noValidate>

                <input
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Enter name"
                    onChange={handleChange}
                />
                {error.name && <p>{error.name}</p>}

                <input
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                />
                {error.email && <p>{error.email}</p>}

                <input
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="Enter password"
                    onChange={handleChange}
                />
                {error.password && <p>{error.password}</p>}

                <button type="submit">Submit</button>

            </form>

            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Password: {data.password}</h2>

            <h3>{message}</h3>
        </>
    );
};

export default ZodVal;
