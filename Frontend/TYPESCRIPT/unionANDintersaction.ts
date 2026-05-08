//Union and intersaction

//Union -> a variable can hold multiple types -OR 
let value:string|number
value = 23
value = "hello"

function test(id:string | number){
    console.log("user id is ",id)
}
test(1323414)
test("A0S8D8D8")
//another exapmple on Union

function Bank(user_id: number | String){
    console.log("user can access their money: ",user_id)
}
Bank(231444431)
Bank("khjdkd")

//intersection -> AND 
//intersection combine multiple types into one 
//that value must satisfy all three types

type A = {name:"string"}
type B = {age:number}
//intersection
type C = A&B  //AND concept

//example 
type employee = {name:string}
type manager = {department:string}
type ManagerEmp = employee & manager 

let em:ManagerEmp = {
    name:"test" ,
    department:"CSE"

}
console.log(em.department,em.name)

//another exapmple
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





