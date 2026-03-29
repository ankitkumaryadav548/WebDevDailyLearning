// Array method
// 1st Adding or Removing element in the array
let studentMarks = [12,23,34,45,65,76]
console.log(studentMarks)
studentMarks.push(30);  // add elemnt at last of array
console.log(studentMarks)
studentMarks.pop();     // remove or delete alenment from last of array
console.log(studentMarks)
studentMarks.unshift(11);  // add element  at begining of array
console.log(studentMarks)
studentMarks.shift();     // remove or delete element from begining of array 
console.log(studentMarks)

//2nd Searching method in the array
console.log(studentMarks.indexOf(23))   // indexOf() eill return index of any elemnt of arry
console.log(studentMarks.indexOf(65))
console.log(studentMarks.includes(111)) // check if element is present or not(return true/false)
console.log(studentMarks.includes(23))

// 3rd Looping Method 

// forEach method
studentMarks.forEach(m=>console.log(m))  // Run fuction for each element
//map method
let double1 = studentMarks.map(m=>m*2)   // create new array with multiple of 2
console.log(double1)  
let double2 = studentMarks.map(m=>m-5)   // (original array-5)
console.log(double2)
//filter method
 const pass = studentMarks.filter(m=>m>=40) //return filter array
 console.log("passed student ",pass )
 const double3 = studentMarks.filter(m=>m%2==0)
 console.log(double3)

//  find method
 let fail = studentMarks.find(m=>m<50)   // Returns first matching element
 console.log("first Fail student ", fail)   

//  reduce method 
 let double4 = studentMarks.reduce((sum,x)=>sum+x,0)
 console.log(double4)
 let double5 = studentMarks.reduce((product,x)=>product*x,1)
 console.log(double5)

// 4th Sorting and Reversing in array

let arr = [12,89,11,23,34,45,56]
// console.log(arr.sort())
// console.log(arr.reverse())
// const r = arr.join("-")
// console.log(r)    //join return string
// console.log(typeof(r))
// slice(start index, stop index)     (stop index = index - 1)
const double6 = arr.slice(1,3);  //
console.log(double6)

//splice() => Add, remove, or replace elements.
// array.splice(start, deleteCount, item1, item2...)
const double7 = arr.splice(1 , 2, 98,78)
console.log(arr)         //output => 12,98,78,23,34,45,56





