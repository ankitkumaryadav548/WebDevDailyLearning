// server action concept
// import{addTask} from "./action"
// import{addTask} from "./action"
// export default function TaskPage(){
//     return(
//         <main>
//             <form action={addTask}>
//             <input type="text" name="title" placeholder="Enter the task title"
//             required >
//             </input>
//             <button type="submit">Admin task</button>
//             </form>
//         </main>
//     )
// }



//

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