import { NextResponse } from "next/server";
export async function POST(req) {
    
    const {title} = await req.json();
    if(!title ?.trim()){
        return NextResponse.json(
            {error : "Title is reqired" },
            {status:400}
                )
            

    }
}