"use strict";
//npm i -g typescript
//Type system and annotions,
//type system -> what type of data variable can hold
//run the ts file
//tsc filename.ts 
//create object for interface
let order1 = {
    orderId: 12121221,
    customerName: "Ahsakg",
    product: "pen",
    price: 10,
    rating: 5
};
// create a function Using interface 
function PrintOrder(order) {
    console.log("Order id", order.orderId);
}
//call the function
PrintOrder(order1);
//update
order1.price = 10;
console.log("after update");
console.log(order1.customerName);
console.log(order1.price);
// console.log(order1.customerName)  //shortcut way to print 
