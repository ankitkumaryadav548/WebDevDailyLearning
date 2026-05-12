const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.log(error);
});



// Schema
const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        min:4
    },

    email:{
        type:String,
        required:true,
        unique:true
    }

});

// Model
const User = mongoose.model("User", userSchema);
// Create Document
async function createUser(){

    const user = new User({

        name:"Ankit",
        age:20,
        email:"ankit123@gmail.com"

    });

    const result = await user.save();

    console.log("User created successfully", result);
}



// Update Document
async function updateUser(id){

    const user = await User.findByIdAndUpdate(

        id,

        {
            age:25
        },

        {
            new:true
        }

    );

    console.log("Updated User", user);
}



// Function calls
createUser();

// updateUser("your_id_here");