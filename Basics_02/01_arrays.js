// array

const myArr = [0, 1, 2, 3, 4, 5]; // Create an array with numbers from 0 to 5

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // Output the array

// array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr); // Output the array after adding 6

// myArr.unshift(9)
myArr.shift()
// console.log(myArr.includes(9));

// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);