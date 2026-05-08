"use strict";
//npm i -g typescript
//Type system and annotions,
//type system -> what type of data variable can hold
//run the ts file
//tsc filename.ts 
// import { is }
//  from "express/lib/request"
// let name1:string = "Ankit"
// let age:number = 20
// let isStudent:boolean = true 
// console.log(name1)
// console.log(age)
// console.log(isStudent)
//array
// let numbers:number[] = [12,23,34,45,56,67]
// console.log(numbers)
// //object
// let user:{StuName:string,age:number} = {
//     StuName: "Ankit",
//     age : 20
// }
//interface in ts 
// interfaces define structure for the object
//-what properties an object should have
//-what type those properties should have 
// interface Student{
//     name:string;
//     age:number 
// }
// // Using interface
// let s: Student = {
//     name: "Ankit",
//     age: 20
// };
// console.log(s);
// ex2 of interface
// interface Order{
//     orderId:number;
//     customerName:string;
//     product:string;
//     price:number;
//     rating:number
// }
// //create object for interface
// let order1: Order={
//     orderId:12121221,
//     customerName:"Ahsakg",
//     product:"pen",
//     price:10,
//     rating:5 
// }
// // create a function Using interface 
// function PrintOrder(order:Order){
//     console.log("Order id",order.orderId)
//     console.log("Order id",order.customerName)
//     // ...
// }
// //call the function
// PrintOrder(order1)
// //update
// order1.price = 10
// console.log("after update")
// console.log(order1.customerName)
// console.log(order1.price)
// // console.log(order1.customerName)  //shortcut way to print 
//types aliases
//giving customerName to types
//instead of typing same name again and again we can create short name
//type TypesName = datatypes
let StudentName = "srsqwe";
let s1 = {
    name: "adqe",
    age: 20
};
