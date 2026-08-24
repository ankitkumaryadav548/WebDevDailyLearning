export default async function ProductPage({params}) {
    const [id] = params 
    return(
        <div>
            <h1>Product pPage Details</h1>
            <p>Product Id: {id}</p>
        </div>
    )
}

