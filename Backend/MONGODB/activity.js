// a) Connect to a MongoDB database named student_db 
// b) Create a collection students and insert multiple records 
// c) Find students with marks greater than 20 given value 
// e) Delete a student record 
// d) Update one student’s data based on name 

const mongoose = require("mongoose");

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/student_db")
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log("Error found:", err);
});

// Schema
const StudentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    course:{
        type:String
    },
    reg_no:{
        type:Number
    },
    marks:{
        type:Number
    }

});

// Model
const Student = mongoose.model("Student", StudentSchema);

// INSERT MULTIPLE RECORDS
async function createStudents(){

    const students = await Student.insertMany([

        {
            name:"Ankit",
            age:20,
            course:"MERN",
            reg_no:101,
            marks:35
        },

        {
            name:"Riya",
            age:21,
            course:"Java",
            reg_no:102,
            marks:18
        },

        {
            name:"Rahul",
            age:22,
            course:"Python",
            reg_no:103,
            marks:50
        }

    ]);

    console.log("Students Inserted Successfully");

    console.log(students);
}

// FIND STUDENTS WITH MARKS GREATER THAN 20
async function getStudents(){

    const students = await Student.find({

        marks:{ $gt:20 }

    });

    console.log("Students with marks greater than 20");

    console.log(students);
}

// UPDATE STUDENT DATA USING NAME
async function updateStudent(name){

    const student = await Student.findOneAndUpdate(

        {
            name:name
        },

        {
            marks:80,
            course:"Node.js"
        },

        {
            new:true
        }

    );

    console.log("Updated Student");

    console.log(student);
}

// DELETE STUDENT RECORD
async function deleteStudent(name){

    const student = await Student.deleteOne({

        name:name

    });

    console.log("Student Deleted");

    console.log(student);
}

// MAIN FUNCTION
async function run(){

    await createStudents();

    await getStudents();

    await updateStudent("Ankit");

    await deleteStudent("Riya");
}

run();