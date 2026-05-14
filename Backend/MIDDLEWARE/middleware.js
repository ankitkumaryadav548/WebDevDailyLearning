const express = require('express')
const app = express()

//middleware 
app.use((req,res,next)=>
{
    console.log("This is 1st middleware")
    // res.send()
    next()
})

app.get("/", (req,res)=>
{
    res.send("Hello")
})
app.listen(3000,()=>
{
    console.log("Server is running")
})