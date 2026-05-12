const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CREATE STUDENT
async function createStudent(){
    const student = await prisma.student.create({
        data:{
            name:"Ankit",
            age:20,
            course:"Node.js",
            marks:90
        }
    });
    console.log("Student Created");
    console.log(student);
}

// READ STUDENTS
async function getStudents(){
    const students = await prisma.student.findMany();
    console.log("All Students");
    console.log(students);
}

// UPDATE STUDENT
async function updateStudent(){
    const student = await prisma.student.update({
        where:{
            id:1
        },
        data:{
            marks:100
        }
    });
    console.log("Updated Student");
    console.log(student);
}

// DELETE STUDENT
async function deleteStudent(){
    const student = await prisma.student.delete({
        where:{
            id:1
        }
    });
    console.log("Deleted Student");
    console.log(student);
}

async function run(){
    await createStudent();
    await getStudents();
    await updateStudent();
    await deleteStudent();
}
run();