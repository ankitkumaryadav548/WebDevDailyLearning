//http  server
const http = require('http')
const server = http.createServer((req,res)=>
{
    console.log(req.headers)
    res.end("Hello server")
})
server.listen(8000,()=>
{
    console.log("Server is running")
})
