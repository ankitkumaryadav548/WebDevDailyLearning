// export default async function Products({params}){
//     const {id} = await params
//     return(
//         <>
//         <h1>This is Product Page</h1>
//         <h2>Product {id}</h2>
//         </>
//     ) 
// }

// Dynamic route with API data 


export default async function Product({ params }) {
    const { id } = await params;

    let data = null;

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
            throw new Error("Data is not fetched!");
        }

        data = await response.json();

    } catch (err) {
        console.log(err.message);
    }

    return (
        <>
            <h1>Data fetched from API</h1>
            {/* ternary opertaor */}
            {data ? (
                <>
                    <h2>{data.title}</h2>
                    <h2>{data.body}</h2>
                </>
            ) : (
                <p>Data not available</p>
            )}
        </>
    );
}
