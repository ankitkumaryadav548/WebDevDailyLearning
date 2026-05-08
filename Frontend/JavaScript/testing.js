import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middleware
app.use(express.urlencoded({ extended: true }))

// route
app.get('/form', (req, res) => {
    const filePath = path.join(__dirname, 'testing.html')
    res.sendFile(filePath)
})
app.post('/submit',(req,res)=>
{
    const name = req.body.name 
    res.send(`Form is submiited by ${name}`)
    
})
let user={name:"Ankit", place:"Ranchi"}
app.put('/user',(req,res)=>
{
    user = {...user, ...req.body}
    res.json({message:"user updated",user})
})

// run the server
app.listen(3000, () => {
    console.log("Server is running")
})

