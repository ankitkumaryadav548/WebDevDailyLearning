//Type inference and Type narrowing
//Type inference -> TypeScript automatically guesses the type of a variable when you don’t write it explicitly.
//type narrowing -> TypeScript reduces (narrows) a variable’s type to a more specific type using checks.

// import { header } from "express/lib/response"

let name1 = "hello"
if(typeof name1 ==="string"){
    console.log(name1.length)
}

//type narrowing
function Y(value:string|number){
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    }
}
Y("asddgfag")

function Hello(input:string|boolean){
    if(typeof input === "string"){
        console.log("username",input)
    } else{
        console.log("status", input)
    }
}
Hello("Ankit")