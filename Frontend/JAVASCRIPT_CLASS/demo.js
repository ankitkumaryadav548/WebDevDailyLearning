var x = 10;
let y =23;
const z = 45;
console.log("hello World!")

function add(a,b){
    return a+b;
}

console.log(add(2,3))

//arrow function 

const add1 = (a,b) =>{
    return a+b ;
} 
console.log(add(12,33))

const add2 = (a,b) => a+b
// const add2 = (a,b) => {a+b}   //it will return undefind deu to curly bracket 
console.log(add2(34,45))

//ARRAY

let arr = [2,3,4,51,64,82]

arr.push(239);
console.log(arr)

const age = arr.map((ele)=>{   //it will traverse the array
    console.log(ele)
})

const age1 = arr.filter((el) => {  //return all element which are filling condition
    return el > 30;
})
console.log(age1)

const age2 = arr.find((ele)=>{   // return 1st element which is filling condition
    return ele > 20    
})
console.log(age2)

const masks = arr.reduce((total,masks)=>{  // here total is acculamator which is used to 
                                            // store the values
    return total + masks 
},0)
console.log(masks)
