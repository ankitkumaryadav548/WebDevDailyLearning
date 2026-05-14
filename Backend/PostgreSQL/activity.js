const { Client } = require('pg');

// PostgreSQL Connection
const client = new Client({
    user:"postgres",
    password:"Ankit123",
    database:"studentdb",
    host:"localhost",
    port:5432

});

// Connect Database
client.connect()
.then(() => {
    console.log("Database is connected");
})
.catch((err) => {
    console.log(err);
});

async function createTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS student(
            name VARCHAR(50),
            marks INT,
            reg_no INT
        )
    `;
    await client.query(query);
    console.log("Table created successfully");
}

async function insertTable(){
    const query = `
        INSERT INTO student(name, marks, reg_no)
        VALUES('Gautam', 34, 1231435)
    `;

    const result = await client.query(query);

    console.log("Values inserted successfully");
}

async function updateTable(){
    const query = `
        UPDATE student
        SET marks = 50
        WHERE name = 'Gautam'
    `;

    await client.query(query);

    console.log("Updated successfully");
}
async function run(){

    await createTable();

    await insertTable();

    await updateTable();
}

run();  // not mandantory to write run() => it is used because we are using multipe async fucntion so it is not predictable that in which order function executed so we write run() to avoid that and run function in sequence way 

