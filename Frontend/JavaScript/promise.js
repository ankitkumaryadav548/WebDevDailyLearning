function connect(callback)
{
    setTimeout(()=>
    {
        console.log("connected to server")
    },2000)
    Callback()  ; //callback
}
function download() {
    setTimeout(()=>
    {
        console.log("download the file")
    },3000)
}
function save()
{
    setTimeout(()=>
    {
        console.log("Save the file")
    },4000)

} 
// callback hell   
connect(function(){
    download(function(){
        save(function(){
            console.log("Done")
        })
    })
})

//problem with callback is 
//1. readability of code is decreased
//2.debugging is complex and time complexity is also increased
//3.identation of code is complex

//Promise
// rep some value that will be available in future
//three state => 1.pending 2.resolve 3.fullfilled
//promise is used to 
//fetch the data from server or API
//reading the files
//database calls

// // create the promise 
let foodOrder = new Promise((resolve,reject)=>{
    let restaurantOpen = true
    if(restaurantOpen)
        resolve("Food is deliver")
    else
        reject("restarant is closed")    
})
// handle the promise => 1.then  2.catch 
// .then will be executed if promise is resolved
foodOrder.then(result=>console.log(result))
//if error occured
.catch(error=>console.log(error))


// //another exapmle of promise
let withdrawMoney = new Promise((resolve,reject)=>
{
    let balance = 6000 
    let withdrawMoney = 5000
    //check
    if(balance>=withdrawMoney)
        resolve("withdraw is done")
    else
        reject("insufficcient Money")
})
//promise handling
withdrawMoney.then(result=>console.log(result))
.catch(error=>console.log(error))

// // example of promise
let age = new Promise((resolve,reject)=>
{
    let age = 24
    if(age>18)
        resolve("You are adult")
    else (age<18)
        reject("you are not adult")
})
//promise handling
age.catch(result=>console.log(result))
age.then(result=>console.log(result))


// //promise
function checklogin(username,password){
    return new Promise((resolve,reject)=>
    {
        console.log("taking-credintial")
        setTimeout(()=>
        {
            if(username === "admin" && password === "12345")  
                resolve ("login Successfull")
            else
                reject("Invalid Creddential")
        },2000)
    })
}
checklogin("admin" , "12345")
.then(result=>console.log(result))
.catch(error=>console.log(error))

function account(balance,withdraw){
    return new Promise((resolve,reject)=>
    {
        console.log("checking balance")
        setTimeout(()=>
        {
            if(balance == 5000  && withdraw == 3000)
                resolve("you are able to withdraw money")
            else
                reject("Insufficient Money you have")
        },2000)
    })
}
account(5000,3000)
.then(debited=>console.log(debited))
.catch(error=>console.log(error))


// async
//handle the login system with asyn function
async function loginUser() {
    try{
        //await pause the function until promise is resolved 
        const result = await checklogin("admin","12345")
        //only run when promise is resolved 
        console.log(result)
    } catch(error){
        console.log(error)
    }
}
loginUser()   



// API 
// asyn function to fetch the data from API    
async function getData() {
    try{
        const respone = await fetch("https://jsonplaceholder.typicode.com/users")
        //check if respone is ok or not 
        if(!respone.ok){          
            throw new error ("network error")
        }
        // convert the data or respone into json
        const data = await respone.json()
        // print the data
        console.log("use",data)
        data.forEach(user=>{
            console.log(user.name)
            console.log(user.email)
            console.log(user.username)
        })



    }
    catch(error)
    {
        console.log(error)
    }


}
getData() 

async function getData() {
    try {
        let Response = await fetch("https://jsonplaceholder.typicode.com/photos")
        //check if the response is ok or not
        if (!Response.ok)
            throw new error("network error")
        let data = await Response.json()
        console.log(data)

    }
    catch (error) {
        console.log(error)
    }

}
getData()








