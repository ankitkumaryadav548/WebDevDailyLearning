
// import add from "./add.js"
// import subtract from "./sub.js"
// import multiply from "./mul.js"
// import { divide } from "./divide.js"
// import { modulo } from "./modulo.js"

// console.log(add(12,33))
// console.log(subtract(54 , 32))
// console.log(multiply(23,34))
// console.log(divide(45,7))
// console.log(modulo(45,3))

//there are two type to export 
// 1. default   => export default functionName
// 2. by name   => export {functionName}  



//Immutablity function

const Student = {
    name : "Ankit" ,
    age :20
}
console.log(Student.name)

Student.name = "shubham"

console.log(Student.name)   // Student name will change 

const newStudent = {
    ...Student ,   //shallow copy
    age : 45 
}
console.log(newStudent.age);

//shallow and deep copying
//shallow copying => uper uper se copy karna 
// deep copying  => deeply or pure copy karna

// const deepCopying = structuredClone(Student)

//2 types of functional programming
//1. pure functional  => 
const Student1 = {
    name : "Ankit" ,
    age :20
}
console.log(Student1.name)

//2.Impure functional =>

let ab = 13
const add1 = (a,b) => {
    return a+b+ab
}
console.log(add1(23,45))

//equalty check 

let a = 34;
var b = "34";

console.log(a==b)  // true
console.log(a===b)  // false 

