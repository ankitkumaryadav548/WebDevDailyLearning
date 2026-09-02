
const Product = (props)=>{
    // const price = 2134 ;
    return(
        
        <>
        {/* <h1>Product page</h1> */}
        {/* <p>price of laptop is {price}</p>
        <p>price of motorola phone is {price}</p>   */}
        <h2>{props.name} = {props.price}k</h2>
        </>
    )
}

export default Product