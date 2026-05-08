//Generic
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

