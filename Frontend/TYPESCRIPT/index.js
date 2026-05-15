"use strict";
// npm i -g typescript
// Type system and annotions,
// type system -> what type of data variable can hold
// run the ts file
// tsc filename.ts
// import { is }
//  from "express/lib/request"
let name1 = "Ankit";
let age = 20;
let isStudent = true;
console.log(name1);
console.log(age);
console.log(isStudent);
// array
// let numbers:number[] = [12,23,34,45,56,67]
// console.log(numbers)
let array = [12, 23, 23, 41, 34, 45];
//object => collections of keys and values pairs 
let users = {
    name: "Ankit",
    age: 20
};
let user = {
    StuName: "Ankit",
    age: 20
};
// creating object for interface
let s = {
    name: "Ankit",
    age: 20
};
console.log(s);
//creating object for interface
let emp1 = {
    name: "ABC",
    age: 30,
    role: "manager",
    salary: 239823
};
console.log(emp1);
//create object for interface
let order1 = {
    orderId: 12121221,
    customerName: "Ahsakg",
    product: "pen",
    price: 10,
    rating: 5
};
console.log(order1);
// create a function Using interface 
function PrintOrder(order) {
    console.log("Order id", order.orderId);
    console.log("Order id", order.customerName);
    // ...
}
//call the function
PrintOrder(order1);
//update
order1.price = 15;
console.log("after update");
console.log(order1.customerName);
console.log(order1.price);
// console.log(order1.customerName)  //shortcut way to print 
// types aliases
// giving customerName to types
// instead of typing same name again and again we can create short name
// type TypesName = datatypes
// let StudentName1:Name="srsqwe"
//Name is nothing but just another name for string
// type stu ={
//     name:string ;
//     age:number
// }
// let s1:stu={
//     name:"adqe",
//     age:20
// }
