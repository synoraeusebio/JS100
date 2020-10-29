/*

Input/Output Exercise 2. 
Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.



*/


let rlSync = require('readline-sync');
let first = rlSync.question("What is your first name\?");
let last = rlSync.question("What is your last name\?");
console.log(`Hello, ${first} ${last}!`);