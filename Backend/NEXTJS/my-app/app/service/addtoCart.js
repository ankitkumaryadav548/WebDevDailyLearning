"use client"
export default function addtoCart(){

    function handleClick(){
        alert("Product is added to your cart")
    }

    return(
       <div>
            <button onClick={handleClick}>Add to cart</button>
       </div>
       
    )
}
