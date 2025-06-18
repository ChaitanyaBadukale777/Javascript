// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// const isLoggedIn = false
// const outsodeTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id === anotherid); // false, because symbols are unique

// const bigNumber = 123456789012345678901234n; // BigInt

// Reference Type (Non-Primitive)

//  Array, Object, Functions

const heros = ['Thor', 'Ironman', 'Hulk']
let myObj = {
    name: "Chaitanya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros); // object
console.log(typeof scoreValue); // object
console.log(typeof myFunction); // function