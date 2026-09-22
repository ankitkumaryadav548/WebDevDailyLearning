import { NextResponse } from "next/server"

const student = [
    {id:"1",name:"test1"},
    {id:"2",name:"test2"},
    {id:"3",name:"test3"},
    {id:"4",name:"test4"},
]
//dynamic route 
export async function GET(request,{params}) {
    const {id} = await params
    return NextResponse.json({
        message:`student is is ${id}`
    })
}