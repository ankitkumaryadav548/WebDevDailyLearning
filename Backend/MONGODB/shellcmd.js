// //db -> collection -> shell open(insert/ del / update)

//npm init -y
//npm install mongodb

const {MongoClient, ObjectId} = require("mongodb");
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const dbName = "studentDB";

async function run(){
    try{
        await client.connect();
        console.log("Connected successfully to MongoDb");

        const db = client.db(dbName);

        const students = db.collection("students");

        const insertResult = await students.insertOne({
            name:"Riya",
            age:22,
            course:"Btech",
        });
        console.log("Inserted ID:", insertResult.insertedId);
        
        console.log("Inserted ID:", insertResult.insertedId);
        
        const data = await students.find().toArray();
        console.log("Read content:", data);

        const updateResult = await students.updateOne(
            {_id:insertResult.insertedId },
            {$set: {age:45}}
        );
        console.log("Updated Count:", updateResult.modifiedCount);


        const deleteResult = await students.deleteOne(
            {_id:insertResult.insertedId});
            console.log("Deleted Count:", deleteResult.deletedCount);
    }catch(error){
        console.log("Errors:", error);
    }
    finally{
        await client.close();
        console.log("Mongodb connection closed");
    }
}

run();
