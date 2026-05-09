const mongoose  = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>{
    console.log("Mongoose is connected")
})
.catch(err =>
{
    console.log("Error occored", err)
})

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min : 18
    },
    course:String,
    marks:{
        type:Number,
        required:true
    }
    
})

const Student  = mongoose.model("Student", StudentSchema) ;

async function createStudent(){
    const stu = new Student({
        name:"Ankit",
        age:20,
        course:"Node.js",
        marks:26
    })
    await stu.save()
}


async function getStudent() {
     const student =  await Student.find()
     console.log(student);
}

async function updateStudent(id) {
    const student = await Student.findByIdAndUpdate(id,
        {marks:28},
        {new:true}
    
    )
    console.log("updated data", student);
    
}

createStudent();
getStudent();
// updateStudent('')