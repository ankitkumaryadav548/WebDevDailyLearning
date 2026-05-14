const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/")
        res.end("This is home page")
    else if (req.url === "/about")
        res.end("This is about page")
    else if (res.url === "/contact")
        res.end("This is contact page")
    else
        res.statusCode = 404
    res.end("page not found")
})
server.listen(3000, () => {
    console.log("Server is running")
})