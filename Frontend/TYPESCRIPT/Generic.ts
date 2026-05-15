//Generic => Generics allow reusable code with different types.
//syntax

function identify<Type>(data:Type): Type{
    return data ;
}
function getData<T> (data:T):T{
    return data ;
}
console.log(getData<string>("Hello"))
console.log(getData<number>(43536))
console.log(identify<number>(32346))
console.log(identify<boolean>(true))


//Generic array
function printArray<T>(items: T[]): void {
    console.log(items);
}
printArray<number>([1, 2, 3]);
printArray<string>(["A", "B"]);


//Generic interface
interface Box<T> {
    value: T;
}

let numberBox: Box<number> = {
    value: 100
};

let stringBox: Box<string> = {
    value: "TypeScript"
};
console.log(numberBox)

