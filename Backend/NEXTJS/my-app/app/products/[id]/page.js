import next from "next";
import { notFound } from "next/navigation";

export default async function Product({ params }) {
    const { id } = await params;

    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
        notFound();
    }

    const product = await response.json();

    console.log(product);

    return (
        <div>
            <h1>Product Details</h1>

            <img
                src={product.thumbnail}
                width="300"
                alt={product.title}
            />

            <p>Product Name: {product.title}</p>
            <p>Rating: {product.rating}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

// const products=[
//     {
//         id:10,
//         name:"phone",
//         price:2594556882
//     },
//     {
//         id:11,
//         name:"phone1",
//         price:25945566866
//     },
//     {
//         id:100,
//         name:"phone2",
//         price:259455699
//     }
// ]

// export default async function productPage({params}){
//     const {id}= await params
//     const product = products.find((item=>item.id===parseInt(id)))


//     return(
//         <div>
//             <h1>ProductPage Details</h1>
//             <p>Price: {product.price}</p>
//             <p>Product Name: {product.name}</p>
//             <p>Product ID: {product.id}</p>
//             <p>Product Id: {id}</p>
//         </div>
//     )
// }


// slug - routes 
// react -> categories -> routing-nextjs 
// blog/react/nextjs/nextjs-routing 
