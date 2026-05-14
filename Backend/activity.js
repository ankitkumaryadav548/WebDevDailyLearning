// // Create a Basic Express Application:
// // •	a) Create a server using Express 
// // •	b) Handle GET request on homepage 
// // •	c) Send a simple HTML response 
// // •	d) Log request URL and method 

// const express = require('express')

// const app = express()

// //middleware

// app.use((req,res,next)=>
// {
//     const data = req.url 
//     // const data1 = req.method
//     console.log(data)
// })

// app.get("/",(req,res)=>
// {
//     console.log("This is  home page ")
//     res.send("<h1>Hello world</h1> <h4>hello dear , how are you!</h4>")
//     res.end()
// })

// app.listen(3000,()=>
// {
//     console.log("Server is running")
// })

// Build a Basic File Handling Program in Node.js:
// •	a) Create a file using fs module 
// •	b) Write data into the file 
// •	c) Read and display file content 
// •	d) Delete the file 

// const fs = require('fs')

// fs.createFile(test.txt,"new data is added into the file" ,(err)=>
// {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("data is written successfully into the file")
// })
// fs.readFile(test.txt , utf8 , (err,data)=>
// {
//     console.log()
// })

// . Create a Simple MongoDB Application:
// •	a) Connect to MongoDB 
// •	b) Insert one document 
// •	c) Fetch all documents 
// •	d) Display data in console 

//const mongoose = require("mongoose")
// const { types } = require("pg")
//  mongoose.connect("")
// .then(()=>
// {
//     console.log("Database is connexted successfully")
// })
// .catch((err)=>{
//     console.log(err)
// })

// // mow we have to define Schema 
// const studentScema = new mongoose.Schema({
//     name:{
//         types:String,
//         required:true
//     },
//     age:Number,
//     course:String,
//     reg_no:Number
// })
// const Student = mongoose.model.("Studen",studentScema);

// async function createStudent(){
//     const stu = new Student({
//         name:"Ankit",
//         age:20,
//         course:"Backend",
//         reg_no:121344
//     })
//     const result = await stu.save()
//     console.log("Student is creadted ", result)
// }

// async function uodateStudent() {
//     await Student.find().update
    
// }

// async function findStudent(){
//     await Student.find()
// }

// createStudent()
// updateStudnt()
// findStudent()

// run()

// Develop a Basic Routing Application using Express:
// •	a) Create multiple routes (home, about, contact) 
// •	b) Send different responses for each route 
// •	c) Handle unknown routes with 404 message 
// •	d) Use express.Router() 
const express = require('express')
const app = express()
const Router = require('express-')

