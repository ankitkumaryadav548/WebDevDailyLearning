import { count } from "node:console"

//object
let user:{
    name:string,
    age:number,
    rollNo:number
} = {name:"jgfk",
    age:20,
    rollNo:28
}


//example type model
//type is a keyword used to create your own data type (custom type).
type Address={
    cityName:string,
    pinCode:number   //nested type model 
}
type Student={
    id:number,
    name:string,
    course:string,
    age:number,
    idActive:boolean,
    address:Address    //type 
}
//create data/object  for it
let Student1:Student ={
    id:1212,
    name:"gjhcjh",
    course:"b-tech",
    age:20,
    idActive:true,
    address:{
        cityName:"wger",
        pinCode:314143
    }
}

function print(Student1:Student){
    console.log(Student1.address)
}
print(Student1)
