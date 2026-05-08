const express = require('express')
const app = express()
const users = require("./Mock_DATA.json")
const PORT =  3000

app.get("/api/users",(req,res)=>
{
    return res.json(users)
})

app.route("/api/users/:id")      //dynamically 
    .get((req,res)=>
{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id === id)
    return res.json(user)
}) 
//Edit the users 
    .patch((req,res)=>
    {
        return res.json({staus: "pending"})
    })
    .delete((req,res)=>
    {
        return res.json({staus: "pending"})
    })

app.post("/api/users",(req,res)=>
{
    //create new users 
    return res.json({staus: "Pending"})
})

app.listen(PORT,()=>
{
    console.log("Server is running")
})
