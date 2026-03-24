// closures => 
// a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
//even your function is executed it still remember the value
// 1st example
function outerFun(){
    let outerVar = "I am outer Var"
    function innerFun(){
        console.log(outerFun)
    }
    return innerFun
}
//call the fun
const res = outerFun()
res()


//2nd example
function greet(name){
    return function(){
        console.log(`Hello ` + name)
    }
}
const greetUser = greet("Ankit")
greetUser() 

// 3rd example
function counter(){
    count = 0
    return function(){
        count++
        console.log(count)
    }
}
const incre = counter()
incre()
incre()
incre()
incre()

//4th example
function createBankAccount(balance){
    return function(amount){
        balance += amount
        console.log(balance)
    }
}
const account = createBankAccount(1000)
account(200)