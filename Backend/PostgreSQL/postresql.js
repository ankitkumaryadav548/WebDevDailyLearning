const { Client } = require("pg");
// PostgreSQL Connection
const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"student_db",
    password:"your_password",
    port:5432

});

// Connect Database
client.connect()
.then(() => {
    console.log("PostgreSQL Connected Successfully");
})
.catch((err) => {
    console.log("Connection Error", err);
});

// CREATE TABLE
async function createTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS students(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            age INT,
            course VARCHAR(50),
            marks INT
        )`;
    await client.query(query);
    console.log("Table Created Successfully");
}

// CREATE OPERATION (INSERT DATA)
async function createStudent(){
    const query = `
        INSERT INTO students(name, age, course, marks)
        VALUES('Ankit', 20, 'Node.js', 90)
    `;
    await client.query(query);
    console.log("Student Inserted Successfully");
}

// READ OPERATION
async function getStudents(){
    const result = await client.query(
        `SELECT * FROM students`
    );
    console.log("All Students");
    console.log(result.rows);
}

// UPDATE OPERATION
async function updateStudent(){
    const query = `
        UPDATE students
        SET marks = 100
        WHERE name = 'Ankit' `;
    await client.query(query);
    console.log("Student Updated Successfully");
}

// DELETE OPERATION
async function deleteStudent(){
    const query = `
        DELETE FROM students
        WHERE name = 'Ankit' `;
    await client.query(query);
    console.log("Student Deleted Successfully");
}

// MAIN FUNCTION
async function run(){
    await createTable();
    await createStudent();
    await getStudents();
    await updateStudent();
    await deleteStudent();
    await getStudents();
}

run();
