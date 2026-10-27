// server action concept
// import{addTask} from "./action"
import{addTask} from "./action"
export default function TaskPage(){
    return(
        <main>
            <form action={addTask}>
            <input type="text" name="title" placeholder="Enter the task title"
            required >
            </input>
            <button type="submit">Admin task</button>
            </form>
        </main>
    )
}