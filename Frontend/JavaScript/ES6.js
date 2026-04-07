// ES6
//ES6 stands for ECMAScript 2015.
// ES6 = Modern JavaScript (big update version). Following are updated version in JavaScript 

// arrow function
const add = (a,b) => a+b ;
console.log(add(5,6))

// template literals
let name1 = "Ankit"
console.log(`Student nsme is : ${name1}`)

//Destructuring  => means extracting values from array and storing into variabe

const student = {"name":"ANkit",age:20}
const {name,age} = student 
console.log(name,age)
const arr = [12,23,34,54,56]
const [a,b,c] = arr 
console.log(a)
console.log(b) 

// spread operator (...)
//copy/merge array or object 
const arr1 = [1,2,3,4,5]
const a2 = [...arr1,6,7,8,9]
console.log(a2) 

