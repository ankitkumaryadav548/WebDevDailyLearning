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
            cache: "no-store"
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

                        {/* <img
                            src={product.image}
                            alt={product.title}
                            width="200"
                        />

                        <p>Price: ${product.price}</p> */}

                        {/* <p>{product.description}</p>

                        <p>Category: {product.category}</p> */}

                        <p>
                            Rating: {product.rating.rate} 
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}