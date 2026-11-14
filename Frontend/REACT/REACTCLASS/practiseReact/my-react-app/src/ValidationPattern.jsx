
import { useState } from "react";

function App() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function validate() {

        let newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (formData.password.length < 8) {
            newErrors.password =
                "Password must contain 8 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {

        e.preventDefault();

        if (validate()) {
            console.log("Valid data:", formData);
            alert("Registration successful");
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <p>{errors.name}</p>

            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <p>{errors.email}</p>

            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <p>{errors.password}</p>

            <button type="submit">
                Register
            </button>

        </form>
    );
}

// export default App;
