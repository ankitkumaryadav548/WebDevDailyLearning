//1st method to create Server
const http = require('http')
const server = http.createServer((req,res)=>
{
    res.write("Hello Server")
    res.end()
})
server.listen(3000,()=>
{
    console.log("Server running")
})

//2nd method to create Server

const http = require('http')

http.createServer((req,res)=>
{
    res.write("Data is on server")
    res.end()
})
.listen(4000,()=>
{
    console.log("Server is running ")
})


