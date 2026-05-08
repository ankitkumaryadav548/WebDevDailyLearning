//object
let user = { name: "jgfk",
    age: 20,
    rollNo: 28
};
//create data/object  for it
let Student1 = {
    id: 1212,
    name: "gjhcjh",
    course: "b-tech",
    age: 20,
    idActive: true,
    address: {
        cityName: "wger",
        pinCode: 314143
    }
};
function print(Student1) {
    console.log(Student1.address);
}
print(Student1);
export {};
