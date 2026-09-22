import student from "@/app/student/page";
import { request } from "express";
import { NodeNextResponse } from "next/dist/server/base-http/node";
import { NextResponse } from "next/server";

// const users = [
//     {
//         id: 1,
//         Name: "Ankit",
//         Course: "CSE"
//     },
//     {
//         id: 2,
//         Name: "Baliyan",
//         Course: "CS"
//     },
// ];

// export async function GET(request) {
//     const { searchParams } = new URL(request.url);

//     const course = searchParams.get("course");

//     return NextResponse.json({
//         message: "Welcome to next api",
//         course: course
//     });
// }

//post method 

// import {NextResponse} from "next/server"

export async function POST(request) {
    const body  = await request.json()
    const {username,password} = body 
    console.log(body)
    //check username and password 
    if(username ===  "admin" && password === "admin123"){
        return NextResponse.json({
            message:"login successfully"
        })
    }
    return NextResponse.json({
        message:"Invalid username or password",
       
     }) ,
     {
        status:201 
     },
     {
        erro:"Error while login in interface"
     }
}


