// npm i -g typescript
// Type system and annotions,
// type system -> what type of data variable can hold
// run the ts file
// tsc filename.ts

// import { is }
//  from "express/lib/request"

let name1:string = "Ankit"

let age:number = 20
let isStudent:boolean = true 
console.log(name1)
console.log(age)
console.log(isStudent)


// array
// let numbers:number[] = [12,23,34,45,56,67]
// console.log(numbers)
// let array = [12,23,23,41,34,45]

//object => collections of keys and values pairs 
let users = {        // javascript format
    name:"Ankit",
    age:20
}
let user:{StuName:string,age:number} = {     //typescript format
    StuName: "Ankit",
    age : 20
}

// interface in ts 
// interfaces define structure for the object
// -what properties an object should have
// -what type those properties should have 

//ex1 of interface
interface Student{
    name:string;
    age:number 
}
// creating object for interface
let s: Student = {
    name: "Ankit",
    age: 20
};
console.log(s);

// ex2 of interface
interface employee{
    name:string,
    age:number,
    role:string,
    salary:number
}

//creating object for interface
let emp1 : employee = {
    name:"ABC",
    age:30,
    role:"manager",
    salary:239823
}
console.log(emp1)

//ex3 of interface
interface Order{
    orderId:number;
    customerName:string;
    product:string;
    price:number;
    rating:number
}
//create object for interface
let order1: Order={
    orderId:12121221,
    customerName:"Ahsakg",
    product:"pen",
    price:10,
    rating:5 
}
console.log(order1)
// create a function Using interface 
function PrintOrder(order:Order){
    console.log("Order id",order.orderId)
    console.log("Order name",order.customerName)
    // ...
}
//call the function
PrintOrder(order1)

//update
order1.price = 15
console.log("after update")
console.log(order1.customerName)
console.log(order1.price)
// console.log(order1.customerName)  //shortcut way to print 

//funtion with interface
interface Add {
    (a: number, b: number): number;
}

let sum: Add = (x, y) => x + y;

console.log(sum(10, 20));

// types aliases
// giving customerName to types
// instead of typing same name again and again we can create short name
// type TypesName = datatypes

let StudentName1:Name = "srsqwe"
// Name is nothing but just another name for string

//example of types aliases
type stu ={
    name:string ;
    age:number
}

let s1:stu={
    name:"adqe",
    age:20
}

//another example of type aliases
type User = {
    id: number;
    username: string;
};

let u1: User = {
    id: 1,
    username: "ankit"
};
