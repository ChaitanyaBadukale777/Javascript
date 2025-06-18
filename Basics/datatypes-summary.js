// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsodeTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); // false, because symbols are unique

const bigNumber = 123456789012345678901234n; // BigInt

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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Types of Memory in JavaScript
 
// Stack (Primitive), Heap (Non Primitive)

// 1. Stack Memory: Stores primitive data types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and references to objects.
// 2. Heap Memory: Stores objects, arrays, and functions. It is a larger memory space used for dynamic memory allocation.

let myYoutubename = "realdexter.com"

let anothername = myYoutubename
anothername = "dexter.com"

console.log(myYoutubename); // realdexter.com
console.log(anothername); // dexter.com


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "chaitanya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); 
