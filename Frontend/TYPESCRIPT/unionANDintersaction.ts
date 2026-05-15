//Union and intersection

//Union -> a variable can hold multiple types -OR 

// ex1 of Union
let value:string|number
value = 23
value = "hello"
console.log(value)    // output will be hello because it will overwrites the previous value 23

//ex2 of Union
function test(id:string | number){
    console.log("user id is ",id)
}
test(1323414)
test("A0S8D8D8")

//ex3 of Union
function Bank(user_id: number | String){
    console.log("user can access their money: ",user_id)
}
Bank(231444431)
Bank("khjdkd")


//intersection -> AND 
//intersection combine multiple types into one 
//that value must satisfy all three types

//ex1 of intersection
type A = {name:"string"}
type B = {age:number}
//intersection
type C = A&B  //AND concept

//ex2 of intersection
type employee = {name:string}
type manager = {department:string}
type ManagerEmp = employee & manager 

let em:ManagerEmp = {
    name:"test" ,
    department:"CSE"

}
console.log(em.department,em.name)

// ex3 of intersection
type Student = {name:string}
type marks = {score:number}
type qualify = {exam:boolean}
type result = Student&marks&qualify

let st: result = {
    name: "Ankit",
    score: 78,
    exam: true
}
console.log(st)





