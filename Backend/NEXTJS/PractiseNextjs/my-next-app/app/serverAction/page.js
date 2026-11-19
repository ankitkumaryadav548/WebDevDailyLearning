
import { registerStudent } from "../actions";

export default function Register() {

    return (
        <>
            <h1>Student Registration</h1>

            <form action={registerStudent}>

                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                />

                <button type="submit">
                    Register
                </button>

            </form>
        </>
    );
}



// file form

<form action={uploadDocument}>

    <input
        type="file"
        name="document"
    />

    <button type="submit">
        Upload
    </button>

</form>