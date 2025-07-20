// Dates

let myDate = new Date() // Create a new Date object with the current date and time
console.log(myDate.toString()); // Current date and time
console.log(myDate.toDateString()); // Current date
console.log(myDate.toTimeString()); // Current time
console.log(myDate.toISOString()); // ISO format

console.log(typeof myDate); // Check the type of myDate

let myCreatedDate = new Date(2023, 0, 22) // Create a new Date object for January 22, 2023
// console.log(myCreatedDate.toLocaleString()); // Date in string format

// let myCreated_Date = new Date("01-13-2025") // Create a new Date object from a string
// console.log(myCreated_Date.toLocaleString()); // Date in string format

let myTimeStamp = Date.now() // Get the current timestamp in milliseconds
// console.log(myTimeStamp); // Current timestamp

console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date()
console.log(newDate.getMonth()); // Get the current month (0-11)