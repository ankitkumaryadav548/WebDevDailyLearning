import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    age:{
        type:Number,
        min:4 
    },
    email:{
        type:string,
        required:true,
        unique:true
    }
})