//https://fakestoreapi.com/docs#tag/Products

//cache:"no-store" => for ssr componenet

//or for ISR ->{
// next:{
//         revalidate:60
// }}


export default async function ProductPage() {
    const response = await fetch(
        "https://fakestoreapi.com/products",
        {
            cache: "no-store"  //SSR 
        }
    );

    const products = await response.json();

    return (
        <>
            <h1>Products</h1>

            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>

                         <img
                            src={product.image}
                            alt={product.title}
                            width="200"
                        />

                        <p>Price: ${product.price}</p> */}

                        <p>{product.description}</p>

                        <p>Category: {product.category}</p>

                        <p>
                            Rating: {product.rating.rate} 
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}



export const dynamic= "force-dynamic" //SSR
export default async function ProductPage() {
    //api - https://jsonplaceholder.typicode.com/posts
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {cache:"no-store"})
        //at the top you can also write : export const dynamic= "force-dynamic"
        //if SSR - use cache:no-store
        //if SSG- cache:force-cache
        //if ISR- next:{
        // revalidate:60}
    const products= await response.json()
    return(
        <div>
            <h1>posts:</h1>
            <h1>{products.body}</h1>
            <p>{products.title}</p>

        </div>
    )
    
}