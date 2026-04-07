//prototype =>
// every js has some hidden properties that properties konow as 

// function person(name){
//     //this simply refer to new object , and assign the properties to the same 
//     this.name = name
// }
// //add prototype methods
// person.prototype.greet = function(){
//     console.log(`Hello ` + this.name)
// }
// //create obj 
// const p1 = new person("Ankit")
// p1.greet() 

//prototype chain
//when js is not able to find the  properties it start look into chain

// const object ={
//     name :"test"
// }
// console.log(object)

//js
//obj
//obj.prototype
//null

function student(name) {
    //this simply refer to new object , and assign the properties to the same
    this.name = name

}
//add prototype method
student.prototype.greet = function () {
    console.log(`Hello ` + this.name)
}
//create the object
const s1 = new student("test1")
const s2 = new student("test2")
const s3 = new student("test3")

//call the same method for all object
s1.greet()
s2.greet()
s3.greet()