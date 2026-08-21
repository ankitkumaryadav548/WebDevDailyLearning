// var x = 10;
// let y =23;
// const z = 45;
// console.log("hello World!")

// function add(a,b){
//     return a+b;
// }

// console.log(add(2,3))

// //arrow function 

// const add1 = (a,b) =>{
//     return a+b ;
// } 
// console.log(add(12,33))

// const add2 = (a,b) => a+b
// // const add2 = (a,b) => {a+b}   //it will return undefind deu to curly bracket 
// console.log(add2(34,45))

// //ARRAY

// let arr = [2,3,4,51,64,82]

// arr.push(239);
// console.log(arr)

// const age = arr.map((ele)=>{   //it will traverse the array
//     console.log(ele)
// })

// const age1 = arr.filter((el) => {  //return all element which are filling condition
//     return el > 30;
// })
// console.log(age1)

// const age2 = arr.find((ele)=>{   // return 1st element which is filling condition
//     return ele > 20    
// })
// console.log(age2)

// const masks = arr.reduce((total,masks)=>{  // here total is acculamator which is used to 
//                                             // store the values
//     return total + masks 
// },0)
// console.log(masks)

//conat

// const arr1 = [23,34,45,65];
// const arr2 = [56,23,46,61];
// console.log(arr1.concat(arr2));

// const every = arr1.every((el)=>el >30)
//     console.log(every)  // if any element is greater then 30 then it will return false 


// const fetch = arr1.forEach((el)=> console.log(el))

// const arrfrom = Array.from(arr1)
// console.log(arrfrom)

// const spl = "Hello"

// console.log(spl.indexOf("e"))
// console.log(arr1.reverse())

// class Student{
//     setter(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getter(){
//         console.log(this.name, this.age)
//     }
// }


// const obj = new Student();
// obj.setter("XYZ", 27)
// obj.getter()

// destructuring

// const obj = {
//     name :"Ankit",
//     age :21,
//     sub : "react"
// }
// // console.log(obj.name)
// // console.log(obj.age)
// // console.log(obj.sub)

// const {name, age,sub} = obj   // destructuring
// console.log(name,age,sub)

// //spread opertor

// const numbers = [1,2,4,5,6]
// const newnum = [...numbers]

// console.log(newnum)


// //rest opertor

// const abc = (...num) => {
//     console.log(num)
// }

// console.log(abc(10,15))


