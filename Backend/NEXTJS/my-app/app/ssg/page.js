//SSG => Static Site Generation 


// export default function Ssg(){
//     return(
//         <div>
//             <h1>Hello SSG Page</h1>
//             <p>this is for ssg page.</p>
//             <h1>Hello SSG Page</h1>
//             <p>this is for ssg page.</p>
//             <h1>Hello SSG Page</h1>
//         </div>
//     )

// }

// export const dynamic = "force-dynamic" //SSR
export default async function ProductPage() {
    //api - https://jsonplaceholder.typicode.com/posts
    
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {cache:"force-cache"})
        //if SSG- cache:force-cache
       
    const products= await response.json()
    return(
        <div>
            <h1>posts:</h1>
            <h1>{products.body}</h1>
            <p>{products.title}</p>

        </div>
    )
    
}
