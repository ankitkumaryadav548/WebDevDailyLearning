
const fetchUser =async() => {
    const response  =await fetch()
    if(!response.ok) throw new Error("data is not fetched!")
        return response.json()
}

const TANSATCK = () => {
    const {
        data,
        isLoading ,
        
    }
    return(
        <>
        <h1>Tanstack</h1>
        </>
    )
}
