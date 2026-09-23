import student from "@/app/student/page"
// import student from "@/app/student/page"
import { NextResponse } from "next/server"
import { browser } from "react-dom"

const student = [
    {id:"1",name:"test1"},
    {id:"2",name:"test2"},
    {id:"3",name:"test3"},
    {id:"4",name:"test4"},
]
//dynamic route 
export async function GET(request,{params}) {
    const {id} = await params
    // return NextResponse.json({
    //     message:`student is is ${id}`
    // })
    // const student = student.find(
    //     student => student.id == 
    // )
}

//PUT - update the data
export async function PUT(request, {params}) {
    const [id] = await params 
    const body = await request.json()
    return NextResponse.json({
        Message : `student ${id} updated`,
        data:body 
    })

    
}