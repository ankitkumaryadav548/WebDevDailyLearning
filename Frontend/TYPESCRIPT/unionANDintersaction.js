"use strict";
//Union and intersaction
//Union -> a variable can hold multiple types -OR 
let value;
value = 23;
value = "hello";
function test(id) {
    console.log("user id is ", id);
}
test(1323414);
test("A0S8D8D8");
//another exapmple on Union
function Bank(user_id) {
    console.log("user can access their money: ", user_id);
}
Bank(231444431);
Bank("khjdkd");
let em = {
    name: "test",
    department: "CSE"
};
console.log(em.department, em.name);
let st = {
    name: "Ankit",
    score: 78,
    exam: true
};
console.log(st);
