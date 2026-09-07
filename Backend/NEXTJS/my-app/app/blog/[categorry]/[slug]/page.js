//react- category
//react-usestate - slug



const products=[
    {
        slug:"phone-18",
        name:"phone",
        price:8348263
    },
     {
        slug:"phone-13",
        name:"phone",
        price:8348263
    },
]
 
 export default async function Blog({params}){
    const {slug}= await params
    const product= products.find((product)=>product.slug===slug)

    return(
        <div>
            <h1>products</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>

        </div>
    )

 }


// export default  async function Blog({params}){
//     //get the values 
//     const{category ,slug} = await params 
//     return(
//         <div>
//             <h1>Blog Details </h1>
//             <p>category: {category}</p>
//             <p>Post:{slug}</p>
            
//         </div>
//     )
//  //run : http://localhost:3000/blog/react/react-hooks

// }