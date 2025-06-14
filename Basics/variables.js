const accountId = 1442
let accountEmail = "cb123@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;



accountEmail = "abcd@gmail.com"
accountPassword = "212121"
accountCity = "Bangalore"

console.log(accountId);

/*
Prefer not to use var.
Variables in JavaScript can be declared using `const`, `let`, or `var`.
- `const` is used for constants that should not change.
- `let` is used for variables that can change within a block scope.
- `var` is used for variables that can change and have function scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
