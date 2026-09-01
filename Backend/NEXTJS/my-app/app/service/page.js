import addtoCart from "./addtoCart" 

export default function product(){
    return(
        <div>
            <h1>Products</h1>
            <p>laptop:786543</p>
            <p>mobile:3245</p>
            <addtoCart/>
        </div>
    )
}





// "use client"

// export default function service(){

//     function handleClick(){
//         alert("Buttom is clicked") ;
//     }
//     return(
//         <>
//         <h1>This is a service page </h1>
//         <p>This page is render by SSR</p>
//         <button onClick={handleClick}>Click Me</button>
//         </>
//     )
// }


//next.js is asusally server side rendering 
// so if i have to run event on server side so i have to include "use client" because
// event are dom par or javaScript part which only run on brower 
//to run event we have to include "use client"  


//react.js is mostly client side rendering 
//next.js is both client as well as server side rendering

