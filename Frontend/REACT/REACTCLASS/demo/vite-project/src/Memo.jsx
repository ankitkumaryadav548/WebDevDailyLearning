import { useMemo, useState } from "react"

const Memo = () => {
    const [number, setNumber] = useState(0);

    const result = useMemo(()=>{
        return number*23;
    }, [number])
    return (
    <>
        <h1>This is Memo Component </h1>
        <h2>Resul is {result}</h2>

    </>
)
}
export default Memo