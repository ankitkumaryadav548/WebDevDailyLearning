import useCounter from "./useCounter"

const Custom = () => {
    const {count , Increment , decrement} = useCounter();
    return(
        <div>
            <h1>This is custom hook</h1>
            <h2 onClick={Increment}>Increment</h2>
            <h2>{count}</h2>
            <h2 onClick={decrement}>decrement</h2>
        </div>
    )
}
export default Custom