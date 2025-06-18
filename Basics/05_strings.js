const name = "Chaitanya"
const repoCount = 28

// console.log(name +repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Dexter')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('x'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);


