"use strict";
//Generic => Generics allow reusable code with different types.
//syntax
function identify(data) {
    return data;
}
function getData(data) {
    return data;
}
console.log(getData("Hello"));
console.log(getData(43536));
console.log(identify(32346));
console.log(identify(true));
//Generic array
function printArray(items) {
    console.log(items);
}
printArray([1, 2, 3]);
printArray(["A", "B"]);
let numberBox = {
    value: 100
};
let stringBox = {
    value: "TypeScript"
};
console.log(numberBox);
