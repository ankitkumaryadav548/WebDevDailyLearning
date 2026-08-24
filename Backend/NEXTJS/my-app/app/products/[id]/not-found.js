import { notFound } from "next/navigation";

export default  function NotFound(){
    return(
        <>
        <h1>Product not found</h1>
        <p>The Product you are looking for does not exits.</p>
        </>
    )
}

