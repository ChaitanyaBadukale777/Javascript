"use-strict"; // Treat all JS code as newer version

console.log("Dexter");

let name = "Chaitanya";
let age = 22;
let isLoggedIn = false; // boolean
let state; // variable declared but not initialized

// number => 2 to power 53
// bigint 
// string => " "
// boolean => true/false
// null => standalone value
// undefined => variable not defined
// symbol => unique and immutable value


// object

console.log(typeof age); // int
console.log(typeof name); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof BigInt(123)); // bigint
console.log(typeof Symbol("foo")); // symbol
